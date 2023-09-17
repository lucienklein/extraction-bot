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
        this.DWObject.SelectSourceByIndex(0);
        this.DWObject.OpenSource();
        this.DWObject.IfShowUI = false;
        this.DWObject.AcquireImage();
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
