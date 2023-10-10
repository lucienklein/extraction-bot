import React, { useState, useEffect } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiOutlineX } from "react-icons/hi";
import getFiles from "../services/getFiles";
import extractData from "../services/extractData";
import insertData from "../services/insertData";

const Popup = () => {
  const [buttonText, setButtonText] = useState("Extraction Automatique");
  const [disableButton, setDisableButton] = useState(false);
  const [files, setFiles] = useState([]);
  const [displayedFile, setDisplayedFile] = useState({});

  useEffect(() => {
    const targetNode = document.getElementById("divAnalyses");

    const config = { childList: true };

    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          for (let node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const codeAnalyse = node.getAttribute("codeanalyse");
              const codeGroup = node.getAttribute("codegroupe");
              console.log("Removed node with : ", codeGroup, codeAnalyse);
            }
          }
          for (let node of mutation.removedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const codeAnalyse = node.getAttribute("codeanalyse");
              const codeGroup = node.getAttribute("codegroupe");
              console.log("Removed node with : ", codeGroup, codeAnalyse);
            }
          }
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    };
  }, []);

  const onClick = async (e) => {
    e.preventDefault();

    if (files.length) return setDisplayedFile(files[0]);

    setButtonText("Extraction en cours...");
    setDisableButton(true);

    let extractedFiles = await getFiles();
    if (!extractedFiles?.length) return;

    const responses = await extractData(extractedFiles);
    extractedFiles = extractedFiles.map((file, index) => ({ data: file, id: responses[index]?.data._id }));
    console.log("responses", responses);

    const acts = await insertData(responses);
    extractedFiles = extractedFiles.map((file) => ({ ...file, polygons: [] }));

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

      const index = extractedFiles.findIndex((file) => file.id === act.prescriptionId);
      extractedFiles[index].polygons = [
        ...extractedFiles[index].polygons,
        { pointsString, color, selectorAct, codes: act.codes },
      ];
    }

    setFiles(extractedFiles);
    setDisplayedFile(extractedFiles[0]);
    setButtonText("Afficher l'extraction");
    setDisableButton(false);
  };

  return (
    <div className="tailwind">
      <button
        onClick={onClick}
        disabled={disableButton}
        className="rounded-md bg-[#026D77] px-3 py-2 text-2xl font-semibold text-white shadow-sm z-10 mx-4 flex items-center"
      >
        <div
          className="mr-4 h-[20px] w-[16px] bg-white"
          style={{
            clipPath: `path('M 10.808594 8.371094 L 8.660156 9.449219 C 8.015625 9.769531 7.492188 10.292969 7.167969 10.9375 L 6.09375 13.089844 C 5.9375 13.398438 5.5 13.398438 5.347656 13.089844 L 4.273438 10.9375 C 3.949219 10.292969 3.425781 9.769531 2.78125 9.449219 L 0.628906 8.371094 C 0.324219 8.21875 0.324219 7.78125 0.628906 7.628906 L 2.78125 6.550781 C 3.425781 6.230469 3.949219 5.707031 4.273438 5.0625 L 5.347656 2.910156 C 5.5 2.601562 5.9375 2.601562 6.09375 2.910156 L 7.167969 5.0625 C 7.492188 5.707031 8.015625 6.230469 8.660156 6.550781 L 10.808594 7.628906 C 11.117188 7.78125 11.117188 8.21875 10.808594 8.371094 Z M 15.5 13.160156 L 14.578125 12.699219 C 14.304688 12.5625 14.078125 12.335938 13.941406 12.058594 L 13.480469 11.140625 C 13.414062 11.007812 13.226562 11.007812 13.160156 11.140625 L 12.699219 12.058594 C 12.5625 12.335938 12.335938 12.5625 12.058594 12.699219 L 11.136719 13.160156 C 11.007812 13.226562 11.007812 13.414062 11.136719 13.480469 L 12.058594 13.941406 C 12.335938 14.078125 12.5625 14.304688 12.699219 14.578125 L 13.160156 15.5 C 13.226562 15.632812 13.414062 15.632812 13.480469 15.5 L 13.941406 14.578125 C 14.078125 14.304688 14.304688 14.078125 14.578125 13.941406 L 15.5 13.480469 C 15.632812 13.414062 15.632812 13.226562 15.5 13.160156 Z M 15.5 2.519531 L 14.578125 2.058594 C 14.304688 1.921875 14.078125 1.695312 13.941406 1.421875 L 13.480469 0.5 C 13.414062 0.367188 13.226562 0.367188 13.160156 0.5 L 12.699219 1.421875 C 12.5625 1.695312 12.335938 1.921875 12.058594 2.058594 L 11.136719 2.519531 C 11.007812 2.585938 11.007812 2.773438 11.136719 2.839844 L 12.058594 3.300781 C 12.335938 3.4375 12.5625 3.664062 12.699219 3.941406 L 13.160156 4.859375 C 13.226562 4.992188 13.414062 4.992188 13.480469 4.859375 L 13.941406 3.941406 C 14.078125 3.664062 14.304688 3.4375 14.578125 3.300781 L 15.5 2.839844 C 15.632812 2.773438 15.632812 2.585938 15.5 2.519531 Z M 15.5 2.519531')`,
          }}
        ></div>

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
                <HiArrowNarrowLeft class="w-5 h-5" />
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
                <HiArrowNarrowRight class="w-5 h-5" />
              </button>
            </div>
            <div class="m-0 p-3">Extraction Automatique</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplayedFile({});
              }}
              class="bg-white rounded-lg p-2 text-red-400 hover:text-red-500 border-transparent  hover:border-red-500"
            >
              <HiOutlineX class="w-5 h-5" />
            </button>
          </div>

          <div class="relative">
            <img
              id="displayImage"
              src={displayedFile.data}
              mongoid={displayedFile.id}
              class="w-auto h-[90vh] object-contain relative z-10"
            />
            {displayedFile.polygons.map((polygon) => (
              <div
                class="absolute top-0 left-0 w-full h-full z-20"
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
                }}
                mongoid={polygon.mongoid}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
