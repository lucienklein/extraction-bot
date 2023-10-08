const API = "https://api.extraction.querco.co";
const dwtURL = new URL(chrome.runtime.getURL("/dwt"));
const utilsURL = new URL(chrome.runtime.getURL("/utils"));

let extractedActs = [];

// const observer = new MutationObserver(async (mutations) => {
//   let acts = [];

//   for (const mutation of mutations) {
//     for (const node of mutation.addedNodes) {
//       if (!node.classList || !node.classList.contains("analyseBox")) return;
//       const codeanalyse = node.getAttribute("codeanalyse");
//       const codegroupe = node.getAttribute("codegroupe");
//       const code = codegroupe || codeanalyse;

//       const act = extractedActs.find((act) => act.code === code);
//       if (act) return;

//       acts.push({ code, isAdded: true });
//     }
//   }
//   if (acts.length === 0) return;

//   const apikey = await getChromeStorage("apikey");
//   const mongoid = document.querySelector("#displayImage").getAttribute("mongoid");

//   const response = await fetch(`${API}/prescription/${mongoid}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ apikey, acts }),
//   });

//   if (!response.ok) return;
//   const prescription = await response.json();
//   extractedActs = [...extractedActs, ...prescription.data.acts];
// });

// observer.observe(document.body, {
//   childList: true,
//   subtree: true,
// });

async function init() {
  if (!window.location.href.includes("moduleSil/demande/saisie/index.php")) return;

  await loadLibrary(dwtURL + "/dynamsoft.webtwain.initiate.js", "text/javascript");
  await loadLibrary(dwtURL + "/dynamsoft.webtwain.config.js", "text/javascript");

  const license = await getChromeStorage("dwt");
  if (!license) return;

  await loadLibrary(dwtURL + "/dwt.js", "text/javascript", "dwt", { dwtURL, license });

  const examDiv = document.querySelector("#ajoutAnalyse");
  const button = document.createElement("button");
  button.innerText = "Extraction Automatique";
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const apikey = await getChromeStorage("apikey");
    window.postMessage({ message: "extractFile", apikey }, "*");
  });
  examDiv.appendChild(button);
}

// Display file
window.addEventListener(
  "message",
  async function (event) {
    if (event.source != window) return;
    if (!event.data.message || event.data.message !== "displayFile") return;

    const existingDiv = document.querySelector("#divQuerco");
    if (existingDiv) existingDiv.remove();

    const div = document.createElement("div");
    div.innerHTML = `
    <div style="position: relative; width: 100%; height: 100%;" id="divQuerco">
    ${event.data.data
      .map(
        (image, index) => `
        <img id="displayImage" docIndex="${index}" src="${image}" style="width: auto; height: 100vh ; object-fit: contain; position: relative; z-index: 1;">
      `
      )
      .join("")}
      <div id="displayText" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); color: white; z-index: 2; font-size: 2rem; font-weight: bold;">
       Extraction en cours...
      </div>
      <button id="previousImage" style="position: absolute; top: 0; left: 0; z-index: 3; display: none">Précédent</button>
      <button id="changeImage" style="position: absolute; top: 0; right: 0; z-index: 3;">Suivant</button>
    </div>`;

    const principalDiv = document.querySelector("#principalContent");
    principalDiv.style.display = "flex";
    principalDiv.appendChild(div);

    const image = document.querySelector("[docIndex='0']");
    image.style.display = "block";

    let imageIndex = 0;
    const changeImageButton = document.querySelector("#changeImage");
    changeImageButton.addEventListener("click", function () {
      imageIndex = imageIndex + 1 > event.data.data.length - 1 ? 0 : imageIndex + 1;

      const allImages = document.querySelectorAll("[docIndex]");
      allImages.forEach((img) => {
        img.style.display = "none";
      });

      const image = document.querySelector(`[docIndex='${imageIndex}']`);
      image.style.display = "block";

      if (imageIndex === event.data.data.length - 1) {
        changeImageButton.style.display = "none";
        previousImageButton.style.display = "block";
      }

      displayPolygonThatMatchTheDisplayedImage();
    });

    const previousImageButton = document.querySelector("#previousImage");
    previousImageButton.addEventListener("click", function () {
      imageIndex = imageIndex - 1 > 0 ? imageIndex - 1 : 0;
      const allImages = document.querySelectorAll("[docIndex]");
      allImages.forEach((img) => {
        img.style.display = "none";
      });

      const image = document.querySelector(`[docIndex='${imageIndex}']`);
      image.style.display = "block";

      if (imageIndex === 0) {
        changeImageButton.style.display = "block";
        previousImageButton.style.display = "none";
      }

      displayPolygonThatMatchTheDisplayedImage();
    });

    if (data.length === 1) {
      changeImageButton.style.display = "none";
      previousImageButton.style.display = "none";
    }
  },
  false
);

