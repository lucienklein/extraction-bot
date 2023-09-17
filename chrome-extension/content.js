init();

const addButtonToExamDiv = (resourcesURL) => {
  const examDiv = document.querySelector("#ajoutAnalyse");
  const button = document.createElement("button");
  button.innerText = "Extraction Automatique";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // loadLibrary(resourcesURL + "/scan.js", "text/javascript", "dwt-scan");
    chrome.runtime.sendMessage({ message: "scan_todo" });
  });
  examDiv.appendChild(button);
};

async function init() {
  const resourcesURL = new URL(chrome.runtime.getURL("/Resources"));
  await loadLibrary(resourcesURL + "/dynamsoft.webtwain.initiate.js", "text/javascript");
  await loadLibrary(resourcesURL + "/dynamsoft.webtwain.config.js", "text/javascript");
  addButtonToExamDiv(resourcesURL);
  DWTChromeExtension.load(resourcesURL);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.message === "scan_done") {
    console.log(request);
    sendResponse({ message: "scan_done" });
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
      console.log(Dynamsoft);
      resolve(true);
    });
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading " + src, ev);
      reject(ev);
    });
  });
}

let DWTChromeExtension = {
  DWObject: undefined,
  load: function (resourcesURL) {
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
    this.initDWT();
  },
  scan: async function () {
    if (!this.DWObject) return console.log("DWT not ready");

    this.DWObject.IfShowUI = false;
    this.DWObject.SelectSourceByIndex(0);
    this.DWObject.OpenSource();
    this.DWObject.AcquireImage(this.onSuccessScan, this.onErrorScan);
  },
  onSuccessScan: function () {
    DWTChromeExtension.DWObject.CloseSource();
    DWTChromeExtension.DWObject.ConvertToBase64(
      [0],
      Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
      (result) => {
        console.log("message sent");
      },
      (error) => {
        console.log("error converting to base64");
        console.log(error);
      }
    );
  },
  onErrorScan: function (error) {
    this.DWObject.CloseSource();
    console.log(error);
  },
  initDWT: function () {
    const license = document.getElementById("dwt").getAttribute("license");
    if (license) {
      console.log("using license: " + license);
      Dynamsoft.DWT.ProductKey = license;
    }

    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
      console.log("DWT ready");
      this.DWObject = Dynamsoft.DWT.GetWebTwain();
    });
    Dynamsoft.DWT.Load();
  },
};
