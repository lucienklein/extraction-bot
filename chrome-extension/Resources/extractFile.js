(async () => {
  const fileScanned = document.querySelectorAll(
    '[style="background-image:url(http://172.30.69.50/images/icoimage-blanc.png);"]'
  );

  console.log(fileScanned);

  console.log(document);

  for (const file of fileScanned) {
    const script = file.nextElementSibling;
    const data = script.innerText;

    const pattern = /'https?:\/\/[a-zA-Z0-9.-]+\/moduleKalilab\/scan\/visuImage\.php\?[^']+\\'/;
    const result = data.match(pattern);
    if (result || result.length > 0) return;

    const url = result[0];
    console.log(url);
    const response = await fetch(url);
  }
})();
