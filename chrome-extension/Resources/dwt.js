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
    this.DWObject.AcquireImage(this.onSuccessScan), this.onErrorScan);
  },
  onSuccessScan: function () {
    DWTChromeExtension.DWObject.CloseSource();
    console.log("scan done");
    DWTChromeExtension.DWObject.ConvertToBlob(
      [0],
      (result) => {
        console.log(result);
        const blob = result.GetBlob();
        chrome.runtime.sendMessage({ type: "scan_done", data: blob }, (response) => {
          console.log(response);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  },
  onErrorScan: function (error) {
    this.DWObject.CloseSource();
    console.log(error);
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
