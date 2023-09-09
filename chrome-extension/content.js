const API = "https://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io";

const styleQButton = `
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

const openPopupForMoreInfo = async (idRequest) => {
  const origin = new URL(window.location.href).origin;
  const url = `${origin}/moduleSil/demande/saisie/index.php?choix=modif&idDemande=${idRequest}`;

  const popupWindow = window.open(
    url,
    "_blank",
    "width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no"
  );

  if (!popupWindow) return alert("Merci d'autoriser les popups pour ce site");

  await new Promise((resolve) => (popupWindow.onload = resolve));

  popupWindow.document.querySelector("#btnModifierDemande").click();

  const interval = validateDialog(popupWindow.document);

  await new Promise((resolve) => (popupWindow.onload = resolve));

  if (interval !== undefined) clearInterval(interval);

  popupWindow.querySelector("#continuerForm").onclick = () => {
    popupWindow.onload = popupWindow.close;
  };

  return;
};

const addButtonToRequest = async () => {
  const origin = new URL(window.location.href).origin;
  let iframe = document.getElementById("iframePrincipal");
  const innerDoc = iframe?.contentDocument || iframe?.contentWindow?.document || document;
  const idRequest = innerDoc
    .querySelector(`form[name = "userSelectSiteForm"]`)
    .getAttribute("action")
    .match(/idDemande=(\d+)/)[1];

  const iframeBlank = document.createElement("iframe");
  iframeBlank.style.display = "none";
  document.body.appendChild(iframeBlank);

  const innerDocQ = iframeBlank.contentDocument || iframeBlank.contentWindow.document;
  innerDocQ.open();
  innerDocQ.write(
    `<iframe id="iframeQuerco" src="${origin}/moduleSil/demande/saisie/index.php?choix=modif&idDemande=${idRequest}" style=""></iframe>`
  );
  innerDocQ.close();

  const iframeQuerco = innerDocQ.getElementById("iframeQuerco");
  iframeQuerco.contentWindow.confirm = () => true;
  await new Promise((resolve) => (iframeQuerco.onload = resolve));
  let innerDocQuerco = iframeQuerco.contentDocument || iframeQuerco.contentWindow.document;

  const info = await fetch(`${API}/request/${idRequest}`);
  const json = await info.json();
  // if (json.ok === true) {
  //   const message = document.createElement("p");

  //   if (json.data.status === "done")
  //     message.innerHTML = `${json.data.prescriptions.length} Ordonnance(s) extraite(s):\n${json.data.acts.join(", ")}`;
  //   else if (json.data.status === "processing") message.innerHTML = "En cours d'extraction";
  //   else if (json.data.status === "pending") message.innerHTML = "En cours d'actualisation";
  //   else message.innerHTML = "Aucune ordonnance extraite";

  //   banner.appendChild(message);
  // }

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
      prescriptions.push({ name: info.idScan, raw: Array.from(new Uint8Array(buffer)) });
    }

    let response = await fetch(`${API}/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId: idRequest, prescriptions }),
    });

    response = await response.json();
    console.log(response);

    if (response.ok === false) {
      button.innerHTML = "Erreur";
      button.style.backgroundColor = "#ff0000";
      return;
    }

    const inputAnalyse = innerDocQuerco.querySelector("#analyseCodeAjout");
    const eventENTER = new KeyboardEvent("keydown", { keyCode: 13 });
    const acts = response.data.prescriptions.reduce((acc, cur) => [...acc, ...cur.acts], []);

    for (const act of acts) {
      inputAnalyse.value = act.code;
      inputAnalyse.dispatchEvent(eventENTER);
    }

    let btnSave = innerDocQuerco.querySelector("#btnModifierDemande");
    btnSave.click();

    const interval = validateDialog(innerDocQuerco);

    await new Promise((resolve) => (iframeQuerco.onload = resolve));

    if (interval !== undefined) clearInterval(interval);

    innerDocQuerco = iframeQuerco.contentDocument || iframeQuerco.contentWindow.document;

    // if (innerDocQuerco.querySelector("#continuerForm")) openPopupForMoreInfo(idRequest, acts);

    if (!iframe) return window.location.reload();

    iframe.src = `${origin}/moduleSil/demande/client/recherche/visu.php?MUTEX_DEMANDE_DESTROY=${idRequest}&idDemande=${idRequest}&TRACKER_ID=&&pageSrc=searchDemande`;
  };
  document.head.innerHTML += styleQButton;
  document.body.appendChild(button);
};

// var iframe = document.getElementById("iframePrincipal");
// iframe.onload = function () {
addButtonToRequest();
// };
