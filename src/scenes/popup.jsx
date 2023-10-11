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
    const acts = await insertData(responses);

    setNerAct(responses.map((response) => response.data.ner.filter((ner) => ner.category === "examinationName")));
    extractedFiles = extractedFiles.map((file, index) => ({ data: file, id: responses[index]?.data._id }));

    setFiles(extractedFiles);
    setDisplayedFile(extractedFiles[0]);
    setActs(acts);
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
        className="rounded-md bg-[#026D77] px-3 py-2 text-2xl font-semibold text-white shadow-sm z-10 mt-4 flex items-center"
      >
        <img src={chrome.runtime.getURL("images/stars.png")} alt="Button icon" className="mt-4 h-8 w-8" />

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
              <img src={chrome.runtime.getURL("images/cross.png")} alt="Button icon" className="h-8 w-8" />
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