// Insert acts
window.addEventListener(
  "message",
  async function (event) {
    if (event.source != window) return;
    if (!event.data.message || event.data.message !== "insertActs") return;
    let prescriptions = event.data.data;
    let doctors = prescriptions.map((prescription) => prescription.data.doctor).flat();
    let acts = prescriptions
      .map((prescription) =>
        prescription.data.acts.map((act) => ({
          ...act,
          width: prescription.data.width,
          height: prescription.data.height,
          prescriptionId: prescription.data._id.toString(),
        }))
      )
      .flat();

    extractedActs = [...extractedActs, ...acts];

    prescriptions.forEach((prescription, index) => {
      const mongoid = prescription.data._id.toString();
      const image = document.querySelector(`[docIndex='${index}']`);
      image.setAttribute("mongoid", mongoid);
    });

    const boxAnalyse = document.querySelector("#ihmBoxAnalyse .ihmCboxContent.ihmCboxvert");
    const overlay = document.createElement("div");
    overlay.addEventListener("click", (e) => e.stopPropagation(), true);
    overlay.setAttribute(
      "style",
      "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9; display: flex; justify-content: center; align-items: center; color: white; font-size: 2rem; font-weight: bold; cursor: progress;"
    );
    overlay.innerHTML = "Insertion en cours";
    boxAnalyse.style.position = "relative";
    boxAnalyse.appendChild(overlay);

    for (let act of acts) {
      await insertAct(act, 250);
    }

    const inputAnalyse = document.querySelector("#analyseCodeAjout");
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (inputAnalyse.classList.contains("ui-autocomplete-loading")) return;
        clearInterval(interval);
        resolve();
      }, 1000);
    });

    acts = matchActsAndEl(acts);

    for (let act of acts) {
      if (!act.notFound) continue;
      await insertAct(act, 500);
    }

    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (inputAnalyse.classList.contains("ui-autocomplete-loading")) return;
        clearInterval(interval);
        resolve();
      }, 1000);
    });

    acts = matchActsAndEl(acts);

    let actsAld = [];
    for (let act of acts) {
      if (act.notFound) continue;
      for (const idAnalyse of act.elThatMatchAct) {
        const el = document.querySelector(`[idanalyse="${idAnalyse}"]`);

        const selectorPolygon = act.codes.map((code) => `.querco_polygon_${code}`).join("");

        el.addEventListener("mouseover", function () {
          const polygons = document.querySelectorAll(selectorPolygon);
          polygons.forEach((polygon) => (polygon.style.opacity = "0.5"));
        });

        el.addEventListener("mouseout", function () {
          const polygons = document.querySelectorAll(selectorPolygon);
          polygons.forEach((polygon) => (polygon.style.opacity = "0.15"));
        });

        act.codes.forEach((code) => {
          el.classList.add(`querco_act_${code}`);
        });

        if (!act.ALD) continue;
        el.setAttribute("isselected", true);
        actsAld.push(el);
      }
    }

    for (let doctor of doctors) {
      const doctorCode = `${doctor.data["Nom d'exercice"].substring(0, 4)}${doctor.data["Prénom d'exercice"].substring(
        0,
        3
      )}`;
      const doctorInput = document.querySelector("#medecinCodeAjout");
      const enterKeyEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13,
        shiftKey: false,
      });
      doctorInput.value = doctorCode;
      doctorInput.dispatchEvent(new Event("focus"));
      doctorInput.dispatchEvent(enterKeyEvent);

      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (doctorInput.classList.contains("ui-autocomplete-loading")) return;
          clearInterval(interval);
          resolve();
        }, 1000);
      });
    }

    if (actsAld.length > 0) {
      actsAld[0].dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true }));
      const divToClick = document.querySelector("div[onclick*=\"dispatchContextMenuAction('toggleFact', 'ALD')\"]");
      if (!divToClick) return;
      divToClick.click();
    }

    const div = document.querySelector("#displayText");
    div.style.backgroundColor = "transparent";
    div.innerHTML = `
      <div id="quercoContainer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" > </div>
    `;

    const actsWithoutNotFound = acts.filter((act) => !act.notFound);
    const fctRefreshPolygon = () => updatePolygonPoints(window.document, window.innerHeight, actsWithoutNotFound);

    window.addEventListener("resize", fctRefreshPolygon);
    fctRefreshPolygon();

    displayPolygonThatMatchTheDisplayedImage();

    overlay.remove();
  },
  false
);

