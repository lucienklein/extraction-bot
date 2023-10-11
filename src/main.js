import React from "react";
import ReactDOM from "react-dom";
import App from "./scenes/popup.jsx";
import * as Sentry from "@sentry/browser";

import { loadLibrary, getChromeStorage } from "./utils";

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

const init = async () => {
  if (!window.location.href.includes("moduleSil/demande/saisie/index.php")) return;
  if (!license) return;

  // await loadLibrary(dwtURL + "/dynamsoft.webtwain.initiate.js", "text/javascript");
  // await loadLibrary(dwtURL + "/dynamsoft.webtwain.config.js", "text/javascript");
  // await loadLibrary(dwtURL + "/dynamsoft.webtwain.install.js", "text/javascript");

  const inputAnalyse = document.querySelector("#analyseCodeAjout");
  if (!inputAnalyse) return;

  const fileScanned = document.querySelectorAll(
    '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
  );
  if (fileScanned.length <= 0) return;

  inputAnalyse.parentNode.style.display = "flex";
  inputAnalyse.parentNode.style.alignItems = "center";
  const app = document.createElement("div");
  inputAnalyse.parentNode.insertBefore(app, inputAnalyse.nextSibling);
  ReactDOM.render(<App />, app);
};

try {
  init();
} catch (error) {
  Sentry.captureException(error);
  console.error(error);

  const container = document.createElement("div");
  container.className = "tailwind";
  const errorDiv = document.createElement("div");
  errorDiv.innerText = "L'extension Extraction a rencontré une erreur. L'erreur a été envoyée à l'équipe technique.";
  errorDiv.className =
    "rounded-md bg-red-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 bottom-3 right-4 fixed z-50";

  container.appendChild(errorDiv);
  document.body.appendChild(container);
}
