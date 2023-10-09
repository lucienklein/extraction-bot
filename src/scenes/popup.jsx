import React, { useState } from "react";
import getFiles from "../services/getFiles";
import extractData from "../services/extractData";
import insertData from "../services/insertData";

const Popup = () => {
  const [buttonText, setButtonText] = useState("Extraction Automatique");
  const [disableButton, setDisableButton] = useState(false);
  const [files, setFiles] = useState([]);
  const [displayFiles, setDisplayFiles] = useState(false);
  const [acts, setActs] = useState([]);
  const [polygons, setPolygons] = useState([]);

  const displayPolygons = (acts) => {
    for (const act of acts) {
      let newWidth = ((window.innerHeight * 0.9) / act.height) * act.width;

      let scaleFactorX = newWidth / act.width;
      let scaleFactorY = (window.innerHeight * 0.9) / act.height;

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

      setPolygons([...polygons, { pointsString, color, selectorAct, mongoid: act.prescriptionId, codes: act.codes }]);
    }
  };

  const onClick = async (e) => {
    e.preventDefault();

    if (!files.length) return setDisplayFiles(true);

    setButtonText("Extraction en cours...");
    setDisableButton(true);

    let extractedFiles = await getFiles();
    if (!extractedFiles) return;

    const responses = await extractData(extractedFiles);
    extractedFiles = extractedFiles.map((file, index) => ({ data: file, id: responses[index]?.data._id }));

    setFiles(extractedFiles);
    console.log("responses", responses);

    const acts = await insertData(responses);
    setActs(acts);

    displayPolygons(acts);

    setButtonText("Afficher les données");
    setDisableButton(false);

    // button.removeEventListener("click", extraction);
  };

  return (
    <div className="tailwind">
      <button
        onClick={onClick}
        disabled={disableButton}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bottom-3 right-4 fixed z-40"
      >
        {buttonText}
      </button>
      {files.length > 0 && displayFiles && (
        <div class="bg-white border fixed w-auto h-auto bottom-0 right-0 z-50 border-gray-400 overflow-auto rounded-lg p-4">
          <div class="z-10 flex justify-between items-center px-1">
            <div class="flex items-center">
              <button
                id="previousImage"
                disabled
                class="px-5 py-2 text-sm text-gray-700 bg-white border rounded-lg gap-x-2"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>
              <button
                id="nextImage"
                disabled
                class="px-5 py-2 text-sm text-gray-700 bg-white border rounded-lg gap-x-2"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  style="transform: rotate(180deg);"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>
            </div>
            <div class="m-0 p-3">Extraction Automatique</div>
            <button
              id="closeButton"
              class="bg-white rounded-lg p-2 text-red-400 hover:text-red-500 hover:bg-gray-100 hover:border hover:border-red-500"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="relative">
            $
            {files
              .map((file, index) => (
                <img
                  id="displayImage"
                  docIndex={index}
                  src={file.data}
                  mongoid={file.id}
                  class="w-auto h-[90vh] object-contain relative z-10"
                  style="display: none;"
                />
              ))
              .join("")}
            <div id="container" class="absolute top-0 left-0 w-full h-full z-0">
              {polygons.map((polygon) => (
                <div
                  class="absolute top-0 left-0 w-full h-full z-0"
                  onMouseOver={() => {
                    const acts = document.querySelectorAll(polygon.selectorAct);
                    acts.forEach((act) => (act.style.border = "2px solid red"));
                  }}
                  onMouseOut={() => {
                    const acts = document.querySelectorAll(polygon.selectorAct);
                    acts.forEach((act) => (act.style.border = "2px solid #96db70"));
                  }}
                  style={`clip-path: polygon(${polygon.pointsString}); background-color: ${polygon.color}; opacity: 0.15; width: 100%; height: 100%; display: none;`}
                  mongoid={polygon.mongoid}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
