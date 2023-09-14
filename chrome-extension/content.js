const API = "https://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io";

const style = `
  <style>
  .q-button {
    appearance: button;
    background-color: #1899D6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: din-round,sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
  
  .q-button:after {
    background-clip: padding-box;
    background-color: #1CB0F6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  
  .q-button:main,
  .q-button:focus {
    user-select: auto;
  }
  
  .q-button:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }
  
  .q-button:disabled {
    cursor: auto;
    filter: brightness(0.9);
    -webkit-filter: brightness(0.9);
  }
  </style>
`;

function updatePolygonPoints(document, viewportHeight, originalWidth, originalHeight, boxes) {
  let newWidth = (viewportHeight / originalHeight) * originalWidth;

  let scaleFactorX = newWidth / originalWidth;
  let scaleFactorY = viewportHeight / originalHeight;

  const svg = document.querySelector(`#svgQuerco`);
  svg.innerHTML = "";

  for (const boxe of boxes) {
    const points = boxe.polygon;
    const adjustedPoints = points.map((point) => ({
      x: point.x * scaleFactorX,
      y: point.y * scaleFactorY,
    }));

    const pointsString = adjustedPoints.map((point) => `${point.x},${point.y}`).join(" ");

    const svg = document.querySelector(`#svgQuerco`);
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", pointsString);
    polygon.setAttribute("style", "fill:blue;fill-opacity:0.25;stroke:blue;stroke-width:1");
    svg.appendChild(polygon);
  }
}

const validateDialog = (doc) => {
  let interval = setInterval(() => {
    const btnsDialog = [...doc.querySelectorAll(`[role="dialog"] button`)];
    const btnValider = btnsDialog.find((btn) => btn.innerText === "Valider");

    if (!btnValider) return;

    btnValider.click();
    clearInterval(interval);
    interval = undefined;
  }, 100);

  return interval;
};

const openPopupForExtraction = async (origin, prescriptionsInfo, idRequest) => {
  const popup = window.open(
    "",
    "_blank",
    `width=${screen.width * 0.75},height=${
      screen.height * 0.9
    },scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no`
  );

  if (!popup) return alert("Merci d'autoriser les popups pour ce site");

  popup.document.open();
  popup.document.write(
    `
    <div id="mainDivQuerco"  style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; column-gap: 10px; background-color: #fff;">
      <div id="divOrdonnanceQuerco" style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;font-size: 20px; font-weight: bold;">
      Récupération des ordonnances...
      </div>
      <div id="divInfoQuerco" style="width: 100%; height: 100%">
        <div style="display: xnone;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; margin-bottom: 10px;">
            <div style="font-size: 20px; font-weight: bold;">Alerte(s)</div>
            <button id="btnValiderAllWarning" style="background-color: green; border: none; border-radius: 5px; color: #fff; padding: 5px 10px; font-size: 12px; font-weight: bold;">Valider tout</button> 
          </div>
          <div id="divAlerteQuerco"></div>
        </div>
        <iframe id="iframeQuerco" src="${origin}/moduleSil/demande/saisie/index.php?choix=modif&idDemande=${idRequest}" style="width: 100%; height: 100%; border: none; display: none;"></iframe>
      </div>
    </div>
    `
  );
  popup.document.close();

  const divOrdonnanceQuerco = popup.document.getElementById("divOrdonnanceQuerco");
  const divAlerteQuerco = popup.document.getElementById("divAlerteQuerco");
  const iframeQuerco = popup.document.getElementById("iframeQuerco");
  iframeQuerco.contentWindow.confirm = () => true;
  await new Promise((resolve) => (iframeQuerco.onload = resolve));
  let innerDocQuerco = iframeQuerco.contentDocument || iframeQuerco.contentWindow.document;

  let prescriptions = [];
  for (const info of prescriptionsInfo) {
    const imagePage = await fetch(
      `${origin}/moduleKalilab/scan/visuImage.php?idScan=${info.idScan}&idTypeReference=${info.idTypeReference}&idTypeScan=${info.idTypeScan}&idReference=${info.idReference}`
    );

    const text = await imagePage.text();

    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const imgElement = htmlDocument.getElementById("imgScan");
    const imgSrc = imgElement ? imgElement.src : null;

    const imgResponse = await fetch(imgSrc);

    const buffer = await imgResponse.arrayBuffer();
    prescriptions.push({ name: info.idScan, raw: Array.from(new Uint8Array(buffer)), src: imgSrc });
  }

  divOrdonnanceQuerco.innerText = "Extraction en cours des informations...";
  let response = await fetch(`${API}/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requestId: idRequest, prescriptions }),
  });

  response = await response.json();
  console.log(response);

  divOrdonnanceQuerco.innerHTML = `
  <div style="position: relative; display: inline-block; height: 100vh; width: auto;">
    <img src="${prescriptions[0].src}" style="display: block; height: 100vh; width: auto;">
    <svg id="svgQuerco" width="100%" height="100%" style="position: absolute; top: 0; left: 0;"></svg>
  </div>
  `;

  const fctRefreshPolygon = () =>
    updatePolygonPoints(
      popup.document,
      popup.innerHeight,
      response.data.prescriptions[0].width,
      response.data.prescriptions[0].height,
      response.data.prescriptions[0].acts
    );

  popup.addEventListener("resize", fctRefreshPolygon);
  fctRefreshPolygon();

  const alertes = response.data.prescriptions
    .reduce((acc, cur) => [...acc, ...cur.warnings], [])
    .filter((alerte) => alerte.correct === undefined);

  const alertesButtons = alertes.map((alerte) => {
    return `
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; padding: 10px; border: 1px solid #000; border-radius: 5px; margin-bottom: 10px;">
          <div>${alerte.content}</div>
          <div style="font-weight: bold;">${alerte.code}</div>
        <button style="background-color: red; border: none; border-radius: 5px; color: #fff; padding: 5px 10px; font-size: 12px; font-weight: bold; width: fit-content; margin-left: auto;">Refuser</button>
      </div>
      `;
  });

  divAlerteQuerco.innerHTML = alertesButtons.join("");

  const buttons = [...divAlerteQuerco.querySelectorAll("button")];

  for (const [index, button] of buttons.entries()) {
    button.onclick = async () => {
      button.innerHTML = "Refus en cours...";
      button.disabled = true;

      const alerte = alertes[index];

      const response = await fetch(`${API}/request/${idRequest}/alerte/${alerte._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correct: false }),
      });
    };
  }

  const btnValiderAllWarning = popup.document.getElementById("btnValiderAllWarning");
  btnValiderAllWarning.onclick = async () => {
    btnValiderAllWarning.innerHTML = "Validation en cours...";
    btnValiderAllWarning.disabled = true;

    const response = await fetch(`${API}/request/${idRequest}/alerte`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correct: true }),
    });

    btnValiderAllWarning.innerHTML = "Validé";
    btnValiderAllWarning.style.backgroundColor = "#00ff00";
  };

  // if (response.ok === false) {
  //   button.innerHTML = "Erreur";
  //   button.style.backgroundColor = "#ff0000";
  //   return;
  // }

  const inputAnalyse = innerDocQuerco.querySelector("#analyseCodeAjout");
  const eventENTER = new KeyboardEvent("keydown", { keyCode: 13 });
  const acts = response.data.prescriptions.reduce((acc, cur) => [...acc, ...cur.acts], []);

  let actInserted = [];
  for (const act of acts) {
    inputAnalyse.value = act.code;
    inputAnalyse.dispatchEvent(eventENTER);

    // Difference between the actInserted and that will be inserted

    const previousActInserted = [...actInserted];
    actInserted = [...innerDocQuerco.querySelectorAll(`.analyseBox `)].map((act) => act.idanalyse);

    if (!act.ALD) continue;

    const newActInserted = actInserted.filter((act) => !previousActInserted.includes(act));

    for (const idAnalyse of newActInserted) {
      const el = innerDocQuerco.querySelector(`[idanalyse="${idAnalyse}"]`);
      if (!el) continue;
      el.setAttribute("isselected", "true");
    }

    const el = $(`#ihmBoxAnalyse`);
    el.boxAnalyse.apply("toggleFact", "ALD");
  }

  return;

  let btnSave = innerDocQuerco.querySelector("#btnModifierDemande");
  btnSave.click();

  const interval = validateDialog(innerDocQuerco);

  await new Promise((resolve) => (iframeQuerco.onload = resolve));

  if (interval !== undefined) clearInterval(interval);

  innerDocQuerco = iframeQuerco.contentDocument || iframeQuerco.contentWindow.document;
};

