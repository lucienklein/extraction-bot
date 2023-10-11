import React, { useState, useEffect } from "react";
import getFiles from "../services/getFiles";
import extractData from "../services/extractData";
import insertData from "../services/insertData";

const Popup = () => {
  const [buttonText, setButtonText] = useState("Extraction Automatique");
  const [disableButton, setDisableButton] = useState(false);
  const [files, setFiles] = useState([]);
  const [displayedFile, setDisplayedFile] = useState({});
  const [intervalId, setIntervalId] = useState(null);
  const [acts, setActs] = useState([]);
  const [nerAct, setNerAct] = useState([]);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   return () => {
  //     if (intervalId) clearInterval(intervalId);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!displayedFile.data && !files.length) return setButtonText("Extraction Automatique");
    if (!displayedFile.data && files.length) return setButtonText("Afficher l'extraction");
    if (displayedFile.data && files.length) return setButtonText("Masquer l'extraction");
  }, [displayedFile.data, files.length]);

  useEffect(() => {
    let polygons = [];
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
      const className = act.codes.map((code) => `querco_polygon_${code}`).join(" ");

      polygons.push({ pointsString, color, selectorAct, className, fileId: act.prescriptionId });
    }

    const newFiles = files.map((file) => {
      const polygonsFilter = polygons.filter((polygon) => polygon.fileId === file.id);
      return { ...file, polygons: polygonsFilter };
    });

    setFiles(newFiles);
    const displayedFileIndex = newFiles.findIndex((file) => file.id === displayedFile.id);
    if (displayedFileIndex !== -1) setDisplayedFile(newFiles[displayedFileIndex]);
  }, [acts.length, windowHeight]);

  const onClick = async (e) => {
    e.preventDefault();

    if (displayedFile.data) return setDisplayedFile({});
    if (files.length) return setDisplayedFile(files[0]);

    setButtonText("Extraction en cours...");
    setDisableButton(true);

    let extractedFiles = await getFiles();
    if (!extractedFiles?.length) return;

    const responses = await extractData(extractedFiles);
    console.log("responses", responses);

    setNerAct(responses.map((response) => response.data.ner.filter((ner) => ner.category === "examinationName")));
    extractedFiles = extractedFiles.map((file, index) => ({ data: file, id: responses[index]?.data._id }));

    const acts = await insertData(responses);
    setActs(acts);

    setFiles(extractedFiles);
    setDisplayedFile(extractedFiles[0]);
    setDisableButton(false);

    // const id = setInterval(() => {
    //   const targetNode = document.getElementById("divAnalyses");
    //   if (targetNode) {
    //     const children = targetNode.children;
    //     for (let i = 0; i < children.length; i++) {
    //       const codeAnalyse = children[i].getAttribute("codeanalyse");
    //       const codeGroup = children[i].getAttribute("codegroupe");
    //       if (!codeAnalyse && !codeGroup) continue;

    //       const act = acts.find((act) => act.codes.includes(codeAnalyse) || act.codes.includes(codeGroup));

    //       if (act) continue;

    //       console.log(codeAnalyse, codeGroup);
    //     }
    //   }
    // }, 1000);

    // setIntervalId(id);
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
        <div class="bg-white border fixed w-auto h-auto bottom-0 right-0 border-gray-400 overflow-auto rounded-lg p-4 z-[200]">
          <div class="flex justify-between items-center px-1">
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
                class={`px-5 py-2 text-gray-700 bg-white border rounded-lg gap-x-2 ${
                  displayedFile.id === files[0].id && "opacity-50"
                }`}
              >
                Précédent
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
                class={`px-5 py-2 text-gray-700 bg-white border rounded-lg gap-x-2 ${
                  displayedFile.id === files[files.length - 1].id && "opacity-50"
                }`}
              >
                Suivant
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
              <div
                className="bg-red-400 hover:bg-red-500 h-[24px] w-[24px]"
                style={{
                  clipPath:
                    "path('M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z')",
                }}
              />
            </button>
          </div>

          <div class="relative">
            <img
              id="displayImage"
              src={displayedFile.data}
              mongoid={displayedFile.id}
              class="w-auto h-[90vh] object-contain relative z-[210]"
            />
            {displayedFile.polygons &&
              displayedFile.polygons.map((polygon) => (
                <div
                  class={`absolute top-0 left-0 w-full h-full z-[220] ${polygon.className}`}
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
