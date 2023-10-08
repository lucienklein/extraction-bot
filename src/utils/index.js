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

export { loadLibrary, getChromeStorage };