const addButtonToRequest = async () => {
  const origin = new URL(window.location.href).origin;
  let iframe = document.getElementById("iframePrincipal");
  const innerDoc = iframe?.contentDocument || iframe?.contentWindow?.document || document;
  const idRequest = innerDoc
    .querySelector(`form[name = "userSelectSiteForm"]`)
    .getAttribute("action")
    .match(/idDemande=(\d+)/)[1];

  // const info = await fetch(`${API}/request/${idRequest}`);
  // const json = await info.json();

  var button = document.createElement("button");
  button.className = "q-button";
  button.innerHTML = "Extraire le(s) ordonnance(s)";

  button.onclick = async () => {
    button.innerHTML = "Extraction en cours...";
    button.disabled = true;

    const files = innerDoc.querySelectorAll(".scanGrand ");
    let filesInfo = [...files].map((file) => {
      const fileInfo = file.getAttribute("onclick");

      const matches = fileInfo.match(/remoteScan\(([^)]+)\)/);

      if (!matches || !matches[1]) return null;

      const params = matches[1].split(",").map((param) => param.trim().replace(/['"]/g, ""));

      return {
        idScan: params[0],
        idTypeReference: params[1],
        idTypeScan: params[2],
        idReference: params[3],
      };
    });

    const prescriptionsInfo = filesInfo.filter((fileInfo) => fileInfo !== null && fileInfo.idTypeScan === "1");

    await openPopupForExtraction(origin, prescriptionsInfo, idRequest);

    if (!iframe) return window.location.reload();

    iframe.src = `${origin}/moduleSil/demande/client/recherche/visu.php?MUTEX_DEMANDE_DESTROY=${idRequest}&idDemande=${idRequest}&TRACKER_ID=&&pageSrc=searchDemande`;
  };
  document.head.innerHTML += style;
  document.body.appendChild(button);
};

// var iframe = document.getElementById("iframePrincipal");
// iframe.onload = function () {
addButtonToRequest();
// };
