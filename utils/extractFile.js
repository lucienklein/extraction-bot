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

    let responses = [];
    for (const file of data) {
      // let response = await fetch(`${API}/prescription`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ apikey, file: data }),
      // });

      // response = await response.json();

      const response = {
        data: {
          userId: "65117d3fd297d7394da794a7",
          _id: "65226c50e8b1e0472e307a73",
          words: [
            {
              content: "CENTRE",
              offset: 0,
              length: 6,
              confidence: 0.993,
              polygon: [
                {
                  x: 388,
                  y: 174,
                  _id: "65226c55e8b1e0472e307a76",
                },
                {
                  x: 558,
                  y: 173,
                  _id: "65226c55e8b1e0472e307a77",
                },
                {
                  x: 557,
                  y: 222,
                  _id: "65226c55e8b1e0472e307a78",
                },
                {
                  x: 387,
                  y: 222,
                  _id: "65226c55e8b1e0472e307a79",
                },
              ],
              _id: "65226c55e8b1e0472e307a75",
            },
            {
              content: "HOSPITALIER",
              offset: 7,
              length: 11,
              confidence: 0.991,
              polygon: [
                {
                  x: 568,
                  y: 173,
                  _id: "65226c55e8b1e0472e307a7b",
                },
                {
                  x: 860,
                  y: 172,
                  _id: "65226c55e8b1e0472e307a7c",
                },
                {
                  x: 859,
                  y: 222,
                  _id: "65226c55e8b1e0472e307a7d",
                },
                {
                  x: 567,
                  y: 222,
                  _id: "65226c55e8b1e0472e307a7e",
                },
              ],
              _id: "65226c55e8b1e0472e307a7a",
            },
            {
              content: "UNIVERSITAIRE",
              offset: 19,
              length: 13,
              confidence: 0.991,
              polygon: [
                {
                  x: 876,
                  y: 172,
                  _id: "65226c55e8b1e0472e307a80",
                },
                {
                  x: 1223,
                  y: 171,
                  _id: "65226c55e8b1e0472e307a81",
                },
                {
                  x: 1222,
                  y: 220,
                  _id: "65226c55e8b1e0472e307a82",
                },
                {
                  x: 876,
                  y: 222,
                  _id: "65226c55e8b1e0472e307a83",
                },
              ],
              _id: "65226c55e8b1e0472e307a7f",
            },
            {
              content: "DE",
              offset: 33,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 1233,
                  y: 172,
                  _id: "65226c55e8b1e0472e307a85",
                },
                {
                  x: 1297,
                  y: 172,
                  _id: "65226c55e8b1e0472e307a86",
                },
                {
                  x: 1296,
                  y: 220,
                  _id: "65226c55e8b1e0472e307a87",
                },
                {
                  x: 1233,
                  y: 220,
                  _id: "65226c55e8b1e0472e307a88",
                },
              ],
              _id: "65226c55e8b1e0472e307a84",
            },
            {
              content: "REIMS",
              offset: 36,
              length: 5,
              confidence: 0.995,
              polygon: [
                {
                  x: 1307,
                  y: 172,
                  _id: "65226c55e8b1e0472e307a8a",
                },
                {
                  x: 1454,
                  y: 172,
                  _id: "65226c55e8b1e0472e307a8b",
                },
                {
                  x: 1454,
                  y: 219,
                  _id: "65226c55e8b1e0472e307a8c",
                },
                {
                  x: 1307,
                  y: 220,
                  _id: "65226c55e8b1e0472e307a8d",
                },
              ],
              _id: "65226c55e8b1e0472e307a89",
            },
            {
              content: "Hôpital",
              offset: 42,
              length: 7,
              confidence: 0.933,
              polygon: [
                {
                  x: 682,
                  y: 241,
                  _id: "65226c55e8b1e0472e307a8f",
                },
                {
                  x: 842,
                  y: 240,
                  _id: "65226c55e8b1e0472e307a90",
                },
                {
                  x: 842,
                  y: 293,
                  _id: "65226c55e8b1e0472e307a91",
                },
                {
                  x: 683,
                  y: 293,
                  _id: "65226c55e8b1e0472e307a92",
                },
              ],
              _id: "65226c55e8b1e0472e307a8e",
            },
            {
              content: "Robert",
              offset: 50,
              length: 6,
              confidence: 0.996,
              polygon: [
                {
                  x: 852,
                  y: 240,
                  _id: "65226c55e8b1e0472e307a94",
                },
                {
                  x: 1010,
                  y: 239,
                  _id: "65226c55e8b1e0472e307a95",
                },
                {
                  x: 1010,
                  y: 290,
                  _id: "65226c55e8b1e0472e307a96",
                },
                {
                  x: 852,
                  y: 293,
                  _id: "65226c55e8b1e0472e307a97",
                },
              ],
              _id: "65226c55e8b1e0472e307a93",
            },
            {
              content: "Debré",
              offset: 57,
              length: 5,
              confidence: 0.949,
              polygon: [
                {
                  x: 1020,
                  y: 239,
                  _id: "65226c55e8b1e0472e307a99",
                },
                {
                  x: 1160,
                  y: 238,
                  _id: "65226c55e8b1e0472e307a9a",
                },
                {
                  x: 1160,
                  y: 285,
                  _id: "65226c55e8b1e0472e307a9b",
                },
                {
                  x: 1020,
                  y: 290,
                  _id: "65226c55e8b1e0472e307a9c",
                },
              ],
              _id: "65226c55e8b1e0472e307a98",
            },
            {
              content: "Identification",
              offset: 63,
              length: 14,
              confidence: 0.902,
              polygon: [
                {
                  x: 208,
                  y: 422,
                  _id: "65226c55e8b1e0472e307a9e",
                },
                {
                  x: 392,
                  y: 422,
                  _id: "65226c55e8b1e0472e307a9f",
                },
                {
                  x: 392,
                  y: 459,
                  _id: "65226c55e8b1e0472e307aa0",
                },
                {
                  x: 208,
                  y: 455,
                  _id: "65226c55e8b1e0472e307aa1",
                },
              ],
              _id: "65226c55e8b1e0472e307a9d",
            },
            {
              content: "du",
              offset: 78,
              length: 2,
              confidence: 0.996,
              polygon: [
                {
                  x: 400,
                  y: 422,
                  _id: "65226c55e8b1e0472e307aa3",
                },
                {
                  x: 438,
                  y: 423,
                  _id: "65226c55e8b1e0472e307aa4",
                },
                {
                  x: 437,
                  y: 460,
                  _id: "65226c55e8b1e0472e307aa5",
                },
                {
                  x: 399,
                  y: 460,
                  _id: "65226c55e8b1e0472e307aa6",
                },
              ],
              _id: "65226c55e8b1e0472e307aa2",
            },
            {
              content: "prescripteur",
              offset: 81,
              length: 12,
              confidence: 0.991,
              polygon: [
                {
                  x: 445,
                  y: 423,
                  _id: "65226c55e8b1e0472e307aa8",
                },
                {
                  x: 626,
                  y: 423,
                  _id: "65226c55e8b1e0472e307aa9",
                },
                {
                  x: 626,
                  y: 459,
                  _id: "65226c55e8b1e0472e307aaa",
                },
                {
                  x: 445,
                  y: 460,
                  _id: "65226c55e8b1e0472e307aab",
                },
              ],
              _id: "65226c55e8b1e0472e307aa7",
            },
            {
              content: "Service",
              offset: 94,
              length: 7,
              confidence: 0.995,
              polygon: [
                {
                  x: 57,
                  y: 473,
                  _id: "65226c55e8b1e0472e307aad",
                },
                {
                  x: 163,
                  y: 473,
                  _id: "65226c55e8b1e0472e307aae",
                },
                {
                  x: 162,
                  y: 510,
                  _id: "65226c55e8b1e0472e307aaf",
                },
                {
                  x: 56,
                  y: 509,
                  _id: "65226c55e8b1e0472e307ab0",
                },
              ],
              _id: "65226c55e8b1e0472e307aac",
            },
            {
              content: "d'Hépato-Gastro-Entérologie",
              offset: 102,
              length: 27,
              confidence: 0.968,
              polygon: [
                {
                  x: 170,
                  y: 473,
                  _id: "65226c55e8b1e0472e307ab2",
                },
                {
                  x: 584,
                  y: 475,
                  _id: "65226c55e8b1e0472e307ab3",
                },
                {
                  x: 584,
                  y: 512,
                  _id: "65226c55e8b1e0472e307ab4",
                },
                {
                  x: 169,
                  y: 510,
                  _id: "65226c55e8b1e0472e307ab5",
                },
              ],
              _id: "65226c55e8b1e0472e307ab1",
            },
            {
              content: "Prescripteur",
              offset: 130,
              length: 12,
              confidence: 0.991,
              polygon: [
                {
                  x: 58,
                  y: 543,
                  _id: "65226c55e8b1e0472e307ab7",
                },
                {
                  x: 217,
                  y: 541,
                  _id: "65226c55e8b1e0472e307ab8",
                },
                {
                  x: 218,
                  y: 577,
                  _id: "65226c55e8b1e0472e307ab9",
                },
                {
                  x: 59,
                  y: 576,
                  _id: "65226c55e8b1e0472e307aba",
                },
              ],
              _id: "65226c55e8b1e0472e307ab6",
            },
            {
              content: ":",
              offset: 143,
              length: 1,
              confidence: 0.969,
              polygon: [
                {
                  x: 224,
                  y: 541,
                  _id: "65226c55e8b1e0472e307abc",
                },
                {
                  x: 234,
                  y: 541,
                  _id: "65226c55e8b1e0472e307abd",
                },
                {
                  x: 234,
                  y: 577,
                  _id: "65226c55e8b1e0472e307abe",
                },
                {
                  x: 225,
                  y: 577,
                  _id: "65226c55e8b1e0472e307abf",
                },
              ],
              _id: "65226c55e8b1e0472e307abb",
            },
            {
              content: "Dr",
              offset: 145,
              length: 2,
              confidence: 0.991,
              polygon: [
                {
                  x: 240,
                  y: 541,
                  _id: "65226c55e8b1e0472e307ac1",
                },
                {
                  x: 273,
                  y: 541,
                  _id: "65226c55e8b1e0472e307ac2",
                },
                {
                  x: 273,
                  y: 577,
                  _id: "65226c55e8b1e0472e307ac3",
                },
                {
                  x: 241,
                  y: 577,
                  _id: "65226c55e8b1e0472e307ac4",
                },
              ],
              _id: "65226c55e8b1e0472e307ac0",
            },
            {
              content: "HEURGUE,",
              offset: 148,
              length: 8,
              confidence: 0.992,
              polygon: [
                {
                  x: 280,
                  y: 541,
                  _id: "65226c55e8b1e0472e307ac6",
                },
                {
                  x: 440,
                  y: 541,
                  _id: "65226c55e8b1e0472e307ac7",
                },
                {
                  x: 440,
                  y: 577,
                  _id: "65226c55e8b1e0472e307ac8",
                },
                {
                  x: 280,
                  y: 577,
                  _id: "65226c55e8b1e0472e307ac9",
                },
              ],
              _id: "65226c55e8b1e0472e307ac5",
            },
            {
              content: "Alexandra",
              offset: 157,
              length: 9,
              confidence: 0.994,
              polygon: [
                {
                  x: 447,
                  y: 541,
                  _id: "65226c55e8b1e0472e307acb",
                },
                {
                  x: 584,
                  y: 542,
                  _id: "65226c55e8b1e0472e307acc",
                },
                {
                  x: 584,
                  y: 577,
                  _id: "65226c55e8b1e0472e307acd",
                },
                {
                  x: 447,
                  y: 577,
                  _id: "65226c55e8b1e0472e307ace",
                },
              ],
              _id: "65226c55e8b1e0472e307aca",
            },
            {
              content: "Nº",
              offset: 167,
              length: 2,
              confidence: 0.853,
              polygon: [
                {
                  x: 59,
                  y: 641,
                  _id: "65226c55e8b1e0472e307ad0",
                },
                {
                  x: 90,
                  y: 641,
                  _id: "65226c55e8b1e0472e307ad1",
                },
                {
                  x: 90,
                  y: 676,
                  _id: "65226c55e8b1e0472e307ad2",
                },
                {
                  x: 59,
                  y: 675,
                  _id: "65226c55e8b1e0472e307ad3",
                },
              ],
              _id: "65226c55e8b1e0472e307acf",
            },
            {
              content: "RPPS",
              offset: 170,
              length: 4,
              confidence: 0.986,
              polygon: [
                {
                  x: 97,
                  y: 641,
                  _id: "65226c55e8b1e0472e307ad5",
                },
                {
                  x: 179,
                  y: 642,
                  _id: "65226c55e8b1e0472e307ad6",
                },
                {
                  x: 179,
                  y: 676,
                  _id: "65226c55e8b1e0472e307ad7",
                },
                {
                  x: 97,
                  y: 676,
                  _id: "65226c55e8b1e0472e307ad8",
                },
              ],
              _id: "65226c55e8b1e0472e307ad4",
            },
            {
              content: ":",
              offset: 175,
              length: 1,
              confidence: 0.994,
              polygon: [
                {
                  x: 186,
                  y: 642,
                  _id: "65226c55e8b1e0472e307ada",
                },
                {
                  x: 200,
                  y: 642,
                  _id: "65226c55e8b1e0472e307adb",
                },
                {
                  x: 200,
                  y: 676,
                  _id: "65226c55e8b1e0472e307adc",
                },
                {
                  x: 186,
                  y: 676,
                  _id: "65226c55e8b1e0472e307add",
                },
              ],
              _id: "65226c55e8b1e0472e307ad9",
            },
            {
              content: "10001756922",
              offset: 177,
              length: 11,
              confidence: 0.993,
              polygon: [
                {
                  x: 207,
                  y: 642,
                  _id: "65226c55e8b1e0472e307adf",
                },
                {
                  x: 390,
                  y: 642,
                  _id: "65226c55e8b1e0472e307ae0",
                },
                {
                  x: 390,
                  y: 677,
                  _id: "65226c55e8b1e0472e307ae1",
                },
                {
                  x: 207,
                  y: 676,
                  _id: "65226c55e8b1e0472e307ae2",
                },
              ],
              _id: "65226c55e8b1e0472e307ade",
            },
            {
              content: "3/6",
              offset: 189,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 1537,
                  y: 361,
                  _id: "65226c55e8b1e0472e307ae4",
                },
                {
                  x: 1562,
                  y: 361,
                  _id: "65226c55e8b1e0472e307ae5",
                },
                {
                  x: 1563,
                  y: 378,
                  _id: "65226c55e8b1e0472e307ae6",
                },
                {
                  x: 1537,
                  y: 378,
                  _id: "65226c55e8b1e0472e307ae7",
                },
              ],
              _id: "65226c55e8b1e0472e307ae3",
            },
            {
              content: "Identification",
              offset: 193,
              length: 14,
              confidence: 0.919,
              polygon: [
                {
                  x: 987,
                  y: 422,
                  _id: "65226c55e8b1e0472e307ae9",
                },
                {
                  x: 1175,
                  y: 423,
                  _id: "65226c55e8b1e0472e307aea",
                },
                {
                  x: 1175,
                  y: 460,
                  _id: "65226c55e8b1e0472e307aeb",
                },
                {
                  x: 987,
                  y: 454,
                  _id: "65226c55e8b1e0472e307aec",
                },
              ],
              _id: "65226c55e8b1e0472e307ae8",
            },
            {
              content: "du",
              offset: 208,
              length: 2,
              confidence: 0.994,
              polygon: [
                {
                  x: 1183,
                  y: 423,
                  _id: "65226c55e8b1e0472e307aee",
                },
                {
                  x: 1220,
                  y: 423,
                  _id: "65226c55e8b1e0472e307aef",
                },
                {
                  x: 1220,
                  y: 460,
                  _id: "65226c55e8b1e0472e307af0",
                },
                {
                  x: 1182,
                  y: 460,
                  _id: "65226c55e8b1e0472e307af1",
                },
              ],
              _id: "65226c55e8b1e0472e307aed",
            },
            {
              content: "patient",
              offset: 211,
              length: 7,
              confidence: 0.996,
              polygon: [
                {
                  x: 1227,
                  y: 423,
                  _id: "65226c55e8b1e0472e307af3",
                },
                {
                  x: 1333,
                  y: 423,
                  _id: "65226c55e8b1e0472e307af4",
                },
                {
                  x: 1332,
                  y: 459,
                  _id: "65226c55e8b1e0472e307af5",
                },
                {
                  x: 1227,
                  y: 460,
                  _id: "65226c55e8b1e0472e307af6",
                },
              ],
              _id: "65226c55e8b1e0472e307af2",
            },
            {
              content: "GUILLAUME",
              offset: 219,
              length: 9,
              confidence: 0.993,
              polygon: [
                {
                  x: 801,
                  y: 473,
                  _id: "65226c55e8b1e0472e307af8",
                },
                {
                  x: 977,
                  y: 473,
                  _id: "65226c55e8b1e0472e307af9",
                },
                {
                  x: 977,
                  y: 509,
                  _id: "65226c55e8b1e0472e307afa",
                },
                {
                  x: 800,
                  y: 507,
                  _id: "65226c55e8b1e0472e307afb",
                },
              ],
              _id: "65226c55e8b1e0472e307af7",
            },
            {
              content: "née",
              offset: 229,
              length: 3,
              confidence: 0.957,
              polygon: [
                {
                  x: 984,
                  y: 473,
                  _id: "65226c55e8b1e0472e307afd",
                },
                {
                  x: 1036,
                  y: 473,
                  _id: "65226c55e8b1e0472e307afe",
                },
                {
                  x: 1036,
                  y: 509,
                  _id: "65226c55e8b1e0472e307aff",
                },
                {
                  x: 984,
                  y: 509,
                  _id: "65226c55e8b1e0472e307b00",
                },
              ],
              _id: "65226c55e8b1e0472e307afc",
            },
            {
              content: "FROMENT",
              offset: 233,
              length: 7,
              confidence: 0.996,
              polygon: [
                {
                  x: 1043,
                  y: 473,
                  _id: "65226c55e8b1e0472e307b02",
                },
                {
                  x: 1191,
                  y: 474,
                  _id: "65226c55e8b1e0472e307b03",
                },
                {
                  x: 1192,
                  y: 511,
                  _id: "65226c55e8b1e0472e307b04",
                },
                {
                  x: 1043,
                  y: 509,
                  _id: "65226c55e8b1e0472e307b05",
                },
              ],
              _id: "65226c55e8b1e0472e307b01",
            },
            {
              content: "Nelly",
              offset: 241,
              length: 5,
              confidence: 0.996,
              polygon: [
                {
                  x: 1198,
                  y: 474,
                  _id: "65226c55e8b1e0472e307b07",
                },
                {
                  x: 1274,
                  y: 475,
                  _id: "65226c55e8b1e0472e307b08",
                },
                {
                  x: 1275,
                  y: 511,
                  _id: "65226c55e8b1e0472e307b09",
                },
                {
                  x: 1199,
                  y: 511,
                  _id: "65226c55e8b1e0472e307b0a",
                },
              ],
              _id: "65226c55e8b1e0472e307b06",
            },
            {
              content: "1",
              offset: 247,
              length: 1,
              confidence: 0.995,
              polygon: [
                {
                  x: 803,
                  y: 510,
                  _id: "65226c55e8b1e0472e307b0c",
                },
                {
                  x: 815,
                  y: 510,
                  _id: "65226c55e8b1e0472e307b0d",
                },
                {
                  x: 816,
                  y: 540,
                  _id: "65226c55e8b1e0472e307b0e",
                },
                {
                  x: 804,
                  y: 541,
                  _id: "65226c55e8b1e0472e307b0f",
                },
              ],
              _id: "65226c55e8b1e0472e307b0b",
            },
            {
              content: "RUE",
              offset: 249,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 821,
                  y: 510,
                  _id: "65226c55e8b1e0472e307b11",
                },
                {
                  x: 882,
                  y: 510,
                  _id: "65226c55e8b1e0472e307b12",
                },
                {
                  x: 883,
                  y: 539,
                  _id: "65226c55e8b1e0472e307b13",
                },
                {
                  x: 821,
                  y: 540,
                  _id: "65226c55e8b1e0472e307b14",
                },
              ],
              _id: "65226c55e8b1e0472e307b10",
            },
            {
              content: "DU",
              offset: 253,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 893,
                  y: 510,
                  _id: "65226c55e8b1e0472e307b16",
                },
                {
                  x: 933,
                  y: 509,
                  _id: "65226c55e8b1e0472e307b17",
                },
                {
                  x: 933,
                  y: 538,
                  _id: "65226c55e8b1e0472e307b18",
                },
                {
                  x: 893,
                  y: 539,
                  _id: "65226c55e8b1e0472e307b19",
                },
              ],
              _id: "65226c55e8b1e0472e307b15",
            },
            {
              content: "VIVIER",
              offset: 256,
              length: 6,
              confidence: 0.994,
              polygon: [
                {
                  x: 947,
                  y: 509,
                  _id: "65226c55e8b1e0472e307b1b",
                },
                {
                  x: 1040,
                  y: 509,
                  _id: "65226c55e8b1e0472e307b1c",
                },
                {
                  x: 1039,
                  y: 539,
                  _id: "65226c55e8b1e0472e307b1d",
                },
                {
                  x: 947,
                  y: 538,
                  _id: "65226c55e8b1e0472e307b1e",
                },
              ],
              _id: "65226c55e8b1e0472e307b1a",
            },
            {
              content: "51110",
              offset: 263,
              length: 5,
              confidence: 0.993,
              polygon: [
                {
                  x: 801,
                  y: 543,
                  _id: "65226c55e8b1e0472e307b20",
                },
                {
                  x: 882,
                  y: 542,
                  _id: "65226c55e8b1e0472e307b21",
                },
                {
                  x: 882,
                  y: 576,
                  _id: "65226c55e8b1e0472e307b22",
                },
                {
                  x: 801,
                  y: 578,
                  _id: "65226c55e8b1e0472e307b23",
                },
              ],
              _id: "65226c55e8b1e0472e307b1f",
            },
            {
              content: "CAUREL",
              offset: 269,
              length: 6,
              confidence: 0.997,
              polygon: [
                {
                  x: 889,
                  y: 542,
                  _id: "65226c55e8b1e0472e307b25",
                },
                {
                  x: 1013,
                  y: 541,
                  _id: "65226c55e8b1e0472e307b26",
                },
                {
                  x: 1014,
                  y: 576,
                  _id: "65226c55e8b1e0472e307b27",
                },
                {
                  x: 889,
                  y: 576,
                  _id: "65226c55e8b1e0472e307b28",
                },
              ],
              _id: "65226c55e8b1e0472e307b24",
            },
            {
              content: "Née",
              offset: 276,
              length: 3,
              confidence: 0.994,
              polygon: [
                {
                  x: 801,
                  y: 595,
                  _id: "65226c55e8b1e0472e307b2a",
                },
                {
                  x: 848,
                  y: 595,
                  _id: "65226c55e8b1e0472e307b2b",
                },
                {
                  x: 848,
                  y: 623,
                  _id: "65226c55e8b1e0472e307b2c",
                },
                {
                  x: 801,
                  y: 623,
                  _id: "65226c55e8b1e0472e307b2d",
                },
              ],
              _id: "65226c55e8b1e0472e307b29",
            },
            {
              content: "le",
              offset: 280,
              length: 2,
              confidence: 0.996,
              polygon: [
                {
                  x: 854,
                  y: 595,
                  _id: "65226c55e8b1e0472e307b2f",
                },
                {
                  x: 877,
                  y: 595,
                  _id: "65226c55e8b1e0472e307b30",
                },
                {
                  x: 877,
                  y: 623,
                  _id: "65226c55e8b1e0472e307b31",
                },
                {
                  x: 854,
                  y: 623,
                  _id: "65226c55e8b1e0472e307b32",
                },
              ],
              _id: "65226c55e8b1e0472e307b2e",
            },
            {
              content: "08/09/1946",
              offset: 283,
              length: 10,
              confidence: 0.993,
              polygon: [
                {
                  x: 883,
                  y: 595,
                  _id: "65226c55e8b1e0472e307b34",
                },
                {
                  x: 1021,
                  y: 595,
                  _id: "65226c55e8b1e0472e307b35",
                },
                {
                  x: 1020,
                  y: 623,
                  _id: "65226c55e8b1e0472e307b36",
                },
                {
                  x: 883,
                  y: 623,
                  _id: "65226c55e8b1e0472e307b37",
                },
              ],
              _id: "65226c55e8b1e0472e307b33",
            },
            {
              content: "IPP",
              offset: 294,
              length: 3,
              confidence: 0.993,
              polygon: [
                {
                  x: 801,
                  y: 627,
                  _id: "65226c55e8b1e0472e307b39",
                },
                {
                  x: 839,
                  y: 627,
                  _id: "65226c55e8b1e0472e307b3a",
                },
                {
                  x: 839,
                  y: 653,
                  _id: "65226c55e8b1e0472e307b3b",
                },
                {
                  x: 802,
                  y: 653,
                  _id: "65226c55e8b1e0472e307b3c",
                },
              ],
              _id: "65226c55e8b1e0472e307b38",
            },
            {
              content: ":",
              offset: 298,
              length: 1,
              confidence: 0.994,
              polygon: [
                {
                  x: 849,
                  y: 627,
                  _id: "65226c55e8b1e0472e307b3e",
                },
                {
                  x: 859,
                  y: 627,
                  _id: "65226c55e8b1e0472e307b3f",
                },
                {
                  x: 859,
                  y: 653,
                  _id: "65226c55e8b1e0472e307b40",
                },
                {
                  x: 849,
                  y: 653,
                  _id: "65226c55e8b1e0472e307b41",
                },
              ],
              _id: "65226c55e8b1e0472e307b3d",
            },
            {
              content: "80210053",
              offset: 300,
              length: 8,
              confidence: 0.996,
              polygon: [
                {
                  x: 864,
                  y: 627,
                  _id: "65226c55e8b1e0472e307b43",
                },
                {
                  x: 986,
                  y: 629,
                  _id: "65226c55e8b1e0472e307b44",
                },
                {
                  x: 986,
                  y: 654,
                  _id: "65226c55e8b1e0472e307b45",
                },
                {
                  x: 864,
                  y: 653,
                  _id: "65226c55e8b1e0472e307b46",
                },
              ],
              _id: "65226c55e8b1e0472e307b42",
            },
            {
              content: "Reims,",
              offset: 309,
              length: 6,
              confidence: 0.993,
              polygon: [
                {
                  x: 1258,
                  y: 791,
                  _id: "65226c55e8b1e0472e307b48",
                },
                {
                  x: 1342,
                  y: 791,
                  _id: "65226c55e8b1e0472e307b49",
                },
                {
                  x: 1342,
                  y: 821,
                  _id: "65226c55e8b1e0472e307b4a",
                },
                {
                  x: 1258,
                  y: 821,
                  _id: "65226c55e8b1e0472e307b4b",
                },
              ],
              _id: "65226c55e8b1e0472e307b47",
            },
            {
              content: "le",
              offset: 316,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 1348,
                  y: 791,
                  _id: "65226c55e8b1e0472e307b4d",
                },
                {
                  x: 1374,
                  y: 791,
                  _id: "65226c55e8b1e0472e307b4e",
                },
                {
                  x: 1374,
                  y: 821,
                  _id: "65226c55e8b1e0472e307b4f",
                },
                {
                  x: 1348,
                  y: 821,
                  _id: "65226c55e8b1e0472e307b50",
                },
              ],
              _id: "65226c55e8b1e0472e307b4c",
            },
            {
              content: "12/06/2023",
              offset: 319,
              length: 10,
              confidence: 0.991,
              polygon: [
                {
                  x: 1380,
                  y: 791,
                  _id: "65226c55e8b1e0472e307b52",
                },
                {
                  x: 1518,
                  y: 790,
                  _id: "65226c55e8b1e0472e307b53",
                },
                {
                  x: 1518,
                  y: 823,
                  _id: "65226c55e8b1e0472e307b54",
                },
                {
                  x: 1380,
                  y: 821,
                  _id: "65226c55e8b1e0472e307b55",
                },
              ],
              _id: "65226c55e8b1e0472e307b51",
            },
            {
              content: "ORDONNANCE",
              offset: 330,
              length: 10,
              confidence: 0.994,
              polygon: [
                {
                  x: 647,
                  y: 884,
                  _id: "65226c55e8b1e0472e307b57",
                },
                {
                  x: 917,
                  y: 884,
                  _id: "65226c55e8b1e0472e307b58",
                },
                {
                  x: 917,
                  y: 922,
                  _id: "65226c55e8b1e0472e307b59",
                },
                {
                  x: 646,
                  y: 923,
                  _id: "65226c55e8b1e0472e307b5a",
                },
              ],
              _id: "65226c55e8b1e0472e307b56",
            },
            {
              content: "Sexe",
              offset: 341,
              length: 4,
              confidence: 0.991,
              polygon: [
                {
                  x: 56,
                  y: 974,
                  _id: "65226c55e8b1e0472e307b5c",
                },
                {
                  x: 117,
                  y: 972,
                  _id: "65226c55e8b1e0472e307b5d",
                },
                {
                  x: 118,
                  y: 1006,
                  _id: "65226c55e8b1e0472e307b5e",
                },
                {
                  x: 56,
                  y: 1006,
                  _id: "65226c55e8b1e0472e307b5f",
                },
              ],
              _id: "65226c55e8b1e0472e307b5b",
            },
            {
              content: ":",
              offset: 346,
              length: 1,
              confidence: 0.994,
              polygon: [
                {
                  x: 124,
                  y: 972,
                  _id: "65226c55e8b1e0472e307b61",
                },
                {
                  x: 133,
                  y: 972,
                  _id: "65226c55e8b1e0472e307b62",
                },
                {
                  x: 133,
                  y: 1006,
                  _id: "65226c55e8b1e0472e307b63",
                },
                {
                  x: 124,
                  y: 1006,
                  _id: "65226c55e8b1e0472e307b64",
                },
              ],
              _id: "65226c55e8b1e0472e307b60",
            },
            {
              content: "F",
              offset: 348,
              length: 1,
              confidence: 0.992,
              polygon: [
                {
                  x: 139,
                  y: 972,
                  _id: "65226c55e8b1e0472e307b66",
                },
                {
                  x: 159,
                  y: 971,
                  _id: "65226c55e8b1e0472e307b67",
                },
                {
                  x: 159,
                  y: 1006,
                  _id: "65226c55e8b1e0472e307b68",
                },
                {
                  x: 140,
                  y: 1006,
                  _id: "65226c55e8b1e0472e307b69",
                },
              ],
              _id: "65226c55e8b1e0472e307b65",
            },
            {
              content: "prise",
              offset: 350,
              length: 5,
              confidence: 0.994,
              polygon: [
                {
                  x: 55,
                  y: 1039,
                  _id: "65226c55e8b1e0472e307b6b",
                },
                {
                  x: 125,
                  y: 1040,
                  _id: "65226c55e8b1e0472e307b6c",
                },
                {
                  x: 125,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b6d",
                },
                {
                  x: 56,
                  y: 1077,
                  _id: "65226c55e8b1e0472e307b6e",
                },
              ],
              _id: "65226c55e8b1e0472e307b6a",
            },
            {
              content: "de",
              offset: 356,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 132,
                  y: 1040,
                  _id: "65226c55e8b1e0472e307b70",
                },
                {
                  x: 171,
                  y: 1040,
                  _id: "65226c55e8b1e0472e307b71",
                },
                {
                  x: 170,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b72",
                },
                {
                  x: 132,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b73",
                },
              ],
              _id: "65226c55e8b1e0472e307b6f",
            },
            {
              content: "sang",
              offset: 359,
              length: 4,
              confidence: 0.991,
              polygon: [
                {
                  x: 178,
                  y: 1040,
                  _id: "65226c55e8b1e0472e307b75",
                },
                {
                  x: 255,
                  y: 1042,
                  _id: "65226c55e8b1e0472e307b76",
                },
                {
                  x: 254,
                  y: 1077,
                  _id: "65226c55e8b1e0472e307b77",
                },
                {
                  x: 178,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b78",
                },
              ],
              _id: "65226c55e8b1e0472e307b74",
            },
            {
              content: "maintenant",
              offset: 364,
              length: 10,
              confidence: 0.992,
              polygon: [
                {
                  x: 54,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b7a",
                },
                {
                  x: 216,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b7b",
                },
                {
                  x: 216,
                  y: 1113,
                  _id: "65226c55e8b1e0472e307b7c",
                },
                {
                  x: 55,
                  y: 1112,
                  _id: "65226c55e8b1e0472e307b7d",
                },
              ],
              _id: "65226c55e8b1e0472e307b79",
            },
            {
              content: "et",
              offset: 375,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 223,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b7f",
                },
                {
                  x: 253,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b80",
                },
                {
                  x: 253,
                  y: 1113,
                  _id: "65226c55e8b1e0472e307b81",
                },
                {
                  x: 223,
                  y: 1113,
                  _id: "65226c55e8b1e0472e307b82",
                },
              ],
              _id: "65226c55e8b1e0472e307b7e",
            },
            {
              content: "dans",
              offset: 378,
              length: 4,
              confidence: 0.991,
              polygon: [
                {
                  x: 260,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b84",
                },
                {
                  x: 334,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b85",
                },
                {
                  x: 333,
                  y: 1114,
                  _id: "65226c55e8b1e0472e307b86",
                },
                {
                  x: 260,
                  y: 1113,
                  _id: "65226c55e8b1e0472e307b87",
                },
              ],
              _id: "65226c55e8b1e0472e307b83",
            },
            {
              content: "3",
              offset: 383,
              length: 1,
              confidence: 0.997,
              polygon: [
                {
                  x: 341,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b89",
                },
                {
                  x: 359,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b8a",
                },
                {
                  x: 359,
                  y: 1114,
                  _id: "65226c55e8b1e0472e307b8b",
                },
                {
                  x: 340,
                  y: 1114,
                  _id: "65226c55e8b1e0472e307b8c",
                },
              ],
              _id: "65226c55e8b1e0472e307b88",
            },
            {
              content: "mois",
              offset: 385,
              length: 4,
              confidence: 0.989,
              polygon: [
                {
                  x: 366,
                  y: 1078,
                  _id: "65226c55e8b1e0472e307b8e",
                },
                {
                  x: 439,
                  y: 1077,
                  _id: "65226c55e8b1e0472e307b8f",
                },
                {
                  x: 438,
                  y: 1115,
                  _id: "65226c55e8b1e0472e307b90",
                },
                {
                  x: 366,
                  y: 1114,
                  _id: "65226c55e8b1e0472e307b91",
                },
              ],
              _id: "65226c55e8b1e0472e307b8d",
            },
            {
              content: "Age",
              offset: 390,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 424,
                  y: 978,
                  _id: "65226c55e8b1e0472e307b93",
                },
                {
                  x: 472,
                  y: 978,
                  _id: "65226c55e8b1e0472e307b94",
                },
                {
                  x: 472,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307b95",
                },
                {
                  x: 424,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307b96",
                },
              ],
              _id: "65226c55e8b1e0472e307b92",
            },
            {
              content: ":",
              offset: 394,
              length: 1,
              confidence: 0.994,
              polygon: [
                {
                  x: 478,
                  y: 978,
                  _id: "65226c55e8b1e0472e307b98",
                },
                {
                  x: 488,
                  y: 978,
                  _id: "65226c55e8b1e0472e307b99",
                },
                {
                  x: 488,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307b9a",
                },
                {
                  x: 478,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307b9b",
                },
              ],
              _id: "65226c55e8b1e0472e307b97",
            },
            {
              content: "76",
              offset: 396,
              length: 2,
              confidence: 0.996,
              polygon: [
                {
                  x: 495,
                  y: 978,
                  _id: "65226c55e8b1e0472e307b9d",
                },
                {
                  x: 525,
                  y: 978,
                  _id: "65226c55e8b1e0472e307b9e",
                },
                {
                  x: 525,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307b9f",
                },
                {
                  x: 494,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307ba0",
                },
              ],
              _id: "65226c55e8b1e0472e307b9c",
            },
            {
              content: "ans",
              offset: 399,
              length: 3,
              confidence: 0.998,
              polygon: [
                {
                  x: 531,
                  y: 978,
                  _id: "65226c55e8b1e0472e307ba2",
                },
                {
                  x: 579,
                  y: 979,
                  _id: "65226c55e8b1e0472e307ba3",
                },
                {
                  x: 579,
                  y: 1010,
                  _id: "65226c55e8b1e0472e307ba4",
                },
                {
                  x: 531,
                  y: 1009,
                  _id: "65226c55e8b1e0472e307ba5",
                },
              ],
              _id: "65226c55e8b1e0472e307ba1",
            },
            {
              content: "NFS",
              offset: 403,
              length: 3,
              confidence: 0.991,
              polygon: [
                {
                  x: 54,
                  y: 1150,
                  _id: "65226c55e8b1e0472e307ba7",
                },
                {
                  x: 118,
                  y: 1151,
                  _id: "65226c55e8b1e0472e307ba8",
                },
                {
                  x: 118,
                  y: 1187,
                  _id: "65226c55e8b1e0472e307ba9",
                },
                {
                  x: 54,
                  y: 1187,
                  _id: "65226c55e8b1e0472e307baa",
                },
              ],
              _id: "65226c55e8b1e0472e307ba6",
            },
            {
              content: "Plaquettes",
              offset: 407,
              length: 10,
              confidence: 0.993,
              polygon: [
                {
                  x: 126,
                  y: 1152,
                  _id: "65226c55e8b1e0472e307bac",
                },
                {
                  x: 285,
                  y: 1153,
                  _id: "65226c55e8b1e0472e307bad",
                },
                {
                  x: 285,
                  y: 1188,
                  _id: "65226c55e8b1e0472e307bae",
                },
                {
                  x: 126,
                  y: 1187,
                  _id: "65226c55e8b1e0472e307baf",
                },
              ],
              _id: "65226c55e8b1e0472e307bab",
            },
            {
              content: "TP",
              offset: 418,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 59,
                  y: 1186,
                  _id: "65226c55e8b1e0472e307bb1",
                },
                {
                  x: 93,
                  y: 1187,
                  _id: "65226c55e8b1e0472e307bb2",
                },
                {
                  x: 92,
                  y: 1220,
                  _id: "65226c55e8b1e0472e307bb3",
                },
                {
                  x: 58,
                  y: 1218,
                  _id: "65226c55e8b1e0472e307bb4",
                },
              ],
              _id: "65226c55e8b1e0472e307bb0",
            },
            {
              content: "Créatinémie",
              offset: 421,
              length: 11,
              confidence: 0.992,
              polygon: [
                {
                  x: 56,
                  y: 1226,
                  _id: "65226c55e8b1e0472e307bb6",
                },
                {
                  x: 233,
                  y: 1226,
                  _id: "65226c55e8b1e0472e307bb7",
                },
                {
                  x: 233,
                  y: 1259,
                  _id: "65226c55e8b1e0472e307bb8",
                },
                {
                  x: 56,
                  y: 1259,
                  _id: "65226c55e8b1e0472e307bb9",
                },
              ],
              _id: "65226c55e8b1e0472e307bb5",
            },
            {
              content: "ASAT,",
              offset: 433,
              length: 5,
              confidence: 0.994,
              polygon: [
                {
                  x: 57,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bbb",
                },
                {
                  x: 148,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bbc",
                },
                {
                  x: 148,
                  y: 1300,
                  _id: "65226c55e8b1e0472e307bbd",
                },
                {
                  x: 56,
                  y: 1299,
                  _id: "65226c55e8b1e0472e307bbe",
                },
              ],
              _id: "65226c55e8b1e0472e307bba",
            },
            {
              content: "ALAT,",
              offset: 439,
              length: 5,
              confidence: 0.993,
              polygon: [
                {
                  x: 155,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bc0",
                },
                {
                  x: 247,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bc1",
                },
                {
                  x: 247,
                  y: 1301,
                  _id: "65226c55e8b1e0472e307bc2",
                },
                {
                  x: 155,
                  y: 1300,
                  _id: "65226c55e8b1e0472e307bc3",
                },
              ],
              _id: "65226c55e8b1e0472e307bbf",
            },
            {
              content: "PAL,",
              offset: 445,
              length: 4,
              confidence: 0.991,
              polygon: [
                {
                  x: 255,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bc5",
                },
                {
                  x: 327,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bc6",
                },
                {
                  x: 327,
                  y: 1302,
                  _id: "65226c55e8b1e0472e307bc7",
                },
                {
                  x: 254,
                  y: 1301,
                  _id: "65226c55e8b1e0472e307bc8",
                },
              ],
              _id: "65226c55e8b1e0472e307bc4",
            },
            {
              content: "GGT,",
              offset: 450,
              length: 4,
              confidence: 0.978,
              polygon: [
                {
                  x: 334,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bca",
                },
                {
                  x: 416,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bcb",
                },
                {
                  x: 416,
                  y: 1302,
                  _id: "65226c55e8b1e0472e307bcc",
                },
                {
                  x: 334,
                  y: 1302,
                  _id: "65226c55e8b1e0472e307bcd",
                },
              ],
              _id: "65226c55e8b1e0472e307bc9",
            },
            {
              content: "Bilirubine",
              offset: 455,
              length: 10,
              confidence: 0.994,
              polygon: [
                {
                  x: 424,
                  y: 1263,
                  _id: "65226c55e8b1e0472e307bcf",
                },
                {
                  x: 558,
                  y: 1264,
                  _id: "65226c55e8b1e0472e307bd0",
                },
                {
                  x: 558,
                  y: 1303,
                  _id: "65226c55e8b1e0472e307bd1",
                },
                {
                  x: 423,
                  y: 1302,
                  _id: "65226c55e8b1e0472e307bd2",
                },
              ],
              _id: "65226c55e8b1e0472e307bce",
            },
            {
              content: "totale",
              offset: 466,
              length: 6,
              confidence: 0.997,
              polygon: [
                {
                  x: 565,
                  y: 1264,
                  _id: "65226c56e8b1e0472e307bd4",
                },
                {
                  x: 651,
                  y: 1265,
                  _id: "65226c56e8b1e0472e307bd5",
                },
                {
                  x: 651,
                  y: 1303,
                  _id: "65226c56e8b1e0472e307bd6",
                },
                {
                  x: 565,
                  y: 1303,
                  _id: "65226c56e8b1e0472e307bd7",
                },
              ],
              _id: "65226c55e8b1e0472e307bd3",
            },
            {
              content: "TSH",
              offset: 473,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 58,
                  y: 1338,
                  _id: "65226c56e8b1e0472e307bd9",
                },
                {
                  x: 116,
                  y: 1338,
                  _id: "65226c56e8b1e0472e307bda",
                },
                {
                  x: 117,
                  y: 1371,
                  _id: "65226c56e8b1e0472e307bdb",
                },
                {
                  x: 58,
                  y: 1371,
                  _id: "65226c56e8b1e0472e307bdc",
                },
              ],
              _id: "65226c56e8b1e0472e307bd8",
            },
            {
              content: "Electrophorèse",
              offset: 477,
              length: 14,
              confidence: 0.966,
              polygon: [
                {
                  x: 57,
                  y: 1413,
                  _id: "65226c56e8b1e0472e307bde",
                },
                {
                  x: 272,
                  y: 1414,
                  _id: "65226c56e8b1e0472e307bdf",
                },
                {
                  x: 273,
                  y: 1453,
                  _id: "65226c56e8b1e0472e307be0",
                },
                {
                  x: 58,
                  y: 1450,
                  _id: "65226c56e8b1e0472e307be1",
                },
              ],
              _id: "65226c56e8b1e0472e307bdd",
            },
            {
              content: "des",
              offset: 492,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 280,
                  y: 1414,
                  _id: "65226c56e8b1e0472e307be3",
                },
                {
                  x: 334,
                  y: 1415,
                  _id: "65226c56e8b1e0472e307be4",
                },
                {
                  x: 335,
                  y: 1453,
                  _id: "65226c56e8b1e0472e307be5",
                },
                {
                  x: 280,
                  y: 1453,
                  _id: "65226c56e8b1e0472e307be6",
                },
              ],
              _id: "65226c56e8b1e0472e307be2",
            },
            {
              content: "protéines",
              offset: 496,
              length: 9,
              confidence: 0.991,
              polygon: [
                {
                  x: 342,
                  y: 1415,
                  _id: "65226c56e8b1e0472e307be8",
                },
                {
                  x: 476,
                  y: 1416,
                  _id: "65226c56e8b1e0472e307be9",
                },
                {
                  x: 476,
                  y: 1454,
                  _id: "65226c56e8b1e0472e307bea",
                },
                {
                  x: 342,
                  y: 1453,
                  _id: "65226c56e8b1e0472e307beb",
                },
              ],
              _id: "65226c56e8b1e0472e307be7",
            },
            {
              content: "plasmatiques",
              offset: 506,
              length: 12,
              confidence: 0.991,
              polygon: [
                {
                  x: 483,
                  y: 1416,
                  _id: "65226c56e8b1e0472e307bed",
                },
                {
                  x: 681,
                  y: 1418,
                  _id: "65226c56e8b1e0472e307bee",
                },
                {
                  x: 681,
                  y: 1454,
                  _id: "65226c56e8b1e0472e307bef",
                },
                {
                  x: 483,
                  y: 1454,
                  _id: "65226c56e8b1e0472e307bf0",
                },
              ],
              _id: "65226c56e8b1e0472e307bec",
            },
            {
              content: "IgM,",
              offset: 519,
              length: 4,
              confidence: 0.674,
              polygon: [
                {
                  x: 56,
                  y: 1452,
                  _id: "65226c56e8b1e0472e307bf2",
                },
                {
                  x: 119,
                  y: 1452,
                  _id: "65226c56e8b1e0472e307bf3",
                },
                {
                  x: 118,
                  y: 1490,
                  _id: "65226c56e8b1e0472e307bf4",
                },
                {
                  x: 56,
                  y: 1490,
                  _id: "65226c56e8b1e0472e307bf5",
                },
              ],
              _id: "65226c56e8b1e0472e307bf1",
            },
            {
              content: "IgG",
              offset: 524,
              length: 3,
              confidence: 0.812,
              polygon: [
                {
                  x: 126,
                  y: 1452,
                  _id: "65226c56e8b1e0472e307bf7",
                },
                {
                  x: 179,
                  y: 1451,
                  _id: "65226c56e8b1e0472e307bf8",
                },
                {
                  x: 178,
                  y: 1491,
                  _id: "65226c56e8b1e0472e307bf9",
                },
                {
                  x: 126,
                  y: 1490,
                  _id: "65226c56e8b1e0472e307bfa",
                },
              ],
              _id: "65226c56e8b1e0472e307bf6",
            },
            {
              content: "1)14/06/23",
              offset: 528,
              length: 10,
              confidence: 0.578,
              polygon: [
                {
                  x: 57,
                  y: 1772,
                  _id: "65226c56e8b1e0472e307bfc",
                },
                {
                  x: 338,
                  y: 1753,
                  _id: "65226c56e8b1e0472e307bfd",
                },
                {
                  x: 344,
                  y: 1823,
                  _id: "65226c56e8b1e0472e307bfe",
                },
                {
                  x: 63,
                  y: 1843,
                  _id: "65226c56e8b1e0472e307bff",
                },
              ],
              _id: "65226c56e8b1e0472e307bfb",
            },
            {
              content: "Poids",
              offset: 539,
              length: 5,
              confidence: 0.993,
              polygon: [
                {
                  x: 792,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c01",
                },
                {
                  x: 859,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c02",
                },
                {
                  x: 859,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c03",
                },
                {
                  x: 792,
                  y: 1012,
                  _id: "65226c56e8b1e0472e307c04",
                },
              ],
              _id: "65226c56e8b1e0472e307c00",
            },
            {
              content: ":",
              offset: 545,
              length: 1,
              confidence: 0.941,
              polygon: [
                {
                  x: 866,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c06",
                },
                {
                  x: 882,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c07",
                },
                {
                  x: 882,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c08",
                },
                {
                  x: 866,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c09",
                },
              ],
              _id: "65226c56e8b1e0472e307c05",
            },
            {
              content: "kg",
              offset: 547,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 889,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c0b",
                },
                {
                  x: 926,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c0c",
                },
                {
                  x: 926,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c0d",
                },
                {
                  x: 889,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c0e",
                },
              ],
              _id: "65226c56e8b1e0472e307c0a",
            },
            {
              content: "Taille",
              offset: 550,
              length: 6,
              confidence: 0.995,
              polygon: [
                {
                  x: 1162,
                  y: 979,
                  _id: "65226c56e8b1e0472e307c10",
                },
                {
                  x: 1225,
                  y: 979,
                  _id: "65226c56e8b1e0472e307c11",
                },
                {
                  x: 1225,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c12",
                },
                {
                  x: 1161,
                  y: 1013,
                  _id: "65226c56e8b1e0472e307c13",
                },
              ],
              _id: "65226c56e8b1e0472e307c0f",
            },
            {
              content: ":",
              offset: 557,
              length: 1,
              confidence: 0.994,
              polygon: [
                {
                  x: 1232,
                  y: 979,
                  _id: "65226c56e8b1e0472e307c15",
                },
                {
                  x: 1248,
                  y: 979,
                  _id: "65226c56e8b1e0472e307c16",
                },
                {
                  x: 1248,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c17",
                },
                {
                  x: 1232,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c18",
                },
              ],
              _id: "65226c56e8b1e0472e307c14",
            },
            {
              content: "cm",
              offset: 559,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 1255,
                  y: 979,
                  _id: "65226c56e8b1e0472e307c1a",
                },
                {
                  x: 1291,
                  y: 978,
                  _id: "65226c56e8b1e0472e307c1b",
                },
                {
                  x: 1292,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c1c",
                },
                {
                  x: 1255,
                  y: 1014,
                  _id: "65226c56e8b1e0472e307c1d",
                },
              ],
              _id: "65226c56e8b1e0472e307c19",
            },
            {
              content: "Dr",
              offset: 562,
              length: 2,
              confidence: 0.781,
              polygon: [
                {
                  x: 803,
                  y: 1626,
                  _id: "65226c56e8b1e0472e307c1f",
                },
                {
                  x: 830,
                  y: 1626,
                  _id: "65226c56e8b1e0472e307c20",
                },
                {
                  x: 829,
                  y: 1655,
                  _id: "65226c56e8b1e0472e307c21",
                },
                {
                  x: 802,
                  y: 1655,
                  _id: "65226c56e8b1e0472e307c22",
                },
              ],
              _id: "65226c56e8b1e0472e307c1e",
            },
            {
              content: "HEURGUE,",
              offset: 565,
              length: 8,
              confidence: 0.994,
              polygon: [
                {
                  x: 836,
                  y: 1626,
                  _id: "65226c56e8b1e0472e307c24",
                },
                {
                  x: 967,
                  y: 1626,
                  _id: "65226c56e8b1e0472e307c25",
                },
                {
                  x: 967,
                  y: 1656,
                  _id: "65226c56e8b1e0472e307c26",
                },
                {
                  x: 835,
                  y: 1655,
                  _id: "65226c56e8b1e0472e307c27",
                },
              ],
              _id: "65226c56e8b1e0472e307c23",
            },
            {
              content: "Alexandra",
              offset: 574,
              length: 9,
              confidence: 0.994,
              polygon: [
                {
                  x: 973,
                  y: 1626,
                  _id: "65226c56e8b1e0472e307c29",
                },
                {
                  x: 1098,
                  y: 1628,
                  _id: "65226c56e8b1e0472e307c2a",
                },
                {
                  x: 1099,
                  y: 1659,
                  _id: "65226c56e8b1e0472e307c2b",
                },
                {
                  x: 973,
                  y: 1656,
                  _id: "65226c56e8b1e0472e307c2c",
                },
              ],
              _id: "65226c56e8b1e0472e307c28",
            },
            {
              content: "Dogteur",
              offset: 584,
              length: 7,
              confidence: 0.665,
              polygon: [
                {
                  x: 805,
                  y: 1648,
                  _id: "65226c56e8b1e0472e307c2e",
                },
                {
                  x: 887,
                  y: 1654,
                  _id: "65226c56e8b1e0472e307c2f",
                },
                {
                  x: 886,
                  y: 1677,
                  _id: "65226c56e8b1e0472e307c30",
                },
                {
                  x: 804,
                  y: 1669,
                  _id: "65226c56e8b1e0472e307c31",
                },
              ],
              _id: "65226c56e8b1e0472e307c2d",
            },
            {
              content: "Alexandra",
              offset: 592,
              length: 9,
              confidence: 0.965,
              polygon: [
                {
                  x: 892,
                  y: 1654,
                  _id: "65226c56e8b1e0472e307c33",
                },
                {
                  x: 999,
                  y: 1660,
                  _id: "65226c56e8b1e0472e307c34",
                },
                {
                  x: 998,
                  y: 1686,
                  _id: "65226c56e8b1e0472e307c35",
                },
                {
                  x: 891,
                  y: 1677,
                  _id: "65226c56e8b1e0472e307c36",
                },
              ],
              _id: "65226c56e8b1e0472e307c32",
            },
            {
              content: "MEURGUY",
              offset: 602,
              length: 7,
              confidence: 0.612,
              polygon: [
                {
                  x: 1004,
                  y: 1661,
                  _id: "65226c56e8b1e0472e307c38",
                },
                {
                  x: 1116,
                  y: 1666,
                  _id: "65226c56e8b1e0472e307c39",
                },
                {
                  x: 1114,
                  y: 1695,
                  _id: "65226c56e8b1e0472e307c3a",
                },
                {
                  x: 1003,
                  y: 1687,
                  _id: "65226c56e8b1e0472e307c3b",
                },
              ],
              _id: "65226c56e8b1e0472e307c37",
            },
            {
              content: "P",
              offset: 610,
              length: 1,
              confidence: 0.96,
              polygon: [
                {
                  x: 862,
                  y: 1678,
                  _id: "65226c56e8b1e0472e307c3d",
                },
                {
                  x: 876,
                  y: 1678,
                  _id: "65226c56e8b1e0472e307c3e",
                },
                {
                  x: 876,
                  y: 1699,
                  _id: "65226c56e8b1e0472e307c3f",
                },
                {
                  x: 862,
                  y: 1699,
                  _id: "65226c56e8b1e0472e307c40",
                },
              ],
              _id: "65226c56e8b1e0472e307c3c",
            },
            {
              content: "Service",
              offset: 612,
              length: 7,
              confidence: 0.543,
              polygon: [
                {
                  x: 698,
                  y: 1692,
                  _id: "65226c56e8b1e0472e307c42",
                },
                {
                  x: 772,
                  y: 1696,
                  _id: "65226c56e8b1e0472e307c43",
                },
                {
                  x: 771,
                  y: 1723,
                  _id: "65226c56e8b1e0472e307c44",
                },
                {
                  x: 697,
                  y: 1717,
                  _id: "65226c56e8b1e0472e307c45",
                },
              ],
              _id: "65226c56e8b1e0472e307c41",
            },
            {
              content: "et",
              offset: 620,
              length: 2,
              confidence: 0.026,
              polygon: [
                {
                  x: 777,
                  y: 1696,
                  _id: "65226c56e8b1e0472e307c47",
                },
                {
                  x: 796,
                  y: 1696,
                  _id: "65226c56e8b1e0472e307c48",
                },
                {
                  x: 796,
                  y: 1724,
                  _id: "65226c56e8b1e0472e307c49",
                },
                {
                  x: 776,
                  y: 1723,
                  _id: "65226c56e8b1e0472e307c4a",
                },
              ],
              _id: "65226c56e8b1e0472e307c46",
            },
            {
              content: "Signature",
              offset: 623,
              length: 9,
              confidence: 0.934,
              polygon: [
                {
                  x: 802,
                  y: 1697,
                  _id: "65226c56e8b1e0472e307c4c",
                },
                {
                  x: 919,
                  y: 1696,
                  _id: "65226c56e8b1e0472e307c4d",
                },
                {
                  x: 919,
                  y: 1722,
                  _id: "65226c56e8b1e0472e307c4e",
                },
                {
                  x: 801,
                  y: 1724,
                  _id: "65226c56e8b1e0472e307c4f",
                },
              ],
              _id: "65226c56e8b1e0472e307c4b",
            },
            {
              content: "Hopital",
              offset: 633,
              length: 7,
              confidence: 0.837,
              polygon: [
                {
                  x: 724,
                  y: 1753,
                  _id: "65226c56e8b1e0472e307c51",
                },
                {
                  x: 797,
                  y: 1757,
                  _id: "65226c56e8b1e0472e307c52",
                },
                {
                  x: 796,
                  y: 1781,
                  _id: "65226c56e8b1e0472e307c53",
                },
                {
                  x: 724,
                  y: 1776,
                  _id: "65226c56e8b1e0472e307c54",
                },
              ],
              _id: "65226c56e8b1e0472e307c50",
            },
            {
              content: "Robert",
              offset: 641,
              length: 6,
              confidence: 1,
              polygon: [
                {
                  x: 804,
                  y: 1758,
                  _id: "65226c56e8b1e0472e307c56",
                },
                {
                  x: 872,
                  y: 1763,
                  _id: "65226c56e8b1e0472e307c57",
                },
                {
                  x: 871,
                  y: 1787,
                  _id: "65226c56e8b1e0472e307c58",
                },
                {
                  x: 803,
                  y: 1782,
                  _id: "65226c56e8b1e0472e307c59",
                },
              ],
              _id: "65226c56e8b1e0472e307c55",
            },
            {
              content: "D:",
              offset: 648,
              length: 2,
              confidence: 0.46,
              polygon: [
                {
                  x: 876,
                  y: 1763,
                  _id: "65226c56e8b1e0472e307c5b",
                },
                {
                  x: 923,
                  y: 1767,
                  _id: "65226c56e8b1e0472e307c5c",
                },
                {
                  x: 922,
                  y: 1791,
                  _id: "65226c56e8b1e0472e307c5d",
                },
                {
                  x: 876,
                  y: 1787,
                  _id: "65226c56e8b1e0472e307c5e",
                },
              ],
              _id: "65226c56e8b1e0472e307c5a",
            },
            {
              content: "51092",
              offset: 651,
              length: 5,
              confidence: 0.483,
              polygon: [
                {
                  x: 952,
                  y: 1769,
                  _id: "65226c56e8b1e0472e307c60",
                },
                {
                  x: 1014,
                  y: 1774,
                  _id: "65226c56e8b1e0472e307c61",
                },
                {
                  x: 1013,
                  y: 1798,
                  _id: "65226c56e8b1e0472e307c62",
                },
                {
                  x: 951,
                  y: 1793,
                  _id: "65226c56e8b1e0472e307c63",
                },
              ],
              _id: "65226c56e8b1e0472e307c5f",
            },
            {
              content: "FSMIS",
              offset: 657,
              length: 5,
              confidence: 0.15,
              polygon: [
                {
                  x: 1019,
                  y: 1774,
                  _id: "65226c56e8b1e0472e307c65",
                },
                {
                  x: 1094,
                  y: 1780,
                  _id: "65226c56e8b1e0472e307c66",
                },
                {
                  x: 1093,
                  y: 1805,
                  _id: "65226c56e8b1e0472e307c67",
                },
                {
                  x: 1017,
                  y: 1798,
                  _id: "65226c56e8b1e0472e307c68",
                },
              ],
              _id: "65226c56e8b1e0472e307c64",
            },
            {
              content: "CEDEX",
              offset: 663,
              length: 5,
              confidence: 0.247,
              polygon: [
                {
                  x: 1101,
                  y: 1781,
                  _id: "65226c56e8b1e0472e307c6a",
                },
                {
                  x: 1176,
                  y: 1787,
                  _id: "65226c56e8b1e0472e307c6b",
                },
                {
                  x: 1175,
                  y: 1812,
                  _id: "65226c56e8b1e0472e307c6c",
                },
                {
                  x: 1099,
                  y: 1806,
                  _id: "65226c56e8b1e0472e307c6d",
                },
              ],
              _id: "65226c56e8b1e0472e307c69",
            },
            {
              content: "Tel",
              offset: 669,
              length: 3,
              confidence: 0.004,
              polygon: [
                {
                  x: 749,
                  y: 1783,
                  _id: "65226c56e8b1e0472e307c6f",
                },
                {
                  x: 784,
                  y: 1785,
                  _id: "65226c56e8b1e0472e307c70",
                },
                {
                  x: 782,
                  y: 1811,
                  _id: "65226c56e8b1e0472e307c71",
                },
                {
                  x: 748,
                  y: 1809,
                  _id: "65226c56e8b1e0472e307c72",
                },
              ],
              _id: "65226c56e8b1e0472e307c6e",
            },
            {
              content: "073076",
              offset: 673,
              length: 6,
              confidence: 0.301,
              polygon: [
                {
                  x: 789,
                  y: 1785,
                  _id: "65226c56e8b1e0472e307c74",
                },
                {
                  x: 876,
                  y: 1791,
                  _id: "65226c56e8b1e0472e307c75",
                },
                {
                  x: 874,
                  y: 1816,
                  _id: "65226c56e8b1e0472e307c76",
                },
                {
                  x: 787,
                  y: 1811,
                  _id: "65226c56e8b1e0472e307c77",
                },
              ],
              _id: "65226c56e8b1e0472e307c73",
            },
            {
              content: "7170",
              offset: 680,
              length: 4,
              confidence: 0.908,
              polygon: [
                {
                  x: 881,
                  y: 1792,
                  _id: "65226c56e8b1e0472e307c79",
                },
                {
                  x: 936,
                  y: 1796,
                  _id: "65226c56e8b1e0472e307c7a",
                },
                {
                  x: 934,
                  y: 1820,
                  _id: "65226c56e8b1e0472e307c7b",
                },
                {
                  x: 880,
                  y: 1816,
                  _id: "65226c56e8b1e0472e307c7c",
                },
              ],
              _id: "65226c56e8b1e0472e307c78",
            },
            {
              content: "-",
              offset: 685,
              length: 1,
              confidence: 0.709,
              polygon: [
                {
                  x: 941,
                  y: 1796,
                  _id: "65226c56e8b1e0472e307c7e",
                },
                {
                  x: 949,
                  y: 1797,
                  _id: "65226c56e8b1e0472e307c7f",
                },
                {
                  x: 947,
                  y: 1821,
                  _id: "65226c56e8b1e0472e307c80",
                },
                {
                  x: 939,
                  y: 1821,
                  _id: "65226c56e8b1e0472e307c81",
                },
              ],
              _id: "65226c56e8b1e0472e307c7d",
            },
            {
              content: "Fax",
              offset: 687,
              length: 3,
              confidence: 0.868,
              polygon: [
                {
                  x: 954,
                  y: 1797,
                  _id: "65226c56e8b1e0472e307c83",
                },
                {
                  x: 995,
                  y: 1800,
                  _id: "65226c56e8b1e0472e307c84",
                },
                {
                  x: 993,
                  y: 1825,
                  _id: "65226c56e8b1e0472e307c85",
                },
                {
                  x: 952,
                  y: 1822,
                  _id: "65226c56e8b1e0472e307c86",
                },
              ],
              _id: "65226c56e8b1e0472e307c82",
            },
            {
              content: "03",
              offset: 691,
              length: 2,
              confidence: 0.957,
              polygon: [
                {
                  x: 1002,
                  y: 1801,
                  _id: "65226c56e8b1e0472e307c88",
                },
                {
                  x: 1028,
                  y: 1803,
                  _id: "65226c56e8b1e0472e307c89",
                },
                {
                  x: 1026,
                  y: 1828,
                  _id: "65226c56e8b1e0472e307c8a",
                },
                {
                  x: 1000,
                  y: 1825,
                  _id: "65226c56e8b1e0472e307c8b",
                },
              ],
              _id: "65226c56e8b1e0472e307c87",
            },
            {
              content: "26",
              offset: 694,
              length: 2,
              confidence: 0.343,
              polygon: [
                {
                  x: 1033,
                  y: 1803,
                  _id: "65226c56e8b1e0472e307c8d",
                },
                {
                  x: 1061,
                  y: 1806,
                  _id: "65226c56e8b1e0472e307c8e",
                },
                {
                  x: 1059,
                  y: 1830,
                  _id: "65226c56e8b1e0472e307c8f",
                },
                {
                  x: 1031,
                  y: 1828,
                  _id: "65226c56e8b1e0472e307c90",
                },
              ],
              _id: "65226c56e8b1e0472e307c8c",
            },
            {
              content: "78",
              offset: 697,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 1066,
                  y: 1806,
                  _id: "65226c56e8b1e0472e307c92",
                },
                {
                  x: 1089,
                  y: 1808,
                  _id: "65226c56e8b1e0472e307c93",
                },
                {
                  x: 1087,
                  y: 1833,
                  _id: "65226c56e8b1e0472e307c94",
                },
                {
                  x: 1064,
                  y: 1831,
                  _id: "65226c56e8b1e0472e307c95",
                },
              ],
              _id: "65226c56e8b1e0472e307c91",
            },
            {
              content: "88",
              offset: 700,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 1094,
                  y: 1808,
                  _id: "65226c56e8b1e0472e307c97",
                },
                {
                  x: 1120,
                  y: 1811,
                  _id: "65226c56e8b1e0472e307c98",
                },
                {
                  x: 1119,
                  y: 1836,
                  _id: "65226c56e8b1e0472e307c99",
                },
                {
                  x: 1092,
                  y: 1834,
                  _id: "65226c56e8b1e0472e307c9a",
                },
              ],
              _id: "65226c56e8b1e0472e307c96",
            },
            {
              content: "36",
              offset: 703,
              length: 2,
              confidence: 0.996,
              polygon: [
                {
                  x: 1125,
                  y: 1811,
                  _id: "65226c56e8b1e0472e307c9c",
                },
                {
                  x: 1153,
                  y: 1813,
                  _id: "65226c56e8b1e0472e307c9d",
                },
                {
                  x: 1151,
                  y: 1839,
                  _id: "65226c56e8b1e0472e307c9e",
                },
                {
                  x: 1124,
                  y: 1837,
                  _id: "65226c56e8b1e0472e307c9f",
                },
              ],
              _id: "65226c56e8b1e0472e307c9b",
            },
            {
              content: "Nº",
              offset: 706,
              length: 2,
              confidence: 0.016,
              polygon: [
                {
                  x: 830,
                  y: 1812,
                  _id: "65226c56e8b1e0472e307ca1",
                },
                {
                  x: 857,
                  y: 1815,
                  _id: "65226c56e8b1e0472e307ca2",
                },
                {
                  x: 856,
                  y: 1842,
                  _id: "65226c56e8b1e0472e307ca3",
                },
                {
                  x: 830,
                  y: 1840,
                  _id: "65226c56e8b1e0472e307ca4",
                },
              ],
              _id: "65226c56e8b1e0472e307ca0",
            },
            {
              content: "FINESS",
              offset: 709,
              length: 6,
              confidence: 0.99,
              polygon: [
                {
                  x: 862,
                  y: 1816,
                  _id: "65226c56e8b1e0472e307ca6",
                },
                {
                  x: 942,
                  y: 1824,
                  _id: "65226c56e8b1e0472e307ca7",
                },
                {
                  x: 941,
                  y: 1849,
                  _id: "65226c56e8b1e0472e307ca8",
                },
                {
                  x: 861,
                  y: 1842,
                  _id: "65226c56e8b1e0472e307ca9",
                },
              ],
              _id: "65226c56e8b1e0472e307ca5",
            },
            {
              content: "510002447",
              offset: 716,
              length: 9,
              confidence: 0.994,
              polygon: [
                {
                  x: 948,
                  y: 1824,
                  _id: "65226c56e8b1e0472e307cab",
                },
                {
                  x: 1062,
                  y: 1832,
                  _id: "65226c56e8b1e0472e307cac",
                },
                {
                  x: 1059,
                  y: 1858,
                  _id: "65226c56e8b1e0472e307cad",
                },
                {
                  x: 946,
                  y: 1849,
                  _id: "65226c56e8b1e0472e307cae",
                },
              ],
              _id: "65226c56e8b1e0472e307caa",
            },
            {
              content: "2)",
              offset: 726,
              length: 2,
              confidence: 0.841,
              polygon: [
                {
                  x: 75,
                  y: 1830,
                  _id: "65226c56e8b1e0472e307cb0",
                },
                {
                  x: 134,
                  y: 1832,
                  _id: "65226c56e8b1e0472e307cb1",
                },
                {
                  x: 129,
                  y: 1906,
                  _id: "65226c56e8b1e0472e307cb2",
                },
                {
                  x: 72,
                  y: 1902,
                  _id: "65226c56e8b1e0472e307cb3",
                },
              ],
              _id: "65226c56e8b1e0472e307caf",
            },
            {
              content: "Médicaments",
              offset: 729,
              length: 11,
              confidence: 0.991,
              polygon: [
                {
                  x: 240,
                  y: 1875,
                  _id: "65226c56e8b1e0472e307cb5",
                },
                {
                  x: 416,
                  y: 1875,
                  _id: "65226c56e8b1e0472e307cb6",
                },
                {
                  x: 415,
                  y: 1909,
                  _id: "65226c56e8b1e0472e307cb7",
                },
                {
                  x: 240,
                  y: 1907,
                  _id: "65226c56e8b1e0472e307cb8",
                },
              ],
              _id: "65226c56e8b1e0472e307cb4",
            },
            {
              content: "substituables",
              offset: 741,
              length: 13,
              confidence: 0.937,
              polygon: [
                {
                  x: 422,
                  y: 1875,
                  _id: "65226c56e8b1e0472e307cba",
                },
                {
                  x: 598,
                  y: 1876,
                  _id: "65226c56e8b1e0472e307cbb",
                },
                {
                  x: 598,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307cbc",
                },
                {
                  x: 422,
                  y: 1909,
                  _id: "65226c56e8b1e0472e307cbd",
                },
              ],
              _id: "65226c56e8b1e0472e307cb9",
            },
            {
              content: "dans",
              offset: 755,
              length: 4,
              confidence: 0.981,
              polygon: [
                {
                  x: 605,
                  y: 1876,
                  _id: "65226c56e8b1e0472e307cbf",
                },
                {
                  x: 672,
                  y: 1876,
                  _id: "65226c56e8b1e0472e307cc0",
                },
                {
                  x: 672,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307cc1",
                },
                {
                  x: 605,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307cc2",
                },
              ],
              _id: "65226c56e8b1e0472e307cbe",
            },
            {
              content: "le",
              offset: 760,
              length: 2,
              confidence: 0.995,
              polygon: [
                {
                  x: 679,
                  y: 1876,
                  _id: "65226c56e8b1e0472e307cc4",
                },
                {
                  x: 703,
                  y: 1876,
                  _id: "65226c56e8b1e0472e307cc5",
                },
                {
                  x: 703,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307cc6",
                },
                {
                  x: 679,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307cc7",
                },
              ],
              _id: "65226c56e8b1e0472e307cc3",
            },
            {
              content: "groupe",
              offset: 763,
              length: 6,
              confidence: 0.993,
              polygon: [
                {
                  x: 710,
                  y: 1876,
                  _id: "65226c56e8b1e0472e307cc9",
                },
                {
                  x: 806,
                  y: 1877,
                  _id: "65226c56e8b1e0472e307cca",
                },
                {
                  x: 806,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307ccb",
                },
                {
                  x: 710,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307ccc",
                },
              ],
              _id: "65226c56e8b1e0472e307cc8",
            },
            {
              content: "des",
              offset: 770,
              length: 3,
              confidence: 0.993,
              polygon: [
                {
                  x: 812,
                  y: 1877,
                  _id: "65226c56e8b1e0472e307cce",
                },
                {
                  x: 861,
                  y: 1877,
                  _id: "65226c56e8b1e0472e307ccf",
                },
                {
                  x: 861,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cd0",
                },
                {
                  x: 812,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cd1",
                },
              ],
              _id: "65226c56e8b1e0472e307ccd",
            },
            {
              content: "génériques",
              offset: 774,
              length: 10,
              confidence: 0.97,
              polygon: [
                {
                  x: 868,
                  y: 1877,
                  _id: "65226c56e8b1e0472e307cd3",
                },
                {
                  x: 1017,
                  y: 1878,
                  _id: "65226c56e8b1e0472e307cd4",
                },
                {
                  x: 1017,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cd5",
                },
                {
                  x: 868,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cd6",
                },
              ],
              _id: "65226c56e8b1e0472e307cd2",
            },
            {
              content: "sauf",
              offset: 785,
              length: 4,
              confidence: 0.982,
              polygon: [
                {
                  x: 1024,
                  y: 1878,
                  _id: "65226c56e8b1e0472e307cd8",
                },
                {
                  x: 1082,
                  y: 1879,
                  _id: "65226c56e8b1e0472e307cd9",
                },
                {
                  x: 1082,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cda",
                },
                {
                  x: 1024,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cdb",
                },
              ],
              _id: "65226c56e8b1e0472e307cd7",
            },
            {
              content: "mention",
              offset: 790,
              length: 7,
              confidence: 0.994,
              polygon: [
                {
                  x: 1089,
                  y: 1879,
                  _id: "65226c56e8b1e0472e307cdd",
                },
                {
                  x: 1196,
                  y: 1880,
                  _id: "65226c56e8b1e0472e307cde",
                },
                {
                  x: 1196,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307cdf",
                },
                {
                  x: 1089,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307ce0",
                },
              ],
              _id: "65226c56e8b1e0472e307cdc",
            },
            {
              content: "contraire.",
              offset: 798,
              length: 10,
              confidence: 0.94,
              polygon: [
                {
                  x: 1202,
                  y: 1880,
                  _id: "65226c56e8b1e0472e307ce2",
                },
                {
                  x: 1328,
                  y: 1881,
                  _id: "65226c56e8b1e0472e307ce3",
                },
                {
                  x: 1328,
                  y: 1912,
                  _id: "65226c56e8b1e0472e307ce4",
                },
                {
                  x: 1202,
                  y: 1913,
                  _id: "65226c56e8b1e0472e307ce5",
                },
              ],
              _id: "65226c56e8b1e0472e307ce1",
            },
            {
              content: "Chef",
              offset: 809,
              length: 4,
              confidence: 0.985,
              polygon: [
                {
                  x: 184,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307ce7",
                },
                {
                  x: 240,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307ce8",
                },
                {
                  x: 238,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307ce9",
                },
                {
                  x: 183,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cea",
                },
              ],
              _id: "65226c56e8b1e0472e307ce6",
            },
            {
              content: "de",
              offset: 814,
              length: 2,
              confidence: 0.997,
              polygon: [
                {
                  x: 247,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307cec",
                },
                {
                  x: 274,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307ced",
                },
                {
                  x: 274,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cee",
                },
                {
                  x: 246,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cef",
                },
              ],
              _id: "65226c56e8b1e0472e307ceb",
            },
            {
              content: "service",
              offset: 817,
              length: 7,
              confidence: 0.994,
              polygon: [
                {
                  x: 281,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307cf1",
                },
                {
                  x: 368,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307cf2",
                },
                {
                  x: 367,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cf3",
                },
                {
                  x: 281,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cf4",
                },
              ],
              _id: "65226c56e8b1e0472e307cf0",
            },
            {
              content: ":",
              offset: 825,
              length: 1,
              confidence: 0.957,
              polygon: [
                {
                  x: 375,
                  y: 1949,
                  _id: "65226c56e8b1e0472e307cf6",
                },
                {
                  x: 384,
                  y: 1950,
                  _id: "65226c56e8b1e0472e307cf7",
                },
                {
                  x: 383,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cf8",
                },
                {
                  x: 374,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cf9",
                },
              ],
              _id: "65226c56e8b1e0472e307cf5",
            },
            {
              content: "Professeur",
              offset: 827,
              length: 10,
              confidence: 0.788,
              polygon: [
                {
                  x: 391,
                  y: 1950,
                  _id: "65226c56e8b1e0472e307cfb",
                },
                {
                  x: 522,
                  y: 1950,
                  _id: "65226c56e8b1e0472e307cfc",
                },
                {
                  x: 521,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cfd",
                },
                {
                  x: 390,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307cfe",
                },
              ],
              _id: "65226c56e8b1e0472e307cfa",
            },
            {
              content: "CADIOT",
              offset: 838,
              length: 6,
              confidence: 0.79,
              polygon: [
                {
                  x: 528,
                  y: 1950,
                  _id: "65226c56e8b1e0472e307d00",
                },
                {
                  x: 635,
                  y: 1951,
                  _id: "65226c56e8b1e0472e307d01",
                },
                {
                  x: 635,
                  y: 1986,
                  _id: "65226c56e8b1e0472e307d02",
                },
                {
                  x: 528,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307d03",
                },
              ],
              _id: "65226c56e8b1e0472e307cff",
            },
            {
              content: "RPPS",
              offset: 845,
              length: 4,
              confidence: 0.991,
              polygon: [
                {
                  x: 267,
                  y: 1984,
                  _id: "65226c56e8b1e0472e307d05",
                },
                {
                  x: 339,
                  y: 1983,
                  _id: "65226c56e8b1e0472e307d06",
                },
                {
                  x: 339,
                  y: 2017,
                  _id: "65226c56e8b1e0472e307d07",
                },
                {
                  x: 267,
                  y: 2017,
                  _id: "65226c56e8b1e0472e307d08",
                },
              ],
              _id: "65226c56e8b1e0472e307d04",
            },
            {
              content: ":",
              offset: 850,
              length: 1,
              confidence: 0.995,
              polygon: [
                {
                  x: 346,
                  y: 1983,
                  _id: "65226c56e8b1e0472e307d0a",
                },
                {
                  x: 360,
                  y: 1983,
                  _id: "65226c56e8b1e0472e307d0b",
                },
                {
                  x: 360,
                  y: 2017,
                  _id: "65226c56e8b1e0472e307d0c",
                },
                {
                  x: 346,
                  y: 2017,
                  _id: "65226c56e8b1e0472e307d0d",
                },
              ],
              _id: "65226c56e8b1e0472e307d09",
            },
            {
              content: "10001726214",
              offset: 852,
              length: 11,
              confidence: 0.993,
              polygon: [
                {
                  x: 367,
                  y: 1983,
                  _id: "65226c56e8b1e0472e307d0f",
                },
                {
                  x: 550,
                  y: 1983,
                  _id: "65226c56e8b1e0472e307d10",
                },
                {
                  x: 550,
                  y: 2018,
                  _id: "65226c56e8b1e0472e307d11",
                },
                {
                  x: 367,
                  y: 2017,
                  _id: "65226c56e8b1e0472e307d12",
                },
              ],
              _id: "65226c56e8b1e0472e307d0e",
            },
            {
              content: "FINESS",
              offset: 864,
              length: 6,
              confidence: 0.993,
              polygon: [
                {
                  x: 1019,
                  y: 1954,
                  _id: "65226c56e8b1e0472e307d14",
                },
                {
                  x: 1114,
                  y: 1956,
                  _id: "65226c56e8b1e0472e307d15",
                },
                {
                  x: 1114,
                  y: 1984,
                  _id: "65226c56e8b1e0472e307d16",
                },
                {
                  x: 1018,
                  y: 1985,
                  _id: "65226c56e8b1e0472e307d17",
                },
              ],
              _id: "65226c56e8b1e0472e307d13",
            },
            {
              content: ":",
              offset: 871,
              length: 1,
              confidence: 0.995,
              polygon: [
                {
                  x: 1123,
                  y: 1956,
                  _id: "65226c56e8b1e0472e307d19",
                },
                {
                  x: 1132,
                  y: 1956,
                  _id: "65226c56e8b1e0472e307d1a",
                },
                {
                  x: 1131,
                  y: 1984,
                  _id: "65226c56e8b1e0472e307d1b",
                },
                {
                  x: 1122,
                  y: 1984,
                  _id: "65226c56e8b1e0472e307d1c",
                },
              ],
              _id: "65226c56e8b1e0472e307d18",
            },
            {
              content: "510002447",
              offset: 873,
              length: 9,
              confidence: 0.994,
              polygon: [
                {
                  x: 1138,
                  y: 1956,
                  _id: "65226c56e8b1e0472e307d1e",
                },
                {
                  x: 1278,
                  y: 1957,
                  _id: "65226c56e8b1e0472e307d1f",
                },
                {
                  x: 1277,
                  y: 1987,
                  _id: "65226c56e8b1e0472e307d20",
                },
                {
                  x: 1137,
                  y: 1984,
                  _id: "65226c56e8b1e0472e307d21",
                },
              ],
              _id: "65226c56e8b1e0472e307d1d",
            },
            {
              content: "HOPITAL",
              offset: 883,
              length: 7,
              confidence: 0.993,
              polygon: [
                {
                  x: 274,
                  y: 2127,
                  _id: "65226c56e8b1e0472e307d23",
                },
                {
                  x: 383,
                  y: 2128,
                  _id: "65226c56e8b1e0472e307d24",
                },
                {
                  x: 383,
                  y: 2159,
                  _id: "65226c56e8b1e0472e307d25",
                },
                {
                  x: 274,
                  y: 2158,
                  _id: "65226c56e8b1e0472e307d26",
                },
              ],
              _id: "65226c56e8b1e0472e307d22",
            },
            {
              content: "ROBERT",
              offset: 891,
              length: 6,
              confidence: 0.995,
              polygon: [
                {
                  x: 389,
                  y: 2128,
                  _id: "65226c56e8b1e0472e307d28",
                },
                {
                  x: 488,
                  y: 2129,
                  _id: "65226c56e8b1e0472e307d29",
                },
                {
                  x: 488,
                  y: 2160,
                  _id: "65226c56e8b1e0472e307d2a",
                },
                {
                  x: 389,
                  y: 2159,
                  _id: "65226c56e8b1e0472e307d2b",
                },
              ],
              _id: "65226c56e8b1e0472e307d27",
            },
            {
              content: "DEBRE",
              offset: 898,
              length: 5,
              confidence: 0.993,
              polygon: [
                {
                  x: 494,
                  y: 2129,
                  _id: "65226c56e8b1e0472e307d2d",
                },
                {
                  x: 577,
                  y: 2129,
                  _id: "65226c56e8b1e0472e307d2e",
                },
                {
                  x: 576,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d2f",
                },
                {
                  x: 494,
                  y: 2160,
                  _id: "65226c56e8b1e0472e307d30",
                },
              ],
              _id: "65226c56e8b1e0472e307d2c",
            },
            {
              content: "-",
              offset: 904,
              length: 1,
              confidence: 0.991,
              polygon: [
                {
                  x: 583,
                  y: 2129,
                  _id: "65226c56e8b1e0472e307d32",
                },
                {
                  x: 593,
                  y: 2129,
                  _id: "65226c56e8b1e0472e307d33",
                },
                {
                  x: 593,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d34",
                },
                {
                  x: 582,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d35",
                },
              ],
              _id: "65226c56e8b1e0472e307d31",
            },
            {
              content: "CHU",
              offset: 906,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 599,
                  y: 2129,
                  _id: "65226c56e8b1e0472e307d37",
                },
                {
                  x: 651,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d38",
                },
                {
                  x: 651,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d39",
                },
                {
                  x: 599,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d3a",
                },
              ],
              _id: "65226c56e8b1e0472e307d36",
            },
            {
              content: "de",
              offset: 910,
              length: 2,
              confidence: 0.982,
              polygon: [
                {
                  x: 660,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d3c",
                },
                {
                  x: 690,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d3d",
                },
                {
                  x: 689,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d3e",
                },
                {
                  x: 659,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d3f",
                },
              ],
              _id: "65226c56e8b1e0472e307d3b",
            },
            {
              content: "REIMS",
              offset: 913,
              length: 5,
              confidence: 0.991,
              polygon: [
                {
                  x: 696,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d41",
                },
                {
                  x: 779,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d42",
                },
                {
                  x: 778,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d43",
                },
                {
                  x: 695,
                  y: 2161,
                  _id: "65226c56e8b1e0472e307d44",
                },
              ],
              _id: "65226c56e8b1e0472e307d40",
            },
            {
              content: "-",
              offset: 919,
              length: 1,
              confidence: 0.994,
              polygon: [
                {
                  x: 785,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d46",
                },
                {
                  x: 793,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d47",
                },
                {
                  x: 792,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d48",
                },
                {
                  x: 784,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d49",
                },
              ],
              _id: "65226c56e8b1e0472e307d45",
            },
            {
              content: "RUE",
              offset: 921,
              length: 3,
              confidence: 0.996,
              polygon: [
                {
                  x: 799,
                  y: 2130,
                  _id: "65226c56e8b1e0472e307d4b",
                },
                {
                  x: 849,
                  y: 2131,
                  _id: "65226c56e8b1e0472e307d4c",
                },
                {
                  x: 849,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d4d",
                },
                {
                  x: 798,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d4e",
                },
              ],
              _id: "65226c56e8b1e0472e307d4a",
            },
            {
              content: "DU",
              offset: 925,
              length: 2,
              confidence: 0.991,
              polygon: [
                {
                  x: 856,
                  y: 2131,
                  _id: "65226c56e8b1e0472e307d50",
                },
                {
                  x: 893,
                  y: 2131,
                  _id: "65226c56e8b1e0472e307d51",
                },
                {
                  x: 893,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d52",
                },
                {
                  x: 855,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d53",
                },
              ],
              _id: "65226c56e8b1e0472e307d4f",
            },
            {
              content: "GENERAL",
              offset: 928,
              length: 7,
              confidence: 0.993,
              polygon: [
                {
                  x: 902,
                  y: 2131,
                  _id: "65226c56e8b1e0472e307d55",
                },
                {
                  x: 1017,
                  y: 2132,
                  _id: "65226c56e8b1e0472e307d56",
                },
                {
                  x: 1017,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d57",
                },
                {
                  x: 901,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d58",
                },
              ],
              _id: "65226c56e8b1e0472e307d54",
            },
            {
              content: "KOENIG",
              offset: 936,
              length: 6,
              confidence: 0.98,
              polygon: [
                {
                  x: 1023,
                  y: 2132,
                  _id: "65226c56e8b1e0472e307d5a",
                },
                {
                  x: 1122,
                  y: 2132,
                  _id: "65226c56e8b1e0472e307d5b",
                },
                {
                  x: 1121,
                  y: 2163,
                  _id: "65226c56e8b1e0472e307d5c",
                },
                {
                  x: 1023,
                  y: 2162,
                  _id: "65226c56e8b1e0472e307d5d",
                },
              ],
              _id: "65226c56e8b1e0472e307d59",
            },
            {
              content: "51092",
              offset: 943,
              length: 5,
              confidence: 0.997,
              polygon: [
                {
                  x: 1128,
                  y: 2132,
                  _id: "65226c56e8b1e0472e307d5f",
                },
                {
                  x: 1205,
                  y: 2133,
                  _id: "65226c56e8b1e0472e307d60",
                },
                {
                  x: 1204,
                  y: 2163,
                  _id: "65226c56e8b1e0472e307d61",
                },
                {
                  x: 1128,
                  y: 2163,
                  _id: "65226c56e8b1e0472e307d62",
                },
              ],
              _id: "65226c56e8b1e0472e307d5e",
            },
            {
              content: "REIMS",
              offset: 949,
              length: 5,
              confidence: 0.995,
              polygon: [
                {
                  x: 1211,
                  y: 2133,
                  _id: "65226c56e8b1e0472e307d64",
                },
                {
                  x: 1293,
                  y: 2133,
                  _id: "65226c56e8b1e0472e307d65",
                },
                {
                  x: 1293,
                  y: 2163,
                  _id: "65226c56e8b1e0472e307d66",
                },
                {
                  x: 1210,
                  y: 2163,
                  _id: "65226c56e8b1e0472e307d67",
                },
              ],
              _id: "65226c56e8b1e0472e307d63",
            },
            {
              content: "Page",
              offset: 955,
              length: 4,
              confidence: 0.994,
              polygon: [
                {
                  x: 1389,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d69",
                },
                {
                  x: 1441,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d6a",
                },
                {
                  x: 1441,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d6b",
                },
                {
                  x: 1390,
                  y: 2225,
                  _id: "65226c56e8b1e0472e307d6c",
                },
              ],
              _id: "65226c56e8b1e0472e307d68",
            },
            {
              content: "1",
              offset: 960,
              length: 1,
              confidence: 0.996,
              polygon: [
                {
                  x: 1446,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d6e",
                },
                {
                  x: 1458,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d6f",
                },
                {
                  x: 1458,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d70",
                },
                {
                  x: 1446,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d71",
                },
              ],
              _id: "65226c56e8b1e0472e307d6d",
            },
            {
              content: "sur",
              offset: 962,
              length: 3,
              confidence: 0.997,
              polygon: [
                {
                  x: 1463,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d73",
                },
                {
                  x: 1496,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d74",
                },
                {
                  x: 1496,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d75",
                },
                {
                  x: 1463,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d76",
                },
              ],
              _id: "65226c56e8b1e0472e307d72",
            },
            {
              content: "1",
              offset: 966,
              length: 1,
              confidence: 0.998,
              polygon: [
                {
                  x: 1501,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d78",
                },
                {
                  x: 1516,
                  y: 2200,
                  _id: "65226c56e8b1e0472e307d79",
                },
                {
                  x: 1516,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d7a",
                },
                {
                  x: 1501,
                  y: 2226,
                  _id: "65226c56e8b1e0472e307d7b",
                },
              ],
              _id: "65226c56e8b1e0472e307d77",
            },
          ],
          styles: [
            {
              isHandwritten: true,
              offset: 528,
              length: 10,
              confidence: 1,
              _id: "65226c56e8b1e0472e307d7c",
            },
            {
              isHandwritten: true,
              offset: 726,
              length: 2,
              confidence: 1,
              _id: "65226c56e8b1e0472e307d7d",
            },
          ],
          ner: [
            {
              content: "10001756922",
              category: "RPPS",
              offset: 177,
              length: 11,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d7e",
            },
            {
              content: "12/06/2023",
              category: "date",
              offset: 319,
              length: 10,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d7f",
            },
            {
              content: "prise de sang",
              category: "examinationType",
              offset: 350,
              length: 13,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d80",
            },
            {
              content: "dans 3 mois",
              category: "time",
              offset: 378,
              length: 11,
              confidence: 0.98,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d81",
            },
            {
              content: "NFS",
              category: "examinationName",
              offset: 403,
              length: 3,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d82",
            },
            {
              content: "Plaquettes",
              category: "examinationName",
              offset: 407,
              length: 10,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d83",
            },
            {
              content: "TP",
              category: "examinationName",
              offset: 418,
              length: 2,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d84",
            },
            {
              content: "Créatinémie",
              category: "examinationName",
              offset: 421,
              length: 11,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d85",
            },
            {
              content: "ASAT",
              category: "examinationName",
              offset: 433,
              length: 4,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d86",
            },
            {
              content: "ALAT",
              category: "examinationName",
              offset: 439,
              length: 4,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d87",
            },
            {
              content: "PAL",
              category: "examinationName",
              offset: 445,
              length: 3,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d88",
            },
            {
              content: "GGT",
              category: "examinationName",
              offset: 450,
              length: 3,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d89",
            },
            {
              content: "Bilirubine totale",
              category: "examinationName",
              offset: 455,
              length: 17,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d8a",
            },
            {
              content: "TSH",
              category: "examinationName",
              offset: 473,
              length: 3,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d8b",
            },
            {
              content: "Electrophorèse des protéines plasmatiques",
              category: "examinationName",
              offset: 477,
              length: 41,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d8c",
            },
            {
              content: "IgM",
              category: "examinationName",
              offset: 519,
              length: 3,
              confidence: 0.99,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d8d",
            },
            {
              content: "IgG",
              category: "examinationName",
              offset: 524,
              length: 3,
              confidence: 0.98,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d8e",
            },
            {
              content: "10001726214",
              category: "RPPS",
              offset: 852,
              length: 11,
              confidence: 1,
              isHandwritten: false,
              _id: "65226c63e8b1e0472e307d8f",
            },
          ],
          acts: [
            {
              content: "NFS",
              offset: 403,
              length: 3,
              confidence: 5.91998,
              codes: ["NF"],
              isHandwritten: false,
              polygon: [
                {
                  x: 54,
                  y: 1150,
                  _id: "65226c63e8b1e0472e307d95",
                },
                {
                  x: 118,
                  y: 1150,
                  _id: "65226c63e8b1e0472e307d96",
                },
                {
                  x: 118,
                  y: 1187,
                  _id: "65226c63e8b1e0472e307d97",
                },
                {
                  x: 54,
                  y: 1187,
                  _id: "65226c63e8b1e0472e307d98",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307d94",
            },
            {
              content: "Plaquettes",
              offset: 407,
              length: 10,
              confidence: 5.91998,
              codes: ["PLAQ_68", "PLAQ", "SANG"],
              isHandwritten: false,
              polygon: [
                {
                  x: 126,
                  y: 1152,
                  _id: "65226c63e8b1e0472e307d9a",
                },
                {
                  x: 285,
                  y: 1152,
                  _id: "65226c63e8b1e0472e307d9b",
                },
                {
                  x: 285,
                  y: 1188,
                  _id: "65226c63e8b1e0472e307d9c",
                },
                {
                  x: 126,
                  y: 1188,
                  _id: "65226c63e8b1e0472e307d9d",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307d99",
            },
            {
              content: "TP",
              offset: 418,
              length: 2,
              confidence: 7.535678,
              codes: ["TP"],
              isHandwritten: false,
              polygon: [
                {
                  x: 58,
                  y: 1186,
                  _id: "65226c63e8b1e0472e307d9f",
                },
                {
                  x: 93,
                  y: 1186,
                  _id: "65226c63e8b1e0472e307da0",
                },
                {
                  x: 93,
                  y: 1220,
                  _id: "65226c63e8b1e0472e307da1",
                },
                {
                  x: 58,
                  y: 1220,
                  _id: "65226c63e8b1e0472e307da2",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307d9e",
            },
            {
              content: "ASAT",
              offset: 433,
              length: 4,
              confidence: 6.268306,
              codes: ["ASAT"],
              isHandwritten: false,
              polygon: [
                {
                  x: 56,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307da4",
                },
                {
                  x: 148,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307da5",
                },
                {
                  x: 148,
                  y: 1300,
                  _id: "65226c63e8b1e0472e307da6",
                },
                {
                  x: 56,
                  y: 1300,
                  _id: "65226c63e8b1e0472e307da7",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307da3",
            },
            {
              content: "ALAT",
              offset: 439,
              length: 4,
              confidence: 6.268306,
              codes: ["ALAT"],
              isHandwritten: false,
              polygon: [
                {
                  x: 155,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307da9",
                },
                {
                  x: 247,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307daa",
                },
                {
                  x: 247,
                  y: 1301,
                  _id: "65226c63e8b1e0472e307dab",
                },
                {
                  x: 155,
                  y: 1301,
                  _id: "65226c63e8b1e0472e307dac",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307da8",
            },
            {
              content: "PAL",
              offset: 445,
              length: 3,
              confidence: 7.535678,
              codes: ["PAL"],
              isHandwritten: false,
              polygon: [
                {
                  x: 254,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307dae",
                },
                {
                  x: 327,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307daf",
                },
                {
                  x: 327,
                  y: 1302,
                  _id: "65226c63e8b1e0472e307db0",
                },
                {
                  x: 254,
                  y: 1302,
                  _id: "65226c63e8b1e0472e307db1",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307dad",
            },
            {
              content: "GGT",
              offset: 450,
              length: 3,
              confidence: 6.749969,
              codes: ["GGT_68"],
              isHandwritten: false,
              polygon: [
                {
                  x: 334,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307db3",
                },
                {
                  x: 416,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307db4",
                },
                {
                  x: 416,
                  y: 1302,
                  _id: "65226c63e8b1e0472e307db5",
                },
                {
                  x: 334,
                  y: 1302,
                  _id: "65226c63e8b1e0472e307db6",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307db2",
            },
            {
              content: "Bilirubine totale",
              offset: 455,
              length: 17,
              confidence: 7.7530465,
              codes: ["BT_68"],
              isHandwritten: false,
              polygon: [
                {
                  x: 423,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307db8",
                },
                {
                  x: 651,
                  y: 1263,
                  _id: "65226c63e8b1e0472e307db9",
                },
                {
                  x: 651,
                  y: 1303,
                  _id: "65226c63e8b1e0472e307dba",
                },
                {
                  x: 423,
                  y: 1303,
                  _id: "65226c63e8b1e0472e307dbb",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307db7",
            },
            {
              content: "TSH",
              offset: 473,
              length: 3,
              confidence: 5.6469517,
              codes: ["TSH_68"],
              isHandwritten: false,
              polygon: [
                {
                  x: 58,
                  y: 1338,
                  _id: "65226c63e8b1e0472e307dbd",
                },
                {
                  x: 117,
                  y: 1338,
                  _id: "65226c63e8b1e0472e307dbe",
                },
                {
                  x: 117,
                  y: 1371,
                  _id: "65226c63e8b1e0472e307dbf",
                },
                {
                  x: 58,
                  y: 1371,
                  _id: "65226c63e8b1e0472e307dc0",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307dbc",
            },
            {
              content: "Electrophorèse des protéines plasmatiques",
              offset: 477,
              length: 41,
              confidence: 9.688684,
              codes: ["PRG"],
              isHandwritten: false,
              polygon: [
                {
                  x: 57,
                  y: 1413,
                  _id: "65226c63e8b1e0472e307dc2",
                },
                {
                  x: 681,
                  y: 1413,
                  _id: "65226c63e8b1e0472e307dc3",
                },
                {
                  x: 681,
                  y: 1454,
                  _id: "65226c63e8b1e0472e307dc4",
                },
                {
                  x: 57,
                  y: 1454,
                  _id: "65226c63e8b1e0472e307dc5",
                },
              ],
              ALD: false,
              warning: false,
              isDeleted: false,
              isAdded: false,
              _id: "65226c63e8b1e0472e307dc1",
            },
          ],
          doctor: [
            {
              content: "10001756922",
              offset: 177,
              length: 11,
              confidence: 1,
              isHandwritten: false,
              data: {
                _id: "651aa4ccdc7926aa903fafcd",
                "Type d'identifiant PP": "8",
                "Identifiant PP": "10001756922",
                "Identification nationale PP": "810001756922",
                "Nom d'exercice": "HEURGUE",
                "Prénom d'exercice": "ALEXANDRA",
                "Code type diplôme obtenu": "DESC1",
                "Libellé type diplôme obtenu": "Diplôme d'Etudes Spécialisées Complémentaire",
                "Code diplôme obtenu": "DSM206",
                "Libellé diplôme obtenu": "Cancérologie",
                "Code type autorisation": "",
                "Libellé type autorisation": "",
                "Code discipline autorisation": "",
                "Libellé discipline autorisation": "",
                "": "",
              },
              _id: "65226c63e8b1e0472e307d92",
            },
            {
              content: "10001726214",
              offset: 852,
              length: 11,
              confidence: 1,
              isHandwritten: false,
              data: {
                _id: "651aa52cdc7926aa9045a857",
                "Type d'identifiant PP": "8",
                "Identifiant PP": "10001726214",
                "Identification nationale PP": "810001726214",
                "Nom d'exercice": "CADIOT",
                "Prénom d'exercice": "GUILLAUME",
                "Code type diplôme obtenu": "DE",
                "Libellé type diplôme obtenu": "Diplôme d'Etat français ",
                "Code diplôme obtenu": "DE05",
                "Libellé diplôme obtenu": "Diplôme d'État français de docteur en médecine",
                "Code type autorisation": "",
                "Libellé type autorisation": "",
                "Code discipline autorisation": "",
                "Libellé discipline autorisation": "",
                "": "",
              },
              _id: "65226c63e8b1e0472e307d93",
            },
          ],
          createdAt: "2023-10-08T08:46:08.334Z",
          updatedAt: "2023-10-08T08:46:27.937Z",
          __v: 1,
          s3Key: "65226c50e8b1e0472e307a73.jpeg",
          content:
            "CENTRE HOSPITALIER UNIVERSITAIRE DE REIMS Hôpital Robert Debré\nIdentification du prescripteur Service d'Hépato-Gastro-Entérologie Prescripteur : Dr HEURGUE, Alexandra\nNº RPPS : 10001756922\n3/6\nIdentification du patient\nGUILLAUME née FROMENT Nelly 1 RUE DU VIVIER 51110 CAUREL\nNée le 08/09/1946 IPP : 80210053\nReims, le 12/06/2023\nORDONNANCE\nSexe : F prise de sang maintenant et dans 3 mois\nAge : 76 ans\nNFS Plaquettes TP Créatinémie ASAT, ALAT, PAL, GGT, Bilirubine totale\nTSH\nElectrophorèse des protéines plasmatiques IgM, IgG\n1)14/06/23\nPoids : kg\nTaille : cm\nDr HEURGUE, Alexandra Dogteur Alexandra MEURGUY\nP\nService et Signature\nHopital Robert D: 51092 FSMIS CEDEX\nTel 073076 7170 - Fax 03 26 78 88 36 Nº FINESS 510002447\n2)\nMédicaments substituables dans le groupe des génériques sauf mention contraire.\nChef de service : Professeur CADIOT RPPS : 10001726214\nFINESS : 510002447\nHOPITAL ROBERT DEBRE - CHU de REIMS - RUE DU GENERAL KOENIG 51092 REIMS\nPage 1 sur 1",
          width: 1653,
          height: 2339,
          isHandwritten: true,
        },
      };
      responses.push(response.data);
    }

    console.log(responses);
    window.postMessage({ message: "insertActs", data: responses }, "*");
  },
  false
);

const launchScan = async () => {
  // const result = await DWTChromeExtension.scan();

  // return [`data:image/png;base64,${result._content}`];

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);
  fileInput.click();

  let result;
  await new Promise((resolve) => {
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        result = event.target.result;
        resolve();
      };
      reader.readAsDataURL(file);
    });
  });

  return [result];
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
