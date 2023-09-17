let DWTChromeExtension = {
  DWObject: undefined,
  load: function () {
    const resourcesURL = document.getElementById("dwt").getAttribute("resourcesURL");
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
    this.initDWT();
  },
  scan: function () {
    if (!this.DWObject) return console.log("DWT not ready");

    this.DWObject.IfShowUI = false;
    this.DWObject.SelectSourceByIndex(0);
    this.DWObject.OpenSource();
    this.DWObject.AcquireImage(this.onSuccessScan, this.onErrorScan);
  },
  onSuccessScan: function () {
    DWTChromeExtension.DWObject.CloseSource();
    console.log("scan done");
    DWTChromeExtension.DWObject.ConvertToBase64(
      [0],
      Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
      (result) => {
        console.log("converted to base64");
        const pdf = DWTChromeExtension.base64ToBlob(result);
        chrome.runtime.sendMessage({ message: "scan_done", pdf: pdf });
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
