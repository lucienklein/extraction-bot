let DWTChromeExtension = {
  DWObject: undefined,
  load: function () {
    const resourcesURL = document.getElementById("dwt").getAttribute("resourcesURL");
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
    this.initDWT();
  },
  scan: function () {
    if (this.DWObject) {
      if (Dynamsoft.Lib.env.bMobile) {
        // this.DWObject.Addon.Camera.scanDocument();
      } else {
        this.DWObject.SelectSourceByIndex(0);
        this.DWObject.OpenSource();
        this.DWObject.IfShowUI = false;
        this.DWObject.AcquireImage();
      }
    }
  },
  initDWT: function () {
    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
      console.log("DWT ready, initiating scan...");
      this.DWObject = Dynamsoft.DWT.GetWebTwain();
      this.scan();
    });
    Dynamsoft.DWT.Load();
  },
};

DWTChromeExtension.load();
