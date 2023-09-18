let DWTChromeExtension = {
  DWObject: undefined,
  load: function () {
    const resourcesURL = document.getElementById("dwt").getAttribute("resourcesURL");
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
    this.initDWT();
  },
  scan: async function () {
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
