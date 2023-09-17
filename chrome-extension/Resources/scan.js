DWTChromeExtension.scan();

chrome.runtime.onMessage.sendMessage({ message: "scan_done", pdf: "test" });
