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

// Get the current URL
var url = new URL(window.location.href);

// Check the pathname (route) of the URL
if (url.pathname === "/kalilab.php") {
  var button = document.createElement("button");
  button.innerHTML = "Click me";
  button.onclick = function () {
    console.log("clicked");
    // Your code for what you want the button to do
  };
  document.body.appendChild(button);
}
