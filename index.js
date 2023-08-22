require("dotenv").config();
require("./mongo");

const puppeteer = require("puppeteer");

const { uploadToS3FromBuffer } = require("./s3");
const Prescription = require("./models/request");

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

const getRequestsId = async (page) => {
  await page.waitForSelector("#iframePrincipal");

  const elementHandle = await page.$("#iframePrincipal");
  const frame = await elementHandle.contentFrame();

  await frame.click(`input[value="Demandes\u00A0du\u00A0jour"]`);

  await frame.waitForSelector(".tableau.tableDemande");

  const table = await frame.$(".tableau.tableDemande");

  const trs = await table.$$("tr");

  let requestsId = await Promise.all(
    trs.map(async (tr) => {
      const dataId = await tr.evaluate((node) => node.getAttribute("data-id"));
      return dataId;
    })
  );

  requestsId = requestsId.filter((dataId) => dataId !== null);

  return requestsId;
};

const getRequestInfo = async (id, page) => {
  const url = process.env.URL;

  await page.goto(
    `${url}/moduleSil/demande/resultat/index.php?idDemande=${id}`
  );

  let codes = await page.$$eval(".dataCode", (spans) =>
    spans.map((span) => span.innerText)
  );

  codes = codes.map((code) => code.replace(/(\[\d+(\.\d+)?\])/g, ""));
  codes = [...new Set(codes)];

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

  let prescriptionsInfo = filesInfo.filter(
    (fileInfo) => fileInfo !== null && fileInfo.idTypeScan === "1"
  );

  for (const info of prescriptionsInfo) {
    await page.goto(
      `${url}/moduleKalilab/scan/visuImage.php?idScan=${info.idScan}&idTypeReference=${info.idTypeReference}&idTypeScan=${info.idTypeScan}&idReference=${info.idReference}`
    );

    await page.waitForSelector("#imgScan");

    const img = await page.$("#imgScan");

    const imgSrc = await img.evaluate((node) => node.getAttribute("src"));

    const response = await page.goto(imgSrc, { waitUntil: "domcontentloaded" });

    const buffer = await response.buffer();

    info.buffer = buffer;

    // const res = await uploadToS3FromBuffer(
    //   `prescriptions/${info.idReference}/${info.idScan}.jpg`,
    //   buffer,
    //   "image/jpeg"
    // );

    // await Prescription.create({
    //   s3Key: res.Key,
    //   idReference: info.idReference,
    // });
  }

  return { prescriptionsInfo, codes };
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

  const requestsId = await getRequestsId(page);

  const id = requestsId[0];

  const requestInfo = await getRequestInfo(id, page);



  //   await browser.close();
})();
