const API = "https://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io";

init();

async function init() {
  const resourcesURL = new URL(chrome.runtime.getURL("/Resources"));
  await loadLibrary(resourcesURL + "/dynamsoft.webtwain.initiate.js", "text/javascript");
  await loadLibrary(resourcesURL + "/dynamsoft.webtwain.config.js", "text/javascript");
  chrome.storage.sync.get(
    { license: "" },
    async (items) =>
      await loadLibrary(resourcesURL + "/dwt.js", "text/javascript", "dwt", {
        resourcesURL: resourcesURL,
        license: items.license,
      })
  );
  addButtonToExamDiv(resourcesURL);
}

const addButtonToExamDiv = (resourcesURL) => {
  const examDiv = document.querySelector("#ajoutAnalyse");
  const button = document.createElement("button");
  button.innerText = "Extraction Automatique";
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    await loadLibrary(resourcesURL + "/scan.js", "text/javascript", "dwt-scan");
  });
  examDiv.appendChild(button);
};

const addScanToScreen = (data) => {
  console.log("scan done");
  console.log(data);

  const div = document.createElement("div");
  div.innerHTML = `
  <div style="position: relative; width: 100%; height: 100%;">
    <img id="displayImage" src="${
      "data:image/png;base64," + data._content
    }" style="width: auto; height: 95vh ; object-fit: contain; position: relative; z-index: 1;">
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
    body: JSON.stringify({ file: data._content }),
  });
  response = await response.json();
  console.log(result);

  const div = document.querySelector("#displayText");

  div.innerHTML = `
    <svg id="svgQuerco" width="100%" height="100%" style="position: absolute; top: 0; left: 0;"></svg>
  `;

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
};

window.addEventListener(
  "message",
  function (event) {
    if (event.source != window) return;
    if (!event.data.message || event.data.message !== "scan_done") return;

    addScanToScreen(event.data.result);
    uploadScan(event.data.result);
  },
  false
);

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
