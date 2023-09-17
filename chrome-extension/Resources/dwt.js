let DWTChromeExtension = {
  DWObject: undefined,
  load: function () {
    const resourcesURL = new URL(chrome.runtime.getURL("/Resources"));
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

DWTChromeExtension.load();
