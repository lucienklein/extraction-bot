console.log(chrome.runtime);

DWTChromeExtension.scan();

chrome.runtime.sendMessage({ message: "scan_done", pdf: "test" });
