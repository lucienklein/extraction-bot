// popup.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("popup.js");
  var button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    chrome.runtime.sendMessage({
      message: "open_new_tab",
      url: "http://www.google.com",
    });
  });
});
