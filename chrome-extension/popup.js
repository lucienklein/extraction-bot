const API = "https://api.extraction.querco.co";

function alertUser(message) {
  const div = document.getElementById("alertBox");
  div.innerText = message;
  div.style.display = "block";
  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) return alertUser("Veuillez remplir tous les champs");

  try {
    const response = await fetch(API + "/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.status !== 200 && data.message) return alertUser(data.message);
    if (response.status !== 200 || !data?.user?.apikey) {
      console.log(data);
      return alertUser("Une erreur est survenue");
    }

    chrome.storage.sync.set({ apikey: data.user.apikey, dwt: data.dwt }, () => {
      document.getElementById("form").style.display = "none";
      document.getElementById("status").style.display = "block";
      document.getElementById("apikey").value = data.user.apikey;
      document.getElementById("dwt").value = data.dwt;
    });
  } catch (error) {
    console.log(error);
    alertUser("Une erreur est survenue");
  }
}

function load() {
  chrome.storage.sync.get({ apikey: "", dwt: "" }, (items) => {
    if (!items.apikey || !items.dwt) return (document.getElementById("form").style.display = "block");

    document.getElementById("form").style.display = "none";
    document.getElementById("status").style.display = "block";
    document.getElementById("apikey").value = items.apikey;
    document.getElementById("dwt").value = items.dwt;
  });
}

document.getElementById("login").addEventListener("click", () => {
  login();
});

document.getElementById("logout").addEventListener("click", () => {
  chrome.storage.sync.set({ apikey: "", dwt: "" }, () => {
    document.getElementById("form").style.display = "block";
    document.getElementById("status").style.display = "none";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("apikey").value = "";
    document.getElementById("dwt").value = "";
  });
});

document.addEventListener("DOMContentLoaded", load);
