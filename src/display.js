const displayFiles = (files) => {
  const existingDiv = document.querySelector("#divQuerco");
  if (existingDiv) existingDiv.remove();

  const popup = document.createElement("div");
  popup.style.display = "none";
  popup.innerHTML = `
    <div style="position: fixed; width: auto; height: auto; bottom: 0; right: 0; z-index: 9999; background-color: white; border: 1px solid gray; border-radius: 5px; overflow: auto;" id="divQuerco">
      <div style="z-index: 3; display: flex; justify-content: space-between; align-items: center; padding-inline: 5px;">
        <div style="display: flex; align-items: center;">
          <button id="previousImage" disabled><</button>
          <button id="nextImage" disabled>></button>
        </div>
        <div style="margin: 0; padding: 10px;">Extraction Automatique</div>
        <button id="closeButton">X</button>
      </div>


      <div style="position: relative;">
        ${files
          .map(
            (file, index) => `
            <img id="displayImage" docIndex="${index}" src="${file}" style="width: auto; height: 90vh ; object-fit: contain; position: relative; z-index: 1; display: none;">
          `
          )
          .join("")}
          <div id="displayText" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); color: white; z-index: 2; font-size: 2rem; font-weight: bold;">
          Extraction en cours...
          </div>
        </div>
      </div>`;
  document.body.appendChild(popup);

  const reopenDiv = document.createElement("div");
  reopenDiv.innerHTML = "Extraction Automatique";
  reopenDiv.id = "reopenDiv";
  reopenDiv.style =
    "position: fixed; bottom: 0; right: 0; z-index: 9999; background-color: white; border: 1px solid gray; border-radius: 5px; padding: 10px; cursor: pointer;";
  reopenDiv.addEventListener("click", function () {
    popup.style.display = "flex";
    reopenDiv.style.display = "none";
  });
  document.body.appendChild(reopenDiv);

  const closeButton = document.querySelector("#closeButton");
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  const image = document.querySelector("[docIndex='0']");
  image.style.display = "block";

  let imageIndex = 0;
  const nextImageButton = document.querySelector("#nextImage");
  nextImageButton.addEventListener("click", function () {
    console.log("next image");
    imageIndex = imageIndex + 1 > files.length - 1 ? 0 : imageIndex + 1;

    const allImages = document.querySelectorAll("[docIndex]");
    allImages.forEach((img) => {
      img.style.display = "none";
    });

    const image = document.querySelector(`[docIndex='${imageIndex}']`);
    image.style.display = "block";

    if (imageIndex === files.length - 1) {
      nextImageButton.setAttribute("disabled", true);
      previousImageButton.removeAttribute("disabled");
    }

    displayPolygonThatMatchTheDisplayedImage();
  });

  const previousImageButton = document.querySelector("#previousImage");
  previousImageButton.addEventListener("click", function () {
    console.log("previous image");
    imageIndex = imageIndex - 1 > 0 ? imageIndex - 1 : 0;
    const allImages = document.querySelectorAll("[docIndex]");
    allImages.forEach((img) => {
      img.style.display = "none";
    });

    const image = document.querySelector(`[docIndex='${imageIndex}']`);
    image.style.display = "block";

    if (imageIndex === 0) {
      nextImageButton.removeAttribute("disabled");
      previousImageButton.setAttribute("disabled", true);
    }

    displayPolygonThatMatchTheDisplayedImage();
  });

  if (files.length > 1) nextImageButton.removeAttribute("disabled");
};

const displayPolygons = (acts) => {
  const fctRefreshPolygon = () => updatePolygonPoints(window.document, window.innerHeight, acts);

  window.addEventListener("resize", fctRefreshPolygon);

  fctRefreshPolygon();
  displayPolygonThatMatchTheDisplayedImage();
};

function updatePolygonPoints(document, viewportHeight, acts) {
  const container = document.querySelector(`#quercoContainer`);
  container.innerHTML = "";

  for (const act of acts) {
    let newWidth = ((viewportHeight * 0.9) / act.height) * act.width;

    let scaleFactorX = newWidth / act.width;
    let scaleFactorY = (viewportHeight * 0.9) / act.height;

    const points = act.polygon;
    let color = "#24b337";
    if (act.ALD) color = "#F7FA13";
    if (act.warning) color = "#FA1313";

    const adjustedPoints = points.map((point) => ({
      x: point.x * scaleFactorX,
      y: point.y * scaleFactorY,
    }));

    const pointsString = adjustedPoints.map((point) => `${point.x}px ${point.y}px`).join(", ");

    const selectorAct = act.codes.map((code) => `.querco_act_${code}`).join("");

    const polygon = document.createElement("div");
    polygon.style = `position: absolute; clip-path: polygon(${pointsString}); background-color: ${color}; opacity: 0.15; width: 100%; height: 100%; display: none;`;
    polygon.setAttribute("mongoid", act.prescriptionId);
    act.codes.forEach((code) => {
      polygon.classList.add(`querco_polygon_${code}`);
    });

    polygon.addEventListener("mouseover", function () {
      const acts = document.querySelectorAll(selectorAct);
      acts.forEach((act) => (act.style.border = `2px solid red`));
    });

    polygon.addEventListener("mouseout", function () {
      const acts = document.querySelectorAll(selectorAct);
      acts.forEach((act) => (act.style.border = "2px solid #96db70"));
    });

    container.appendChild(polygon);
  }
}

function displayPolygonThatMatchTheDisplayedImage() {
  const images = document.querySelectorAll("[docIndex]");
  images.forEach((img) => {
    if (img.style.display === "block") {
      const mongoid = img.getAttribute("mongoid");
      const polygons = document.querySelectorAll(`div[mongoid]`);
      polygons.forEach((polygon) => {
        if (polygon.getAttribute("mongoid") === mongoid) return (polygon.style.display = "block");
        polygon.style.display = "none";
      });
    }
  });
}

export { displayFiles, displayPolygons };
