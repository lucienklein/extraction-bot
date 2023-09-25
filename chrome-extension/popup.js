const API = "https://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io";

function alertUser(message) {
  const div = document.getElementById("alertBox");
  div.innerText = message;
  div.style.display = "block";
  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}

async function sign() {
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
    if (response.status !== 200 || data?.user?.apikey) return alertUser("Une erreur est survenue");

    chrome.storage.sync.set({ apikey: data.user.apikey, dwt: data.dwt }, () => {
      document.getElementById("login").style.display = "none";
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
    if (!items.apikey) return (document.getElementById("login").style.display = "block");

    document.getElementById("login").style.display = "none";
    document.getElementById("status").style.display = "block";
    document.getElementById("apikey").value = items.apikey;
    document.getElementById("dwt").value = items.dwt;
  });
}

document.getElementById("sign").addEventListener("click", () => {
  sign();
});

document.addEventListener("DOMContentLoaded", load);
