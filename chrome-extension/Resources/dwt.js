let DWTChromeExtension = {
  DWObject: undefined,
  load: function () {
    const resourcesURL = document.getElementById("dwt").getAttribute("resourcesURL");
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
    this.initDWT();
  },
  scan: function () {
    if (!this.DWObject) return console.log("DWT not ready");

    this.DWObject.SelectSourceByIndex(0);
    this.DWObject.OpenSource();
    this.DWObject.IfShowUI = false;
    this.DWObject.AcquireImage();
  },
  initDWT: function () {
    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
      console.log("DWT ready");
      this.DWObject = Dynamsoft.DWT.GetWebTwain();
    });
    Dynamsoft.DWT.Load();
  },
};

DWTChromeExtension.load();
