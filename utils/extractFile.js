window.addEventListener(
  "message",
  async (event) => {
    if (event.source != window) return;
    if (!event.data.message || event.data.message !== "extractFile") return;

    const apikey = event.data.apikey;

    const fileScanned = document.querySelectorAll(
      '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
    );

    if (fileScanned.length > 0) data = await getFileFromKalisil();
    else data = await launchScan();

    window.postMessage({ message: "displayFile", data: data }, "*");

    let response = await fetch(`${API}/prescription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apikey, file: data }),
    });
    response = await response.json();

    console.log(response);

    window.postMessage({ message: "insertActs", data: response.data }, "*");
  },
  false
);

const launchScan = async () => {
  const result = await DWTChromeExtension.scan();

  return `data:image/png;base64,${result._content}`;

  // const fileInput = document.createElement("input");
  // fileInput.type = "file";
  // fileInput.style.display = "none";
  // document.body.appendChild(fileInput);
  // fileInput.click();

  // let result;
  // await new Promise((resolve) => {
  //   fileInput.addEventListener("change", async (event) => {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       result = event.target.result;
  //       resolve();
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // });

  // return result;
};

const getFileFromKalisil = async () => {
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

    return imgBase64;
  }
};
