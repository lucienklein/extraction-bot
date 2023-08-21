const puppeteer = require("puppeteer");
require("dotenv").config();

(async () => {
  const url = process.env.URL;
  const idSite = process.env.ID_SITE;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector(
    "#formulaireCo > div > div.widget_box_buttons > img"
  );

  await page.click("#formulaireCo > div > div.widget_box_buttons > img");

  await page.waitForSelector("#idSiteNew");

  await page.select("#idSiteNew", idSite);

  let submit = await page.$$(
    ".displayAction.displayActionSmall.qtipOn.skinBgVert"
  );

  await submit[1].click();

  await page.waitForSelector("#login");

  let dropdownSelector = "#loginSelect";

  const optionValue = await page.$eval(
    `${dropdownSelector} > option[initial="LUKL"]`,
    (option) => option.value
  );

  await page.select(dropdownSelector, optionValue);

  await page.type("#password", password);

  submit = await page.$$(".displayAction.displayActionSmall.qtipOn.skinBgBleu");

  await submit[0].click();

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

  //   await browser.close();
})();
