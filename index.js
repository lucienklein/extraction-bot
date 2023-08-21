const puppeteer = require("puppeteer");
require("dotenv").config();

(async () => {
  const url = process.env.URL;
  const idSite = process.env.ID_SITE;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  browser.on("targetcreated", async (target) => {
    const newPage = await target.page();

    if (newPage && newPage !== page) {
      // Redirect the main page to the popup's URL
      const popupURL = newPage.url();
      await page.goto(popupURL);

      // Close the popup window
      await newPage.close();
    }
  });

  await page.goto(url);

  await page.waitForSelector(
    "#formulaireCo > div > div.widget_box_buttons > img"
  );

  await page.click("#formulaireCo > div > div.widget_box_buttons > img");

  await page.waitForSelector("#idSiteNew");

  await page.select("#idSiteNew", idSite);

  await page.click(`input[value="\u00A0Enregistrer\u00A0"]`);

  await page.waitForSelector("#login");

  let dropdownSelector = "#loginSelect";

  const optionValue = await page.$eval(
    `${dropdownSelector} > option[initial="LUKL"]`,
    (option) => option.value
  );

  await page.select(dropdownSelector, optionValue);

  await page.type("#password", password);

  await page.click(
    `input[value="\u00A0\u00A0\u00A0Se\u00A0connecter\u00A0\u00A0\u00A0"]`
  );

  await page.waitForSelector(`'input[title="Demandes du jour"]'`);

  await page.click(`input[title="Demandes du jour"]`);

  //   await browser.close();
})();
