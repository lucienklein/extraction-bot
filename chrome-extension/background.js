// background.js

// importScripts("./Resources/dwt.js");

chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: "content.js" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "scan_todo") {
    console.log("scan_todo");
    DWTChromeExtension.scan();
  }
});
