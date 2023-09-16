Dynamsoft.DWT.ProductKey = "YOUR_LICENSE_KEY_HERE";

var DWObject;

Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", function () {
  DWObject = Dynamsoft.DWT.GetWebTwain("dwtcontrolContainer");
});

function lancerScan() {
  if (DWObject) {
    DWObject.SelectSource(
      function () {
        DWObject.OpenSource();
        DWObject.AcquireImage(
          function () {
            var imageIndex = DWObject.HowManyImagesInBuffer - 1;
            DWObject.GetImageBuffer(
              imageIndex,
              function (buffer) {
                var blob = new Blob([buffer], { type: "image/jpeg" });
                var url = URL.createObjectURL(blob);
                console.log("Image URL:", url);
              },
              function (errorCode, errorString) {
                console.log("Error getting image buffer:", errorString);
              }
            );
          },
          function (errorCode, errorString) {
            console.log("Error acquiring image:", errorString);
          }
        );
      },
      function (errorCode, errorString) {
        console.log("Error selecting source:", errorString);
      }
    );
  } else {
    console.log("Dynamic Web TWAIN is not initialized yet.");
  }
}

const addButtonToExamsDiv = () => {
  const examsDiv = document.getElementById("ajoutAnalyse");
  const button = document.createElement("button");
  button.innerText = "Extraire les examens";
  examsDiv.appendChild(button);

  button.addEventListener("click", lancerScan);
};

const init = () => {
  console.log("Init");
  addButtonToExamsDiv();
};

init();
