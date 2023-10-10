import React, { useState } from "react";
import getFiles from "../services/getFiles";
import extractData from "../services/extractData";
import insertData from "../services/insertData";

const Popup = () => {
  const [buttonText, setButtonText] = useState("Extraction Automatique");
  const [disableButton, setDisableButton] = useState(false);
  const [files, setFiles] = useState([]);
  const [displayedFile, setDisplayedFile] = useState({});
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

    if (files.length) return setDisplayedFile(files[0]);

    setButtonText("Extraction en cours...");
    setDisableButton(true);

    let extractedFiles = await getFiles();
    if (!extractedFiles) return;

    const responses = await extractData(extractedFiles);
    extractedFiles = extractedFiles.map((file, index) => ({ data: file, id: responses[index]?.data._id }));

    setFiles(extractedFiles);
    console.log("responses", responses);

    const acts = await insertData(responses);
    displayPolygons(acts);

    setButtonText("Afficher l'extraction");
    setDisableButton(false);
    // button.removeEventListener("click", extraction);
  };

  return (
    <div className="tailwind">
      <button
        onClick={onClick}
        disabled={disableButton}
        className="rounded-md bg-[#026D77] px-3 py-2 text-2xl font-semibold text-white shadow-sm z-10 mx-4 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
          fill="white"
          className="mr-4 h-8"
        >
          <path d="M67.5603485,52.3310356l-13.4403763,6.7202835c-4.0331497,2.016613-7.3031082,5.2865334-9.3196869,9.3196907  l-6.7202835,13.4403687c-0.9598007,1.9196167-3.7001076,1.9196167-4.6599426,0l-6.7202873-13.4403687  c-2.0166168-4.0331573-5.2865353-7.303112-9.3196869-9.3196907L3.9397125,52.3310356  c-1.9196146-0.9598007-1.9196146-3.7001076,0-4.6599464l13.4403725-6.7202835  c4.0331478-2.0166168,7.3031101-5.2865372,9.3196869-9.3196888l6.7202873-13.4403725  c0.9597969-1.9196148,3.7001038-1.9196148,4.6599426,0l6.7202835,13.4403725  c2.016613,4.0331478,5.2865372,7.3031101,9.3196869,9.3196888l13.4403763,6.7202835  C69.4799576,48.6308899,69.4799576,51.3711967,67.5603485,52.3310356z M96.8827133,82.2518997l-5.7604446-2.8801193  c-1.7287674-0.8643875-3.1299057-2.2655411-3.9942627-3.9942703l-2.880127-5.7596359  c-0.4111023-0.8230362-1.5856323-0.8230362-1.9967422,0l-2.880127,5.7596359  c-0.8643799,1.7287598-2.2655411,3.1299057-3.9942703,3.9942703l-5.7604446,2.8801193  c-0.8230438,0.4111176-0.8230438,1.58564,0,1.9967499l5.7604446,2.880127  c1.7287674,0.8643799,3.1299057,2.2655411,3.9942703,3.9942627l2.880127,5.7596359  c0.4111099,0.8230438,1.58564,0.8230438,1.9967422,0l2.880127-5.7596359  c0.8643799-1.7287598,2.2655487-3.1298981,3.9942627-3.9942627l5.7604446-2.880127  C97.7057571,83.8375397,97.7057571,82.6630173,96.8827133,82.2518997z M96.8827133,15.7513447l-5.7604446-2.8801231  c-1.7287674-0.8643837-3.1299057-2.265542-3.9942627-3.9942684l-2.880127-5.7596359  c-0.4111023-0.8230376-1.5856323-0.8230376-1.9967422,0l-2.880127,5.7596359  c-0.8643799,1.7287664-2.2655411,3.1299047-3.9942703,3.9942684l-5.7604446,2.8801231  c-0.8230438,0.4111118-0.8230438,1.5856361,0,1.996748l5.7604446,2.8801231  c1.7287674,0.8643818,3.1299057,2.2655411,3.9942703,3.9942684l2.880127,5.7596359  c0.4111099,0.8230362,1.58564,0.8230362,1.9967422,0l2.880127-5.7596359  c0.8643799-1.7287674,2.2655487-3.1299057,3.9942627-3.9942684l5.7604446-2.8801231  C97.7057571,17.3369808,97.7057571,16.1624565,96.8827133,15.7513447z" />
        </svg>

        {buttonText}
      </button>
      {displayedFile.data && (
        <div class="bg-white border fixed w-auto h-auto bottom-0 right-0 z-50 border-gray-400 overflow-auto rounded-lg p-4">
          <div class="z-10 flex justify-between items-center px-1">
            <div class="flex items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDisplayedFile((prev) => {
                    const index = files.findIndex((file) => file.id === prev.id);
                    if (index === 0) return files[files.length - 1];
                    return files[index - 1];
                  });
                }}
                disabled={displayedFile.id === files[0].id}
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
                onClick={(e) => {
                  e.preventDefault();
                  setDisplayedFile((prev) => {
                    const index = files.findIndex((file) => file.id === prev.id);
                    if (index === files.length - 1) return files[0];
                    return files[index + 1];
                  });
                }}
                disabled={displayedFile.id === files[files.length - 1].id}
                class="px-5 py-2 text-sm text-gray-700 bg-white border rounded-lg gap-x-2"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>
            </div>
            <div class="m-0 p-3">Extraction Automatique</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplayedFile({});
              }}
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
            <img
              id="displayImage"
              docIndex={index}
              src={displayedFile.data}
              mongoid={displayedFile.id}
              class="w-auto h-[90vh] object-contain relative z-10"
            />
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
                  style={{
                    clipPath: `polygon(${polygon.pointsString})`,
                    backgroundColor: polygon.color,
                    opacity: 0.15,
                    width: "100%",
                    height: "100%",
                    display: "none",
                  }}
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
