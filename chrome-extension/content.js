const addButtonToTable = () => {
  var url = new URL(window.location.href);
  const title = document.querySelector("#pageTitle");

  console.log("extension", url.pathname, title.innerText);
  if (url.pathname === "/kalilab.php" && title.innerText === "RECHERCHE DE DEMANDE") {
    var iframe = document.getElementById("iframePrincipal");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var rows = innerDoc.querySelectorAll(".tableau.tableDemande .dj");

    rows.forEach((row) => {
      const dataId = row.getAttribute("data-id");
      var button = document.createElement("button");

      button.innerHTML = "✨";
      button.style = "cursor: pointer;";

      button.onclick = function () {
        button.innerHTML = "🔄";
        // fetch("http://example.com/dataId", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ dataId: dataId }),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     button.innerHTML = "✨";
        //   })
        //   .catch((error) => {
        //     console.error("Error:", error);
        //   });
        //     console.error("Error:", error);
        //   });

        // Create a div for the message
        var messageDiv = document.createElement("div");
        messageDiv.style.position = "fixed";
        messageDiv.style.right = "20px";
        messageDiv.style.top = "20px";
        messageDiv.style.padding = "10px";
        messageDiv.style.backgroundColor = "#4CAF50";
        messageDiv.style.color = "white";
        messageDiv.innerHTML = "Ok";

        // Append the message to the body
        document.body.appendChild(messageDiv);

        // Remove the message after 5 seconds
        setTimeout(function () {
          document.body.removeChild(messageDiv);
        }, 5000);
      };

      row.appendChild(button);
    });
  }
};

const addButtonToRequest = async () => {
  const origin = new URL(window.location.href).origin;
  var iframe = document.getElementById("iframePrincipal");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const form = innerDoc.querySelector(`form[name = "userSelectSiteForm"]`);
  const idRequest = form.getAttribute("action").match(/idDemande=(\d+)/)[1];

  const files = innerDoc.querySelectorAll(".scanGrand ");

  let filesInfo = [...files].map((file) => {
    const fileInfo = file.getAttribute("onclick");

    const matches = fileInfo.match(/remoteScan\(([^)]+)\)/);

    if (!matches || !matches[1]) return null;

    const params = matches[1].split(",").map((param) => param.trim().replace(/['"]/g, ""));

    return {
      idScan: params[0],
      idTypeReference: params[1],
      idTypeScan: params[2],
      idReference: params[3],
    };
  });

  const prescriptionsInfo = filesInfo.filter((fileInfo) => fileInfo !== null && fileInfo.idTypeScan === "1");

  var button = document.createElement("button");
  button.innerHTML = "Submit";
  button.className = "my-button";
  button.style =
    "font-size: 1.2em; padding: 10px 20px; color: white; background-color: #4CAF50; border: none; border-radius: 5px; cursor: pointer;";
  button.innerHTML = "Submit";
  button.style.backgroundColor = "#4CAF50";

  button.onclick = async () => {
    button.innerHTML = "Loading...";
    button.style.backgroundColor = "#808080";

    let prescriptions = [];
    for (const info of prescriptionsInfo) {
      const imagePage = await fetch(
        `${origin}/moduleKalilab/scan/visuImage.php?idScan=${info.idScan}&idTypeReference=${info.idTypeReference}&idTypeScan=${info.idTypeScan}&idReference=${info.idReference}`
      );

      const text = await imagePage.text();

      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, "text/html");
      const imgElement = htmlDocument.getElementById("imgScan");
      const imgSrc = imgElement ? imgElement.src : null;

      const imgResponse = await fetch(imgSrc);

      const buffer = await imgResponse.arrayBuffer();
      prescriptions.push({ name: info.idScan, raw: Array.from(new Uint8Array(buffer)) });
    }

    const response = await fetch("https://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestId: idRequest,
        prescriptions,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  const table = innerDoc.querySelector('tr[valign="top"]').parentNode;
  var firstRow = table.querySelector("tr:first-child");

  // Create a tr
  var tr = document.createElement("tr");

  var td = document.createElement("td");
  td.colSpan = 2;

  var banner = document.createElement("div");
  banner.style.backgroundColor = "#d5c8f4";
  banner.style.padding = "2px 6px";
  banner.style.margin = "12px 4px";
  banner.style.borderRadius = "5px";
  banner.style.display = "flex";
  banner.style.justifyContent = "space-between";
  banner.style.alignItems = "center";

  // Add some fake text to the tr
  var text = document.createElement("p");
  text.innerHTML = "This is some fake text.";
  banner.appendChild(text);

  // Add the button to the tr
  banner.appendChild(button);

  td.appendChild(banner);
  tr.appendChild(td);
  firstRow.parentNode.insertBefore(tr, firstRow.nextSibling);
};

var iframe = document.getElementById("iframePrincipal");
iframe.onload = function () {
  addButtonToTable();
  addButtonToRequest();
};
