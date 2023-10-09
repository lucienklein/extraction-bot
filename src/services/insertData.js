const insertData = async (prescriptions) => {
  let doctors = prescriptions.map((prescription) => prescription.data.doctor).flat();
  let acts = prescriptions
    .map((prescription) =>
      prescription.data.acts.map((act) => ({
        ...act,
        width: prescription.data.width,
        height: prescription.data.height,
        prescriptionId: prescription.data._id.toString(),
      }))
    )
    .flat();

  //   extractedActs = [...extractedActs, ...acts];

  prescriptions.forEach((prescription, index) => {
    const mongoid = prescription.data._id.toString();
    const image = document.querySelector(`[docIndex='${index}']`);
    image.setAttribute("mongoid", mongoid);
  });

  const boxAnalyse = document.querySelector("#ihmBoxAnalyse .ihmCboxContent.ihmCboxvert");
  const overlay = document.createElement("div");
  overlay.addEventListener("click", (e) => e.stopPropagation(), true);
  overlay.setAttribute(
    "style",
    "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9; display: flex; justify-content: center; align-items: center; color: white; font-size: 2rem; font-weight: bold; cursor: progress;"
  );
  overlay.innerHTML = "Insertion en cours";
  boxAnalyse.style.position = "relative";
  boxAnalyse.appendChild(overlay);

  for (let act of acts) {
    await insertAct(act, 250);
  }

  const inputAnalyse = document.querySelector("#analyseCodeAjout");
  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (inputAnalyse.classList.contains("ui-autocomplete-loading")) return;
      clearInterval(interval);
      resolve();
    }, 1000);
  });

  acts = matchActsAndEl(acts);

  for (let act of acts) {
    if (!act.notFound) continue;
    await insertAct(act, 500);
  }

  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (inputAnalyse.classList.contains("ui-autocomplete-loading")) return;
      clearInterval(interval);
      resolve();
    }, 1000);
  });

  acts = matchActsAndEl(acts);

  let actsAld = [];
  for (let act of acts) {
    if (act.notFound) continue;
    for (const idAnalyse of act.elThatMatchAct) {
      const el = document.querySelector(`[idanalyse="${idAnalyse}"]`);

      const selectorPolygon = act.codes.map((code) => `.querco_polygon_${code}`).join("");

      el.addEventListener("mouseover", function () {
        const polygons = document.querySelectorAll(selectorPolygon);
        polygons.forEach((polygon) => (polygon.style.opacity = "0.5"));
      });

      el.addEventListener("mouseout", function () {
        const polygons = document.querySelectorAll(selectorPolygon);
        polygons.forEach((polygon) => (polygon.style.opacity = "0.15"));
      });

      act.codes.forEach((code) => {
        el.classList.add(`querco_act_${code}`);
      });

      if (!act.ALD) continue;
      el.setAttribute("isselected", true);
      actsAld.push(el);
    }
  }

  for (let doctor of doctors) {
    const doctorCode = `${doctor.data["Nom d'exercice"].substring(0, 4)}${doctor.data["Prénom d'exercice"].substring(
      0,
      3
    )}`;
    const doctorInput = document.querySelector("#medecinCodeAjout");
    const enterKeyEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
      shiftKey: false,
    });
    doctorInput.value = doctorCode;
    doctorInput.dispatchEvent(new Event("focus"));
    doctorInput.dispatchEvent(enterKeyEvent);

    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (doctorInput.classList.contains("ui-autocomplete-loading")) return;
        clearInterval(interval);
        resolve();
      }, 1000);
    });
  }

  if (actsAld.length > 0) {
    actsAld[0].dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true }));
    const divToClick = document.querySelector("div[onclick*=\"dispatchContextMenuAction('toggleFact', 'ALD')\"]");
    if (!divToClick) return;
    divToClick.click();
  }

  const actsWithoutNotFound = acts.filter((act) => !act.notFound);

  overlay.remove();

  return actsWithoutNotFound;
};

async function insertAct(act, timeout) {
  for (const code of act.codes) {
    const inputAnalyse = document.querySelector("#analyseCodeAjout");
    const enterKeyEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
      shiftKey: false,
    });

    inputAnalyse.value = code;
    inputAnalyse.dispatchEvent(enterKeyEvent);

    await new Promise((resolve) => setTimeout(resolve, timeout));
  }
}

function matchActsAndEl(acts) {
  const actsInserted = [...document.querySelectorAll(`.analyseBox`)].map((act) => act.getAttribute("idanalyse"));
  for (let act of acts) {
    const elThatMatchAct = actsInserted.filter((idAnalyse) => {
      const el = document.querySelector(`[idanalyse="${idAnalyse}"]`);
      const codeanalyse = el.getAttribute("codeanalyse");
      const codegroupe = el.getAttribute("codegroupe");

      return act.codes.includes(codeanalyse) || act.codes.includes(codegroupe);
    });

    act.elThatMatchAct = elThatMatchAct;
    act.notFound = elThatMatchAct.length === 0;
  }

  return acts;
}

export default insertData;
