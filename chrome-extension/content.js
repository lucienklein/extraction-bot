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

const addButtonToTable = () => {
  var url = new URL(window.location.href);
  const title = document.querySelector("#pageTitle");

  if (url.pathname === "/kalilab.php" && title.innerText === "RECHERCHE DE DEMANDE") {
    var iframe = document.getElementById("iframePrincipal");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var rows = innerDoc.querySelectorAll(".tableau.tableDemande .dj");

    rows.forEach((row) => {
      const dataId = row.getAttribute("data-id");
      var button = document.createElement("button");

      button.innerHTML = "✨";
      button.style = "cursor: pointer;";

      button.onclick = function () {
        button.innerHTML = "🔄";
        // fetch("http://example.com/dataId", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ dataId: dataId }),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     button.innerHTML = "✨";
        //   })
        //   .catch((error) => {
        //     console.error("Error:", error);
        //   });
        //     console.error("Error:", error);
        //   });

        // Create a div for the message
        var messageDiv = document.createElement("div");
        messageDiv.style.position = "fixed";
        messageDiv.style.right = "20px";
        messageDiv.style.top = "20px";
        messageDiv.style.padding = "10px";
        messageDiv.style.backgroundColor = "#4CAF50";
        messageDiv.style.color = "white";
        messageDiv.innerHTML = "Ok";

        // Append the message to the body
        document.body.appendChild(messageDiv);

        // Remove the message after 5 seconds
        setTimeout(function () {
          document.body.removeChild(messageDiv);
        }, 5000);
      };

      row.appendChild(button);
    });
  }
};

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

  // Create a new window
  const popupWindow = window.open("", "_blank", "width=600,height=600,scrollbars=yes");

  // Check if the window is opened
  if (!popupWindow) return alert("Merci d'autoriser les popups pour ce site");

  // Create a new iframe
  let iframe = document.createElement("iframe");

  iframe.style = "width: 100%; height: 100%; display: none;";

  // Set the source of the iframe
  iframe.src = `${origin}/moduleSil/demande/saisie/index.php?choix=modif&idDemande=${idRequest}`;

  // Append the iframe to the popup window
  popupWindow.document.body.appendChild(iframe);

  await new Promise((resolve) => (iframe.onload = resolve));

  let innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  innerDoc.querySelector("#btnModifierDemande").click();

  const interval = validateDialog(innerDoc);

  await new Promise((resolve) => (iframe.onload = resolve));

  innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  iframe.style.display = "block";

  if (interval !== undefined) clearInterval(interval);

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

    if (response.data.status === "pending") {
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

      iframeQuerco.contentWindow.alert = () => {};

      await new Promise((resolve) => (iframeQuerco.onload = resolve));

      if (interval !== undefined) clearInterval(interval);

      innerDocQuerco = iframeQuerco.contentDocument || iframeQuerco.contentWindow.document;

      if (innerDocQuerco.querySelector("#continuerForm")) openPopupForMoreInfo(idRequest, acts);

      console.log("pending");
      iframe.src = `${origin}/moduleSil/demande/client/recherche/visu.php?MUTEX_DEMANDE_DESTROY=${idRequest}&idDemande=${idRequest}&TRACKER_ID=&&pageSrc=searchDemande`;
      console.log("end");
    }
  };
  document.head.innerHTML += styleQButton;
  document.body.appendChild(button);
};

// var iframe = document.getElementById("iframePrincipal");
// iframe.onload = function () {
// addButtonToTable();
addButtonToRequest();
// };
