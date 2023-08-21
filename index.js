const puppeteer = require("puppeteer");
require("dotenv").config();

const login = async (page) => {
  const url = process.env.URL;
  const idSite = process.env.ID_SITE;
  const user = process.env.USER;
  const password = process.env.PASSWORD;

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
    `${dropdownSelector} > option[initial="${user}"]`,
    (option) => option.value
  );

  await page.select(dropdownSelector, optionValue);

  await page.type("#password", password);

  await page.click(
    `input[value="\u00A0\u00A0\u00A0Se\u00A0connecter\u00A0\u00A0\u00A0"]`
  );
};

const getDemandes = async (page) => {
  await page.waitForSelector(".tableau.tableDemande");

  const table = await page.$(".tableau.tableDemande");

  const trs = await table.$$("tr");

  let dataIds = await Promise.all(
    trs.map(async (tr) => {
      const dataId = await tr.evaluate((node) => node.getAttribute("data-id"));
      return dataId;
    })
  );

  dataIds = dataIds.filter((dataId) => dataId !== null);

  return dataIds;
};

const getOrdonnance = async (demandesId, page) => {
  const url = process.env.URL;

  let id = demandesId[0];

  await page.goto(
    `${url}/moduleSil/demande/resultat/index.php?idDemande=${id}`
  );
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  browser.on("targetcreated", async (target) => {
    const popup = await target.page();

    if (newPage && popup !== page) {
      // Redirect the main page to the popup's URL
      const popupURL = popup.url();
      await page.goto(popupURL);

      // Close the popup window
      await popup.close();
    }

    await page.waitForSelector("#pageTitle");

    // get iframe with the id "iframePrincipal"
    const elementHandle = await page.$("#iframePrincipal");
    const frame = await elementHandle.contentFrame();

    await frame.click(`input[value="Demandes\u00A0du\u00A0jour"]`);

    const demandesId = await getDemandes(frame);

    const newPage = await browser.newPage();

    await getOrdonnance(demandesId, newPage);
  });

  await login(page);
  //   await browser.close();
})();