async function insertAct(act, timeout) {
  for (const code of act.codes) {
    const inputAnalyse = document.querySelector("#analyseCodeAjout");
    const enterKeyEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
      shiftKey: false,
    });

    inputAnalyse.value = code;
    inputAnalyse.dispatchEvent(enterKeyEvent);

    await new Promise((resolve) => setTimeout(resolve, timeout));
  }
}

function matchActsAndEl(acts) {
  const actsInserted = [...document.querySelectorAll(`.analyseBox`)].map((act) => act.getAttribute("idanalyse"));
  for (let act of acts) {
    const elThatMatchAct = actsInserted.filter((idAnalyse) => {
      const el = document.querySelector(`[idanalyse="${idAnalyse}"]`);
      const codeanalyse = el.getAttribute("codeanalyse");
      const codegroupe = el.getAttribute("codegroupe");

      return act.codes.includes(codeanalyse) || act.codes.includes(codegroupe);
    });

    act.elThatMatchAct = elThatMatchAct;
    act.notFound = elThatMatchAct.length === 0;
  }

  return acts;
}

function updatePolygonPoints(document, viewportHeight, acts) {
  const container = document.querySelector(`#quercoContainer`);
  container.innerHTML = "";

  for (const act of acts) {
    let newWidth = (viewportHeight / act.height) * act.width;

    let scaleFactorX = newWidth / act.width;
    let scaleFactorY = viewportHeight / act.height;

    const points = act.polygon;
    let color = "#24b337";
    if (act.ALD) color = "#F7FA13";
    if (act.warning) color = "#FA1313";

    const adjustedPoints = points.map((point) => ({
      x: point.x * scaleFactorX,
      y: point.y * scaleFactorY,
    }));

    const pointsString = adjustedPoints.map((point) => `${point.x}px ${point.y}px`).join(", ");

    const selectorAct = act.codes.map((code) => `.querco_act_${code}`).join("");

    const polygon = document.createElement("div");
    polygon.style = `position: absolute; clip-path: polygon(${pointsString}); background-color: ${color}; opacity: 0.15; width: 100%; height: 100%;`;
    polygon.setAttribute("mongoid", act.prescriptionId);
    act.codes.forEach((code) => {
      polygon.classList.add(`querco_polygon_${code}`);
    });

    polygon.addEventListener("mouseover", function () {
      const acts = document.querySelectorAll(selectorAct);
      acts.forEach((act) => (act.style.border = `2px solid red`));
    });

    polygon.addEventListener("mouseout", function () {
      const acts = document.querySelectorAll(selectorAct);
      acts.forEach((act) => (act.style.border = "2px solid #96db70"));
    });

    container.appendChild(polygon);
  }
}

function displayPolygonThatMatchTheDisplayedImage() {
  const images = document.querySelectorAll("[docIndex]");
  images.forEach((img) => {
    if (img.style.display !== "none") {
      const mongoid = img.getAttribute("mongoid");
      console.log(mongoid);
      const polygons = document.querySelectorAll(`div[mongoid]`);
      polygons.forEach((polygon) => {
        if (polygon.getAttribute("mongoid") === mongoid) return (polygon.style.display = "block");
        polygon.style.display = "none";
      });
    }
  });
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

const getChromeStorage = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (result) => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      resolve(result[key]);
    });
  });
};

init();
