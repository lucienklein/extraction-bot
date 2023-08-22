// // content.js

// // Function to add a button in the iframe
// function addButtonInIframe() {
//   var iframe = document.getElementById("Prinicpal");
//   // if (iframe) {
//   var button = document.createElement("button");
//   button.innerHTML = "My Button";
//   button.className = "my-button";
//   button.onclick = function () {
//     chrome.runtime.sendMessage({
//       message: "open_new_tab",
//       url: "http://www.google.com",
//     });
//   };
//   // iframe.contentWindow.document.body.appendChild(button);
//   document.body.appendChild(button);
//   // }
// }

// // Execute the function after the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", addButtonInIframe, false);

const addButton = () => {
  var url = new URL(window.location.href);
  const title = document.querySelector("#pageTitle");

  console.log("extension", url.pathname, title.innerText);
  if (url.pathname === "/kalilab.php" && title.innerText === "RECHERCHE DE DEMANDE") {
    var iframe = document.getElementById("iframePrincipal");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var table = innerDoc.querySelector(".tableau.tableDemande");
    var rows = innerDoc.querySelectorAll(".tableau.tableDemande .dj");

    var button = document.createElement("button");
    button.innerHTML = "Click me";
    button.onclick = function () {
      console.log("clicked");
    };
    table.insertBefore(button, table.firstChild);

    rows.forEach((row) => {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      row.insertBefore(checkbox, row.firstChild);
    });

    var otherRows = innerDoc.querySelectorAll(".tableau.tableDemande :not(.dj)");
    otherRows.forEach((row) => {
      var emptyTh = document.createElement("th");
      row.insertBefore(emptyTh, row.firstChild);
    });
  }
};

var iframe = document.getElementById("iframePrincipal");
iframe.onload = function () {
  addButton();
};
