const launchScan = async () => {
  // const result = await DWTChromeExtension.scan();

  // return [`data:image/png;base64,${result._content}`];

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);
  fileInput.click();

  return await new Promise((resolve) => {
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve([event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  });
};

const getFileFromKalisil = async () => {
  const fileScanned = document.querySelectorAll(
    '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
  );

  const imgsBase64 = [];
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

    imgsBase64.push(imgBase64);
  }

  return imgsBase64;
};

const main = async () => {
  const fileScanned = document.querySelectorAll(
    '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
  );

  let files = [];
  if (fileScanned.length > 0) files = await getFileFromKalisil();
  else files = await launchScan();

  return files;
};

export default main;
