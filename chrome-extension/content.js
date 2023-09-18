const API = "https://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io";
const dwtURL = new URL(chrome.runtime.getURL("/dwt"));
const utilsURL = new URL(chrome.runtime.getURL("/utils"));

async function init() {
  if (!window.location.href.includes("moduleSil/demande/saisie/index.php")) return;

  const fileScanned = document.querySelectorAll(
    '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
  );

  if (fileScanned.length > 0) {
    const onClick = async () => await loadLibrary(utilsURL + "/extractFile.js", "text/javascript", "extractFile");
    return addButtonToExamDiv(onClick);
  }

  await loadLibrary(dwtURL + "/dynamsoft.webtwain.initiate.js", "text/javascript");
  await loadLibrary(dwtURL + "/dynamsoft.webtwain.config.js", "text/javascript");
  chrome.storage.sync.get(
    { license: "" },
    async (items) =>
      await loadLibrary(dwtURL + "/dwt.js", "text/javascript", "dwt", {
        dwtURL: dwtURL,
        license: items.license,
      })
  );

  const onClick = async () => await loadLibrary(utilsURL + "/launchScan.js", "text/javascript", "dwt-scan");
  return addButtonToExamDiv(onClick);
}

const addButtonToExamDiv = (onClick) => {
  const examDiv = document.querySelector("#ajoutAnalyse");
  const button = document.createElement("button");
  button.innerText = "Extraction Automatique";
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    await onClick();
  });
  examDiv.appendChild(button);
};

const addScanToScreen = (data) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div style="position: relative; width: 100%; height: 100%;">
    <img id="displayImage" src="${data}" style="width: auto; height: 100vh ; object-fit: contain; position: relative; z-index: 1;">
    <div id="displayText" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); color: white; z-index: 2; font-size: 2rem; font-weight: bold;">
      Extraction en cours...
    </div>
  </div>`;

  const principalDiv = document.querySelector("#principalContent");
  principalDiv.style.display = "flex";
  principalDiv.appendChild(div);
};

const uploadScan = async (data) => {
  let response = await fetch(`${API}/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ file: data }),
  });
  response = await response.json();
  console.log(response);

  const div = document.querySelector("#displayText");

  div.innerHTML = `
    <svg id="svgQuerco" width="100%" height="100%" style="position: absolute; top: 0; left: 0;"></svg>
  `;
  div.style.backgroundColor = "transparent";

  const fctRefreshPolygon = () =>
    updatePolygonPoints(
      window.document,
      window.innerHeight,
      response.data.prescriptions[0].width,
      response.data.prescriptions[0].height,
      response.data.prescriptions[0].acts
    );

  window.addEventListener("resize", fctRefreshPolygon);
  fctRefreshPolygon();

  const acts = response.data.prescriptions.reduce((acc, cur) => [...acc, ...cur.acts], []);
  return acts;
};

window.addEventListener(
  "message",
  async function (event) {
    if (event.source != window) return;
    if (!event.data.message || event.data.message !== "file_extracted") return;

    const inputAnalyse = document.querySelector("#analyseCodeAjout");
    const enterKeyEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
      shiftKey: false,
    });

    const acts = ["NF", "GL", "ECBU"];

    addScanToScreen(event.data.result);
    // const acts = await uploadScan(event.data.result);
    const boxAnalyse = document.querySelector("#ihmBoxAnalyse .ihmCboxContent.ihmCboxvert");
    const overlay = document.createElement("div");
    overlay.addEventListener("click", (e) => e.stopPropagation(), true);
    overlay.setAttribute(
      "style",
      "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9; display: flex; justify-content: center; align-items: center; color: white; font-size: 2rem; font-weight: bold; cursor: progress;"
    );
    overlay.innerHTML = "Insertion en cours";
    boxAnalyse.style.position = "relative";
    // boxAnalyse.appendChild(overlay);

    let actInserted = [...document.querySelectorAll(`.analyseBox`)].map((act) => act.getAttribute("idanalyse"));
    for (const act of acts) {
      inputAnalyse.value = act;
      inputAnalyse.dispatchEvent(enterKeyEvent);

      // await new Promise((resolve) => {
      //   setTimeout(resolve, 100);
      //   if (!inputAnalyse.classList.contains("ui-autocomplete-loading")) resolve();
      // });

      // const previousActInserted = [...actInserted];
      // actInserted = [...document.querySelectorAll(`.analyseBox`)].map((act) => act.getAttribute("idanalyse"));

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log(act);

      // if (!act.ALD) continue;

      // const newActInserted = actInserted.filter((act) => !previousActInserted.includes(act));

      // for (const idAnalyse of newActInserted) {
      //   const el = document.querySelector(`[idanalyse="${idAnalyse}"]`);
      //   if (!el) continue;

      //   const inputALD = el.querySelector(`input[id^="anaFact"]`);
      //   if (!inputALD) continue;

      //   inputALD.setAttribute("value", "ALD");

      //   const divDataRight = el.querySelector(`.analyseDataRight`);
      //   if (!divDataRight) continue;

      //   const divIcon = divDataRight.querySelector(`div[id^="anaFact"]`);
      //   if (!divIcon) continue;

      //   divIcon.innerHTML = `<span class="qtipUp hand" help="Affection de Longue DurÃ©e">E<sub>4</sub></span>`;
      // }
    }

    overlay.remove();
  },
  false
);

function updatePolygonPoints(document, viewportHeight, originalWidth, originalHeight, acts) {
  let newWidth = (viewportHeight / originalHeight) * originalWidth;

  let scaleFactorX = newWidth / originalWidth;
  let scaleFactorY = viewportHeight / originalHeight;

  const svg = document.querySelector(`#svgQuerco`);
  svg.innerHTML = "";

  for (const act of acts) {
    const points = act.polygon;
    let color = "#24b337";
    if (act.ALD) color = "#F7FA13";
    if (act.warning) color = "#FA1313";

    const adjustedPoints = points.map((point) => ({
      x: point.x * scaleFactorX,
      y: point.y * scaleFactorY,
    }));

    const pointsString = adjustedPoints.map((point) => `${point.x},${point.y}`).join(" ");
    const svg = document.querySelector(`#svgQuerco`);
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", pointsString);
    polygon.setAttribute("style", `fill:${color} ; fill-opacity:0.15; stroke:${color}; stroke-width:1`);
    svg.appendChild(polygon);
  }
}

function loadLibrary(src, type, id, data) {
  return new Promise(function (resolve, reject) {
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("type", type);
    scriptEle.setAttribute("src", src);
    if (id) {
      scriptEle.id = id;
    }
    if (data) {
      for (let key in data) {
        scriptEle.setAttribute(key, data[key]);
      }
    }
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      console.log(src + " loaded");
      resolve(true);
    });
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading " + src, ev);
      reject(ev);
    });
  });
}

init();
