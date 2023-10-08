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

    // let response = await fetch(`${API}/prescription`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ apikey, file: data }),
    // });

    // response = await response.json();

    // console.log(response);

    const response = {
      ok: true,
      data: {
        userId: "65117d3fd297d7394da794a7",
        _id: "652262b5e8b1e0472e2f99ec",
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
                _id: "652262bae8b1e0472e2f99ef",
              },
              {
                x: 558,
                y: 173,
                _id: "652262bae8b1e0472e2f99f0",
              },
              {
                x: 557,
                y: 222,
                _id: "652262bae8b1e0472e2f99f1",
              },
              {
                x: 387,
                y: 222,
                _id: "652262bae8b1e0472e2f99f2",
              },
            ],
            _id: "652262bae8b1e0472e2f99ee",
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
                _id: "652262bae8b1e0472e2f99f4",
              },
              {
                x: 860,
                y: 172,
                _id: "652262bae8b1e0472e2f99f5",
              },
              {
                x: 859,
                y: 222,
                _id: "652262bae8b1e0472e2f99f6",
              },
              {
                x: 567,
                y: 222,
                _id: "652262bae8b1e0472e2f99f7",
              },
            ],
            _id: "652262bae8b1e0472e2f99f3",
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
                _id: "652262bae8b1e0472e2f99f9",
              },
              {
                x: 1223,
                y: 171,
                _id: "652262bae8b1e0472e2f99fa",
              },
              {
                x: 1222,
                y: 220,
                _id: "652262bae8b1e0472e2f99fb",
              },
              {
                x: 876,
                y: 222,
                _id: "652262bae8b1e0472e2f99fc",
              },
            ],
            _id: "652262bae8b1e0472e2f99f8",
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
                _id: "652262bae8b1e0472e2f99fe",
              },
              {
                x: 1297,
                y: 172,
                _id: "652262bae8b1e0472e2f99ff",
              },
              {
                x: 1296,
                y: 220,
                _id: "652262bae8b1e0472e2f9a00",
              },
              {
                x: 1233,
                y: 220,
                _id: "652262bae8b1e0472e2f9a01",
              },
            ],
            _id: "652262bae8b1e0472e2f99fd",
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
                _id: "652262bae8b1e0472e2f9a03",
              },
              {
                x: 1454,
                y: 172,
                _id: "652262bae8b1e0472e2f9a04",
              },
              {
                x: 1454,
                y: 219,
                _id: "652262bae8b1e0472e2f9a05",
              },
              {
                x: 1307,
                y: 220,
                _id: "652262bae8b1e0472e2f9a06",
              },
            ],
            _id: "652262bae8b1e0472e2f9a02",
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
                _id: "652262bae8b1e0472e2f9a08",
              },
              {
                x: 842,
                y: 240,
                _id: "652262bae8b1e0472e2f9a09",
              },
              {
                x: 842,
                y: 293,
                _id: "652262bae8b1e0472e2f9a0a",
              },
              {
                x: 683,
                y: 293,
                _id: "652262bae8b1e0472e2f9a0b",
              },
            ],
            _id: "652262bae8b1e0472e2f9a07",
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
                _id: "652262bae8b1e0472e2f9a0d",
              },
              {
                x: 1010,
                y: 239,
                _id: "652262bae8b1e0472e2f9a0e",
              },
              {
                x: 1010,
                y: 290,
                _id: "652262bae8b1e0472e2f9a0f",
              },
              {
                x: 852,
                y: 293,
                _id: "652262bae8b1e0472e2f9a10",
              },
            ],
            _id: "652262bae8b1e0472e2f9a0c",
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
                _id: "652262bae8b1e0472e2f9a12",
              },
              {
                x: 1160,
                y: 238,
                _id: "652262bae8b1e0472e2f9a13",
              },
              {
                x: 1160,
                y: 285,
                _id: "652262bae8b1e0472e2f9a14",
              },
              {
                x: 1020,
                y: 290,
                _id: "652262bae8b1e0472e2f9a15",
              },
            ],
            _id: "652262bae8b1e0472e2f9a11",
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
                _id: "652262bae8b1e0472e2f9a17",
              },
              {
                x: 392,
                y: 422,
                _id: "652262bae8b1e0472e2f9a18",
              },
              {
                x: 392,
                y: 459,
                _id: "652262bae8b1e0472e2f9a19",
              },
              {
                x: 208,
                y: 455,
                _id: "652262bae8b1e0472e2f9a1a",
              },
            ],
            _id: "652262bae8b1e0472e2f9a16",
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
                _id: "652262bae8b1e0472e2f9a1c",
              },
              {
                x: 438,
                y: 423,
                _id: "652262bae8b1e0472e2f9a1d",
              },
              {
                x: 437,
                y: 460,
                _id: "652262bae8b1e0472e2f9a1e",
              },
              {
                x: 399,
                y: 460,
                _id: "652262bae8b1e0472e2f9a1f",
              },
            ],
            _id: "652262bae8b1e0472e2f9a1b",
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
                _id: "652262bae8b1e0472e2f9a21",
              },
              {
                x: 626,
                y: 423,
                _id: "652262bae8b1e0472e2f9a22",
              },
              {
                x: 626,
                y: 459,
                _id: "652262bae8b1e0472e2f9a23",
              },
              {
                x: 445,
                y: 460,
                _id: "652262bae8b1e0472e2f9a24",
              },
            ],
            _id: "652262bae8b1e0472e2f9a20",
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
                _id: "652262bae8b1e0472e2f9a26",
              },
              {
                x: 163,
                y: 473,
                _id: "652262bae8b1e0472e2f9a27",
              },
              {
                x: 162,
                y: 510,
                _id: "652262bae8b1e0472e2f9a28",
              },
              {
                x: 56,
                y: 509,
                _id: "652262bae8b1e0472e2f9a29",
              },
            ],
            _id: "652262bae8b1e0472e2f9a25",
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
                _id: "652262bae8b1e0472e2f9a2b",
              },
              {
                x: 584,
                y: 475,
                _id: "652262bae8b1e0472e2f9a2c",
              },
              {
                x: 584,
                y: 512,
                _id: "652262bae8b1e0472e2f9a2d",
              },
              {
                x: 169,
                y: 510,
                _id: "652262bae8b1e0472e2f9a2e",
              },
            ],
            _id: "652262bae8b1e0472e2f9a2a",
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
                _id: "652262bae8b1e0472e2f9a30",
              },
              {
                x: 217,
                y: 541,
                _id: "652262bae8b1e0472e2f9a31",
              },
              {
                x: 218,
                y: 577,
                _id: "652262bae8b1e0472e2f9a32",
              },
              {
                x: 59,
                y: 576,
                _id: "652262bae8b1e0472e2f9a33",
              },
            ],
            _id: "652262bae8b1e0472e2f9a2f",
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
                _id: "652262bae8b1e0472e2f9a35",
              },
              {
                x: 234,
                y: 541,
                _id: "652262bae8b1e0472e2f9a36",
              },
              {
                x: 234,
                y: 577,
                _id: "652262bae8b1e0472e2f9a37",
              },
              {
                x: 225,
                y: 577,
                _id: "652262bae8b1e0472e2f9a38",
              },
            ],
            _id: "652262bae8b1e0472e2f9a34",
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
                _id: "652262bae8b1e0472e2f9a3a",
              },
              {
                x: 273,
                y: 541,
                _id: "652262bae8b1e0472e2f9a3b",
              },
              {
                x: 273,
                y: 577,
                _id: "652262bae8b1e0472e2f9a3c",
              },
              {
                x: 241,
                y: 577,
                _id: "652262bae8b1e0472e2f9a3d",
              },
            ],
            _id: "652262bae8b1e0472e2f9a39",
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
                _id: "652262bae8b1e0472e2f9a3f",
              },
              {
                x: 440,
                y: 541,
                _id: "652262bae8b1e0472e2f9a40",
              },
              {
                x: 440,
                y: 577,
                _id: "652262bae8b1e0472e2f9a41",
              },
              {
                x: 280,
                y: 577,
                _id: "652262bae8b1e0472e2f9a42",
              },
            ],
            _id: "652262bae8b1e0472e2f9a3e",
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
                _id: "652262bae8b1e0472e2f9a44",
              },
              {
                x: 584,
                y: 542,
                _id: "652262bae8b1e0472e2f9a45",
              },
              {
                x: 584,
                y: 577,
                _id: "652262bae8b1e0472e2f9a46",
              },
              {
                x: 447,
                y: 577,
                _id: "652262bae8b1e0472e2f9a47",
              },
            ],
            _id: "652262bae8b1e0472e2f9a43",
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
                _id: "652262bae8b1e0472e2f9a49",
              },
              {
                x: 90,
                y: 641,
                _id: "652262bae8b1e0472e2f9a4a",
              },
              {
                x: 90,
                y: 676,
                _id: "652262bae8b1e0472e2f9a4b",
              },
              {
                x: 59,
                y: 675,
                _id: "652262bae8b1e0472e2f9a4c",
              },
            ],
            _id: "652262bae8b1e0472e2f9a48",
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
                _id: "652262bae8b1e0472e2f9a4e",
              },
              {
                x: 179,
                y: 642,
                _id: "652262bae8b1e0472e2f9a4f",
              },
              {
                x: 179,
                y: 676,
                _id: "652262bae8b1e0472e2f9a50",
              },
              {
                x: 97,
                y: 676,
                _id: "652262bae8b1e0472e2f9a51",
              },
            ],
            _id: "652262bae8b1e0472e2f9a4d",
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
                _id: "652262bae8b1e0472e2f9a53",
              },
              {
                x: 200,
                y: 642,
                _id: "652262bae8b1e0472e2f9a54",
              },
              {
                x: 200,
                y: 676,
                _id: "652262bae8b1e0472e2f9a55",
              },
              {
                x: 186,
                y: 676,
                _id: "652262bae8b1e0472e2f9a56",
              },
            ],
            _id: "652262bae8b1e0472e2f9a52",
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
                _id: "652262bae8b1e0472e2f9a58",
              },
              {
                x: 390,
                y: 642,
                _id: "652262bae8b1e0472e2f9a59",
              },
              {
                x: 390,
                y: 677,
                _id: "652262bae8b1e0472e2f9a5a",
              },
              {
                x: 207,
                y: 676,
                _id: "652262bae8b1e0472e2f9a5b",
              },
            ],
            _id: "652262bae8b1e0472e2f9a57",
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
                _id: "652262bae8b1e0472e2f9a5d",
              },
              {
                x: 1562,
                y: 361,
                _id: "652262bae8b1e0472e2f9a5e",
              },
              {
                x: 1563,
                y: 378,
                _id: "652262bae8b1e0472e2f9a5f",
              },
              {
                x: 1537,
                y: 378,
                _id: "652262bae8b1e0472e2f9a60",
              },
            ],
            _id: "652262bae8b1e0472e2f9a5c",
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
                _id: "652262bae8b1e0472e2f9a62",
              },
              {
                x: 1175,
                y: 423,
                _id: "652262bae8b1e0472e2f9a63",
              },
              {
                x: 1175,
                y: 460,
                _id: "652262bae8b1e0472e2f9a64",
              },
              {
                x: 987,
                y: 454,
                _id: "652262bae8b1e0472e2f9a65",
              },
            ],
            _id: "652262bae8b1e0472e2f9a61",
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
                _id: "652262bae8b1e0472e2f9a67",
              },
              {
                x: 1220,
                y: 423,
                _id: "652262bae8b1e0472e2f9a68",
              },
              {
                x: 1220,
                y: 460,
                _id: "652262bae8b1e0472e2f9a69",
              },
              {
                x: 1182,
                y: 460,
                _id: "652262bae8b1e0472e2f9a6a",
              },
            ],
            _id: "652262bae8b1e0472e2f9a66",
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
                _id: "652262bae8b1e0472e2f9a6c",
              },
              {
                x: 1333,
                y: 423,
                _id: "652262bae8b1e0472e2f9a6d",
              },
              {
                x: 1332,
                y: 459,
                _id: "652262bae8b1e0472e2f9a6e",
              },
              {
                x: 1227,
                y: 460,
                _id: "652262bae8b1e0472e2f9a6f",
              },
            ],
            _id: "652262bae8b1e0472e2f9a6b",
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
                _id: "652262bae8b1e0472e2f9a71",
              },
              {
                x: 977,
                y: 473,
                _id: "652262bae8b1e0472e2f9a72",
              },
              {
                x: 977,
                y: 509,
                _id: "652262bae8b1e0472e2f9a73",
              },
              {
                x: 800,
                y: 507,
                _id: "652262bae8b1e0472e2f9a74",
              },
            ],
            _id: "652262bae8b1e0472e2f9a70",
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
                _id: "652262bae8b1e0472e2f9a76",
              },
              {
                x: 1036,
                y: 473,
                _id: "652262bae8b1e0472e2f9a77",
              },
              {
                x: 1036,
                y: 509,
                _id: "652262bae8b1e0472e2f9a78",
              },
              {
                x: 984,
                y: 509,
                _id: "652262bae8b1e0472e2f9a79",
              },
            ],
            _id: "652262bae8b1e0472e2f9a75",
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
                _id: "652262bae8b1e0472e2f9a7b",
              },
              {
                x: 1191,
                y: 474,
                _id: "652262bae8b1e0472e2f9a7c",
              },
              {
                x: 1192,
                y: 511,
                _id: "652262bae8b1e0472e2f9a7d",
              },
              {
                x: 1043,
                y: 509,
                _id: "652262bae8b1e0472e2f9a7e",
              },
            ],
            _id: "652262bae8b1e0472e2f9a7a",
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
                _id: "652262bae8b1e0472e2f9a80",
              },
              {
                x: 1274,
                y: 475,
                _id: "652262bae8b1e0472e2f9a81",
              },
              {
                x: 1275,
                y: 511,
                _id: "652262bae8b1e0472e2f9a82",
              },
              {
                x: 1199,
                y: 511,
                _id: "652262bae8b1e0472e2f9a83",
              },
            ],
            _id: "652262bae8b1e0472e2f9a7f",
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
                _id: "652262bae8b1e0472e2f9a85",
              },
              {
                x: 815,
                y: 510,
                _id: "652262bae8b1e0472e2f9a86",
              },
              {
                x: 816,
                y: 540,
                _id: "652262bae8b1e0472e2f9a87",
              },
              {
                x: 804,
                y: 541,
                _id: "652262bae8b1e0472e2f9a88",
              },
            ],
            _id: "652262bae8b1e0472e2f9a84",
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
                _id: "652262bae8b1e0472e2f9a8a",
              },
              {
                x: 882,
                y: 510,
                _id: "652262bae8b1e0472e2f9a8b",
              },
              {
                x: 883,
                y: 539,
                _id: "652262bae8b1e0472e2f9a8c",
              },
              {
                x: 821,
                y: 540,
                _id: "652262bae8b1e0472e2f9a8d",
              },
            ],
            _id: "652262bae8b1e0472e2f9a89",
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
                _id: "652262bae8b1e0472e2f9a8f",
              },
              {
                x: 933,
                y: 509,
                _id: "652262bae8b1e0472e2f9a90",
              },
              {
                x: 933,
                y: 538,
                _id: "652262bae8b1e0472e2f9a91",
              },
              {
                x: 893,
                y: 539,
                _id: "652262bae8b1e0472e2f9a92",
              },
            ],
            _id: "652262bae8b1e0472e2f9a8e",
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
                _id: "652262bae8b1e0472e2f9a94",
              },
              {
                x: 1040,
                y: 509,
                _id: "652262bae8b1e0472e2f9a95",
              },
              {
                x: 1039,
                y: 539,
                _id: "652262bae8b1e0472e2f9a96",
              },
              {
                x: 947,
                y: 538,
                _id: "652262bae8b1e0472e2f9a97",
              },
            ],
            _id: "652262bae8b1e0472e2f9a93",
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
                _id: "652262bae8b1e0472e2f9a99",
              },
              {
                x: 882,
                y: 542,
                _id: "652262bae8b1e0472e2f9a9a",
              },
              {
                x: 882,
                y: 576,
                _id: "652262bae8b1e0472e2f9a9b",
              },
              {
                x: 801,
                y: 578,
                _id: "652262bae8b1e0472e2f9a9c",
              },
            ],
            _id: "652262bae8b1e0472e2f9a98",
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
                _id: "652262bae8b1e0472e2f9a9e",
              },
              {
                x: 1013,
                y: 541,
                _id: "652262bae8b1e0472e2f9a9f",
              },
              {
                x: 1014,
                y: 576,
                _id: "652262bae8b1e0472e2f9aa0",
              },
              {
                x: 889,
                y: 576,
                _id: "652262bae8b1e0472e2f9aa1",
              },
            ],
            _id: "652262bae8b1e0472e2f9a9d",
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
                _id: "652262bae8b1e0472e2f9aa3",
              },
              {
                x: 848,
                y: 595,
                _id: "652262bae8b1e0472e2f9aa4",
              },
              {
                x: 848,
                y: 623,
                _id: "652262bae8b1e0472e2f9aa5",
              },
              {
                x: 801,
                y: 623,
                _id: "652262bae8b1e0472e2f9aa6",
              },
            ],
            _id: "652262bae8b1e0472e2f9aa2",
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
                _id: "652262bae8b1e0472e2f9aa8",
              },
              {
                x: 877,
                y: 595,
                _id: "652262bae8b1e0472e2f9aa9",
              },
              {
                x: 877,
                y: 623,
                _id: "652262bae8b1e0472e2f9aaa",
              },
              {
                x: 854,
                y: 623,
                _id: "652262bae8b1e0472e2f9aab",
              },
            ],
            _id: "652262bae8b1e0472e2f9aa7",
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
                _id: "652262bae8b1e0472e2f9aad",
              },
              {
                x: 1021,
                y: 595,
                _id: "652262bae8b1e0472e2f9aae",
              },
              {
                x: 1020,
                y: 623,
                _id: "652262bae8b1e0472e2f9aaf",
              },
              {
                x: 883,
                y: 623,
                _id: "652262bae8b1e0472e2f9ab0",
              },
            ],
            _id: "652262bae8b1e0472e2f9aac",
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
                _id: "652262bae8b1e0472e2f9ab2",
              },
              {
                x: 839,
                y: 627,
                _id: "652262bae8b1e0472e2f9ab3",
              },
              {
                x: 839,
                y: 653,
                _id: "652262bae8b1e0472e2f9ab4",
              },
              {
                x: 802,
                y: 653,
                _id: "652262bae8b1e0472e2f9ab5",
              },
            ],
            _id: "652262bae8b1e0472e2f9ab1",
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
                _id: "652262bae8b1e0472e2f9ab7",
              },
              {
                x: 859,
                y: 627,
                _id: "652262bae8b1e0472e2f9ab8",
              },
              {
                x: 859,
                y: 653,
                _id: "652262bae8b1e0472e2f9ab9",
              },
              {
                x: 849,
                y: 653,
                _id: "652262bae8b1e0472e2f9aba",
              },
            ],
            _id: "652262bae8b1e0472e2f9ab6",
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
                _id: "652262bae8b1e0472e2f9abc",
              },
              {
                x: 986,
                y: 629,
                _id: "652262bae8b1e0472e2f9abd",
              },
              {
                x: 986,
                y: 654,
                _id: "652262bae8b1e0472e2f9abe",
              },
              {
                x: 864,
                y: 653,
                _id: "652262bae8b1e0472e2f9abf",
              },
            ],
            _id: "652262bae8b1e0472e2f9abb",
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
                _id: "652262bae8b1e0472e2f9ac1",
              },
              {
                x: 1342,
                y: 791,
                _id: "652262bae8b1e0472e2f9ac2",
              },
              {
                x: 1342,
                y: 821,
                _id: "652262bae8b1e0472e2f9ac3",
              },
              {
                x: 1258,
                y: 821,
                _id: "652262bae8b1e0472e2f9ac4",
              },
            ],
            _id: "652262bae8b1e0472e2f9ac0",
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
                _id: "652262bae8b1e0472e2f9ac6",
              },
              {
                x: 1374,
                y: 791,
                _id: "652262bae8b1e0472e2f9ac7",
              },
              {
                x: 1374,
                y: 821,
                _id: "652262bae8b1e0472e2f9ac8",
              },
              {
                x: 1348,
                y: 821,
                _id: "652262bae8b1e0472e2f9ac9",
              },
            ],
            _id: "652262bae8b1e0472e2f9ac5",
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
                _id: "652262bae8b1e0472e2f9acb",
              },
              {
                x: 1518,
                y: 790,
                _id: "652262bae8b1e0472e2f9acc",
              },
              {
                x: 1518,
                y: 823,
                _id: "652262bae8b1e0472e2f9acd",
              },
              {
                x: 1380,
                y: 821,
                _id: "652262bae8b1e0472e2f9ace",
              },
            ],
            _id: "652262bae8b1e0472e2f9aca",
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
                _id: "652262bae8b1e0472e2f9ad0",
              },
              {
                x: 917,
                y: 884,
                _id: "652262bae8b1e0472e2f9ad1",
              },
              {
                x: 917,
                y: 922,
                _id: "652262bae8b1e0472e2f9ad2",
              },
              {
                x: 646,
                y: 923,
                _id: "652262bae8b1e0472e2f9ad3",
              },
            ],
            _id: "652262bae8b1e0472e2f9acf",
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
                _id: "652262bae8b1e0472e2f9ad5",
              },
              {
                x: 117,
                y: 972,
                _id: "652262bae8b1e0472e2f9ad6",
              },
              {
                x: 118,
                y: 1006,
                _id: "652262bae8b1e0472e2f9ad7",
              },
              {
                x: 56,
                y: 1006,
                _id: "652262bae8b1e0472e2f9ad8",
              },
            ],
            _id: "652262bae8b1e0472e2f9ad4",
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
                _id: "652262bae8b1e0472e2f9ada",
              },
              {
                x: 133,
                y: 972,
                _id: "652262bae8b1e0472e2f9adb",
              },
              {
                x: 133,
                y: 1006,
                _id: "652262bae8b1e0472e2f9adc",
              },
              {
                x: 124,
                y: 1006,
                _id: "652262bae8b1e0472e2f9add",
              },
            ],
            _id: "652262bae8b1e0472e2f9ad9",
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
                _id: "652262bae8b1e0472e2f9adf",
              },
              {
                x: 159,
                y: 971,
                _id: "652262bae8b1e0472e2f9ae0",
              },
              {
                x: 159,
                y: 1006,
                _id: "652262bae8b1e0472e2f9ae1",
              },
              {
                x: 140,
                y: 1006,
                _id: "652262bae8b1e0472e2f9ae2",
              },
            ],
            _id: "652262bae8b1e0472e2f9ade",
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
                _id: "652262bae8b1e0472e2f9ae4",
              },
              {
                x: 125,
                y: 1040,
                _id: "652262bae8b1e0472e2f9ae5",
              },
              {
                x: 125,
                y: 1078,
                _id: "652262bae8b1e0472e2f9ae6",
              },
              {
                x: 56,
                y: 1077,
                _id: "652262bae8b1e0472e2f9ae7",
              },
            ],
            _id: "652262bae8b1e0472e2f9ae3",
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
                _id: "652262bae8b1e0472e2f9ae9",
              },
              {
                x: 171,
                y: 1040,
                _id: "652262bae8b1e0472e2f9aea",
              },
              {
                x: 170,
                y: 1078,
                _id: "652262bae8b1e0472e2f9aeb",
              },
              {
                x: 132,
                y: 1078,
                _id: "652262bae8b1e0472e2f9aec",
              },
            ],
            _id: "652262bae8b1e0472e2f9ae8",
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
                _id: "652262bae8b1e0472e2f9aee",
              },
              {
                x: 255,
                y: 1042,
                _id: "652262bae8b1e0472e2f9aef",
              },
              {
                x: 254,
                y: 1077,
                _id: "652262bae8b1e0472e2f9af0",
              },
              {
                x: 178,
                y: 1078,
                _id: "652262bae8b1e0472e2f9af1",
              },
            ],
            _id: "652262bae8b1e0472e2f9aed",
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
                _id: "652262bae8b1e0472e2f9af3",
              },
              {
                x: 216,
                y: 1078,
                _id: "652262bae8b1e0472e2f9af4",
              },
              {
                x: 216,
                y: 1113,
                _id: "652262bae8b1e0472e2f9af5",
              },
              {
                x: 55,
                y: 1112,
                _id: "652262bae8b1e0472e2f9af6",
              },
            ],
            _id: "652262bae8b1e0472e2f9af2",
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
                _id: "652262bae8b1e0472e2f9af8",
              },
              {
                x: 253,
                y: 1078,
                _id: "652262bae8b1e0472e2f9af9",
              },
              {
                x: 253,
                y: 1113,
                _id: "652262bae8b1e0472e2f9afa",
              },
              {
                x: 223,
                y: 1113,
                _id: "652262bae8b1e0472e2f9afb",
              },
            ],
            _id: "652262bae8b1e0472e2f9af7",
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
                _id: "652262bae8b1e0472e2f9afd",
              },
              {
                x: 334,
                y: 1078,
                _id: "652262bae8b1e0472e2f9afe",
              },
              {
                x: 333,
                y: 1114,
                _id: "652262bae8b1e0472e2f9aff",
              },
              {
                x: 260,
                y: 1113,
                _id: "652262bae8b1e0472e2f9b00",
              },
            ],
            _id: "652262bae8b1e0472e2f9afc",
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
                _id: "652262bae8b1e0472e2f9b02",
              },
              {
                x: 359,
                y: 1078,
                _id: "652262bae8b1e0472e2f9b03",
              },
              {
                x: 359,
                y: 1114,
                _id: "652262bae8b1e0472e2f9b04",
              },
              {
                x: 340,
                y: 1114,
                _id: "652262bae8b1e0472e2f9b05",
              },
            ],
            _id: "652262bae8b1e0472e2f9b01",
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
                _id: "652262bae8b1e0472e2f9b07",
              },
              {
                x: 439,
                y: 1077,
                _id: "652262bae8b1e0472e2f9b08",
              },
              {
                x: 438,
                y: 1115,
                _id: "652262bae8b1e0472e2f9b09",
              },
              {
                x: 366,
                y: 1114,
                _id: "652262bae8b1e0472e2f9b0a",
              },
            ],
            _id: "652262bae8b1e0472e2f9b06",
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
                _id: "652262bae8b1e0472e2f9b0c",
              },
              {
                x: 472,
                y: 978,
                _id: "652262bae8b1e0472e2f9b0d",
              },
              {
                x: 472,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b0e",
              },
              {
                x: 424,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b0f",
              },
            ],
            _id: "652262bae8b1e0472e2f9b0b",
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
                _id: "652262bae8b1e0472e2f9b11",
              },
              {
                x: 488,
                y: 978,
                _id: "652262bae8b1e0472e2f9b12",
              },
              {
                x: 488,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b13",
              },
              {
                x: 478,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b14",
              },
            ],
            _id: "652262bae8b1e0472e2f9b10",
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
                _id: "652262bae8b1e0472e2f9b16",
              },
              {
                x: 525,
                y: 978,
                _id: "652262bae8b1e0472e2f9b17",
              },
              {
                x: 525,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b18",
              },
              {
                x: 494,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b19",
              },
            ],
            _id: "652262bae8b1e0472e2f9b15",
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
                _id: "652262bae8b1e0472e2f9b1b",
              },
              {
                x: 579,
                y: 979,
                _id: "652262bae8b1e0472e2f9b1c",
              },
              {
                x: 579,
                y: 1010,
                _id: "652262bae8b1e0472e2f9b1d",
              },
              {
                x: 531,
                y: 1009,
                _id: "652262bae8b1e0472e2f9b1e",
              },
            ],
            _id: "652262bae8b1e0472e2f9b1a",
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
                _id: "652262bae8b1e0472e2f9b20",
              },
              {
                x: 118,
                y: 1151,
                _id: "652262bae8b1e0472e2f9b21",
              },
              {
                x: 118,
                y: 1187,
                _id: "652262bae8b1e0472e2f9b22",
              },
              {
                x: 54,
                y: 1187,
                _id: "652262bae8b1e0472e2f9b23",
              },
            ],
            _id: "652262bae8b1e0472e2f9b1f",
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
                _id: "652262bae8b1e0472e2f9b25",
              },
              {
                x: 285,
                y: 1153,
                _id: "652262bae8b1e0472e2f9b26",
              },
              {
                x: 285,
                y: 1188,
                _id: "652262bae8b1e0472e2f9b27",
              },
              {
                x: 126,
                y: 1187,
                _id: "652262bae8b1e0472e2f9b28",
              },
            ],
            _id: "652262bae8b1e0472e2f9b24",
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
                _id: "652262bae8b1e0472e2f9b2a",
              },
              {
                x: 93,
                y: 1187,
                _id: "652262bae8b1e0472e2f9b2b",
              },
              {
                x: 92,
                y: 1220,
                _id: "652262bae8b1e0472e2f9b2c",
              },
              {
                x: 58,
                y: 1218,
                _id: "652262bae8b1e0472e2f9b2d",
              },
            ],
            _id: "652262bae8b1e0472e2f9b29",
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
                _id: "652262bae8b1e0472e2f9b2f",
              },
              {
                x: 233,
                y: 1226,
                _id: "652262bae8b1e0472e2f9b30",
              },
              {
                x: 233,
                y: 1259,
                _id: "652262bae8b1e0472e2f9b31",
              },
              {
                x: 56,
                y: 1259,
                _id: "652262bae8b1e0472e2f9b32",
              },
            ],
            _id: "652262bae8b1e0472e2f9b2e",
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
                _id: "652262bae8b1e0472e2f9b34",
              },
              {
                x: 148,
                y: 1263,
                _id: "652262bae8b1e0472e2f9b35",
              },
              {
                x: 148,
                y: 1300,
                _id: "652262bae8b1e0472e2f9b36",
              },
              {
                x: 56,
                y: 1299,
                _id: "652262bae8b1e0472e2f9b37",
              },
            ],
            _id: "652262bae8b1e0472e2f9b33",
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
                _id: "652262bae8b1e0472e2f9b39",
              },
              {
                x: 247,
                y: 1263,
                _id: "652262bae8b1e0472e2f9b3a",
              },
              {
                x: 247,
                y: 1301,
                _id: "652262bae8b1e0472e2f9b3b",
              },
              {
                x: 155,
                y: 1300,
                _id: "652262bae8b1e0472e2f9b3c",
              },
            ],
            _id: "652262bae8b1e0472e2f9b38",
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
                _id: "652262bae8b1e0472e2f9b3e",
              },
              {
                x: 327,
                y: 1263,
                _id: "652262bae8b1e0472e2f9b3f",
              },
              {
                x: 327,
                y: 1302,
                _id: "652262bae8b1e0472e2f9b40",
              },
              {
                x: 254,
                y: 1301,
                _id: "652262bae8b1e0472e2f9b41",
              },
            ],
            _id: "652262bae8b1e0472e2f9b3d",
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
                _id: "652262bae8b1e0472e2f9b43",
              },
              {
                x: 416,
                y: 1263,
                _id: "652262bae8b1e0472e2f9b44",
              },
              {
                x: 416,
                y: 1302,
                _id: "652262bae8b1e0472e2f9b45",
              },
              {
                x: 334,
                y: 1302,
                _id: "652262bae8b1e0472e2f9b46",
              },
            ],
            _id: "652262bae8b1e0472e2f9b42",
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
                _id: "652262bae8b1e0472e2f9b48",
              },
              {
                x: 558,
                y: 1264,
                _id: "652262bae8b1e0472e2f9b49",
              },
              {
                x: 558,
                y: 1303,
                _id: "652262bae8b1e0472e2f9b4a",
              },
              {
                x: 423,
                y: 1302,
                _id: "652262bae8b1e0472e2f9b4b",
              },
            ],
            _id: "652262bae8b1e0472e2f9b47",
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
                _id: "652262bae8b1e0472e2f9b4d",
              },
              {
                x: 651,
                y: 1265,
                _id: "652262bae8b1e0472e2f9b4e",
              },
              {
                x: 651,
                y: 1303,
                _id: "652262bae8b1e0472e2f9b4f",
              },
              {
                x: 565,
                y: 1303,
                _id: "652262bae8b1e0472e2f9b50",
              },
            ],
            _id: "652262bae8b1e0472e2f9b4c",
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
                _id: "652262bae8b1e0472e2f9b52",
              },
              {
                x: 116,
                y: 1338,
                _id: "652262bae8b1e0472e2f9b53",
              },
              {
                x: 117,
                y: 1371,
                _id: "652262bae8b1e0472e2f9b54",
              },
              {
                x: 58,
                y: 1371,
                _id: "652262bae8b1e0472e2f9b55",
              },
            ],
            _id: "652262bae8b1e0472e2f9b51",
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
                _id: "652262bae8b1e0472e2f9b57",
              },
              {
                x: 272,
                y: 1414,
                _id: "652262bae8b1e0472e2f9b58",
              },
              {
                x: 273,
                y: 1453,
                _id: "652262bae8b1e0472e2f9b59",
              },
              {
                x: 58,
                y: 1450,
                _id: "652262bae8b1e0472e2f9b5a",
              },
            ],
            _id: "652262bae8b1e0472e2f9b56",
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
                _id: "652262bae8b1e0472e2f9b5c",
              },
              {
                x: 334,
                y: 1415,
                _id: "652262bae8b1e0472e2f9b5d",
              },
              {
                x: 335,
                y: 1453,
                _id: "652262bae8b1e0472e2f9b5e",
              },
              {
                x: 280,
                y: 1453,
                _id: "652262bae8b1e0472e2f9b5f",
              },
            ],
            _id: "652262bae8b1e0472e2f9b5b",
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
                _id: "652262bae8b1e0472e2f9b61",
              },
              {
                x: 476,
                y: 1416,
                _id: "652262bae8b1e0472e2f9b62",
              },
              {
                x: 476,
                y: 1454,
                _id: "652262bae8b1e0472e2f9b63",
              },
              {
                x: 342,
                y: 1453,
                _id: "652262bae8b1e0472e2f9b64",
              },
            ],
            _id: "652262bae8b1e0472e2f9b60",
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
                _id: "652262bae8b1e0472e2f9b66",
              },
              {
                x: 681,
                y: 1418,
                _id: "652262bae8b1e0472e2f9b67",
              },
              {
                x: 681,
                y: 1454,
                _id: "652262bae8b1e0472e2f9b68",
              },
              {
                x: 483,
                y: 1454,
                _id: "652262bae8b1e0472e2f9b69",
              },
            ],
            _id: "652262bae8b1e0472e2f9b65",
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
                _id: "652262bae8b1e0472e2f9b6b",
              },
              {
                x: 119,
                y: 1452,
                _id: "652262bae8b1e0472e2f9b6c",
              },
              {
                x: 118,
                y: 1490,
                _id: "652262bae8b1e0472e2f9b6d",
              },
              {
                x: 56,
                y: 1490,
                _id: "652262bae8b1e0472e2f9b6e",
              },
            ],
            _id: "652262bae8b1e0472e2f9b6a",
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
                _id: "652262bae8b1e0472e2f9b70",
              },
              {
                x: 179,
                y: 1451,
                _id: "652262bae8b1e0472e2f9b71",
              },
              {
                x: 178,
                y: 1491,
                _id: "652262bae8b1e0472e2f9b72",
              },
              {
                x: 126,
                y: 1490,
                _id: "652262bae8b1e0472e2f9b73",
              },
            ],
            _id: "652262bae8b1e0472e2f9b6f",
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
                _id: "652262bae8b1e0472e2f9b75",
              },
              {
                x: 338,
                y: 1753,
                _id: "652262bae8b1e0472e2f9b76",
              },
              {
                x: 344,
                y: 1823,
                _id: "652262bae8b1e0472e2f9b77",
              },
              {
                x: 63,
                y: 1843,
                _id: "652262bae8b1e0472e2f9b78",
              },
            ],
            _id: "652262bae8b1e0472e2f9b74",
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
                _id: "652262bae8b1e0472e2f9b7a",
              },
              {
                x: 859,
                y: 978,
                _id: "652262bae8b1e0472e2f9b7b",
              },
              {
                x: 859,
                y: 1014,
                _id: "652262bae8b1e0472e2f9b7c",
              },
              {
                x: 792,
                y: 1012,
                _id: "652262bae8b1e0472e2f9b7d",
              },
            ],
            _id: "652262bae8b1e0472e2f9b79",
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
                _id: "652262bae8b1e0472e2f9b7f",
              },
              {
                x: 882,
                y: 978,
                _id: "652262bae8b1e0472e2f9b80",
              },
              {
                x: 882,
                y: 1014,
                _id: "652262bae8b1e0472e2f9b81",
              },
              {
                x: 866,
                y: 1014,
                _id: "652262bae8b1e0472e2f9b82",
              },
            ],
            _id: "652262bae8b1e0472e2f9b7e",
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
                _id: "652262bae8b1e0472e2f9b84",
              },
              {
                x: 926,
                y: 978,
                _id: "652262bae8b1e0472e2f9b85",
              },
              {
                x: 926,
                y: 1014,
                _id: "652262bae8b1e0472e2f9b86",
              },
              {
                x: 889,
                y: 1014,
                _id: "652262bae8b1e0472e2f9b87",
              },
            ],
            _id: "652262bae8b1e0472e2f9b83",
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
                _id: "652262bae8b1e0472e2f9b89",
              },
              {
                x: 1225,
                y: 979,
                _id: "652262bae8b1e0472e2f9b8a",
              },
              {
                x: 1225,
                y: 1014,
                _id: "652262bae8b1e0472e2f9b8b",
              },
              {
                x: 1161,
                y: 1013,
                _id: "652262bae8b1e0472e2f9b8c",
              },
            ],
            _id: "652262bae8b1e0472e2f9b88",
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
                _id: "652262bbe8b1e0472e2f9b8e",
              },
              {
                x: 1248,
                y: 979,
                _id: "652262bbe8b1e0472e2f9b8f",
              },
              {
                x: 1248,
                y: 1014,
                _id: "652262bbe8b1e0472e2f9b90",
              },
              {
                x: 1232,
                y: 1014,
                _id: "652262bbe8b1e0472e2f9b91",
              },
            ],
            _id: "652262bbe8b1e0472e2f9b8d",
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
                _id: "652262bbe8b1e0472e2f9b93",
              },
              {
                x: 1291,
                y: 978,
                _id: "652262bbe8b1e0472e2f9b94",
              },
              {
                x: 1292,
                y: 1014,
                _id: "652262bbe8b1e0472e2f9b95",
              },
              {
                x: 1255,
                y: 1014,
                _id: "652262bbe8b1e0472e2f9b96",
              },
            ],
            _id: "652262bbe8b1e0472e2f9b92",
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
                _id: "652262bbe8b1e0472e2f9b98",
              },
              {
                x: 830,
                y: 1626,
                _id: "652262bbe8b1e0472e2f9b99",
              },
              {
                x: 829,
                y: 1655,
                _id: "652262bbe8b1e0472e2f9b9a",
              },
              {
                x: 802,
                y: 1655,
                _id: "652262bbe8b1e0472e2f9b9b",
              },
            ],
            _id: "652262bbe8b1e0472e2f9b97",
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
                _id: "652262bbe8b1e0472e2f9b9d",
              },
              {
                x: 967,
                y: 1626,
                _id: "652262bbe8b1e0472e2f9b9e",
              },
              {
                x: 967,
                y: 1656,
                _id: "652262bbe8b1e0472e2f9b9f",
              },
              {
                x: 835,
                y: 1655,
                _id: "652262bbe8b1e0472e2f9ba0",
              },
            ],
            _id: "652262bbe8b1e0472e2f9b9c",
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
                _id: "652262bbe8b1e0472e2f9ba2",
              },
              {
                x: 1098,
                y: 1628,
                _id: "652262bbe8b1e0472e2f9ba3",
              },
              {
                x: 1099,
                y: 1659,
                _id: "652262bbe8b1e0472e2f9ba4",
              },
              {
                x: 973,
                y: 1656,
                _id: "652262bbe8b1e0472e2f9ba5",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ba1",
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
                _id: "652262bbe8b1e0472e2f9ba7",
              },
              {
                x: 887,
                y: 1654,
                _id: "652262bbe8b1e0472e2f9ba8",
              },
              {
                x: 886,
                y: 1677,
                _id: "652262bbe8b1e0472e2f9ba9",
              },
              {
                x: 804,
                y: 1669,
                _id: "652262bbe8b1e0472e2f9baa",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ba6",
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
                _id: "652262bbe8b1e0472e2f9bac",
              },
              {
                x: 999,
                y: 1660,
                _id: "652262bbe8b1e0472e2f9bad",
              },
              {
                x: 998,
                y: 1686,
                _id: "652262bbe8b1e0472e2f9bae",
              },
              {
                x: 891,
                y: 1677,
                _id: "652262bbe8b1e0472e2f9baf",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bab",
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
                _id: "652262bbe8b1e0472e2f9bb1",
              },
              {
                x: 1116,
                y: 1666,
                _id: "652262bbe8b1e0472e2f9bb2",
              },
              {
                x: 1114,
                y: 1695,
                _id: "652262bbe8b1e0472e2f9bb3",
              },
              {
                x: 1003,
                y: 1687,
                _id: "652262bbe8b1e0472e2f9bb4",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bb0",
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
                _id: "652262bbe8b1e0472e2f9bb6",
              },
              {
                x: 876,
                y: 1678,
                _id: "652262bbe8b1e0472e2f9bb7",
              },
              {
                x: 876,
                y: 1699,
                _id: "652262bbe8b1e0472e2f9bb8",
              },
              {
                x: 862,
                y: 1699,
                _id: "652262bbe8b1e0472e2f9bb9",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bb5",
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
                _id: "652262bbe8b1e0472e2f9bbb",
              },
              {
                x: 772,
                y: 1696,
                _id: "652262bbe8b1e0472e2f9bbc",
              },
              {
                x: 771,
                y: 1723,
                _id: "652262bbe8b1e0472e2f9bbd",
              },
              {
                x: 697,
                y: 1717,
                _id: "652262bbe8b1e0472e2f9bbe",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bba",
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
                _id: "652262bbe8b1e0472e2f9bc0",
              },
              {
                x: 796,
                y: 1696,
                _id: "652262bbe8b1e0472e2f9bc1",
              },
              {
                x: 796,
                y: 1724,
                _id: "652262bbe8b1e0472e2f9bc2",
              },
              {
                x: 776,
                y: 1723,
                _id: "652262bbe8b1e0472e2f9bc3",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bbf",
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
                _id: "652262bbe8b1e0472e2f9bc5",
              },
              {
                x: 919,
                y: 1696,
                _id: "652262bbe8b1e0472e2f9bc6",
              },
              {
                x: 919,
                y: 1722,
                _id: "652262bbe8b1e0472e2f9bc7",
              },
              {
                x: 801,
                y: 1724,
                _id: "652262bbe8b1e0472e2f9bc8",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bc4",
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
                _id: "652262bbe8b1e0472e2f9bca",
              },
              {
                x: 797,
                y: 1757,
                _id: "652262bbe8b1e0472e2f9bcb",
              },
              {
                x: 796,
                y: 1781,
                _id: "652262bbe8b1e0472e2f9bcc",
              },
              {
                x: 724,
                y: 1776,
                _id: "652262bbe8b1e0472e2f9bcd",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bc9",
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
                _id: "652262bbe8b1e0472e2f9bcf",
              },
              {
                x: 872,
                y: 1763,
                _id: "652262bbe8b1e0472e2f9bd0",
              },
              {
                x: 871,
                y: 1787,
                _id: "652262bbe8b1e0472e2f9bd1",
              },
              {
                x: 803,
                y: 1782,
                _id: "652262bbe8b1e0472e2f9bd2",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bce",
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
                _id: "652262bbe8b1e0472e2f9bd4",
              },
              {
                x: 923,
                y: 1767,
                _id: "652262bbe8b1e0472e2f9bd5",
              },
              {
                x: 922,
                y: 1791,
                _id: "652262bbe8b1e0472e2f9bd6",
              },
              {
                x: 876,
                y: 1787,
                _id: "652262bbe8b1e0472e2f9bd7",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bd3",
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
                _id: "652262bbe8b1e0472e2f9bd9",
              },
              {
                x: 1014,
                y: 1774,
                _id: "652262bbe8b1e0472e2f9bda",
              },
              {
                x: 1013,
                y: 1798,
                _id: "652262bbe8b1e0472e2f9bdb",
              },
              {
                x: 951,
                y: 1793,
                _id: "652262bbe8b1e0472e2f9bdc",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bd8",
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
                _id: "652262bbe8b1e0472e2f9bde",
              },
              {
                x: 1094,
                y: 1780,
                _id: "652262bbe8b1e0472e2f9bdf",
              },
              {
                x: 1093,
                y: 1805,
                _id: "652262bbe8b1e0472e2f9be0",
              },
              {
                x: 1017,
                y: 1798,
                _id: "652262bbe8b1e0472e2f9be1",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bdd",
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
                _id: "652262bbe8b1e0472e2f9be3",
              },
              {
                x: 1176,
                y: 1787,
                _id: "652262bbe8b1e0472e2f9be4",
              },
              {
                x: 1175,
                y: 1812,
                _id: "652262bbe8b1e0472e2f9be5",
              },
              {
                x: 1099,
                y: 1806,
                _id: "652262bbe8b1e0472e2f9be6",
              },
            ],
            _id: "652262bbe8b1e0472e2f9be2",
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
                _id: "652262bbe8b1e0472e2f9be8",
              },
              {
                x: 784,
                y: 1785,
                _id: "652262bbe8b1e0472e2f9be9",
              },
              {
                x: 782,
                y: 1811,
                _id: "652262bbe8b1e0472e2f9bea",
              },
              {
                x: 748,
                y: 1809,
                _id: "652262bbe8b1e0472e2f9beb",
              },
            ],
            _id: "652262bbe8b1e0472e2f9be7",
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
                _id: "652262bbe8b1e0472e2f9bed",
              },
              {
                x: 876,
                y: 1791,
                _id: "652262bbe8b1e0472e2f9bee",
              },
              {
                x: 874,
                y: 1816,
                _id: "652262bbe8b1e0472e2f9bef",
              },
              {
                x: 787,
                y: 1811,
                _id: "652262bbe8b1e0472e2f9bf0",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bec",
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
                _id: "652262bbe8b1e0472e2f9bf2",
              },
              {
                x: 936,
                y: 1796,
                _id: "652262bbe8b1e0472e2f9bf3",
              },
              {
                x: 934,
                y: 1820,
                _id: "652262bbe8b1e0472e2f9bf4",
              },
              {
                x: 880,
                y: 1816,
                _id: "652262bbe8b1e0472e2f9bf5",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bf1",
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
                _id: "652262bbe8b1e0472e2f9bf7",
              },
              {
                x: 949,
                y: 1797,
                _id: "652262bbe8b1e0472e2f9bf8",
              },
              {
                x: 947,
                y: 1821,
                _id: "652262bbe8b1e0472e2f9bf9",
              },
              {
                x: 939,
                y: 1821,
                _id: "652262bbe8b1e0472e2f9bfa",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bf6",
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
                _id: "652262bbe8b1e0472e2f9bfc",
              },
              {
                x: 995,
                y: 1800,
                _id: "652262bbe8b1e0472e2f9bfd",
              },
              {
                x: 993,
                y: 1825,
                _id: "652262bbe8b1e0472e2f9bfe",
              },
              {
                x: 952,
                y: 1822,
                _id: "652262bbe8b1e0472e2f9bff",
              },
            ],
            _id: "652262bbe8b1e0472e2f9bfb",
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
                _id: "652262bbe8b1e0472e2f9c01",
              },
              {
                x: 1028,
                y: 1803,
                _id: "652262bbe8b1e0472e2f9c02",
              },
              {
                x: 1026,
                y: 1828,
                _id: "652262bbe8b1e0472e2f9c03",
              },
              {
                x: 1000,
                y: 1825,
                _id: "652262bbe8b1e0472e2f9c04",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c00",
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
                _id: "652262bbe8b1e0472e2f9c06",
              },
              {
                x: 1061,
                y: 1806,
                _id: "652262bbe8b1e0472e2f9c07",
              },
              {
                x: 1059,
                y: 1830,
                _id: "652262bbe8b1e0472e2f9c08",
              },
              {
                x: 1031,
                y: 1828,
                _id: "652262bbe8b1e0472e2f9c09",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c05",
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
                _id: "652262bbe8b1e0472e2f9c0b",
              },
              {
                x: 1089,
                y: 1808,
                _id: "652262bbe8b1e0472e2f9c0c",
              },
              {
                x: 1087,
                y: 1833,
                _id: "652262bbe8b1e0472e2f9c0d",
              },
              {
                x: 1064,
                y: 1831,
                _id: "652262bbe8b1e0472e2f9c0e",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c0a",
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
                _id: "652262bbe8b1e0472e2f9c10",
              },
              {
                x: 1120,
                y: 1811,
                _id: "652262bbe8b1e0472e2f9c11",
              },
              {
                x: 1119,
                y: 1836,
                _id: "652262bbe8b1e0472e2f9c12",
              },
              {
                x: 1092,
                y: 1834,
                _id: "652262bbe8b1e0472e2f9c13",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c0f",
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
                _id: "652262bbe8b1e0472e2f9c15",
              },
              {
                x: 1153,
                y: 1813,
                _id: "652262bbe8b1e0472e2f9c16",
              },
              {
                x: 1151,
                y: 1839,
                _id: "652262bbe8b1e0472e2f9c17",
              },
              {
                x: 1124,
                y: 1837,
                _id: "652262bbe8b1e0472e2f9c18",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c14",
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
                _id: "652262bbe8b1e0472e2f9c1a",
              },
              {
                x: 857,
                y: 1815,
                _id: "652262bbe8b1e0472e2f9c1b",
              },
              {
                x: 856,
                y: 1842,
                _id: "652262bbe8b1e0472e2f9c1c",
              },
              {
                x: 830,
                y: 1840,
                _id: "652262bbe8b1e0472e2f9c1d",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c19",
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
                _id: "652262bbe8b1e0472e2f9c1f",
              },
              {
                x: 942,
                y: 1824,
                _id: "652262bbe8b1e0472e2f9c20",
              },
              {
                x: 941,
                y: 1849,
                _id: "652262bbe8b1e0472e2f9c21",
              },
              {
                x: 861,
                y: 1842,
                _id: "652262bbe8b1e0472e2f9c22",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c1e",
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
                _id: "652262bbe8b1e0472e2f9c24",
              },
              {
                x: 1062,
                y: 1832,
                _id: "652262bbe8b1e0472e2f9c25",
              },
              {
                x: 1059,
                y: 1858,
                _id: "652262bbe8b1e0472e2f9c26",
              },
              {
                x: 946,
                y: 1849,
                _id: "652262bbe8b1e0472e2f9c27",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c23",
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
                _id: "652262bbe8b1e0472e2f9c29",
              },
              {
                x: 134,
                y: 1832,
                _id: "652262bbe8b1e0472e2f9c2a",
              },
              {
                x: 129,
                y: 1906,
                _id: "652262bbe8b1e0472e2f9c2b",
              },
              {
                x: 72,
                y: 1902,
                _id: "652262bbe8b1e0472e2f9c2c",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c28",
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
                _id: "652262bbe8b1e0472e2f9c2e",
              },
              {
                x: 416,
                y: 1875,
                _id: "652262bbe8b1e0472e2f9c2f",
              },
              {
                x: 415,
                y: 1909,
                _id: "652262bbe8b1e0472e2f9c30",
              },
              {
                x: 240,
                y: 1907,
                _id: "652262bbe8b1e0472e2f9c31",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c2d",
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
                _id: "652262bbe8b1e0472e2f9c33",
              },
              {
                x: 598,
                y: 1876,
                _id: "652262bbe8b1e0472e2f9c34",
              },
              {
                x: 598,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c35",
              },
              {
                x: 422,
                y: 1909,
                _id: "652262bbe8b1e0472e2f9c36",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c32",
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
                _id: "652262bbe8b1e0472e2f9c38",
              },
              {
                x: 672,
                y: 1876,
                _id: "652262bbe8b1e0472e2f9c39",
              },
              {
                x: 672,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c3a",
              },
              {
                x: 605,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c3b",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c37",
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
                _id: "652262bbe8b1e0472e2f9c3d",
              },
              {
                x: 703,
                y: 1876,
                _id: "652262bbe8b1e0472e2f9c3e",
              },
              {
                x: 703,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c3f",
              },
              {
                x: 679,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c40",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c3c",
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
                _id: "652262bbe8b1e0472e2f9c42",
              },
              {
                x: 806,
                y: 1877,
                _id: "652262bbe8b1e0472e2f9c43",
              },
              {
                x: 806,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c44",
              },
              {
                x: 710,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c45",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c41",
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
                _id: "652262bbe8b1e0472e2f9c47",
              },
              {
                x: 861,
                y: 1877,
                _id: "652262bbe8b1e0472e2f9c48",
              },
              {
                x: 861,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c49",
              },
              {
                x: 812,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c4a",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c46",
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
                _id: "652262bbe8b1e0472e2f9c4c",
              },
              {
                x: 1017,
                y: 1878,
                _id: "652262bbe8b1e0472e2f9c4d",
              },
              {
                x: 1017,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c4e",
              },
              {
                x: 868,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c4f",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c4b",
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
                _id: "652262bbe8b1e0472e2f9c51",
              },
              {
                x: 1082,
                y: 1879,
                _id: "652262bbe8b1e0472e2f9c52",
              },
              {
                x: 1082,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c53",
              },
              {
                x: 1024,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c54",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c50",
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
                _id: "652262bbe8b1e0472e2f9c56",
              },
              {
                x: 1196,
                y: 1880,
                _id: "652262bbe8b1e0472e2f9c57",
              },
              {
                x: 1196,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c58",
              },
              {
                x: 1089,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c59",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c55",
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
                _id: "652262bbe8b1e0472e2f9c5b",
              },
              {
                x: 1328,
                y: 1881,
                _id: "652262bbe8b1e0472e2f9c5c",
              },
              {
                x: 1328,
                y: 1912,
                _id: "652262bbe8b1e0472e2f9c5d",
              },
              {
                x: 1202,
                y: 1913,
                _id: "652262bbe8b1e0472e2f9c5e",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c5a",
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
                _id: "652262bbe8b1e0472e2f9c60",
              },
              {
                x: 240,
                y: 1949,
                _id: "652262bbe8b1e0472e2f9c61",
              },
              {
                x: 238,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c62",
              },
              {
                x: 183,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c63",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c5f",
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
                _id: "652262bbe8b1e0472e2f9c65",
              },
              {
                x: 274,
                y: 1949,
                _id: "652262bbe8b1e0472e2f9c66",
              },
              {
                x: 274,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c67",
              },
              {
                x: 246,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c68",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c64",
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
                _id: "652262bbe8b1e0472e2f9c6a",
              },
              {
                x: 368,
                y: 1949,
                _id: "652262bbe8b1e0472e2f9c6b",
              },
              {
                x: 367,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c6c",
              },
              {
                x: 281,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c6d",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c69",
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
                _id: "652262bbe8b1e0472e2f9c6f",
              },
              {
                x: 384,
                y: 1950,
                _id: "652262bbe8b1e0472e2f9c70",
              },
              {
                x: 383,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c71",
              },
              {
                x: 374,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c72",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c6e",
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
                _id: "652262bbe8b1e0472e2f9c74",
              },
              {
                x: 522,
                y: 1950,
                _id: "652262bbe8b1e0472e2f9c75",
              },
              {
                x: 521,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c76",
              },
              {
                x: 390,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c77",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c73",
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
                _id: "652262bbe8b1e0472e2f9c79",
              },
              {
                x: 635,
                y: 1951,
                _id: "652262bbe8b1e0472e2f9c7a",
              },
              {
                x: 635,
                y: 1986,
                _id: "652262bbe8b1e0472e2f9c7b",
              },
              {
                x: 528,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c7c",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c78",
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
                _id: "652262bbe8b1e0472e2f9c7e",
              },
              {
                x: 339,
                y: 1983,
                _id: "652262bbe8b1e0472e2f9c7f",
              },
              {
                x: 339,
                y: 2017,
                _id: "652262bbe8b1e0472e2f9c80",
              },
              {
                x: 267,
                y: 2017,
                _id: "652262bbe8b1e0472e2f9c81",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c7d",
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
                _id: "652262bbe8b1e0472e2f9c83",
              },
              {
                x: 360,
                y: 1983,
                _id: "652262bbe8b1e0472e2f9c84",
              },
              {
                x: 360,
                y: 2017,
                _id: "652262bbe8b1e0472e2f9c85",
              },
              {
                x: 346,
                y: 2017,
                _id: "652262bbe8b1e0472e2f9c86",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c82",
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
                _id: "652262bbe8b1e0472e2f9c88",
              },
              {
                x: 550,
                y: 1983,
                _id: "652262bbe8b1e0472e2f9c89",
              },
              {
                x: 550,
                y: 2018,
                _id: "652262bbe8b1e0472e2f9c8a",
              },
              {
                x: 367,
                y: 2017,
                _id: "652262bbe8b1e0472e2f9c8b",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c87",
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
                _id: "652262bbe8b1e0472e2f9c8d",
              },
              {
                x: 1114,
                y: 1956,
                _id: "652262bbe8b1e0472e2f9c8e",
              },
              {
                x: 1114,
                y: 1984,
                _id: "652262bbe8b1e0472e2f9c8f",
              },
              {
                x: 1018,
                y: 1985,
                _id: "652262bbe8b1e0472e2f9c90",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c8c",
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
                _id: "652262bbe8b1e0472e2f9c92",
              },
              {
                x: 1132,
                y: 1956,
                _id: "652262bbe8b1e0472e2f9c93",
              },
              {
                x: 1131,
                y: 1984,
                _id: "652262bbe8b1e0472e2f9c94",
              },
              {
                x: 1122,
                y: 1984,
                _id: "652262bbe8b1e0472e2f9c95",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c91",
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
                _id: "652262bbe8b1e0472e2f9c97",
              },
              {
                x: 1278,
                y: 1957,
                _id: "652262bbe8b1e0472e2f9c98",
              },
              {
                x: 1277,
                y: 1987,
                _id: "652262bbe8b1e0472e2f9c99",
              },
              {
                x: 1137,
                y: 1984,
                _id: "652262bbe8b1e0472e2f9c9a",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c96",
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
                _id: "652262bbe8b1e0472e2f9c9c",
              },
              {
                x: 383,
                y: 2128,
                _id: "652262bbe8b1e0472e2f9c9d",
              },
              {
                x: 383,
                y: 2159,
                _id: "652262bbe8b1e0472e2f9c9e",
              },
              {
                x: 274,
                y: 2158,
                _id: "652262bbe8b1e0472e2f9c9f",
              },
            ],
            _id: "652262bbe8b1e0472e2f9c9b",
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
                _id: "652262bbe8b1e0472e2f9ca1",
              },
              {
                x: 488,
                y: 2129,
                _id: "652262bbe8b1e0472e2f9ca2",
              },
              {
                x: 488,
                y: 2160,
                _id: "652262bbe8b1e0472e2f9ca3",
              },
              {
                x: 389,
                y: 2159,
                _id: "652262bbe8b1e0472e2f9ca4",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ca0",
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
                _id: "652262bbe8b1e0472e2f9ca6",
              },
              {
                x: 577,
                y: 2129,
                _id: "652262bbe8b1e0472e2f9ca7",
              },
              {
                x: 576,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9ca8",
              },
              {
                x: 494,
                y: 2160,
                _id: "652262bbe8b1e0472e2f9ca9",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ca5",
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
                _id: "652262bbe8b1e0472e2f9cab",
              },
              {
                x: 593,
                y: 2129,
                _id: "652262bbe8b1e0472e2f9cac",
              },
              {
                x: 593,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cad",
              },
              {
                x: 582,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cae",
              },
            ],
            _id: "652262bbe8b1e0472e2f9caa",
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
                _id: "652262bbe8b1e0472e2f9cb0",
              },
              {
                x: 651,
                y: 2130,
                _id: "652262bbe8b1e0472e2f9cb1",
              },
              {
                x: 651,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cb2",
              },
              {
                x: 599,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cb3",
              },
            ],
            _id: "652262bbe8b1e0472e2f9caf",
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
                _id: "652262bbe8b1e0472e2f9cb5",
              },
              {
                x: 690,
                y: 2130,
                _id: "652262bbe8b1e0472e2f9cb6",
              },
              {
                x: 689,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cb7",
              },
              {
                x: 659,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cb8",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cb4",
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
                _id: "652262bbe8b1e0472e2f9cba",
              },
              {
                x: 779,
                y: 2130,
                _id: "652262bbe8b1e0472e2f9cbb",
              },
              {
                x: 778,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cbc",
              },
              {
                x: 695,
                y: 2161,
                _id: "652262bbe8b1e0472e2f9cbd",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cb9",
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
                _id: "652262bbe8b1e0472e2f9cbf",
              },
              {
                x: 793,
                y: 2130,
                _id: "652262bbe8b1e0472e2f9cc0",
              },
              {
                x: 792,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cc1",
              },
              {
                x: 784,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cc2",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cbe",
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
                _id: "652262bbe8b1e0472e2f9cc4",
              },
              {
                x: 849,
                y: 2131,
                _id: "652262bbe8b1e0472e2f9cc5",
              },
              {
                x: 849,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cc6",
              },
              {
                x: 798,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cc7",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cc3",
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
                _id: "652262bbe8b1e0472e2f9cc9",
              },
              {
                x: 893,
                y: 2131,
                _id: "652262bbe8b1e0472e2f9cca",
              },
              {
                x: 893,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9ccb",
              },
              {
                x: 855,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9ccc",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cc8",
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
                _id: "652262bbe8b1e0472e2f9cce",
              },
              {
                x: 1017,
                y: 2132,
                _id: "652262bbe8b1e0472e2f9ccf",
              },
              {
                x: 1017,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cd0",
              },
              {
                x: 901,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cd1",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ccd",
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
                _id: "652262bbe8b1e0472e2f9cd3",
              },
              {
                x: 1122,
                y: 2132,
                _id: "652262bbe8b1e0472e2f9cd4",
              },
              {
                x: 1121,
                y: 2163,
                _id: "652262bbe8b1e0472e2f9cd5",
              },
              {
                x: 1023,
                y: 2162,
                _id: "652262bbe8b1e0472e2f9cd6",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cd2",
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
                _id: "652262bbe8b1e0472e2f9cd8",
              },
              {
                x: 1205,
                y: 2133,
                _id: "652262bbe8b1e0472e2f9cd9",
              },
              {
                x: 1204,
                y: 2163,
                _id: "652262bbe8b1e0472e2f9cda",
              },
              {
                x: 1128,
                y: 2163,
                _id: "652262bbe8b1e0472e2f9cdb",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cd7",
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
                _id: "652262bbe8b1e0472e2f9cdd",
              },
              {
                x: 1293,
                y: 2133,
                _id: "652262bbe8b1e0472e2f9cde",
              },
              {
                x: 1293,
                y: 2163,
                _id: "652262bbe8b1e0472e2f9cdf",
              },
              {
                x: 1210,
                y: 2163,
                _id: "652262bbe8b1e0472e2f9ce0",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cdc",
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
                _id: "652262bbe8b1e0472e2f9ce2",
              },
              {
                x: 1441,
                y: 2200,
                _id: "652262bbe8b1e0472e2f9ce3",
              },
              {
                x: 1441,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9ce4",
              },
              {
                x: 1390,
                y: 2225,
                _id: "652262bbe8b1e0472e2f9ce5",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ce1",
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
                _id: "652262bbe8b1e0472e2f9ce7",
              },
              {
                x: 1458,
                y: 2200,
                _id: "652262bbe8b1e0472e2f9ce8",
              },
              {
                x: 1458,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9ce9",
              },
              {
                x: 1446,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9cea",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ce6",
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
                _id: "652262bbe8b1e0472e2f9cec",
              },
              {
                x: 1496,
                y: 2200,
                _id: "652262bbe8b1e0472e2f9ced",
              },
              {
                x: 1496,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9cee",
              },
              {
                x: 1463,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9cef",
              },
            ],
            _id: "652262bbe8b1e0472e2f9ceb",
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
                _id: "652262bbe8b1e0472e2f9cf1",
              },
              {
                x: 1516,
                y: 2200,
                _id: "652262bbe8b1e0472e2f9cf2",
              },
              {
                x: 1516,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9cf3",
              },
              {
                x: 1501,
                y: 2226,
                _id: "652262bbe8b1e0472e2f9cf4",
              },
            ],
            _id: "652262bbe8b1e0472e2f9cf0",
          },
        ],
        styles: [
          {
            isHandwritten: true,
            offset: 528,
            length: 10,
            confidence: 1,
            _id: "652262bbe8b1e0472e2f9cf5",
          },
          {
            isHandwritten: true,
            offset: 726,
            length: 2,
            confidence: 1,
            _id: "652262bbe8b1e0472e2f9cf6",
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
            _id: "652262bee8b1e0472e2f9cf7",
          },
          {
            content: "12/06/2023",
            category: "date",
            offset: 319,
            length: 10,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cf8",
          },
          {
            content: "prise de sang",
            category: "examinationType",
            offset: 350,
            length: 13,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cf9",
          },
          {
            content: "dans 3 mois",
            category: "time",
            offset: 378,
            length: 11,
            confidence: 0.98,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cfa",
          },
          {
            content: "NFS",
            category: "examinationName",
            offset: 403,
            length: 3,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cfb",
          },
          {
            content: "Plaquettes",
            category: "examinationName",
            offset: 407,
            length: 10,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cfc",
          },
          {
            content: "TP",
            category: "examinationName",
            offset: 418,
            length: 2,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cfd",
          },
          {
            content: "Créatinémie",
            category: "examinationName",
            offset: 421,
            length: 11,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cfe",
          },
          {
            content: "ASAT",
            category: "examinationName",
            offset: 433,
            length: 4,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9cff",
          },
          {
            content: "ALAT",
            category: "examinationName",
            offset: 439,
            length: 4,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d00",
          },
          {
            content: "PAL",
            category: "examinationName",
            offset: 445,
            length: 3,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d01",
          },
          {
            content: "GGT",
            category: "examinationName",
            offset: 450,
            length: 3,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d02",
          },
          {
            content: "Bilirubine totale",
            category: "examinationName",
            offset: 455,
            length: 17,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d03",
          },
          {
            content: "TSH",
            category: "examinationName",
            offset: 473,
            length: 3,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d04",
          },
          {
            content: "Electrophorèse des protéines plasmatiques",
            category: "examinationName",
            offset: 477,
            length: 41,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d05",
          },
          {
            content: "IgM",
            category: "examinationName",
            offset: 519,
            length: 3,
            confidence: 0.99,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d06",
          },
          {
            content: "IgG",
            category: "examinationName",
            offset: 524,
            length: 3,
            confidence: 0.98,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d07",
          },
          {
            content: "10001726214",
            category: "RPPS",
            offset: 852,
            length: 11,
            confidence: 1,
            isHandwritten: false,
            _id: "652262bee8b1e0472e2f9d08",
          },
        ],
        acts: [
          {
            content: "NFS",
            offset: 403,
            length: 3,
            confidence: 6.135283,
            codes: ["NF"],
            isHandwritten: false,
            polygon: [
              {
                x: 54,
                y: 1150,
                _id: "652262bee8b1e0472e2f9d0e",
              },
              {
                x: 118,
                y: 1150,
                _id: "652262bee8b1e0472e2f9d0f",
              },
              {
                x: 118,
                y: 1187,
                _id: "652262bee8b1e0472e2f9d10",
              },
              {
                x: 54,
                y: 1187,
                _id: "652262bee8b1e0472e2f9d11",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d0d",
          },
          {
            content: "Plaquettes",
            offset: 407,
            length: 10,
            confidence: 6.135283,
            codes: ["PLAQ_68"],
            isHandwritten: false,
            polygon: [
              {
                x: 126,
                y: 1152,
                _id: "652262bee8b1e0472e2f9d13",
              },
              {
                x: 285,
                y: 1152,
                _id: "652262bee8b1e0472e2f9d14",
              },
              {
                x: 285,
                y: 1188,
                _id: "652262bee8b1e0472e2f9d15",
              },
              {
                x: 126,
                y: 1188,
                _id: "652262bee8b1e0472e2f9d16",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d12",
          },
          {
            content: "TP",
            offset: 418,
            length: 2,
            confidence: 7.5399384,
            codes: ["TP"],
            isHandwritten: false,
            polygon: [
              {
                x: 58,
                y: 1186,
                _id: "652262bee8b1e0472e2f9d18",
              },
              {
                x: 93,
                y: 1186,
                _id: "652262bee8b1e0472e2f9d19",
              },
              {
                x: 93,
                y: 1220,
                _id: "652262bee8b1e0472e2f9d1a",
              },
              {
                x: 58,
                y: 1220,
                _id: "652262bee8b1e0472e2f9d1b",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d17",
          },
          {
            content: "ASAT",
            offset: 433,
            length: 4,
            confidence: 6.456607,
            codes: ["ASAT"],
            isHandwritten: false,
            polygon: [
              {
                x: 56,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d1d",
              },
              {
                x: 148,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d1e",
              },
              {
                x: 148,
                y: 1300,
                _id: "652262bee8b1e0472e2f9d1f",
              },
              {
                x: 56,
                y: 1300,
                _id: "652262bee8b1e0472e2f9d20",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d1c",
          },
          {
            content: "ALAT",
            offset: 439,
            length: 4,
            confidence: 6.456607,
            codes: ["ALAT"],
            isHandwritten: false,
            polygon: [
              {
                x: 155,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d22",
              },
              {
                x: 247,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d23",
              },
              {
                x: 247,
                y: 1301,
                _id: "652262bee8b1e0472e2f9d24",
              },
              {
                x: 155,
                y: 1301,
                _id: "652262bee8b1e0472e2f9d25",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d21",
          },
          {
            content: "PAL",
            offset: 445,
            length: 3,
            confidence: 7.5399384,
            codes: ["PAL"],
            isHandwritten: false,
            polygon: [
              {
                x: 254,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d27",
              },
              {
                x: 327,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d28",
              },
              {
                x: 327,
                y: 1302,
                _id: "652262bee8b1e0472e2f9d29",
              },
              {
                x: 254,
                y: 1302,
                _id: "652262bee8b1e0472e2f9d2a",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d26",
          },
          {
            content: "GGT",
            offset: 450,
            length: 3,
            confidence: 6.886811,
            codes: ["GGT_68"],
            isHandwritten: false,
            polygon: [
              {
                x: 334,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d2c",
              },
              {
                x: 416,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d2d",
              },
              {
                x: 416,
                y: 1302,
                _id: "652262bee8b1e0472e2f9d2e",
              },
              {
                x: 334,
                y: 1302,
                _id: "652262bee8b1e0472e2f9d2f",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d2b",
          },
          {
            content: "Bilirubine totale",
            offset: 455,
            length: 17,
            confidence: 7.7673135,
            codes: ["BT_68"],
            isHandwritten: false,
            polygon: [
              {
                x: 423,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d31",
              },
              {
                x: 651,
                y: 1263,
                _id: "652262bee8b1e0472e2f9d32",
              },
              {
                x: 651,
                y: 1303,
                _id: "652262bee8b1e0472e2f9d33",
              },
              {
                x: 423,
                y: 1303,
                _id: "652262bee8b1e0472e2f9d34",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d30",
          },
          {
            content: "TSH",
            offset: 473,
            length: 3,
            confidence: 5.878711,
            codes: ["TSH_68"],
            isHandwritten: false,
            polygon: [
              {
                x: 58,
                y: 1338,
                _id: "652262bee8b1e0472e2f9d36",
              },
              {
                x: 117,
                y: 1338,
                _id: "652262bee8b1e0472e2f9d37",
              },
              {
                x: 117,
                y: 1371,
                _id: "652262bee8b1e0472e2f9d38",
              },
              {
                x: 58,
                y: 1371,
                _id: "652262bee8b1e0472e2f9d39",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d35",
          },
          {
            content: "Electrophorèse des protéines plasmatiques",
            offset: 477,
            length: 41,
            confidence: 9.75549,
            codes: ["PRG"],
            isHandwritten: false,
            polygon: [
              {
                x: 57,
                y: 1413,
                _id: "652262bee8b1e0472e2f9d3b",
              },
              {
                x: 681,
                y: 1413,
                _id: "652262bee8b1e0472e2f9d3c",
              },
              {
                x: 681,
                y: 1454,
                _id: "652262bee8b1e0472e2f9d3d",
              },
              {
                x: 57,
                y: 1454,
                _id: "652262bee8b1e0472e2f9d3e",
              },
            ],
            ALD: false,
            warning: false,
            isDeleted: false,
            isAdded: false,
            _id: "652262bee8b1e0472e2f9d3a",
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
            _id: "652262bee8b1e0472e2f9d0b",
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
            _id: "652262bee8b1e0472e2f9d0c",
          },
        ],
        createdAt: "2023-10-08T08:05:09.380Z",
        updatedAt: "2023-10-08T08:05:18.849Z",
        __v: 1,
        s3Key: "652262b5e8b1e0472e2f99ec.jpeg",
        content:
          "CENTRE HOSPITALIER UNIVERSITAIRE DE REIMS Hôpital Robert Debré\nIdentification du prescripteur Service d'Hépato-Gastro-Entérologie Prescripteur : Dr HEURGUE, Alexandra\nNº RPPS : 10001756922\n3/6\nIdentification du patient\nGUILLAUME née FROMENT Nelly 1 RUE DU VIVIER 51110 CAUREL\nNée le 08/09/1946 IPP : 80210053\nReims, le 12/06/2023\nORDONNANCE\nSexe : F prise de sang maintenant et dans 3 mois\nAge : 76 ans\nNFS Plaquettes TP Créatinémie ASAT, ALAT, PAL, GGT, Bilirubine totale\nTSH\nElectrophorèse des protéines plasmatiques IgM, IgG\n1)14/06/23\nPoids : kg\nTaille : cm\nDr HEURGUE, Alexandra Dogteur Alexandra MEURGUY\nP\nService et Signature\nHopital Robert D: 51092 FSMIS CEDEX\nTel 073076 7170 - Fax 03 26 78 88 36 Nº FINESS 510002447\n2)\nMédicaments substituables dans le groupe des génériques sauf mention contraire.\nChef de service : Professeur CADIOT RPPS : 10001726214\nFINESS : 510002447\nHOPITAL ROBERT DEBRE - CHU de REIMS - RUE DU GENERAL KOENIG 51092 REIMS\nPage 1 sur 1",
        width: 1653,
        height: 2339,
        isHandwritten: true,
      },
    };

    console.log(response.data);
    window.postMessage({ message: "insertActs", data: response.data }, "*");
  },
  false
);

const launchScan = async () => {
  // const result = await DWTChromeExtension.scan();

  // return `data:image/png;base64,${result._content}`;

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

  return result;
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
