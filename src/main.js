import * as Sentry from "@sentry/browser";

import getFiles from "./files";
import extractData from "./extractData";
import { loadLibrary, getChromeStorage } from "./utils";
import { displayFiles, displayPolygons } from "./display";
import insertData from "./insertData";

const dwtURL = new URL(chrome.runtime.getURL("/dwt"));
const apikey = await getChromeStorage("apikey");
const license = await getChromeStorage("dwt");

Sentry.init({
  dsn: "https://11e7e81067272e6c50f0d6595e4ff077@o4505545038888960.ingest.sentry.io/4505941359132672",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

Sentry.configureScope((scope) => {
  scope.setTag("version", chrome.runtime.getManifest().version);
  scope.setTag("browser", navigator.userAgent);
  scope.setTag("url", window.location.href);
  scope.setTag("apikey", apikey);
  scope.setTag("license", license);
});

// let extractedActs = [];

// const observer = new MutationObserver(async (mutations) => {
//   let acts = [];

//   for (const mutation of mutations) {
//     for (const node of mutation.addedNodes) {
//       if (!node.classList || !node.classList.contains("analyseBox")) return;
//       const codeanalyse = node.getAttribute("codeanalyse");
//       const codegroupe = node.getAttribute("codegroupe");
//       const code = codegroupe || codeanalyse;

//       const act = extractedActs.find((act) => act.code === code);
//       if (act) return;

//       acts.push({ code, isAdded: true });
//     }
//   }
//   if (acts.length === 0) return;

//   const apikey = await getChromeStorage("apikey");
//   const mongoid = document.querySelector("#displayImage").getAttribute("mongoid");

//   const response = await fetch(`${API}/prescription/${mongoid}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ apikey, acts }),
//   });

//   if (!response.ok) return;
//   const prescription = await response.json();
//   extractedActs = [...extractedActs, ...prescription.data.acts];
// });

// observer.observe(document.body, {
//   childList: true,
//   subtree: true,
// });

const init = async () => {
  if (!window.location.href.includes("moduleSil/demande/saisie/index.php")) return;
  if (!license) return;

  await loadLibrary(dwtURL + "/dynamsoft.webtwain.initiate.js", "text/javascript");
  await loadLibrary(dwtURL + "/dynamsoft.webtwain.config.js", "text/javascript");
  await loadLibrary(dwtURL + "/dynamsoft.webtwain.install.js", "text/javascript");

  const button = document.createElement("button");
  button.innerText = "Extraction Automatique";
  button.className =
    "rounded-md bg-indigo-50 px-3.5 py-2.5 text-2xl font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 bottom-2 right-2 fixed z-50";
  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const files = await getFiles(apikey);

    displayFiles(files);

    const apikey = await getChromeStorage("apikey");
    const responses = await extractData(apikey, files);

    const acts = await insertData(responses);

    displayPolygons(acts);
  });

  const container = document.createElement("div");
  container.className = "tailwind";
  container.appendChild(button);
  document.body.appendChild(container);
};

try {
  init();
} catch (error) {
  Sentry.captureException(error);
  console.error(error);

  const errorDiv = document.createElement("div");
  errorDiv.innerText = "L'extension Extraction a rencontré une erreur. L'erreur a été envoyée à l'équipe technique.";
  errorDiv.style.color = "red";
  errorDiv.style.position = "fixed";
  errorDiv.style.bottom = "0";
  errorDiv.style.right = "0";
  errorDiv.style.zIndex = "9999";
  errorDiv.style.backgroundColor = "white";
  errorDiv.style.padding = "10px";
  errorDiv.style.width = "100%";
  errorDiv.style.textAlign = "center";

  document.body.appendChild(errorDiv);
}
