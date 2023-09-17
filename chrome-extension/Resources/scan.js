chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "scan_todo") {
    DWTChromeExtension.scan();
  }
});
