// const acts = JSON.parse(document.getElementById("acts").getAttribute("acts"));
// const boxAnalyse = document.querySelector("#ihmBoxAnalyse .ihmCboxContent.ihmCboxvert");
// const overlay = document.createElement("div");
// overlay.addEventListener("click", (e) => e.stopPropagation(), true);
// overlay.setAttribute(
//   "style",
//   "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9; display: flex; justify-content: center; align-items: center; color: white; font-size: 2rem; font-weight: bold; cursor: progress;"
// );
// overlay.innerHTML = "Insertion en cours";
// boxAnalyse.style.position = "relative";
// // boxAnalyse.appendChild(overlay);

// const inputAnalyse = document.querySelector("#analyseCodeAjout");
// const enterKeyEvent = new KeyboardEvent("keydown", {
//   key: "Enter",
//   code: "Enter",
//   keyCode: 13,
//   charCode: 13,
//   shiftKey: false,
// });

// let actInserted = [...document.querySelectorAll(`.analyseBox`)].map((act) => act.getAttribute("idanalyse"));
// for (const act of acts) {
//   inputAnalyse.value = act;
//   inputAnalyse.dispatchEvent(enterKeyEvent);

//   // await new Promise((resolve) => {
//   //   setTimeout(resolve, 100);
//   //   if (!inputAnalyse.classList.contains("ui-autocomplete-loading")) resolve();
//   // });

//   // const previousActInserted = [...actInserted];
//   // actInserted = [...document.querySelectorAll(`.analyseBox`)].map((act) => act.getAttribute("idanalyse"));

//   // await new Promise((resolve) => setTimeout(resolve, 2000));

//   console.log(act);

//   // if (!act.ALD) continue;

//   // const newActInserted = actInserted.filter((act) => !previousActInserted.includes(act));

//   // for (const idAnalyse of newActInserted) {
//   //   const el = document.querySelector(`[idanalyse="${idAnalyse}"]`);
//   //   if (!el) continue;

//   //   const inputALD = el.querySelector(`input[id^="anaFact"]`);
//   //   if (!inputALD) continue;

//   //   inputALD.setAttribute("value", "ALD");

//   //   const divDataRight = el.querySelector(`.analyseDataRight`);
//   //   if (!divDataRight) continue;

//   //   const divIcon = divDataRight.querySelector(`div[id^="anaFact"]`);
//   //   if (!divIcon) continue;

//   //   divIcon.innerHTML = `<span class="qtipUp hand" help="Affection de Longue DurÃ©e">E<sub>4</sub></span>`;
//   // }
// }

// overlay.remove();

const inputAnalyse = document.querySelector("#analyseCodeAjout");
const enterKeyEvent = new KeyboardEvent("keydown", {
  key: "Enter",
  code: "Enter",
  keyCode: 13,
  charCode: 13,
  shiftKey: false,
});

const liste = ["NF", "GL", "ECBU"];
for (const code of liste) {
  inputAnalyse.value = code;
  inputAnalyse.dispatchEvent(enterKeyEvent);
}
