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

  await page.goto(`${url}/kalilab.php`);
};

const getDemandes = async (page) => {
  await page.waitForSelector("#iframePrincipal");

  const elementHandle = await page.$("#iframePrincipal");
  const frame = await elementHandle.contentFrame();

  await frame.click(`input[value="Demandes\u00A0du\u00A0jour"]`);

  await frame.waitForSelector(".tableau.tableDemande");

  const table = await frame.$(".tableau.tableDemande");

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

  await page.waitForSelector("#iframePrincipal");

  const elementHandle = await page.$("#iframePrincipal");
  const frame = await elementHandle.contentFrame();

  // select the div with the class .typeScan and the innerText "Ordonnance"
  await frame.waitForSelector(".typeScan");

  const ordonnance = await frame.$x('//div[contains(text(), "Ordonnance")]');

  // access the value of the key onclick
  const ordonnanceOnclick = await ordonnance[0].evaluate((node) =>
    node.getAttribute("onclick")
  );

  console.log(ordonnanceOnclick);
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  browser.on("targetcreated", async (target) => {
    const popup = await target.page();
    await popup.close();
  });

  await login(page);

  const demandesId = await getDemandes(page);

  await getOrdonnance(demandesId, page);

  //   await browser.close();
})();
