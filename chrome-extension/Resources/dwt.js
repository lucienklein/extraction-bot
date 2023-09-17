let DWTChromeExtension = {
  modal: undefined,
  DWObject: undefined,
  load: function () {
    const resourcesURL = document.getElementById("dwt").getAttribute("resourcesURL");
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
  },
  scan: function () {
    if (this.DWObject) {
      if (Dynamsoft.Lib.env.bMobile) {
        // this.DWObject.Addon.Camera.scanDocument();
      } else {
        console.log("scan");
        this.DWObject.SelectSourceByIndex(0);
        console.log("SelectSourceByIndex");
        this.DWObject.OpenSource();
        console.log("OpenSource");
        this.DWObject.IfShowUI = false;
        console.log("IfShowUI");
        this.DWObject.AcquireImage();
        console.log("AcquireImage");
      }
    }
  },
  initDWT: function () {
    Dynamsoft.DWT.Containers = [{ ContainerId: "dwtcontrolContainer", Width: 270, Height: 350 }];
    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", function () {
      console.log("ready");
      DWTChromeExtension.DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
      DWTChromeExtension.DWObject.Viewer.width = "100%";
      DWTChromeExtension.DWObject.Viewer.height = "100%";
      DWTChromeExtension.DWObject.SetViewMode(2, 2);
    });
    Dynamsoft.DWT.Load();
  },
};

DWTChromeExtension.load();
