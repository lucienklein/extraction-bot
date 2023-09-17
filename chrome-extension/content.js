init();

const addButtonToExamDiv = () => {
  const examDiv = document.querySelector("#ajoutAnalyse");
  const button = document.createElement("button");
  button.innerText = "Extraction Automatique";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const resourcesURL = new URL(chrome.runtime.getURL("/Resources"));
    const res = loadLibrary(resourcesURL + "/scan.js", "text/javascript", "dwt-scan");
    console.log(res);
  });
  examDiv.appendChild(button);
};

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
  addButtonToExamDiv();
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "scan") {
    const resourcesURL = new URL(chrome.runtime.getURL("/Resources"));
    loadLibrary(resourcesURL + "/scan.js", "text/javascript", "dwt-scan");
  }
});

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
