let DWTChromeExtension = {
  modal: undefined,
  DWObject: undefined,
  load: function () {
    const resourcesURL = document.getElementById("dwt").getAttribute("resourcesURL");
    Dynamsoft.DWT.ResourcesPath = resourcesURL;
  },
  showModal: function () {
    if (!this.modal) {
      this.modal = document.createElement("div");
      this.modal.className = "dwt-modal";
      document.body.appendChild(this.modal);
      const header = document.createElement("div");
      const closeBtn = document.createElement("div");
      closeBtn.className = "dwt-close-btn";
      closeBtn.innerText = "x";
      header.appendChild(closeBtn);
      header.className = "dwt-header";
      closeBtn.addEventListener("click", () => {
        this.hideModal();
      });
      const body = document.createElement("div");
      body.className = "dwt-body";
      const viewer = document.createElement("div");
      viewer.id = "dwtcontrolContainer";
      const controls = document.createElement("div");
      controls.className = "dwt-controls";
      const scanBtn = document.createElement("button");
      scanBtn.innerText = "Scan";
      scanBtn.addEventListener("click", () => {
        this.scan();
      });

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.addEventListener("click", () => {
        this.edit();
      });

      const copyBtn = document.createElement("button");
      copyBtn.innerText = "Copy selected";
      copyBtn.addEventListener("click", () => {
        this.copy();
      });

      const saveBtn = document.createElement("button");
      saveBtn.innerText = "Save";
      saveBtn.addEventListener("click", () => {
        this.save();
      });

      const status = document.createElement("div");
      status.className = "dwt-status";

      controls.appendChild(scanBtn);
      controls.appendChild(editBtn);
      controls.appendChild(copyBtn);
      controls.appendChild(saveBtn);
      controls.appendChild(status);

      body.appendChild(viewer);
      body.appendChild(controls);
      this.modal.appendChild(header);
      this.modal.appendChild(body);
      if (!this.DWObject) {
        this.initDWT();
      }
    }
    this.modal.style.display = "";
  },
  hideModal: function () {
    this.modal.style.display = "none";
  },
  scan: function () {
    if (this.DWObject) {
      if (Dynamsoft.Lib.env.bMobile) {
        // this.DWObject.Addon.Camera.scanDocument();
      } else {
        this.DWObject.SelectSourceByIndex(0);
        this.DWObject.OpenSource();
        this.DWObject.IfShowUI = false; // Hide the scanner UI
        this.DWObject.PixelType = 2; // Set scan settings as needed (this sets the color mode to color)
        this.DWObject.Resolution = 300; // Set the scan resolution to 300 DPI (or other value as needed)

        this.DWObject.AcquireImage();
      }
    }
  },
  save: function () {
    if (this.DWObject) {
      this.DWObject.SaveAllAsPDF("Scanned");
    }
  },
  initDWT: function () {
    Dynamsoft.DWT.Containers = [{ ContainerId: "dwtcontrolContainer", Width: 270, Height: 350 }];
    Dynamsoft.DWT.Load();
  },
};

DWTChromeExtension.load();
