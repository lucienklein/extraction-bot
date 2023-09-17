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

  const img = document.createElement("img");
  img.src = "data:image/png;base64," + data._content;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "contain";
  img.style.marginTop = "10px";
  img.style.marginBottom = "10px";
  img.style.border = "1px solid black";

  const messageDiv = document.createElement("div");
  messageDiv.innerText = "Extraction en cours";
  messageDiv.style.position = "absolute";
  messageDiv.style.top = "0";
  messageDiv.style.left = "0";
  messageDiv.style.width = "100%";
  messageDiv.style.height = "100%";
  messageDiv.style.display = "flex";
  messageDiv.style.justifyContent = "center";
  messageDiv.style.alignItems = "center";
  messageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  messageDiv.style.color = "white";
  messageDiv.style.zIndex = "1";
  img.style.position = "relative";
  img.appendChild(messageDiv);

  const principalDiv = document.querySelector("#principalContent");
  principalDiv.style.display = "flex";
  principalDiv.appendChild(img);
};

const uploadScan = async (data) => {
  const response = await fetch(`${API}/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ file: data._content }),
  });

  const result = await response.json();
  console.log(result);
};

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

window.addEventListener(
  "message",
  function (event) {
    if (event.source != window) return;
    if (event.data.message || event.data.message !== "scan_done") return;

    addScanToScreen(event.data.result);
    uploadScan(event.data.result);
  },
  false
);
