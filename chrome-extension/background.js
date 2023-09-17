// background.js

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: "content.js" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "scan_done") {
    console.log("scan done");
    const pdf = request.pdf;
    const blobUrl = URL.createObjectURL(pdf);
    chrome.downloads.download({
      url: blobUrl,
      filename: "scan.pdf",
    });
  }
});
