const puppeteer = require("puppeteer");
const { uploadFromUrlToS3 } = require("./s3");
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

  await new Promise((resolve) => setTimeout(resolve, 2000));

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

  // get all children div of the the div .scans
  const files = await page.$$(".scans > div");

  let filesInfo = await Promise.all(
    files.map(async (div) => {
      const fileInfo = await div.evaluate((node) =>
        node.getAttribute("onclick")
      );
      return fileInfo;
    })
  );

  filesInfo = filesInfo.map((fileInfo) => {
    const matches = fileInfo.match(/remoteScan\(([^)]+)\)/);

    if (!matches || !matches[1]) return null;

    const params = matches[1]
      .split(",")
      .map((param) => param.trim().replace(/['"]/g, ""));

    return {
      idScan: params[0],
      idTypeReference: params[1],
      idTypeScan: params[2],
      idReference: params[3],
    };
  });

  const ordonnancesInfo = filesInfo.filter(
    (fileInfo) => fileInfo !== null && fileInfo.idTypeScan === "1"
  );

  for (const info of ordonnancesInfo) {
    await page.goto(
      `${url}/moduleKalilab/scan/visuImage.php?idScan=${info.idScan}&idTypeReference=${info.idTypeReference}&idTypeScan=${info.idTypeScan}&idReference=${info.idReference}`
    );

    await page.waitForSelector("#imgScan");

    const img = await page.$("#imgScan");

    const imgSrc = await img.evaluate((node) => node.getAttribute("src"));

    const res = await uploadFromUrlToS3(
      imgSrc,
      `ordonnances/${info.idReference}/${info.idScan}.jpg`,
      "image/jpeg"
    );

    console.log(res);
  }

  return ordonnancesInfo;
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  browser.on("targetcreated", async (target) => {
    const popup = await target.page();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await popup.close();
  });

  await login(page);

  const demandesId = await getDemandes(page);

  await getOrdonnance(demandesId, page);

  //   await browser.close();
})();
