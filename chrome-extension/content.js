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
    var rows = innerDoc.querySelectorAll(".tableau.tableDemande .dj");

    rows.forEach((row) => {
      var button = document.createElement("button");
      button.innerHTML = "✨";
      button.onclick = function () {
        console.log("clicked");
      };
      row.appendChild(button);
    });
  }
};

var iframe = document.getElementById("iframePrincipal");
iframe.onload = function () {
  addButton();
};
