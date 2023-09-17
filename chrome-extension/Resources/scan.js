(async () => {
  const result = await DWTChromeExtension.scan();

  window.postMessage({ message: "scan_done", result: result }, "*");
})();
