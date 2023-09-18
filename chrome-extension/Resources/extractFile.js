(async () => {
  const fileScanned = document.querySelectorAll(
    '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
  );

  for (const file of fileScanned) {
    const script = file.nextElementSibling;
    const data = script.innerText;

    const pattern = /'https?:\/\/[a-zA-Z0-9.-]+\/moduleKalilab\/scan\/visuImage\.php\?[^']+\\'/;
    const result = data.match(pattern);
    console.log(result);
    if (!result || result.length <= 0) return;

    const url = result[0].replace(/'/g, "");
    const response = await fetch(url);
    if (!response.ok) return;

    const text = await response.text();

    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const imgElement = htmlDocument.getElementById("imgScan");
    const imgSrc = imgElement ? imgElement.src : null;

    const img = await fetch(imgSrc);
    const imgBlob = await img.blob();
    console.log(imgBlob);
    const imgBase64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(imgBlob);
    });

    window.postMessage({ message: "scan_done", result: result._content }, "*");
  }
})();
