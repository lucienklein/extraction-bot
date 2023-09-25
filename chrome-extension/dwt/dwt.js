let DWTChromeExtension = {
  DWObject: undefined,
  load: () => {
    const dwtURL = document.getElementById("dwt").getAttribute("dwtURL");
    Dynamsoft.DWT.ResourcesPath = dwtURL;
    this.initDWT();
  },
  scan: async () => {
    if (!this.DWObject) return console.log("DWT not ready");

    this.DWObject.IfShowUI = false;
    this.DWObject.SelectSourceByIndex(0);
    this.DWObject.OpenSource();
    await this.DWObject.AcquireImageAsync();
    this.DWObject.CloseSource();

    return await new Promise((resolve, reject) => {
      this.DWObject.ConvertToBase64(
        [0],
        Dynamsoft.DWT.EnumDWT_ImageType.IT_PNG,
        (result) => {
          console.log("message sent");
          resolve(result);
        },
        (error) => {
          console.log("error converting to base64");
          console.log(error);
          reject(error);
        }
      );
    });
  },
  initDWT: async () => {
    const license = await getChromeStorage("dwt");
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

const getChromeStorage = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result[key]);
      }
    });
  });
};

DWTChromeExtension.load();
