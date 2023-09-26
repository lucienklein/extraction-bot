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
        _id: "651293610dee39eaa418fb64",
        words: [
          {
            content: "CENTRE",
            offset: 0,
            length: 6,
            confidence: 0.995,
            polygon: [
              {
                x: 701,
                y: 86,
                _id: "651293670dee39eaa418fb67",
              },
              {
                x: 815,
                y: 83,
                _id: "651293670dee39eaa418fb68",
              },
              {
                x: 815,
                y: 114,
                _id: "651293670dee39eaa418fb69",
              },
              {
                x: 702,
                y: 114,
                _id: "651293670dee39eaa418fb6a",
              },
            ],
            _id: "651293670dee39eaa418fb66",
          },
          {
            content: "DE",
            offset: 7,
            length: 2,
            confidence: 0.998,
            polygon: [
              {
                x: 822,
                y: 83,
                _id: "651293670dee39eaa418fb6c",
              },
              {
                x: 863,
                y: 83,
                _id: "651293670dee39eaa418fb6d",
              },
              {
                x: 863,
                y: 114,
                _id: "651293670dee39eaa418fb6e",
              },
              {
                x: 822,
                y: 114,
                _id: "651293670dee39eaa418fb6f",
              },
            ],
            _id: "651293670dee39eaa418fb6b",
          },
          {
            content: "SANTÉ",
            offset: 10,
            length: 5,
            confidence: 0.993,
            polygon: [
              {
                x: 871,
                y: 82,
                _id: "651293670dee39eaa418fb71",
              },
              {
                x: 965,
                y: 81,
                _id: "651293670dee39eaa418fb72",
              },
              {
                x: 965,
                y: 114,
                _id: "651293670dee39eaa418fb73",
              },
              {
                x: 871,
                y: 114,
                _id: "651293670dee39eaa418fb74",
              },
            ],
            _id: "651293670dee39eaa418fb70",
          },
          {
            content: "FILIERIS",
            offset: 16,
            length: 8,
            confidence: 0.991,
            polygon: [
              {
                x: 974,
                y: 81,
                _id: "651293670dee39eaa418fb76",
              },
              {
                x: 1095,
                y: 81,
                _id: "651293670dee39eaa418fb77",
              },
              {
                x: 1095,
                y: 114,
                _id: "651293670dee39eaa418fb78",
              },
              {
                x: 974,
                y: 114,
                _id: "651293670dee39eaa418fb79",
              },
            ],
            _id: "651293670dee39eaa418fb75",
          },
          {
            content: "DE",
            offset: 25,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 1101,
                y: 81,
                _id: "651293670dee39eaa418fb7b",
              },
              {
                x: 1140,
                y: 81,
                _id: "651293670dee39eaa418fb7c",
              },
              {
                x: 1140,
                y: 114,
                _id: "651293670dee39eaa418fb7d",
              },
              {
                x: 1101,
                y: 114,
                _id: "651293670dee39eaa418fb7e",
              },
            ],
            _id: "651293670dee39eaa418fb7a",
          },
          {
            content: "WITTENHEIM",
            offset: 28,
            length: 10,
            confidence: 0.966,
            polygon: [
              {
                x: 1149,
                y: 81,
                _id: "651293670dee39eaa418fb80",
              },
              {
                x: 1325,
                y: 82,
                _id: "651293670dee39eaa418fb81",
              },
              {
                x: 1325,
                y: 112,
                _id: "651293670dee39eaa418fb82",
              },
              {
                x: 1149,
                y: 113,
                _id: "651293670dee39eaa418fb83",
              },
            ],
            _id: "651293670dee39eaa418fb7f",
          },
          {
            content: "26,",
            offset: 39,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 742,
                y: 125,
                _id: "651293670dee39eaa418fb85",
              },
              {
                x: 772,
                y: 124,
                _id: "651293670dee39eaa418fb86",
              },
              {
                x: 772,
                y: 148,
                _id: "651293670dee39eaa418fb87",
              },
              {
                x: 742,
                y: 148,
                _id: "651293670dee39eaa418fb88",
              },
            ],
            _id: "651293670dee39eaa418fb84",
          },
          {
            content: "rue",
            offset: 43,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 777,
                y: 124,
                _id: "651293670dee39eaa418fb8a",
              },
              {
                x: 813,
                y: 124,
                _id: "651293670dee39eaa418fb8b",
              },
              {
                x: 813,
                y: 148,
                _id: "651293670dee39eaa418fb8c",
              },
              {
                x: 777,
                y: 148,
                _id: "651293670dee39eaa418fb8d",
              },
            ],
            _id: "651293670dee39eaa418fb89",
          },
          {
            content: "du",
            offset: 47,
            length: 2,
            confidence: 0.995,
            polygon: [
              {
                x: 818,
                y: 124,
                _id: "651293670dee39eaa418fb8f",
              },
              {
                x: 843,
                y: 123,
                _id: "651293670dee39eaa418fb90",
              },
              {
                x: 843,
                y: 149,
                _id: "651293670dee39eaa418fb91",
              },
              {
                x: 818,
                y: 148,
                _id: "651293670dee39eaa418fb92",
              },
            ],
            _id: "651293670dee39eaa418fb8e",
          },
          {
            content: "Mal",
            offset: 50,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 848,
                y: 123,
                _id: "651293670dee39eaa418fb94",
              },
              {
                x: 885,
                y: 123,
                _id: "651293670dee39eaa418fb95",
              },
              {
                x: 885,
                y: 149,
                _id: "651293670dee39eaa418fb96",
              },
              {
                x: 848,
                y: 149,
                _id: "651293670dee39eaa418fb97",
              },
            ],
            _id: "651293670dee39eaa418fb93",
          },
          {
            content: "de",
            offset: 54,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 890,
                y: 123,
                _id: "651293670dee39eaa418fb99",
              },
              {
                x: 915,
                y: 123,
                _id: "651293670dee39eaa418fb9a",
              },
              {
                x: 915,
                y: 149,
                _id: "651293670dee39eaa418fb9b",
              },
              {
                x: 890,
                y: 149,
                _id: "651293670dee39eaa418fb9c",
              },
            ],
            _id: "651293670dee39eaa418fb98",
          },
          {
            content: "Lattre",
            offset: 57,
            length: 6,
            confidence: 0.996,
            polygon: [
              {
                x: 920,
                y: 123,
                _id: "651293670dee39eaa418fb9e",
              },
              {
                x: 980,
                y: 122,
                _id: "651293670dee39eaa418fb9f",
              },
              {
                x: 980,
                y: 149,
                _id: "651293670dee39eaa418fba0",
              },
              {
                x: 920,
                y: 149,
                _id: "651293670dee39eaa418fba1",
              },
            ],
            _id: "651293670dee39eaa418fb9d",
          },
          {
            content: "de",
            offset: 64,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 985,
                y: 122,
                _id: "651293670dee39eaa418fba3",
              },
              {
                x: 1012,
                y: 122,
                _id: "651293670dee39eaa418fba4",
              },
              {
                x: 1012,
                y: 149,
                _id: "651293670dee39eaa418fba5",
              },
              {
                x: 985,
                y: 149,
                _id: "651293670dee39eaa418fba6",
              },
            ],
            _id: "651293670dee39eaa418fba2",
          },
          {
            content: "Tassigny",
            offset: 67,
            length: 8,
            confidence: 0.994,
            polygon: [
              {
                x: 1017,
                y: 122,
                _id: "651293670dee39eaa418fba8",
              },
              {
                x: 1109,
                y: 121,
                _id: "651293670dee39eaa418fba9",
              },
              {
                x: 1109,
                y: 148,
                _id: "651293670dee39eaa418fbaa",
              },
              {
                x: 1017,
                y: 149,
                _id: "651293670dee39eaa418fbab",
              },
            ],
            _id: "651293670dee39eaa418fba7",
          },
          {
            content: "68270",
            offset: 76,
            length: 5,
            confidence: 0.995,
            polygon: [
              {
                x: 1114,
                y: 121,
                _id: "651293670dee39eaa418fbad",
              },
              {
                x: 1180,
                y: 121,
                _id: "651293670dee39eaa418fbae",
              },
              {
                x: 1180,
                y: 147,
                _id: "651293670dee39eaa418fbaf",
              },
              {
                x: 1114,
                y: 148,
                _id: "651293670dee39eaa418fbb0",
              },
            ],
            _id: "651293670dee39eaa418fbac",
          },
          {
            content: "Wittenheim",
            offset: 82,
            length: 10,
            confidence: 0.968,
            polygon: [
              {
                x: 1185,
                y: 121,
                _id: "651293670dee39eaa418fbb2",
              },
              {
                x: 1292,
                y: 121,
                _id: "651293670dee39eaa418fbb3",
              },
              {
                x: 1292,
                y: 146,
                _id: "651293670dee39eaa418fbb4",
              },
              {
                x: 1185,
                y: 147,
                _id: "651293670dee39eaa418fbb5",
              },
            ],
            _id: "651293670dee39eaa418fbb1",
          },
          {
            content: "Tél",
            offset: 93,
            length: 3,
            confidence: 0.994,
            polygon: [
              {
                x: 808,
                y: 163,
                _id: "651293670dee39eaa418fbb7",
              },
              {
                x: 834,
                y: 163,
                _id: "651293670dee39eaa418fbb8",
              },
              {
                x: 834,
                y: 187,
                _id: "651293670dee39eaa418fbb9",
              },
              {
                x: 808,
                y: 187,
                _id: "651293670dee39eaa418fbba",
              },
            ],
            _id: "651293670dee39eaa418fbb6",
          },
          {
            content: ":",
            offset: 97,
            length: 1,
            confidence: 0.996,
            polygon: [
              {
                x: 839,
                y: 163,
                _id: "651293670dee39eaa418fbbc",
              },
              {
                x: 847,
                y: 163,
                _id: "651293670dee39eaa418fbbd",
              },
              {
                x: 847,
                y: 187,
                _id: "651293670dee39eaa418fbbe",
              },
              {
                x: 839,
                y: 187,
                _id: "651293670dee39eaa418fbbf",
              },
            ],
            _id: "651293670dee39eaa418fbbb",
          },
          {
            content: "03.89.52.75.32",
            offset: 99,
            length: 14,
            confidence: 0.991,
            polygon: [
              {
                x: 852,
                y: 163,
                _id: "651293670dee39eaa418fbc1",
              },
              {
                x: 1005,
                y: 161,
                _id: "651293670dee39eaa418fbc2",
              },
              {
                x: 1005,
                y: 187,
                _id: "651293670dee39eaa418fbc3",
              },
              {
                x: 852,
                y: 187,
                _id: "651293670dee39eaa418fbc4",
              },
            ],
            _id: "651293670dee39eaa418fbc0",
          },
          {
            content: "Fax",
            offset: 114,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 1021,
                y: 161,
                _id: "651293670dee39eaa418fbc6",
              },
              {
                x: 1060,
                y: 161,
                _id: "651293670dee39eaa418fbc7",
              },
              {
                x: 1060,
                y: 187,
                _id: "651293670dee39eaa418fbc8",
              },
              {
                x: 1021,
                y: 187,
                _id: "651293670dee39eaa418fbc9",
              },
            ],
            _id: "651293670dee39eaa418fbc5",
          },
          {
            content: ":03.89.50.57.81",
            offset: 118,
            length: 15,
            confidence: 0.991,
            polygon: [
              {
                x: 1065,
                y: 161,
                _id: "651293670dee39eaa418fbcb",
              },
              {
                x: 1224,
                y: 161,
                _id: "651293670dee39eaa418fbcc",
              },
              {
                x: 1224,
                y: 184,
                _id: "651293670dee39eaa418fbcd",
              },
              {
                x: 1065,
                y: 187,
                _id: "651293670dee39eaa418fbce",
              },
            ],
            _id: "651293670dee39eaa418fbca",
          },
          {
            content: "Filieris",
            offset: 134,
            length: 8,
            confidence: 0.88,
            polygon: [
              {
                x: 174,
                y: 175,
                _id: "651293670dee39eaa418fbd0",
              },
              {
                x: 358,
                y: 179,
                _id: "651293670dee39eaa418fbd1",
              },
              {
                x: 358,
                y: 224,
                _id: "651293670dee39eaa418fbd2",
              },
              {
                x: 175,
                y: 221,
                _id: "651293670dee39eaa418fbd3",
              },
            ],
            _id: "651293670dee39eaa418fbcf",
          },
          {
            content: "Consultations",
            offset: 143,
            length: 13,
            confidence: 0.991,
            polygon: [
              {
                x: 1127,
                y: 193,
                _id: "651293670dee39eaa418fbd5",
              },
              {
                x: 1286,
                y: 193,
                _id: "651293670dee39eaa418fbd6",
              },
              {
                x: 1286,
                y: 219,
                _id: "651293670dee39eaa418fbd7",
              },
              {
                x: 1128,
                y: 220,
                _id: "651293670dee39eaa418fbd8",
              },
            ],
            _id: "651293670dee39eaa418fbd4",
          },
          {
            content: "sur",
            offset: 157,
            length: 3,
            confidence: 0.998,
            polygon: [
              {
                x: 1292,
                y: 193,
                _id: "651293670dee39eaa418fbda",
              },
              {
                x: 1330,
                y: 193,
                _id: "651293670dee39eaa418fbdb",
              },
              {
                x: 1330,
                y: 219,
                _id: "651293670dee39eaa418fbdc",
              },
              {
                x: 1292,
                y: 219,
                _id: "651293670dee39eaa418fbdd",
              },
            ],
            _id: "651293670dee39eaa418fbd9",
          },
          {
            content: "rendez-vous",
            offset: 161,
            length: 11,
            confidence: 0.993,
            polygon: [
              {
                x: 1335,
                y: 193,
                _id: "651293670dee39eaa418fbdf",
              },
              {
                x: 1478,
                y: 194,
                _id: "651293670dee39eaa418fbe0",
              },
              {
                x: 1477,
                y: 219,
                _id: "651293670dee39eaa418fbe1",
              },
              {
                x: 1335,
                y: 219,
                _id: "651293670dee39eaa418fbe2",
              },
            ],
            _id: "651293670dee39eaa418fbde",
          },
          {
            content: "Lundi,",
            offset: 173,
            length: 6,
            confidence: 0.996,
            polygon: [
              {
                x: 1093,
                y: 232,
                _id: "651293670dee39eaa418fbe4",
              },
              {
                x: 1155,
                y: 232,
                _id: "651293670dee39eaa418fbe5",
              },
              {
                x: 1155,
                y: 256,
                _id: "651293670dee39eaa418fbe6",
              },
              {
                x: 1093,
                y: 256,
                _id: "651293670dee39eaa418fbe7",
              },
            ],
            _id: "651293670dee39eaa418fbe3",
          },
          {
            content: "mercredi",
            offset: 180,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 1160,
                y: 232,
                _id: "651293670dee39eaa418fbe9",
              },
              {
                x: 1247,
                y: 231,
                _id: "651293670dee39eaa418fbea",
              },
              {
                x: 1247,
                y: 256,
                _id: "651293670dee39eaa418fbeb",
              },
              {
                x: 1160,
                y: 256,
                _id: "651293670dee39eaa418fbec",
              },
            ],
            _id: "651293670dee39eaa418fbe8",
          },
          {
            content: "et",
            offset: 189,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 1251,
                y: 231,
                _id: "651293670dee39eaa418fbee",
              },
              {
                x: 1271,
                y: 231,
                _id: "651293670dee39eaa418fbef",
              },
              {
                x: 1271,
                y: 256,
                _id: "651293670dee39eaa418fbf0",
              },
              {
                x: 1252,
                y: 256,
                _id: "651293670dee39eaa418fbf1",
              },
            ],
            _id: "651293670dee39eaa418fbed",
          },
          {
            content: "vendredi",
            offset: 192,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 1276,
                y: 231,
                _id: "651293670dee39eaa418fbf3",
              },
              {
                x: 1360,
                y: 230,
                _id: "651293670dee39eaa418fbf4",
              },
              {
                x: 1360,
                y: 256,
                _id: "651293670dee39eaa418fbf5",
              },
              {
                x: 1276,
                y: 256,
                _id: "651293670dee39eaa418fbf6",
              },
            ],
            _id: "651293670dee39eaa418fbf2",
          },
          {
            content: ":",
            offset: 201,
            length: 1,
            confidence: 0.997,
            polygon: [
              {
                x: 1364,
                y: 230,
                _id: "651293670dee39eaa418fbf8",
              },
              {
                x: 1373,
                y: 230,
                _id: "651293670dee39eaa418fbf9",
              },
              {
                x: 1373,
                y: 256,
                _id: "651293670dee39eaa418fbfa",
              },
              {
                x: 1365,
                y: 256,
                _id: "651293670dee39eaa418fbfb",
              },
            ],
            _id: "651293670dee39eaa418fbf7",
          },
          {
            content: "après-midi",
            offset: 203,
            length: 10,
            confidence: 0.98,
            polygon: [
              {
                x: 1378,
                y: 230,
                _id: "651293670dee39eaa418fbfd",
              },
              {
                x: 1481,
                y: 230,
                _id: "651293670dee39eaa418fbfe",
              },
              {
                x: 1481,
                y: 255,
                _id: "651293670dee39eaa418fbff",
              },
              {
                x: 1378,
                y: 256,
                _id: "651293670dee39eaa418fc00",
              },
            ],
            _id: "651293670dee39eaa418fbfc",
          },
          {
            content: "Docteur",
            offset: 214,
            length: 7,
            confidence: 0.993,
            polygon: [
              {
                x: 174,
                y: 341,
                _id: "651293670dee39eaa418fc02",
              },
              {
                x: 270,
                y: 341,
                _id: "651293670dee39eaa418fc03",
              },
              {
                x: 270,
                y: 373,
                _id: "651293670dee39eaa418fc04",
              },
              {
                x: 174,
                y: 372,
                _id: "651293670dee39eaa418fc05",
              },
            ],
            _id: "651293670dee39eaa418fc01",
          },
          {
            content: "Philippe",
            offset: 222,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 276,
                y: 341,
                _id: "651293670dee39eaa418fc07",
              },
              {
                x: 371,
                y: 341,
                _id: "651293670dee39eaa418fc08",
              },
              {
                x: 371,
                y: 372,
                _id: "651293670dee39eaa418fc09",
              },
              {
                x: 276,
                y: 373,
                _id: "651293670dee39eaa418fc0a",
              },
            ],
            _id: "651293670dee39eaa418fc06",
          },
          {
            content: "DOLL",
            offset: 231,
            length: 4,
            confidence: 0.988,
            polygon: [
              {
                x: 377,
                y: 341,
                _id: "651293670dee39eaa418fc0c",
              },
              {
                x: 455,
                y: 339,
                _id: "651293670dee39eaa418fc0d",
              },
              {
                x: 455,
                y: 370,
                _id: "651293670dee39eaa418fc0e",
              },
              {
                x: 377,
                y: 372,
                _id: "651293670dee39eaa418fc0f",
              },
            ],
            _id: "651293670dee39eaa418fc0b",
          },
          {
            content: "Médecine",
            offset: 236,
            length: 8,
            confidence: 0.993,
            polygon: [
              {
                x: 173,
                y: 375,
                _id: "651293670dee39eaa418fc11",
              },
              {
                x: 299,
                y: 376,
                _id: "651293670dee39eaa418fc12",
              },
              {
                x: 300,
                y: 406,
                _id: "651293670dee39eaa418fc13",
              },
              {
                x: 174,
                y: 409,
                _id: "651293670dee39eaa418fc14",
              },
            ],
            _id: "651293670dee39eaa418fc10",
          },
          {
            content: "Générale",
            offset: 245,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 306,
                y: 376,
                _id: "651293670dee39eaa418fc16",
              },
              {
                x: 422,
                y: 374,
                _id: "651293670dee39eaa418fc17",
              },
              {
                x: 422,
                y: 406,
                _id: "651293670dee39eaa418fc18",
              },
              {
                x: 306,
                y: 406,
                _id: "651293670dee39eaa418fc19",
              },
            ],
            _id: "651293670dee39eaa418fc15",
          },
          {
            content: "680006939",
            offset: 254,
            length: 9,
            confidence: 0.992,
            polygon: [
              {
                x: 711,
                y: 352,
                _id: "651293670dee39eaa418fc1b",
              },
              {
                x: 824,
                y: 352,
                _id: "651293670dee39eaa418fc1c",
              },
              {
                x: 823,
                y: 373,
                _id: "651293670dee39eaa418fc1d",
              },
              {
                x: 711,
                y: 372,
                _id: "651293670dee39eaa418fc1e",
              },
            ],
            _id: "651293670dee39eaa418fc1a",
          },
          {
            content: "Mardi",
            offset: 264,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 1269,
                y: 267,
                _id: "651293670dee39eaa418fc20",
              },
              {
                x: 1328,
                y: 267,
                _id: "651293670dee39eaa418fc21",
              },
              {
                x: 1328,
                y: 293,
                _id: "651293670dee39eaa418fc22",
              },
              {
                x: 1270,
                y: 293,
                _id: "651293670dee39eaa418fc23",
              },
            ],
            _id: "651293670dee39eaa418fc1f",
          },
          {
            content: "et",
            offset: 270,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 1333,
                y: 267,
                _id: "651293670dee39eaa418fc25",
              },
              {
                x: 1352,
                y: 267,
                _id: "651293670dee39eaa418fc26",
              },
              {
                x: 1352,
                y: 292,
                _id: "651293670dee39eaa418fc27",
              },
              {
                x: 1333,
                y: 293,
                _id: "651293670dee39eaa418fc28",
              },
            ],
            _id: "651293670dee39eaa418fc24",
          },
          {
            content: "jeudi",
            offset: 273,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 1357,
                y: 267,
                _id: "651293670dee39eaa418fc2a",
              },
              {
                x: 1403,
                y: 268,
                _id: "651293670dee39eaa418fc2b",
              },
              {
                x: 1403,
                y: 292,
                _id: "651293670dee39eaa418fc2c",
              },
              {
                x: 1357,
                y: 292,
                _id: "651293670dee39eaa418fc2d",
              },
            ],
            _id: "651293670dee39eaa418fc29",
          },
          {
            content: ":",
            offset: 279,
            length: 1,
            confidence: 0.997,
            polygon: [
              {
                x: 1408,
                y: 268,
                _id: "651293670dee39eaa418fc2f",
              },
              {
                x: 1414,
                y: 268,
                _id: "651293670dee39eaa418fc30",
              },
              {
                x: 1414,
                y: 292,
                _id: "651293670dee39eaa418fc31",
              },
              {
                x: 1408,
                y: 292,
                _id: "651293670dee39eaa418fc32",
              },
            ],
            _id: "651293670dee39eaa418fc2e",
          },
          {
            content: "matin",
            offset: 281,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 1419,
                y: 268,
                _id: "651293670dee39eaa418fc34",
              },
              {
                x: 1479,
                y: 270,
                _id: "651293670dee39eaa418fc35",
              },
              {
                x: 1479,
                y: 292,
                _id: "651293670dee39eaa418fc36",
              },
              {
                x: 1419,
                y: 292,
                _id: "651293670dee39eaa418fc37",
              },
            ],
            _id: "651293670dee39eaa418fc33",
          },
          {
            content: "10002457751",
            offset: 287,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 1139,
                y: 350,
                _id: "651293670dee39eaa418fc39",
              },
              {
                x: 1278,
                y: 349,
                _id: "651293670dee39eaa418fc3a",
              },
              {
                x: 1278,
                y: 371,
                _id: "651293670dee39eaa418fc3b",
              },
              {
                x: 1140,
                y: 373,
                _id: "651293670dee39eaa418fc3c",
              },
            ],
            _id: "651293670dee39eaa418fc38",
          },
          {
            content: "philippe.doll@medecin.mssante.fr",
            offset: 299,
            length: 32,
            confidence: 0.909,
            polygon: [
              {
                x: 809,
                y: 402,
                _id: "651293670dee39eaa418fc3e",
              },
              {
                x: 1225,
                y: 401,
                _id: "651293670dee39eaa418fc3f",
              },
              {
                x: 1225,
                y: 428,
                _id: "651293670dee39eaa418fc40",
              },
              {
                x: 809,
                y: 436,
                _id: "651293670dee39eaa418fc41",
              },
            ],
            _id: "651293670dee39eaa418fc3d",
          },
          {
            content: "philippe.doll.filieris@medical68.apicrypt.org",
            offset: 332,
            length: 45,
            confidence: 0.769,
            polygon: [
              {
                x: 752,
                y: 439,
                _id: "651293670dee39eaa418fc43",
              },
              {
                x: 1290,
                y: 438,
                _id: "651293670dee39eaa418fc44",
              },
              {
                x: 1289,
                y: 469,
                _id: "651293670dee39eaa418fc45",
              },
              {
                x: 753,
                y: 472,
                _id: "651293670dee39eaa418fc46",
              },
            ],
            _id: "651293670dee39eaa418fc42",
          },
          {
            content: "Madame",
            offset: 378,
            length: 6,
            confidence: 0.993,
            polygon: [
              {
                x: 173,
                y: 614,
                _id: "651293670dee39eaa418fc48",
              },
              {
                x: 273,
                y: 614,
                _id: "651293670dee39eaa418fc49",
              },
              {
                x: 272,
                y: 638,
                _id: "651293670dee39eaa418fc4a",
              },
              {
                x: 173,
                y: 638,
                _id: "651293670dee39eaa418fc4b",
              },
            ],
            _id: "651293670dee39eaa418fc47",
          },
          {
            content: "Femme",
            offset: 385,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 175,
                y: 652,
                _id: "651293670dee39eaa418fc4d",
              },
              {
                x: 265,
                y: 653,
                _id: "651293670dee39eaa418fc4e",
              },
              {
                x: 264,
                y: 679,
                _id: "651293670dee39eaa418fc4f",
              },
              {
                x: 175,
                y: 679,
                _id: "651293670dee39eaa418fc50",
              },
            ],
            _id: "651293670dee39eaa418fc4c",
          },
          {
            content: "Lucien",
            offset: 391,
            length: 6,
            confidence: 0.995,
            polygon: [
              {
                x: 440,
                y: 612,
                _id: "651293670dee39eaa418fc52",
              },
              {
                x: 541,
                y: 613,
                _id: "651293670dee39eaa418fc53",
              },
              {
                x: 542,
                y: 646,
                _id: "651293670dee39eaa418fc54",
              },
              {
                x: 440,
                y: 646,
                _id: "651293670dee39eaa418fc55",
              },
            ],
            _id: "651293670dee39eaa418fc51",
          },
          {
            content: "Klein",
            offset: 398,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 553,
                y: 613,
                _id: "651293670dee39eaa418fc57",
              },
              {
                x: 631,
                y: 612,
                _id: "651293670dee39eaa418fc58",
              },
              {
                x: 632,
                y: 645,
                _id: "651293670dee39eaa418fc59",
              },
              {
                x: 553,
                y: 646,
                _id: "651293670dee39eaa418fc5a",
              },
            ],
            _id: "651293670dee39eaa418fc56",
          },
          {
            content: "Né(e)",
            offset: 404,
            length: 5,
            confidence: 0.993,
            polygon: [
              {
                x: 174,
                y: 689,
                _id: "651293670dee39eaa418fc5c",
              },
              {
                x: 236,
                y: 691,
                _id: "651293670dee39eaa418fc5d",
              },
              {
                x: 236,
                y: 721,
                _id: "651293670dee39eaa418fc5e",
              },
              {
                x: 174,
                y: 722,
                _id: "651293670dee39eaa418fc5f",
              },
            ],
            _id: "651293670dee39eaa418fc5b",
          },
          {
            content: "le",
            offset: 410,
            length: 2,
            confidence: 0.994,
            polygon: [
              {
                x: 242,
                y: 690,
                _id: "651293670dee39eaa418fc61",
              },
              {
                x: 268,
                y: 690,
                _id: "651293670dee39eaa418fc62",
              },
              {
                x: 268,
                y: 720,
                _id: "651293670dee39eaa418fc63",
              },
              {
                x: 242,
                y: 721,
                _id: "651293670dee39eaa418fc64",
              },
            ],
            _id: "651293670dee39eaa418fc60",
          },
          {
            content: "18/08/1934",
            offset: 413,
            length: 10,
            confidence: 0.991,
            polygon: [
              {
                x: 460,
                y: 688,
                _id: "651293670dee39eaa418fc66",
              },
              {
                x: 588,
                y: 689,
                _id: "651293670dee39eaa418fc67",
              },
              {
                x: 588,
                y: 715,
                _id: "651293670dee39eaa418fc68",
              },
              {
                x: 460,
                y: 717,
                _id: "651293670dee39eaa418fc69",
              },
            ],
            _id: "651293670dee39eaa418fc65",
          },
          {
            content: "88",
            offset: 424,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 593,
                y: 689,
                _id: "651293670dee39eaa418fc6b",
              },
              {
                x: 623,
                y: 690,
                _id: "651293670dee39eaa418fc6c",
              },
              {
                x: 623,
                y: 716,
                _id: "651293670dee39eaa418fc6d",
              },
              {
                x: 594,
                y: 716,
                _id: "651293670dee39eaa418fc6e",
              },
            ],
            _id: "651293670dee39eaa418fc6a",
          },
          {
            content: "ans",
            offset: 427,
            length: 3,
            confidence: 0.998,
            polygon: [
              {
                x: 629,
                y: 690,
                _id: "651293670dee39eaa418fc70",
              },
              {
                x: 674,
                y: 690,
                _id: "651293670dee39eaa418fc71",
              },
              {
                x: 674,
                y: 717,
                _id: "651293670dee39eaa418fc72",
              },
              {
                x: 629,
                y: 716,
                _id: "651293670dee39eaa418fc73",
              },
            ],
            _id: "651293670dee39eaa418fc6f",
          },
          {
            content: "Ordonnance",
            offset: 431,
            length: 10,
            confidence: 0.994,
            polygon: [
              {
                x: 611,
                y: 771,
                _id: "651293670dee39eaa418fc75",
              },
              {
                x: 824,
                y: 768,
                _id: "651293670dee39eaa418fc76",
              },
              {
                x: 824,
                y: 807,
                _id: "651293670dee39eaa418fc77",
              },
              {
                x: 612,
                y: 806,
                _id: "651293670dee39eaa418fc78",
              },
            ],
            _id: "651293670dee39eaa418fc74",
          },
          {
            content: "de",
            offset: 442,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 834,
                y: 768,
                _id: "651293670dee39eaa418fc7a",
              },
              {
                x: 881,
                y: 768,
                _id: "651293670dee39eaa418fc7b",
              },
              {
                x: 881,
                y: 807,
                _id: "651293670dee39eaa418fc7c",
              },
              {
                x: 835,
                y: 807,
                _id: "651293670dee39eaa418fc7d",
              },
            ],
            _id: "651293670dee39eaa418fc79",
          },
          {
            content: "laboratoire",
            offset: 445,
            length: 11,
            confidence: 0.993,
            polygon: [
              {
                x: 892,
                y: 768,
                _id: "651293670dee39eaa418fc7f",
              },
              {
                x: 1080,
                y: 768,
                _id: "651293670dee39eaa418fc80",
              },
              {
                x: 1079,
                y: 804,
                _id: "651293670dee39eaa418fc81",
              },
              {
                x: 892,
                y: 807,
                _id: "651293670dee39eaa418fc82",
              },
            ],
            _id: "651293670dee39eaa418fc7e",
          },
          {
            content: "26/05/2023",
            offset: 457,
            length: 10,
            confidence: 0.993,
            polygon: [
              {
                x: 1143,
                y: 567,
                _id: "651293670dee39eaa418fc84",
              },
              {
                x: 1273,
                y: 566,
                _id: "651293670dee39eaa418fc85",
              },
              {
                x: 1273,
                y: 593,
                _id: "651293670dee39eaa418fc86",
              },
              {
                x: 1143,
                y: 594,
                _id: "651293670dee39eaa418fc87",
              },
            ],
            _id: "651293670dee39eaa418fc83",
          },
          {
            content: "A",
            offset: 468,
            length: 1,
            confidence: 0.817,
            polygon: [
              {
                x: 1179,
                y: 664,
                _id: "651293670dee39eaa418fc89",
              },
              {
                x: 1239,
                y: 656,
                _id: "651293670dee39eaa418fc8a",
              },
              {
                x: 1246,
                y: 750,
                _id: "651293670dee39eaa418fc8b",
              },
              {
                x: 1186,
                y: 758,
                _id: "651293670dee39eaa418fc8c",
              },
            ],
            _id: "651293670dee39eaa418fc88",
          },
          {
            content: "dovale",
            offset: 470,
            length: 6,
            confidence: 0.176,
            polygon: [
              {
                x: 1265,
                y: 652,
                _id: "651293670dee39eaa418fc8e",
              },
              {
                x: 1501,
                y: 636,
                _id: "651293670dee39eaa418fc8f",
              },
              {
                x: 1503,
                y: 732,
                _id: "651293670dee39eaa418fc90",
              },
              {
                x: 1271,
                y: 747,
                _id: "651293670dee39eaa418fc91",
              },
            ],
            _id: "651293670dee39eaa418fc8d",
          },
          {
            content: "Prescriptions",
            offset: 477,
            length: 13,
            confidence: 0.981,
            polygon: [
              {
                x: 322,
                y: 884,
                _id: "651293670dee39eaa418fc93",
              },
              {
                x: 445,
                y: 883,
                _id: "651293670dee39eaa418fc94",
              },
              {
                x: 445,
                y: 909,
                _id: "651293670dee39eaa418fc95",
              },
              {
                x: 322,
                y: 910,
                _id: "651293670dee39eaa418fc96",
              },
            ],
            _id: "651293670dee39eaa418fc92",
          },
          {
            content: "relatives",
            offset: 491,
            length: 9,
            confidence: 0.991,
            polygon: [
              {
                x: 451,
                y: 883,
                _id: "651293670dee39eaa418fc98",
              },
              {
                x: 534,
                y: 883,
                _id: "651293670dee39eaa418fc99",
              },
              {
                x: 535,
                y: 909,
                _id: "651293670dee39eaa418fc9a",
              },
              {
                x: 451,
                y: 909,
                _id: "651293670dee39eaa418fc9b",
              },
            ],
            _id: "651293670dee39eaa418fc97",
          },
          {
            content: "au",
            offset: 501,
            length: 2,
            confidence: 0.994,
            polygon: [
              {
                x: 540,
                y: 883,
                _id: "651293670dee39eaa418fc9d",
              },
              {
                x: 565,
                y: 882,
                _id: "651293670dee39eaa418fc9e",
              },
              {
                x: 565,
                y: 909,
                _id: "651293670dee39eaa418fc9f",
              },
              {
                x: 540,
                y: 909,
                _id: "651293670dee39eaa418fca0",
              },
            ],
            _id: "651293670dee39eaa418fc9c",
          },
          {
            content: "traitement",
            offset: 504,
            length: 10,
            confidence: 0.97,
            polygon: [
              {
                x: 570,
                y: 882,
                _id: "651293670dee39eaa418fca2",
              },
              {
                x: 673,
                y: 882,
                _id: "651293670dee39eaa418fca3",
              },
              {
                x: 673,
                y: 908,
                _id: "651293670dee39eaa418fca4",
              },
              {
                x: 571,
                y: 908,
                _id: "651293670dee39eaa418fca5",
              },
            ],
            _id: "651293670dee39eaa418fca1",
          },
          {
            content: "de",
            offset: 515,
            length: 2,
            confidence: 0.994,
            polygon: [
              {
                x: 678,
                y: 882,
                _id: "651293670dee39eaa418fca7",
              },
              {
                x: 702,
                y: 881,
                _id: "651293670dee39eaa418fca8",
              },
              {
                x: 702,
                y: 908,
                _id: "651293670dee39eaa418fca9",
              },
              {
                x: 678,
                y: 908,
                _id: "651293670dee39eaa418fcaa",
              },
            ],
            _id: "651293670dee39eaa418fca6",
          },
          {
            content: "l'affection",
            offset: 518,
            length: 11,
            confidence: 0.961,
            polygon: [
              {
                x: 707,
                y: 881,
                _id: "651293670dee39eaa418fcac",
              },
              {
                x: 809,
                y: 881,
                _id: "651293670dee39eaa418fcad",
              },
              {
                x: 809,
                y: 907,
                _id: "651293670dee39eaa418fcae",
              },
              {
                x: 708,
                y: 908,
                _id: "651293670dee39eaa418fcaf",
              },
            ],
            _id: "651293670dee39eaa418fcab",
          },
          {
            content: "de",
            offset: 530,
            length: 2,
            confidence: 0.97,
            polygon: [
              {
                x: 814,
                y: 881,
                _id: "651293670dee39eaa418fcb1",
              },
              {
                x: 839,
                y: 880,
                _id: "651293670dee39eaa418fcb2",
              },
              {
                x: 840,
                y: 907,
                _id: "651293670dee39eaa418fcb3",
              },
              {
                x: 814,
                y: 907,
                _id: "651293670dee39eaa418fcb4",
              },
            ],
            _id: "651293670dee39eaa418fcb0",
          },
          {
            content: "longue",
            offset: 533,
            length: 6,
            confidence: 0.967,
            polygon: [
              {
                x: 845,
                y: 880,
                _id: "651293670dee39eaa418fcb6",
              },
              {
                x: 915,
                y: 880,
                _id: "651293670dee39eaa418fcb7",
              },
              {
                x: 915,
                y: 906,
                _id: "651293670dee39eaa418fcb8",
              },
              {
                x: 845,
                y: 907,
                _id: "651293670dee39eaa418fcb9",
              },
            ],
            _id: "651293670dee39eaa418fcb5",
          },
          {
            content: "durée",
            offset: 540,
            length: 5,
            confidence: 0.969,
            polygon: [
              {
                x: 920,
                y: 880,
                _id: "651293670dee39eaa418fcbb",
              },
              {
                x: 976,
                y: 879,
                _id: "651293670dee39eaa418fcbc",
              },
              {
                x: 977,
                y: 906,
                _id: "651293670dee39eaa418fcbd",
              },
              {
                x: 920,
                y: 906,
                _id: "651293670dee39eaa418fcbe",
              },
            ],
            _id: "651293670dee39eaa418fcba",
          },
          {
            content: "reconnue",
            offset: 546,
            length: 8,
            confidence: 0.957,
            polygon: [
              {
                x: 982,
                y: 879,
                _id: "651293670dee39eaa418fcc0",
              },
              {
                x: 1076,
                y: 879,
                _id: "651293670dee39eaa418fcc1",
              },
              {
                x: 1076,
                y: 905,
                _id: "651293670dee39eaa418fcc2",
              },
              {
                x: 982,
                y: 906,
                _id: "651293670dee39eaa418fcc3",
              },
            ],
            _id: "651293670dee39eaa418fcbf",
          },
          {
            content: "(AFFECTION",
            offset: 555,
            length: 10,
            confidence: 0.886,
            polygon: [
              {
                x: 1081,
                y: 879,
                _id: "651293670dee39eaa418fcc5",
              },
              {
                x: 1209,
                y: 878,
                _id: "651293670dee39eaa418fcc6",
              },
              {
                x: 1209,
                y: 904,
                _id: "651293670dee39eaa418fcc7",
              },
              {
                x: 1081,
                y: 905,
                _id: "651293670dee39eaa418fcc8",
              },
            ],
            _id: "651293670dee39eaa418fcc4",
          },
          {
            content: "EXONERANTE)",
            offset: 566,
            length: 11,
            confidence: 0.961,
            polygon: [
              {
                x: 1215,
                y: 878,
                _id: "651293670dee39eaa418fcca",
              },
              {
                x: 1374,
                y: 876,
                _id: "651293670dee39eaa418fccb",
              },
              {
                x: 1375,
                y: 902,
                _id: "651293670dee39eaa418fccc",
              },
              {
                x: 1215,
                y: 904,
                _id: "651293670dee39eaa418fccd",
              },
            ],
            _id: "651293670dee39eaa418fcc9",
          },
          {
            content: "Ionogramme",
            offset: 578,
            length: 10,
            confidence: 0.993,
            polygon: [
              {
                x: 174,
                y: 980,
                _id: "651293670dee39eaa418fccf",
              },
              {
                x: 369,
                y: 977,
                _id: "651293670dee39eaa418fcd0",
              },
              {
                x: 369,
                y: 1015,
                _id: "651293670dee39eaa418fcd1",
              },
              {
                x: 174,
                y: 1017,
                _id: "651293670dee39eaa418fcd2",
              },
            ],
            _id: "651293670dee39eaa418fcce",
          },
          {
            content: "plasmatique",
            offset: 589,
            length: 11,
            confidence: 0.993,
            polygon: [
              {
                x: 377,
                y: 977,
                _id: "651293670dee39eaa418fcd4",
              },
              {
                x: 562,
                y: 975,
                _id: "651293670dee39eaa418fcd5",
              },
              {
                x: 562,
                y: 1012,
                _id: "651293670dee39eaa418fcd6",
              },
              {
                x: 377,
                y: 1015,
                _id: "651293670dee39eaa418fcd7",
              },
            ],
            _id: "651293670dee39eaa418fcd3",
          },
          {
            content: "Exploration",
            offset: 601,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 178,
                y: 1018,
                _id: "651293670dee39eaa418fcd9",
              },
              {
                x: 342,
                y: 1016,
                _id: "651293670dee39eaa418fcda",
              },
              {
                x: 342,
                y: 1053,
                _id: "651293670dee39eaa418fcdb",
              },
              {
                x: 177,
                y: 1054,
                _id: "651293670dee39eaa418fcdc",
              },
            ],
            _id: "651293670dee39eaa418fcd8",
          },
          {
            content: "d'une",
            offset: 613,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 350,
                y: 1016,
                _id: "651293670dee39eaa418fcde",
              },
              {
                x: 435,
                y: 1015,
                _id: "651293670dee39eaa418fcdf",
              },
              {
                x: 435,
                y: 1052,
                _id: "651293670dee39eaa418fce0",
              },
              {
                x: 350,
                y: 1053,
                _id: "651293670dee39eaa418fce1",
              },
            ],
            _id: "651293670dee39eaa418fcdd",
          },
          {
            content: "anomalie",
            offset: 619,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 442,
                y: 1015,
                _id: "651293670dee39eaa418fce3",
              },
              {
                x: 578,
                y: 1013,
                _id: "651293670dee39eaa418fce4",
              },
              {
                x: 579,
                y: 1051,
                _id: "651293670dee39eaa418fce5",
              },
              {
                x: 442,
                y: 1052,
                _id: "651293670dee39eaa418fce6",
              },
            ],
            _id: "651293670dee39eaa418fce2",
          },
          {
            content: "lipidique",
            offset: 628,
            length: 9,
            confidence: 0.993,
            polygon: [
              {
                x: 586,
                y: 1013,
                _id: "651293670dee39eaa418fce8",
              },
              {
                x: 714,
                y: 1012,
                _id: "651293670dee39eaa418fce9",
              },
              {
                x: 715,
                y: 1051,
                _id: "651293670dee39eaa418fcea",
              },
              {
                x: 586,
                y: 1051,
                _id: "651293670dee39eaa418fceb",
              },
            ],
            _id: "651293670dee39eaa418fce7",
          },
          {
            content: "(EAL)",
            offset: 638,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 722,
                y: 1012,
                _id: "651293670dee39eaa418fced",
              },
              {
                x: 812,
                y: 1011,
                _id: "651293670dee39eaa418fcee",
              },
              {
                x: 813,
                y: 1051,
                _id: "651293670dee39eaa418fcef",
              },
              {
                x: 723,
                y: 1051,
                _id: "651293670dee39eaa418fcf0",
              },
            ],
            _id: "651293670dee39eaa418fcec",
          },
          {
            content: "SGOT-SGPT",
            offset: 644,
            length: 9,
            confidence: 0.994,
            polygon: [
              {
                x: 177,
                y: 1058,
                _id: "651293670dee39eaa418fcf2",
              },
              {
                x: 358,
                y: 1055,
                _id: "651293670dee39eaa418fcf3",
              },
              {
                x: 359,
                y: 1091,
                _id: "651293670dee39eaa418fcf4",
              },
              {
                x: 176,
                y: 1094,
                _id: "651293670dee39eaa418fcf5",
              },
            ],
            _id: "651293670dee39eaa418fcf1",
          },
          {
            content: "Laboratoire",
            offset: 654,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 946,
                y: 1105,
                _id: "651293670dee39eaa418fcf7",
              },
              {
                x: 1086,
                y: 1094,
                _id: "651293670dee39eaa418fcf8",
              },
              {
                x: 1087,
                y: 1122,
                _id: "651293670dee39eaa418fcf9",
              },
              {
                x: 946,
                y: 1134,
                _id: "651293670dee39eaa418fcfa",
              },
            ],
            _id: "651293670dee39eaa418fcf6",
          },
          {
            content: "BPA",
            offset: 666,
            length: 3,
            confidence: 0.432,
            polygon: [
              {
                x: 1092,
                y: 1093,
                _id: "651293670dee39eaa418fcfc",
              },
              {
                x: 1142,
                y: 1090,
                _id: "651293670dee39eaa418fcfd",
              },
              {
                x: 1143,
                y: 1118,
                _id: "651293670dee39eaa418fcfe",
              },
              {
                x: 1093,
                y: 1122,
                _id: "651293670dee39eaa418fcff",
              },
            ],
            _id: "651293670dee39eaa418fcfb",
          },
          {
            content: "-",
            offset: 670,
            length: 1,
            confidence: 0.697,
            polygon: [
              {
                x: 1150,
                y: 1089,
                _id: "651293670dee39eaa418fd01",
              },
              {
                x: 1161,
                y: 1089,
                _id: "651293670dee39eaa418fd02",
              },
              {
                x: 1162,
                y: 1117,
                _id: "651293670dee39eaa418fd03",
              },
              {
                x: 1151,
                y: 1118,
                _id: "651293670dee39eaa418fd04",
              },
            ],
            _id: "651293670dee39eaa418fd00",
          },
          {
            content: "Bassin",
            offset: 672,
            length: 6,
            confidence: 0.899,
            polygon: [
              {
                x: 1166,
                y: 1088,
                _id: "651293670dee39eaa418fd06",
              },
              {
                x: 1252,
                y: 1083,
                _id: "651293670dee39eaa418fd07",
              },
              {
                x: 1253,
                y: 1111,
                _id: "651293670dee39eaa418fd08",
              },
              {
                x: 1167,
                y: 1116,
                _id: "651293670dee39eaa418fd09",
              },
            ],
            _id: "651293670dee39eaa418fd05",
          },
          {
            content: "Potassique",
            offset: 679,
            length: 10,
            confidence: 0.994,
            polygon: [
              {
                x: 1257,
                y: 1082,
                _id: "651293670dee39eaa418fd0b",
              },
              {
                x: 1396,
                y: 1074,
                _id: "651293670dee39eaa418fd0c",
              },
              {
                x: 1398,
                y: 1103,
                _id: "651293670dee39eaa418fd0d",
              },
              {
                x: 1259,
                y: 1110,
                _id: "651293670dee39eaa418fd0e",
              },
            ],
            _id: "651293670dee39eaa418fd0a",
          },
          {
            content: "SELAS",
            offset: 690,
            length: 5,
            confidence: 0.991,
            polygon: [
              {
                x: 1102,
                y: 1125,
                _id: "651293670dee39eaa418fd10",
              },
              {
                x: 1187,
                y: 1118,
                _id: "651293670dee39eaa418fd11",
              },
              {
                x: 1189,
                y: 1152,
                _id: "651293670dee39eaa418fd12",
              },
              {
                x: 1105,
                y: 1158,
                _id: "651293670dee39eaa418fd13",
              },
            ],
            _id: "651293670dee39eaa418fd0f",
          },
          {
            content: "32A",
            offset: 696,
            length: 3,
            confidence: 0.632,
            polygon: [
              {
                x: 1194,
                y: 1118,
                _id: "651293670dee39eaa418fd15",
              },
              {
                x: 1249,
                y: 1115,
                _id: "651293670dee39eaa418fd16",
              },
              {
                x: 1251,
                y: 1149,
                _id: "651293670dee39eaa418fd17",
              },
              {
                x: 1196,
                y: 1152,
                _id: "651293670dee39eaa418fd18",
              },
            ],
            _id: "651293670dee39eaa418fd14",
          },
          {
            content: "Glycémie",
            offset: 700,
            length: 8,
            confidence: 0.994,
            polygon: [
              {
                x: 180,
                y: 1096,
                _id: "651293670dee39eaa418fd1a",
              },
              {
                x: 313,
                y: 1095,
                _id: "651293670dee39eaa418fd1b",
              },
              {
                x: 313,
                y: 1134,
                _id: "651293670dee39eaa418fd1c",
              },
              {
                x: 179,
                y: 1136,
                _id: "651293670dee39eaa418fd1d",
              },
            ],
            _id: "651293670dee39eaa418fd19",
          },
          {
            content: "à",
            offset: 709,
            length: 1,
            confidence: 0.993,
            polygon: [
              {
                x: 321,
                y: 1095,
                _id: "651293670dee39eaa418fd1f",
              },
              {
                x: 339,
                y: 1095,
                _id: "651293670dee39eaa418fd20",
              },
              {
                x: 338,
                y: 1134,
                _id: "651293670dee39eaa418fd21",
              },
              {
                x: 320,
                y: 1134,
                _id: "651293670dee39eaa418fd22",
              },
            ],
            _id: "651293670dee39eaa418fd1e",
          },
          {
            content: "jeun",
            offset: 711,
            length: 4,
            confidence: 0.988,
            polygon: [
              {
                x: 346,
                y: 1095,
                _id: "651293670dee39eaa418fd24",
              },
              {
                x: 415,
                y: 1094,
                _id: "651293670dee39eaa418fd25",
              },
              {
                x: 415,
                y: 1132,
                _id: "651293670dee39eaa418fd26",
              },
              {
                x: 346,
                y: 1133,
                _id: "651293670dee39eaa418fd27",
              },
            ],
            _id: "651293670dee39eaa418fd23",
          },
          {
            content: "Hémoglobine",
            offset: 716,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 178,
                y: 1137,
                _id: "651293670dee39eaa418fd29",
              },
              {
                x: 375,
                y: 1136,
                _id: "651293670dee39eaa418fd2a",
              },
              {
                x: 376,
                y: 1176,
                _id: "651293670dee39eaa418fd2b",
              },
              {
                x: 179,
                y: 1176,
                _id: "651293670dee39eaa418fd2c",
              },
            ],
            _id: "651293670dee39eaa418fd28",
          },
          {
            content: "glyquée",
            offset: 728,
            length: 7,
            confidence: 0.993,
            polygon: [
              {
                x: 383,
                y: 1135,
                _id: "651293670dee39eaa418fd2e",
              },
              {
                x: 501,
                y: 1134,
                _id: "651293670dee39eaa418fd2f",
              },
              {
                x: 501,
                y: 1176,
                _id: "651293670dee39eaa418fd30",
              },
              {
                x: 384,
                y: 1176,
                _id: "651293670dee39eaa418fd31",
              },
            ],
            _id: "651293670dee39eaa418fd2d",
          },
          {
            content: "(HbA1c)",
            offset: 736,
            length: 7,
            confidence: 0.994,
            polygon: [
              {
                x: 509,
                y: 1134,
                _id: "651293670dee39eaa418fd33",
              },
              {
                x: 640,
                y: 1133,
                _id: "651293670dee39eaa418fd34",
              },
              {
                x: 640,
                y: 1175,
                _id: "651293670dee39eaa418fd35",
              },
              {
                x: 509,
                y: 1176,
                _id: "651293670dee39eaa418fd36",
              },
            ],
            _id: "651293670dee39eaa418fd32",
          },
          {
            content: "Créatininémie",
            offset: 744,
            length: 13,
            confidence: 0.991,
            polygon: [
              {
                x: 178,
                y: 1176,
                _id: "651293670dee39eaa418fd38",
              },
              {
                x: 385,
                y: 1176,
                _id: "651293670dee39eaa418fd39",
              },
              {
                x: 384,
                y: 1211,
                _id: "651293670dee39eaa418fd3a",
              },
              {
                x: 179,
                y: 1214,
                _id: "651293670dee39eaa418fd3b",
              },
            ],
            _id: "651293670dee39eaa418fd37",
          },
          {
            content: "18",
            offset: 758,
            length: 2,
            confidence: 0.998,
            polygon: [
              {
                x: 1035,
                y: 1166,
                _id: "651293670dee39eaa418fd3d",
              },
              {
                x: 1066,
                y: 1163,
                _id: "651293670dee39eaa418fd3e",
              },
              {
                x: 1067,
                y: 1189,
                _id: "651293670dee39eaa418fd3f",
              },
              {
                x: 1037,
                y: 1191,
                _id: "651293670dee39eaa418fd40",
              },
            ],
            _id: "651293670dee39eaa418fd3c",
          },
          {
            content: "Rue",
            offset: 761,
            length: 3,
            confidence: 0.733,
            polygon: [
              {
                x: 1073,
                y: 1163,
                _id: "651293670dee39eaa418fd42",
              },
              {
                x: 1123,
                y: 1159,
                _id: "651293670dee39eaa418fd43",
              },
              {
                x: 1124,
                y: 1184,
                _id: "651293670dee39eaa418fd44",
              },
              {
                x: 1074,
                y: 1188,
                _id: "651293670dee39eaa418fd45",
              },
            ],
            _id: "651293670dee39eaa418fd41",
          },
          {
            content: "de",
            offset: 765,
            length: 2,
            confidence: 0.331,
            polygon: [
              {
                x: 1128,
                y: 1158,
                _id: "651293670dee39eaa418fd47",
              },
              {
                x: 1158,
                y: 1156,
                _id: "651293670dee39eaa418fd48",
              },
              {
                x: 1159,
                y: 1182,
                _id: "651293670dee39eaa418fd49",
              },
              {
                x: 1129,
                y: 1184,
                _id: "651293670dee39eaa418fd4a",
              },
            ],
            _id: "651293670dee39eaa418fd46",
          },
          {
            content: "Mindere",
            offset: 768,
            length: 7,
            confidence: 0.427,
            polygon: [
              {
                x: 1165,
                y: 1155,
                _id: "651293670dee39eaa418fd4c",
              },
              {
                x: 1261,
                y: 1149,
                _id: "651293670dee39eaa418fd4d",
              },
              {
                x: 1262,
                y: 1175,
                _id: "651293670dee39eaa418fd4e",
              },
              {
                x: 1167,
                y: 1181,
                _id: "651293670dee39eaa418fd4f",
              },
            ],
            _id: "651293670dee39eaa418fd4b",
          },
          {
            content: "mim",
            offset: 776,
            length: 3,
            confidence: 0.071,
            polygon: [
              {
                x: 1275,
                y: 1148,
                _id: "651293670dee39eaa418fd51",
              },
              {
                x: 1316,
                y: 1145,
                _id: "651293670dee39eaa418fd52",
              },
              {
                x: 1317,
                y: 1173,
                _id: "651293670dee39eaa418fd53",
              },
              {
                x: 1276,
                y: 1175,
                _id: "651293670dee39eaa418fd54",
              },
            ],
            _id: "651293670dee39eaa418fd50",
          },
          {
            content: "68270",
            offset: 780,
            length: 5,
            confidence: 0.887,
            polygon: [
              {
                x: 1048,
                y: 1197,
                _id: "651293670dee39eaa418fd56",
              },
              {
                x: 1124,
                y: 1191,
                _id: "651293670dee39eaa418fd57",
              },
              {
                x: 1125,
                y: 1217,
                _id: "651293670dee39eaa418fd58",
              },
              {
                x: 1049,
                y: 1222,
                _id: "651293670dee39eaa418fd59",
              },
            ],
            _id: "651293670dee39eaa418fd55",
          },
          {
            content: "MMITTENHEIM",
            offset: 786,
            length: 11,
            confidence: 0.266,
            polygon: [
              {
                x: 1130,
                y: 1191,
                _id: "651293670dee39eaa418fd5b",
              },
              {
                x: 1302,
                y: 1178,
                _id: "651293670dee39eaa418fd5c",
              },
              {
                x: 1303,
                y: 1206,
                _id: "651293670dee39eaa418fd5d",
              },
              {
                x: 1131,
                y: 1217,
                _id: "651293670dee39eaa418fd5e",
              },
            ],
            _id: "651293670dee39eaa418fd5a",
          },
          {
            content: "Créatine-phospho-kinase",
            offset: 798,
            length: 23,
            confidence: 0.959,
            polygon: [
              {
                x: 180,
                y: 1219,
                _id: "651293670dee39eaa418fd60",
              },
              {
                x: 545,
                y: 1216,
                _id: "651293670dee39eaa418fd61",
              },
              {
                x: 544,
                y: 1256,
                _id: "651293670dee39eaa418fd62",
              },
              {
                x: 180,
                y: 1256,
                _id: "651293670dee39eaa418fd63",
              },
            ],
            _id: "651293670dee39eaa418fd5f",
          },
          {
            content: "(CPK)",
            offset: 822,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 553,
                y: 1215,
                _id: "651293670dee39eaa418fd65",
              },
              {
                x: 640,
                y: 1214,
                _id: "651293670dee39eaa418fd66",
              },
              {
                x: 639,
                y: 1255,
                _id: "651293670dee39eaa418fd67",
              },
              {
                x: 552,
                y: 1256,
                _id: "651293670dee39eaa418fd68",
              },
            ],
            _id: "651293670dee39eaa418fd64",
          },
          {
            content: "totale",
            offset: 828,
            length: 6,
            confidence: 0.997,
            polygon: [
              {
                x: 648,
                y: 1214,
                _id: "651293670dee39eaa418fd6a",
              },
              {
                x: 736,
                y: 1213,
                _id: "651293670dee39eaa418fd6b",
              },
              {
                x: 735,
                y: 1254,
                _id: "651293670dee39eaa418fd6c",
              },
              {
                x: 647,
                y: 1255,
                _id: "651293670dee39eaa418fd6d",
              },
            ],
            _id: "651293670dee39eaa418fd69",
          },
          {
            content: "Gamma",
            offset: 835,
            length: 5,
            confidence: 0.995,
            polygon: [
              {
                x: 181,
                y: 1259,
                _id: "651293670dee39eaa418fd6f",
              },
              {
                x: 294,
                y: 1258,
                _id: "651293670dee39eaa418fd70",
              },
              {
                x: 294,
                y: 1292,
                _id: "651293670dee39eaa418fd71",
              },
              {
                x: 180,
                y: 1295,
                _id: "651293670dee39eaa418fd72",
              },
            ],
            _id: "651293670dee39eaa418fd6e",
          },
          {
            content: "GT",
            offset: 841,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 301,
                y: 1258,
                _id: "651293670dee39eaa418fd74",
              },
              {
                x: 346,
                y: 1258,
                _id: "651293670dee39eaa418fd75",
              },
              {
                x: 346,
                y: 1292,
                _id: "651293670dee39eaa418fd76",
              },
              {
                x: 301,
                y: 1292,
                _id: "651293670dee39eaa418fd77",
              },
            ],
            _id: "651293670dee39eaa418fd73",
          },
          {
            content: "Microalbuminurie",
            offset: 844,
            length: 16,
            confidence: 0.971,
            polygon: [
              {
                x: 181,
                y: 1300,
                _id: "651293670dee39eaa418fd79",
              },
              {
                x: 437,
                y: 1297,
                _id: "651293670dee39eaa418fd7a",
              },
              {
                x: 437,
                y: 1335,
                _id: "651293670dee39eaa418fd7b",
              },
              {
                x: 181,
                y: 1337,
                _id: "651293670dee39eaa418fd7c",
              },
            ],
            _id: "651293670dee39eaa418fd78",
          },
          {
            content: "SIRET",
            offset: 861,
            length: 5,
            confidence: 0.994,
            polygon: [
              {
                x: 1007,
                y: 1233,
                _id: "651293670dee39eaa418fd7e",
              },
              {
                x: 1090,
                y: 1226,
                _id: "651293670dee39eaa418fd7f",
              },
              {
                x: 1093,
                y: 1253,
                _id: "651293670dee39eaa418fd80",
              },
              {
                x: 1010,
                y: 1258,
                _id: "651293670dee39eaa418fd81",
              },
            ],
            _id: "651293670dee39eaa418fd7d",
          },
          {
            content: ":",
            offset: 867,
            length: 1,
            confidence: 0.939,
            polygon: [
              {
                x: 1096,
                y: 1226,
                _id: "651293670dee39eaa418fd83",
              },
              {
                x: 1107,
                y: 1225,
                _id: "651293670dee39eaa418fd84",
              },
              {
                x: 1110,
                y: 1252,
                _id: "651293670dee39eaa418fd85",
              },
              {
                x: 1099,
                y: 1253,
                _id: "651293670dee39eaa418fd86",
              },
            ],
            _id: "651293670dee39eaa418fd82",
          },
          {
            content: "433",
            offset: 869,
            length: 3,
            confidence: 0.969,
            polygon: [
              {
                x: 1113,
                y: 1224,
                _id: "651293670dee39eaa418fd88",
              },
              {
                x: 1160,
                y: 1221,
                _id: "651293670dee39eaa418fd89",
              },
              {
                x: 1162,
                y: 1249,
                _id: "651293670dee39eaa418fd8a",
              },
              {
                x: 1115,
                y: 1252,
                _id: "651293670dee39eaa418fd8b",
              },
            ],
            _id: "651293670dee39eaa418fd87",
          },
          {
            content: "895",
            offset: 873,
            length: 3,
            confidence: 0.991,
            polygon: [
              {
                x: 1166,
                y: 1220,
                _id: "651293670dee39eaa418fd8d",
              },
              {
                x: 1212,
                y: 1216,
                _id: "651293670dee39eaa418fd8e",
              },
              {
                x: 1215,
                y: 1245,
                _id: "651293670dee39eaa418fd8f",
              },
              {
                x: 1168,
                y: 1248,
                _id: "651293670dee39eaa418fd90",
              },
            ],
            _id: "651293670dee39eaa418fd8c",
          },
          {
            content: "265",
            offset: 877,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 1218,
                y: 1216,
                _id: "651293670dee39eaa418fd92",
              },
              {
                x: 1267,
                y: 1212,
                _id: "651293670dee39eaa418fd93",
              },
              {
                x: 1270,
                y: 1241,
                _id: "651293670dee39eaa418fd94",
              },
              {
                x: 1221,
                y: 1245,
                _id: "651293670dee39eaa418fd95",
              },
            ],
            _id: "651293670dee39eaa418fd91",
          },
          {
            content: "00273",
            offset: 881,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 1273,
                y: 1212,
                _id: "651293670dee39eaa418fd97",
              },
              {
                x: 1351,
                y: 1206,
                _id: "651293670dee39eaa418fd98",
              },
              {
                x: 1353,
                y: 1235,
                _id: "651293670dee39eaa418fd99",
              },
              {
                x: 1275,
                y: 1241,
                _id: "651293670dee39eaa418fd9a",
              },
            ],
            _id: "651293670dee39eaa418fd96",
          },
          {
            content: "laboratoire",
            offset: 887,
            length: 11,
            confidence: 0.941,
            polygon: [
              {
                x: 960,
                y: 1270,
                _id: "651293670dee39eaa418fd9c",
              },
              {
                x: 1088,
                y: 1260,
                _id: "651293670dee39eaa418fd9d",
              },
              {
                x: 1090,
                y: 1288,
                _id: "651293670dee39eaa418fd9e",
              },
              {
                x: 962,
                y: 1296,
                _id: "651293670dee39eaa418fd9f",
              },
            ],
            _id: "651293670dee39eaa418fd9b",
          },
          {
            content: "bassinpotseique@b2a.fr",
            offset: 899,
            length: 22,
            confidence: 0.205,
            polygon: [
              {
                x: 1094,
                y: 1260,
                _id: "651293670dee39eaa418fda1",
              },
              {
                x: 1413,
                y: 1236,
                _id: "651293670dee39eaa418fda2",
              },
              {
                x: 1413,
                y: 1265,
                _id: "651293670dee39eaa418fda3",
              },
              {
                x: 1095,
                y: 1287,
                _id: "651293670dee39eaa418fda4",
              },
            ],
            _id: "651293670dee39eaa418fda0",
          },
          {
            content: "Tél.",
            offset: 922,
            length: 4,
            confidence: 0.967,
            polygon: [
              {
                x: 936,
                y: 1305,
                _id: "651293670dee39eaa418fda6",
              },
              {
                x: 981,
                y: 1301,
                _id: "651293670dee39eaa418fda7",
              },
              {
                x: 982,
                y: 1328,
                _id: "651293670dee39eaa418fda8",
              },
              {
                x: 938,
                y: 1331,
                _id: "651293670dee39eaa418fda9",
              },
            ],
            _id: "651293670dee39eaa418fda5",
          },
          {
            content: "03",
            offset: 927,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 986,
                y: 1301,
                _id: "651293670dee39eaa418fdab",
              },
              {
                x: 1018,
                y: 1298,
                _id: "651293670dee39eaa418fdac",
              },
              {
                x: 1020,
                y: 1326,
                _id: "651293670dee39eaa418fdad",
              },
              {
                x: 988,
                y: 1328,
                _id: "651293670dee39eaa418fdae",
              },
            ],
            _id: "651293670dee39eaa418fdaa",
          },
          {
            content: "89",
            offset: 930,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 1026,
                y: 1298,
                _id: "651293670dee39eaa418fdb0",
              },
              {
                x: 1057,
                y: 1295,
                _id: "651293670dee39eaa418fdb1",
              },
              {
                x: 1059,
                y: 1323,
                _id: "651293670dee39eaa418fdb2",
              },
              {
                x: 1027,
                y: 1325,
                _id: "651293670dee39eaa418fdb3",
              },
            ],
            _id: "651293670dee39eaa418fdaf",
          },
          {
            content: "57",
            offset: 933,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 1065,
                y: 1295,
                _id: "651293670dee39eaa418fdb5",
              },
              {
                x: 1097,
                y: 1292,
                _id: "651293670dee39eaa418fdb6",
              },
              {
                x: 1098,
                y: 1320,
                _id: "651293670dee39eaa418fdb7",
              },
              {
                x: 1067,
                y: 1322,
                _id: "651293670dee39eaa418fdb8",
              },
            ],
            _id: "651293670dee39eaa418fdb4",
          },
          {
            content: "33",
            offset: 936,
            length: 2,
            confidence: 0.995,
            polygon: [
              {
                x: 1103,
                y: 1292,
                _id: "651293670dee39eaa418fdba",
              },
              {
                x: 1135,
                y: 1289,
                _id: "651293670dee39eaa418fdbb",
              },
              {
                x: 1136,
                y: 1317,
                _id: "651293670dee39eaa418fdbc",
              },
              {
                x: 1104,
                y: 1320,
                _id: "651293670dee39eaa418fdbd",
              },
            ],
            _id: "651293670dee39eaa418fdb9",
          },
          {
            content: "33",
            offset: 939,
            length: 2,
            confidence: 0.77,
            polygon: [
              {
                x: 1142,
                y: 1289,
                _id: "651293670dee39eaa418fdbf",
              },
              {
                x: 1174,
                y: 1286,
                _id: "651293670dee39eaa418fdc0",
              },
              {
                x: 1175,
                y: 1314,
                _id: "651293670dee39eaa418fdc1",
              },
              {
                x: 1143,
                y: 1317,
                _id: "651293670dee39eaa418fdc2",
              },
            ],
            _id: "651293670dee39eaa418fdbe",
          },
          {
            content: "-",
            offset: 942,
            length: 1,
            confidence: 0.991,
            polygon: [
              {
                x: 1180,
                y: 1286,
                _id: "651293670dee39eaa418fdc4",
              },
              {
                x: 1191,
                y: 1285,
                _id: "651293670dee39eaa418fdc5",
              },
              {
                x: 1192,
                y: 1313,
                _id: "651293670dee39eaa418fdc6",
              },
              {
                x: 1181,
                y: 1314,
                _id: "651293670dee39eaa418fdc7",
              },
            ],
            _id: "651293670dee39eaa418fdc3",
          },
          {
            content: "Fax",
            offset: 944,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 1196,
                y: 1285,
                _id: "651293670dee39eaa418fdc9",
              },
              {
                x: 1245,
                y: 1281,
                _id: "651293670dee39eaa418fdca",
              },
              {
                x: 1245,
                y: 1309,
                _id: "651293670dee39eaa418fdcb",
              },
              {
                x: 1197,
                y: 1313,
                _id: "651293670dee39eaa418fdcc",
              },
            ],
            _id: "651293670dee39eaa418fdc8",
          },
          {
            content: "03",
            offset: 948,
            length: 2,
            confidence: 0.996,
            polygon: [
              {
                x: 1250,
                y: 1281,
                _id: "651293670dee39eaa418fdce",
              },
              {
                x: 1284,
                y: 1278,
                _id: "651293670dee39eaa418fdcf",
              },
              {
                x: 1284,
                y: 1306,
                _id: "651293670dee39eaa418fdd0",
              },
              {
                x: 1251,
                y: 1309,
                _id: "651293670dee39eaa418fdd1",
              },
            ],
            _id: "651293670dee39eaa418fdcd",
          },
          {
            content: "80",
            offset: 951,
            length: 2,
            confidence: 0.884,
            polygon: [
              {
                x: 1289,
                y: 1278,
                _id: "651293670dee39eaa418fdd3",
              },
              {
                x: 1323,
                y: 1275,
                _id: "651293670dee39eaa418fdd4",
              },
              {
                x: 1324,
                y: 1303,
                _id: "651293670dee39eaa418fdd5",
              },
              {
                x: 1290,
                y: 1306,
                _id: "651293670dee39eaa418fdd6",
              },
            ],
            _id: "651293670dee39eaa418fdd2",
          },
          {
            content: "57",
            offset: 954,
            length: 2,
            confidence: 0.993,
            polygon: [
              {
                x: 1329,
                y: 1275,
                _id: "651293670dee39eaa418fdd8",
              },
              {
                x: 1363,
                y: 1273,
                _id: "651293670dee39eaa418fdd9",
              },
              {
                x: 1363,
                y: 1300,
                _id: "651293670dee39eaa418fdda",
              },
              {
                x: 1329,
                y: 1303,
                _id: "651293670dee39eaa418fddb",
              },
            ],
            _id: "651293670dee39eaa418fdd7",
          },
          {
            content: "16",
            offset: 957,
            length: 2,
            confidence: 0.993,
            polygon: [
              {
                x: 1370,
                y: 1272,
                _id: "651293670dee39eaa418fddd",
              },
              {
                x: 1399,
                y: 1270,
                _id: "651293670dee39eaa418fdde",
              },
              {
                x: 1399,
                y: 1297,
                _id: "651293670dee39eaa418fddf",
              },
              {
                x: 1371,
                y: 1300,
                _id: "651293670dee39eaa418fde0",
              },
            ],
            _id: "651293670dee39eaa418fddc",
          },
          {
            content: "85",
            offset: 960,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 1406,
                y: 1270,
                _id: "651293670dee39eaa418fde2",
              },
              {
                x: 1438,
                y: 1268,
                _id: "651293670dee39eaa418fde3",
              },
              {
                x: 1438,
                y: 1294,
                _id: "651293670dee39eaa418fde4",
              },
              {
                x: 1406,
                y: 1297,
                _id: "651293670dee39eaa418fde5",
              },
            ],
            _id: "651293670dee39eaa418fde1",
          },
          {
            content: "Ionogramme",
            offset: 963,
            length: 10,
            confidence: 0.991,
            polygon: [
              {
                x: 179,
                y: 1341,
                _id: "651293670dee39eaa418fde7",
              },
              {
                x: 374,
                y: 1339,
                _id: "651293670dee39eaa418fde8",
              },
              {
                x: 373,
                y: 1377,
                _id: "651293670dee39eaa418fde9",
              },
              {
                x: 178,
                y: 1378,
                _id: "651293670dee39eaa418fdea",
              },
            ],
            _id: "651293670dee39eaa418fde6",
          },
          {
            content: "plasmatique",
            offset: 974,
            length: 11,
            confidence: 0.993,
            polygon: [
              {
                x: 381,
                y: 1339,
                _id: "651293670dee39eaa418fdec",
              },
              {
                x: 566,
                y: 1338,
                _id: "651293670dee39eaa418fded",
              },
              {
                x: 565,
                y: 1375,
                _id: "651293670dee39eaa418fdee",
              },
              {
                x: 380,
                y: 1377,
                _id: "651293670dee39eaa418fdef",
              },
            ],
            _id: "651293670dee39eaa418fdeb",
          },
          {
            content: "Prescriptions",
            offset: 986,
            length: 13,
            confidence: 0.974,
            polygon: [
              {
                x: 374,
                y: 1445,
                _id: "651293670dee39eaa418fdf1",
              },
              {
                x: 497,
                y: 1445,
                _id: "651293670dee39eaa418fdf2",
              },
              {
                x: 497,
                y: 1470,
                _id: "651293670dee39eaa418fdf3",
              },
              {
                x: 374,
                y: 1471,
                _id: "651293670dee39eaa418fdf4",
              },
            ],
            _id: "651293670dee39eaa418fdf0",
          },
          {
            content: "SANS",
            offset: 1000,
            length: 4,
            confidence: 0.986,
            polygon: [
              {
                x: 502,
                y: 1445,
                _id: "651293670dee39eaa418fdf6",
              },
              {
                x: 561,
                y: 1444,
                _id: "651293670dee39eaa418fdf7",
              },
              {
                x: 561,
                y: 1470,
                _id: "651293670dee39eaa418fdf8",
              },
              {
                x: 503,
                y: 1470,
                _id: "651293670dee39eaa418fdf9",
              },
            ],
            _id: "651293670dee39eaa418fdf5",
          },
          {
            content: "RAPPORT",
            offset: 1005,
            length: 7,
            confidence: 0.994,
            polygon: [
              {
                x: 566,
                y: 1444,
                _id: "651293670dee39eaa418fdfb",
              },
              {
                x: 674,
                y: 1444,
                _id: "651293670dee39eaa418fdfc",
              },
              {
                x: 674,
                y: 1469,
                _id: "651293670dee39eaa418fdfd",
              },
              {
                x: 566,
                y: 1470,
                _id: "651293670dee39eaa418fdfe",
              },
            ],
            _id: "651293670dee39eaa418fdfa",
          },
          {
            content: "avec",
            offset: 1013,
            length: 4,
            confidence: 0.982,
            polygon: [
              {
                x: 680,
                y: 1444,
                _id: "651293670dee39eaa418fe00",
              },
              {
                x: 724,
                y: 1444,
                _id: "651293670dee39eaa418fe01",
              },
              {
                x: 724,
                y: 1469,
                _id: "651293670dee39eaa418fe02",
              },
              {
                x: 680,
                y: 1469,
                _id: "651293670dee39eaa418fe03",
              },
            ],
            _id: "651293670dee39eaa418fdff",
          },
          {
            content: "l'affection",
            offset: 1018,
            length: 11,
            confidence: 0.958,
            polygon: [
              {
                x: 729,
                y: 1443,
                _id: "651293670dee39eaa418fe05",
              },
              {
                x: 831,
                y: 1443,
                _id: "651293670dee39eaa418fe06",
              },
              {
                x: 831,
                y: 1469,
                _id: "651293670dee39eaa418fe07",
              },
              {
                x: 729,
                y: 1469,
                _id: "651293670dee39eaa418fe08",
              },
            ],
            _id: "651293670dee39eaa418fe04",
          },
          {
            content: "de",
            offset: 1030,
            length: 2,
            confidence: 0.991,
            polygon: [
              {
                x: 836,
                y: 1443,
                _id: "651293670dee39eaa418fe0a",
              },
              {
                x: 860,
                y: 1443,
                _id: "651293670dee39eaa418fe0b",
              },
              {
                x: 860,
                y: 1469,
                _id: "651293670dee39eaa418fe0c",
              },
              {
                x: 836,
                y: 1469,
                _id: "651293670dee39eaa418fe0d",
              },
            ],
            _id: "651293670dee39eaa418fe09",
          },
          {
            content: "longue",
            offset: 1033,
            length: 6,
            confidence: 0.967,
            polygon: [
              {
                x: 865,
                y: 1443,
                _id: "651293670dee39eaa418fe0f",
              },
              {
                x: 938,
                y: 1442,
                _id: "651293670dee39eaa418fe10",
              },
              {
                x: 937,
                y: 1468,
                _id: "651293670dee39eaa418fe11",
              },
              {
                x: 865,
                y: 1469,
                _id: "651293670dee39eaa418fe12",
              },
            ],
            _id: "651293670dee39eaa418fe0e",
          },
          {
            content: "durée",
            offset: 1040,
            length: 5,
            confidence: 0.976,
            polygon: [
              {
                x: 943,
                y: 1442,
                _id: "651293670dee39eaa418fe14",
              },
              {
                x: 1000,
                y: 1442,
                _id: "651293670dee39eaa418fe15",
              },
              {
                x: 999,
                y: 1468,
                _id: "651293670dee39eaa418fe16",
              },
              {
                x: 943,
                y: 1468,
                _id: "651293670dee39eaa418fe17",
              },
            ],
            _id: "651293670dee39eaa418fe13",
          },
          {
            content: "(MALADIES",
            offset: 1046,
            length: 9,
            confidence: 0.956,
            polygon: [
              {
                x: 1005,
                y: 1442,
                _id: "651293670dee39eaa418fe19",
              },
              {
                x: 1123,
                y: 1441,
                _id: "651293670dee39eaa418fe1a",
              },
              {
                x: 1123,
                y: 1467,
                _id: "651293670dee39eaa418fe1b",
              },
              {
                x: 1004,
                y: 1468,
                _id: "651293670dee39eaa418fe1c",
              },
            ],
            _id: "651293670dee39eaa418fe18",
          },
          {
            content: "INTERCURRENTES)",
            offset: 1056,
            length: 15,
            confidence: 0.927,
            polygon: [
              {
                x: 1129,
                y: 1441,
                _id: "651293670dee39eaa418fe1e",
              },
              {
                x: 1337,
                y: 1439,
                _id: "651293670dee39eaa418fe1f",
              },
              {
                x: 1337,
                y: 1466,
                _id: "651293670dee39eaa418fe20",
              },
              {
                x: 1128,
                y: 1467,
                _id: "651293670dee39eaa418fe21",
              },
            ],
            _id: "651293670dee39eaa418fe1d",
          },
          {
            content: "Protéine",
            offset: 1072,
            length: 8,
            confidence: 0.994,
            polygon: [
              {
                x: 182,
                y: 1538,
                _id: "651293670dee39eaa418fe23",
              },
              {
                x: 304,
                y: 1538,
                _id: "651293670dee39eaa418fe24",
              },
              {
                x: 305,
                y: 1575,
                _id: "651293670dee39eaa418fe25",
              },
              {
                x: 183,
                y: 1573,
                _id: "651293670dee39eaa418fe26",
              },
            ],
            _id: "651293670dee39eaa418fe22",
          },
          {
            content: "C",
            offset: 1081,
            length: 1,
            confidence: 0.998,
            polygon: [
              {
                x: 312,
                y: 1538,
                _id: "651293670dee39eaa418fe28",
              },
              {
                x: 333,
                y: 1538,
                _id: "651293670dee39eaa418fe29",
              },
              {
                x: 334,
                y: 1575,
                _id: "651293670dee39eaa418fe2a",
              },
              {
                x: 312,
                y: 1575,
                _id: "651293670dee39eaa418fe2b",
              },
            ],
            _id: "651293670dee39eaa418fe27",
          },
          {
            content: "reactive",
            offset: 1083,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 341,
                y: 1537,
                _id: "651293670dee39eaa418fe2d",
              },
              {
                x: 459,
                y: 1536,
                _id: "651293670dee39eaa418fe2e",
              },
              {
                x: 460,
                y: 1575,
                _id: "651293670dee39eaa418fe2f",
              },
              {
                x: 342,
                y: 1575,
                _id: "651293670dee39eaa418fe30",
              },
            ],
            _id: "651293670dee39eaa418fe2c",
          },
          {
            content: "(CRP)",
            offset: 1092,
            length: 5,
            confidence: 0.997,
            polygon: [
              {
                x: 466,
                y: 1536,
                _id: "651293670dee39eaa418fe32",
              },
              {
                x: 558,
                y: 1534,
                _id: "651293670dee39eaa418fe33",
              },
              {
                x: 558,
                y: 1573,
                _id: "651293670dee39eaa418fe34",
              },
              {
                x: 467,
                y: 1574,
                _id: "651293670dee39eaa418fe35",
              },
            ],
            _id: "651293670dee39eaa418fe31",
          },
          {
            content: "Ferritine",
            offset: 1098,
            length: 9,
            confidence: 0.994,
            polygon: [
              {
                x: 182,
                y: 1580,
                _id: "651293670dee39eaa418fe37",
              },
              {
                x: 304,
                y: 1578,
                _id: "651293670dee39eaa418fe38",
              },
              {
                x: 304,
                y: 1615,
                _id: "651293670dee39eaa418fe39",
              },
              {
                x: 182,
                y: 1615,
                _id: "651293670dee39eaa418fe3a",
              },
            ],
            _id: "651293670dee39eaa418fe36",
          },
          {
            content: "sérique",
            offset: 1108,
            length: 7,
            confidence: 0.991,
            polygon: [
              {
                x: 311,
                y: 1578,
                _id: "651293670dee39eaa418fe3c",
              },
              {
                x: 425,
                y: 1578,
                _id: "651293670dee39eaa418fe3d",
              },
              {
                x: 426,
                y: 1614,
                _id: "651293670dee39eaa418fe3e",
              },
              {
                x: 311,
                y: 1615,
                _id: "651293670dee39eaa418fe3f",
              },
            ],
            _id: "651293670dee39eaa418fe3b",
          },
          {
            content: "Albuminémie",
            offset: 1116,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 182,
                y: 1620,
                _id: "651293670dee39eaa418fe41",
              },
              {
                x: 382,
                y: 1620,
                _id: "651293670dee39eaa418fe42",
              },
              {
                x: 382,
                y: 1653,
                _id: "651293670dee39eaa418fe43",
              },
              {
                x: 182,
                y: 1657,
                _id: "651293670dee39eaa418fe44",
              },
            ],
            _id: "651293670dee39eaa418fe40",
          },
          {
            content: "Calcémie",
            offset: 1128,
            length: 8,
            confidence: 0.991,
            polygon: [
              {
                x: 184,
                y: 1661,
                _id: "651293670dee39eaa418fe46",
              },
              {
                x: 316,
                y: 1660,
                _id: "651293670dee39eaa418fe47",
              },
              {
                x: 315,
                y: 1698,
                _id: "651293670dee39eaa418fe48",
              },
              {
                x: 182,
                y: 1698,
                _id: "651293670dee39eaa418fe49",
              },
            ],
            _id: "651293670dee39eaa418fe45",
          },
          {
            content: "corrigée",
            offset: 1137,
            length: 8,
            confidence: 0.993,
            polygon: [
              {
                x: 324,
                y: 1660,
                _id: "651293670dee39eaa418fe4b",
              },
              {
                x: 449,
                y: 1658,
                _id: "651293670dee39eaa418fe4c",
              },
              {
                x: 448,
                y: 1697,
                _id: "651293670dee39eaa418fe4d",
              },
              {
                x: 323,
                y: 1698,
                _id: "651293670dee39eaa418fe4e",
              },
            ],
            _id: "651293670dee39eaa418fe4a",
          },
          {
            content: "Vitamine",
            offset: 1146,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 183,
                y: 1703,
                _id: "651293670dee39eaa418fe50",
              },
              {
                x: 312,
                y: 1701,
                _id: "651293670dee39eaa418fe51",
              },
              {
                x: 312,
                y: 1739,
                _id: "651293670dee39eaa418fe52",
              },
              {
                x: 183,
                y: 1739,
                _id: "651293670dee39eaa418fe53",
              },
            ],
            _id: "651293670dee39eaa418fe4f",
          },
          {
            content: "D",
            offset: 1155,
            length: 1,
            confidence: 0.998,
            polygon: [
              {
                x: 319,
                y: 1701,
                _id: "651293670dee39eaa418fe55",
              },
              {
                x: 341,
                y: 1701,
                _id: "651293670dee39eaa418fe56",
              },
              {
                x: 341,
                y: 1739,
                _id: "651293670dee39eaa418fe57",
              },
              {
                x: 319,
                y: 1739,
                _id: "651293670dee39eaa418fe58",
              },
            ],
            _id: "651293670dee39eaa418fe54",
          },
          {
            content: "(D2-D3)",
            offset: 1157,
            length: 7,
            confidence: 0.993,
            polygon: [
              {
                x: 354,
                y: 1701,
                _id: "651293670dee39eaa418fe5a",
              },
              {
                x: 481,
                y: 1701,
                _id: "651293670dee39eaa418fe5b",
              },
              {
                x: 482,
                y: 1739,
                _id: "651293670dee39eaa418fe5c",
              },
              {
                x: 354,
                y: 1739,
                _id: "651293670dee39eaa418fe5d",
              },
            ],
            _id: "651293670dee39eaa418fe59",
          },
          {
            content: "Uricémie",
            offset: 1165,
            length: 8,
            confidence: 0.993,
            polygon: [
              {
                x: 181,
                y: 1742,
                _id: "651293670dee39eaa418fe5f",
              },
              {
                x: 316,
                y: 1742,
                _id: "651293670dee39eaa418fe60",
              },
              {
                x: 316,
                y: 1777,
                _id: "651293670dee39eaa418fe61",
              },
              {
                x: 181,
                y: 1778,
                _id: "651293670dee39eaa418fe62",
              },
            ],
            _id: "651293670dee39eaa418fe5e",
          },
          {
            content: "Thyréostimuline",
            offset: 1174,
            length: 15,
            confidence: 0.991,
            polygon: [
              {
                x: 184,
                y: 1784,
                _id: "651293670dee39eaa418fe64",
              },
              {
                x: 420,
                y: 1781,
                _id: "651293670dee39eaa418fe65",
              },
              {
                x: 420,
                y: 1821,
                _id: "651293670dee39eaa418fe66",
              },
              {
                x: 185,
                y: 1821,
                _id: "651293670dee39eaa418fe67",
              },
            ],
            _id: "651293670dee39eaa418fe63",
          },
          {
            content: "sanguine",
            offset: 1190,
            length: 8,
            confidence: 0.996,
            polygon: [
              {
                x: 428,
                y: 1781,
                _id: "651293670dee39eaa418fe69",
              },
              {
                x: 564,
                y: 1779,
                _id: "651293670dee39eaa418fe6a",
              },
              {
                x: 564,
                y: 1820,
                _id: "651293670dee39eaa418fe6b",
              },
              {
                x: 428,
                y: 1821,
                _id: "651293670dee39eaa418fe6c",
              },
            ],
            _id: "651293670dee39eaa418fe68",
          },
          {
            content: "(TSH",
            offset: 1199,
            length: 4,
            confidence: 0.979,
            polygon: [
              {
                x: 572,
                y: 1779,
                _id: "651293670dee39eaa418fe6e",
              },
              {
                x: 648,
                y: 1778,
                _id: "651293670dee39eaa418fe6f",
              },
              {
                x: 648,
                y: 1819,
                _id: "651293670dee39eaa418fe70",
              },
              {
                x: 571,
                y: 1820,
                _id: "651293670dee39eaa418fe71",
              },
            ],
            _id: "651293670dee39eaa418fe6d",
          },
          {
            content: "ultrasensible)",
            offset: 1204,
            length: 14,
            confidence: 0.993,
            polygon: [
              {
                x: 659,
                y: 1778,
                _id: "651293670dee39eaa418fe73",
              },
              {
                x: 860,
                y: 1776,
                _id: "651293670dee39eaa418fe74",
              },
              {
                x: 859,
                y: 1815,
                _id: "651293670dee39eaa418fe75",
              },
              {
                x: 659,
                y: 1818,
                _id: "651293670dee39eaa418fe76",
              },
            ],
            _id: "651293670dee39eaa418fe72",
          },
          {
            content: "NFS",
            offset: 1219,
            length: 3,
            confidence: 0.994,
            polygon: [
              {
                x: 185,
                y: 1825,
                _id: "651293670dee39eaa418fe78",
              },
              {
                x: 244,
                y: 1824,
                _id: "651293670dee39eaa418fe79",
              },
              {
                x: 243,
                y: 1861,
                _id: "651293670dee39eaa418fe7a",
              },
              {
                x: 183,
                y: 1862,
                _id: "651293670dee39eaa418fe7b",
              },
            ],
            _id: "651293670dee39eaa418fe77",
          },
          {
            content: "-",
            offset: 1223,
            length: 1,
            confidence: 0.995,
            polygon: [
              {
                x: 252,
                y: 1824,
                _id: "651293670dee39eaa418fe7d",
              },
              {
                x: 266,
                y: 1824,
                _id: "651293670dee39eaa418fe7e",
              },
              {
                x: 265,
                y: 1861,
                _id: "651293670dee39eaa418fe7f",
              },
              {
                x: 251,
                y: 1861,
                _id: "651293670dee39eaa418fe80",
              },
            ],
            _id: "651293670dee39eaa418fe7c",
          },
          {
            content: "Plaquettes",
            offset: 1225,
            length: 10,
            confidence: 0.994,
            polygon: [
              {
                x: 274,
                y: 1824,
                _id: "651293670dee39eaa418fe82",
              },
              {
                x: 429,
                y: 1824,
                _id: "651293670dee39eaa418fe83",
              },
              {
                x: 429,
                y: 1861,
                _id: "651293670dee39eaa418fe84",
              },
              {
                x: 273,
                y: 1861,
                _id: "651293670dee39eaa418fe85",
              },
            ],
            _id: "651293670dee39eaa418fe81",
          },
          {
            content: "Docteur",
            offset: 1236,
            length: 7,
            confidence: 0.995,
            polygon: [
              {
                x: 733,
                y: 1859,
                _id: "651293670dee39eaa418fe87",
              },
              {
                x: 825,
                y: 1862,
                _id: "651293670dee39eaa418fe88",
              },
              {
                x: 824,
                y: 1889,
                _id: "651293670dee39eaa418fe89",
              },
              {
                x: 732,
                y: 1886,
                _id: "651293670dee39eaa418fe8a",
              },
            ],
            _id: "651293670dee39eaa418fe86",
          },
          {
            content: "DOLL",
            offset: 1244,
            length: 4,
            confidence: 0.988,
            polygon: [
              {
                x: 831,
                y: 1863,
                _id: "651293670dee39eaa418fe8c",
              },
              {
                x: 897,
                y: 1865,
                _id: "651293670dee39eaa418fe8d",
              },
              {
                x: 896,
                y: 1892,
                _id: "651293670dee39eaa418fe8e",
              },
              {
                x: 829,
                y: 1889,
                _id: "651293670dee39eaa418fe8f",
              },
            ],
            _id: "651293670dee39eaa418fe8b",
          },
          {
            content: "Philippe",
            offset: 1249,
            length: 8,
            confidence: 0.995,
            polygon: [
              {
                x: 902,
                y: 1865,
                _id: "651293670dee39eaa418fe91",
              },
              {
                x: 1002,
                y: 1869,
                _id: "651293670dee39eaa418fe92",
              },
              {
                x: 1000,
                y: 1897,
                _id: "651293670dee39eaa418fe93",
              },
              {
                x: 901,
                y: 1892,
                _id: "651293670dee39eaa418fe94",
              },
            ],
            _id: "651293670dee39eaa418fe90",
          },
          {
            content: "Médecin",
            offset: 1258,
            length: 7,
            confidence: 0.991,
            polygon: [
              {
                x: 755,
                y: 1890,
                _id: "651293670dee39eaa418fe96",
              },
              {
                x: 847,
                y: 1893,
                _id: "651293670dee39eaa418fe97",
              },
              {
                x: 847,
                y: 1918,
                _id: "651293670dee39eaa418fe98",
              },
              {
                x: 755,
                y: 1914,
                _id: "651293670dee39eaa418fe99",
              },
            ],
            _id: "651293670dee39eaa418fe95",
          },
          {
            content: "généraliste",
            offset: 1266,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 854,
                y: 1893,
                _id: "651293670dee39eaa418fe9b",
              },
              {
                x: 975,
                y: 1898,
                _id: "651293670dee39eaa418fe9c",
              },
              {
                x: 975,
                y: 1922,
                _id: "651293670dee39eaa418fe9d",
              },
              {
                x: 854,
                y: 1918,
                _id: "651293670dee39eaa418fe9e",
              },
            ],
            _id: "651293670dee39eaa418fe9a",
          },
          {
            content: "Centre",
            offset: 1278,
            length: 6,
            confidence: 0.995,
            polygon: [
              {
                x: 719,
                y: 1917,
                _id: "651293670dee39eaa418fea0",
              },
              {
                x: 796,
                y: 1920,
                _id: "651293670dee39eaa418fea1",
              },
              {
                x: 796,
                y: 1944,
                _id: "651293670dee39eaa418fea2",
              },
              {
                x: 719,
                y: 1942,
                _id: "651293670dee39eaa418fea3",
              },
            ],
            _id: "651293670dee39eaa418fe9f",
          },
          {
            content: "de",
            offset: 1285,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 802,
                y: 1920,
                _id: "651293670dee39eaa418fea5",
              },
              {
                x: 832,
                y: 1922,
                _id: "651293670dee39eaa418fea6",
              },
              {
                x: 831,
                y: 1945,
                _id: "651293670dee39eaa418fea7",
              },
              {
                x: 801,
                y: 1944,
                _id: "651293670dee39eaa418fea8",
              },
            ],
            _id: "651293670dee39eaa418fea4",
          },
          {
            content: "santé",
            offset: 1288,
            length: 5,
            confidence: 0.985,
            polygon: [
              {
                x: 837,
                y: 1922,
                _id: "651293670dee39eaa418feaa",
              },
              {
                x: 902,
                y: 1924,
                _id: "651293670dee39eaa418feab",
              },
              {
                x: 901,
                y: 1948,
                _id: "651293670dee39eaa418feac",
              },
              {
                x: 836,
                y: 1945,
                _id: "651293670dee39eaa418fead",
              },
            ],
            _id: "651293670dee39eaa418fea9",
          },
          {
            content: "FILIERIS",
            offset: 1294,
            length: 8,
            confidence: 0.949,
            polygon: [
              {
                x: 907,
                y: 1924,
                _id: "651293670dee39eaa418feaf",
              },
              {
                x: 1006,
                y: 1926,
                _id: "651293670dee39eaa418feb0",
              },
              {
                x: 1005,
                y: 1952,
                _id: "651293670dee39eaa418feb1",
              },
              {
                x: 907,
                y: 1948,
                _id: "651293670dee39eaa418feb2",
              },
            ],
            _id: "651293670dee39eaa418feae",
          },
          {
            content: "Nº",
            offset: 1303,
            length: 2,
            confidence: 0.648,
            polygon: [
              {
                x: 735,
                y: 1945,
                _id: "651293670dee39eaa418feb4",
              },
              {
                x: 763,
                y: 1947,
                _id: "651293670dee39eaa418feb5",
              },
              {
                x: 763,
                y: 1971,
                _id: "651293670dee39eaa418feb6",
              },
              {
                x: 735,
                y: 1970,
                _id: "651293670dee39eaa418feb7",
              },
            ],
            _id: "651293670dee39eaa418feb3",
          },
          {
            content: "Finess",
            offset: 1306,
            length: 6,
            confidence: 0.991,
            polygon: [
              {
                x: 768,
                y: 1947,
                _id: "651293670dee39eaa418feb9",
              },
              {
                x: 842,
                y: 1950,
                _id: "651293670dee39eaa418feba",
              },
              {
                x: 842,
                y: 1974,
                _id: "651293670dee39eaa418febb",
              },
              {
                x: 768,
                y: 1971,
                _id: "651293670dee39eaa418febc",
              },
            ],
            _id: "651293670dee39eaa418feb8",
          },
          {
            content: "68",
            offset: 1313,
            length: 2,
            confidence: 0.991,
            polygon: [
              {
                x: 849,
                y: 1951,
                _id: "651293670dee39eaa418febe",
              },
              {
                x: 875,
                y: 1952,
                _id: "651293670dee39eaa418febf",
              },
              {
                x: 875,
                y: 1975,
                _id: "651293670dee39eaa418fec0",
              },
              {
                x: 848,
                y: 1974,
                _id: "651293670dee39eaa418fec1",
              },
            ],
            _id: "651293670dee39eaa418febd",
          },
          {
            content: "000",
            offset: 1316,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 880,
                y: 1952,
                _id: "651293670dee39eaa418fec3",
              },
              {
                x: 923,
                y: 1953,
                _id: "651293670dee39eaa418fec4",
              },
              {
                x: 922,
                y: 1977,
                _id: "651293670dee39eaa418fec5",
              },
              {
                x: 880,
                y: 1975,
                _id: "651293670dee39eaa418fec6",
              },
            ],
            _id: "651293670dee39eaa418fec2",
          },
          {
            content: "693",
            offset: 1320,
            length: 3,
            confidence: 0.998,
            polygon: [
              {
                x: 928,
                y: 1953,
                _id: "651293670dee39eaa418fec8",
              },
              {
                x: 970,
                y: 1954,
                _id: "651293670dee39eaa418fec9",
              },
              {
                x: 970,
                y: 1979,
                _id: "651293670dee39eaa418feca",
              },
              {
                x: 928,
                y: 1977,
                _id: "651293670dee39eaa418fecb",
              },
            ],
            _id: "651293670dee39eaa418fec7",
          },
          {
            content: "9",
            offset: 1324,
            length: 1,
            confidence: 0.997,
            polygon: [
              {
                x: 975,
                y: 1954,
                _id: "651293670dee39eaa418fecd",
              },
              {
                x: 989,
                y: 1955,
                _id: "651293670dee39eaa418fece",
              },
              {
                x: 989,
                y: 1980,
                _id: "651293670dee39eaa418fecf",
              },
              {
                x: 975,
                y: 1980,
                _id: "651293670dee39eaa418fed0",
              },
            ],
            _id: "651293670dee39eaa418fecc",
          },
          {
            content: "26,",
            offset: 1326,
            length: 3,
            confidence: 0.648,
            polygon: [
              {
                x: 653,
                y: 1973,
                _id: "651293670dee39eaa418fed2",
              },
              {
                x: 685,
                y: 1974,
                _id: "651293670dee39eaa418fed3",
              },
              {
                x: 684,
                y: 1998,
                _id: "651293670dee39eaa418fed4",
              },
              {
                x: 653,
                y: 1997,
                _id: "651293670dee39eaa418fed5",
              },
            ],
            _id: "651293670dee39eaa418fed1",
          },
          {
            content: "rue",
            offset: 1330,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 690,
                y: 1974,
                _id: "651293670dee39eaa418fed7",
              },
              {
                x: 727,
                y: 1975,
                _id: "651293670dee39eaa418fed8",
              },
              {
                x: 727,
                y: 2000,
                _id: "651293670dee39eaa418fed9",
              },
              {
                x: 689,
                y: 1998,
                _id: "651293670dee39eaa418feda",
              },
            ],
            _id: "651293670dee39eaa418fed6",
          },
          {
            content: "Maréchal",
            offset: 1334,
            length: 8,
            confidence: 0.942,
            polygon: [
              {
                x: 734,
                y: 1975,
                _id: "651293670dee39eaa418fedc",
              },
              {
                x: 835,
                y: 1978,
                _id: "651293670dee39eaa418fedd",
              },
              {
                x: 835,
                y: 2004,
                _id: "651293670dee39eaa418fede",
              },
              {
                x: 734,
                y: 2000,
                _id: "651293670dee39eaa418fedf",
              },
            ],
            _id: "651293670dee39eaa418fedb",
          },
          {
            content: "de",
            offset: 1343,
            length: 2,
            confidence: 0.941,
            polygon: [
              {
                x: 840,
                y: 1979,
                _id: "651293670dee39eaa418fee1",
              },
              {
                x: 869,
                y: 1980,
                _id: "651293670dee39eaa418fee2",
              },
              {
                x: 868,
                y: 2005,
                _id: "651293670dee39eaa418fee3",
              },
              {
                x: 839,
                y: 2004,
                _id: "651293670dee39eaa418fee4",
              },
            ],
            _id: "651293670dee39eaa418fee0",
          },
          {
            content: "Lattre",
            offset: 1346,
            length: 6,
            confidence: 0.991,
            polygon: [
              {
                x: 874,
                y: 1980,
                _id: "651293670dee39eaa418fee6",
              },
              {
                x: 938,
                y: 1983,
                _id: "651293670dee39eaa418fee7",
              },
              {
                x: 937,
                y: 2008,
                _id: "651293670dee39eaa418fee8",
              },
              {
                x: 873,
                y: 2005,
                _id: "651293670dee39eaa418fee9",
              },
            ],
            _id: "651293670dee39eaa418fee5",
          },
          {
            content: "de",
            offset: 1353,
            length: 2,
            confidence: 0.996,
            polygon: [
              {
                x: 943,
                y: 1983,
                _id: "651293670dee39eaa418feeb",
              },
              {
                x: 972,
                y: 1984,
                _id: "651293670dee39eaa418feec",
              },
              {
                x: 971,
                y: 2010,
                _id: "651293670dee39eaa418feed",
              },
              {
                x: 942,
                y: 2009,
                _id: "651293670dee39eaa418feee",
              },
            ],
            _id: "651293670dee39eaa418feea",
          },
          {
            content: "Tassigny",
            offset: 1356,
            length: 8,
            confidence: 0.993,
            polygon: [
              {
                x: 980,
                y: 1984,
                _id: "651293670dee39eaa418fef0",
              },
              {
                x: 1075,
                y: 1989,
                _id: "651293670dee39eaa418fef1",
              },
              {
                x: 1074,
                y: 2015,
                _id: "651293670dee39eaa418fef2",
              },
              {
                x: 978,
                y: 2010,
                _id: "651293670dee39eaa418fef3",
              },
            ],
            _id: "651293670dee39eaa418feef",
          },
          {
            content: "68270",
            offset: 1365,
            length: 5,
            confidence: 0.993,
            polygon: [
              {
                x: 746,
                y: 2004,
                _id: "651293670dee39eaa418fef5",
              },
              {
                x: 813,
                y: 2005,
                _id: "651293670dee39eaa418fef6",
              },
              {
                x: 812,
                y: 2030,
                _id: "651293670dee39eaa418fef7",
              },
              {
                x: 745,
                y: 2028,
                _id: "651293670dee39eaa418fef8",
              },
            ],
            _id: "651293670dee39eaa418fef4",
          },
          {
            content: "WITTENHEIM",
            offset: 1371,
            length: 10,
            confidence: 0.808,
            polygon: [
              {
                x: 818,
                y: 2006,
                _id: "651293670dee39eaa418fefa",
              },
              {
                x: 969,
                y: 2011,
                _id: "651293670dee39eaa418fefb",
              },
              {
                x: 967,
                y: 2036,
                _id: "651293670dee39eaa418fefc",
              },
              {
                x: 817,
                y: 2030,
                _id: "651293670dee39eaa418fefd",
              },
            ],
            _id: "651293670dee39eaa418fef9",
          },
          {
            content: "Membre",
            offset: 1382,
            length: 6,
            confidence: 0.993,
            polygon: [
              {
                x: 437,
                y: 2151,
                _id: "651293670dee39eaa418feff",
              },
              {
                x: 517,
                y: 2150,
                _id: "651293670dee39eaa418ff00",
              },
              {
                x: 517,
                y: 2174,
                _id: "651293670dee39eaa418ff01",
              },
              {
                x: 438,
                y: 2173,
                _id: "651293670dee39eaa418ff02",
              },
            ],
            _id: "651293670dee39eaa418fefe",
          },
          {
            content: "d'une",
            offset: 1389,
            length: 5,
            confidence: 0.994,
            polygon: [
              {
                x: 522,
                y: 2150,
                _id: "651293670dee39eaa418ff04",
              },
              {
                x: 578,
                y: 2149,
                _id: "651293670dee39eaa418ff05",
              },
              {
                x: 579,
                y: 2174,
                _id: "651293670dee39eaa418ff06",
              },
              {
                x: 522,
                y: 2174,
                _id: "651293670dee39eaa418ff07",
              },
            ],
            _id: "651293670dee39eaa418ff03",
          },
          {
            content: "association",
            offset: 1395,
            length: 11,
            confidence: 0.991,
            polygon: [
              {
                x: 584,
                y: 2149,
                _id: "651293670dee39eaa418ff09",
              },
              {
                x: 700,
                y: 2149,
                _id: "651293670dee39eaa418ff0a",
              },
              {
                x: 700,
                y: 2174,
                _id: "651293670dee39eaa418ff0b",
              },
              {
                x: 584,
                y: 2174,
                _id: "651293670dee39eaa418ff0c",
              },
            ],
            _id: "651293670dee39eaa418ff08",
          },
          {
            content: "de",
            offset: 1407,
            length: 2,
            confidence: 0.94,
            polygon: [
              {
                x: 705,
                y: 2149,
                _id: "651293670dee39eaa418ff0e",
              },
              {
                x: 730,
                y: 2148,
                _id: "651293670dee39eaa418ff0f",
              },
              {
                x: 731,
                y: 2174,
                _id: "651293670dee39eaa418ff10",
              },
              {
                x: 705,
                y: 2174,
                _id: "651293670dee39eaa418ff11",
              },
            ],
            _id: "651293670dee39eaa418ff0d",
          },
          {
            content: "gestion",
            offset: 1410,
            length: 7,
            confidence: 0.991,
            polygon: [
              {
                x: 735,
                y: 2148,
                _id: "651293670dee39eaa418ff13",
              },
              {
                x: 811,
                y: 2148,
                _id: "651293670dee39eaa418ff14",
              },
              {
                x: 811,
                y: 2175,
                _id: "651293670dee39eaa418ff15",
              },
              {
                x: 736,
                y: 2174,
                _id: "651293670dee39eaa418ff16",
              },
            ],
            _id: "651293670dee39eaa418ff12",
          },
          {
            content: "agréée,",
            offset: 1418,
            length: 7,
            confidence: 0.993,
            polygon: [
              {
                x: 816,
                y: 2148,
                _id: "651293670dee39eaa418ff18",
              },
              {
                x: 893,
                y: 2148,
                _id: "651293670dee39eaa418ff19",
              },
              {
                x: 893,
                y: 2175,
                _id: "651293670dee39eaa418ff1a",
              },
              {
                x: 816,
                y: 2175,
                _id: "651293670dee39eaa418ff1b",
              },
            ],
            _id: "651293670dee39eaa418ff17",
          },
          {
            content: "le",
            offset: 1426,
            length: 2,
            confidence: 0.996,
            polygon: [
              {
                x: 898,
                y: 2148,
                _id: "651293670dee39eaa418ff1d",
              },
              {
                x: 916,
                y: 2147,
                _id: "651293670dee39eaa418ff1e",
              },
              {
                x: 917,
                y: 2175,
                _id: "651293670dee39eaa418ff1f",
              },
              {
                x: 898,
                y: 2175,
                _id: "651293670dee39eaa418ff20",
              },
            ],
            _id: "651293670dee39eaa418ff1c",
          },
          {
            content: "règlement",
            offset: 1429,
            length: 9,
            confidence: 0.944,
            polygon: [
              {
                x: 922,
                y: 2147,
                _id: "651293670dee39eaa418ff22",
              },
              {
                x: 1021,
                y: 2147,
                _id: "651293670dee39eaa418ff23",
              },
              {
                x: 1021,
                y: 2175,
                _id: "651293670dee39eaa418ff24",
              },
              {
                x: 922,
                y: 2175,
                _id: "651293670dee39eaa418ff25",
              },
            ],
            _id: "651293670dee39eaa418ff21",
          },
          {
            content: "par",
            offset: 1439,
            length: 3,
            confidence: 0.993,
            polygon: [
              {
                x: 1026,
                y: 2147,
                _id: "651293670dee39eaa418ff27",
              },
              {
                x: 1062,
                y: 2147,
                _id: "651293670dee39eaa418ff28",
              },
              {
                x: 1062,
                y: 2174,
                _id: "651293670dee39eaa418ff29",
              },
              {
                x: 1026,
                y: 2175,
                _id: "651293670dee39eaa418ff2a",
              },
            ],
            _id: "651293670dee39eaa418ff26",
          },
          {
            content: "chèque",
            offset: 1443,
            length: 6,
            confidence: 0.967,
            polygon: [
              {
                x: 1067,
                y: 2147,
                _id: "651293670dee39eaa418ff2c",
              },
              {
                x: 1143,
                y: 2147,
                _id: "651293670dee39eaa418ff2d",
              },
              {
                x: 1144,
                y: 2174,
                _id: "651293670dee39eaa418ff2e",
              },
              {
                x: 1067,
                y: 2174,
                _id: "651293670dee39eaa418ff2f",
              },
            ],
            _id: "651293670dee39eaa418ff2b",
          },
          {
            content: "est",
            offset: 1450,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 1149,
                y: 2147,
                _id: "651293670dee39eaa418ff31",
              },
              {
                x: 1181,
                y: 2147,
                _id: "651293670dee39eaa418ff32",
              },
              {
                x: 1181,
                y: 2174,
                _id: "651293670dee39eaa418ff33",
              },
              {
                x: 1149,
                y: 2174,
                _id: "651293670dee39eaa418ff34",
              },
            ],
            _id: "651293670dee39eaa418ff30",
          },
          {
            content: "accepté.",
            offset: 1454,
            length: 8,
            confidence: 0.96,
            polygon: [
              {
                x: 1186,
                y: 2147,
                _id: "651293670dee39eaa418ff36",
              },
              {
                x: 1275,
                y: 2147,
                _id: "651293670dee39eaa418ff37",
              },
              {
                x: 1276,
                y: 2174,
                _id: "651293670dee39eaa418ff38",
              },
              {
                x: 1186,
                y: 2174,
                _id: "651293670dee39eaa418ff39",
              },
            ],
            _id: "651293670dee39eaa418ff35",
          },
          {
            content: "En",
            offset: 1463,
            length: 2,
            confidence: 0.994,
            polygon: [
              {
                x: 697,
                y: 2188,
                _id: "651293670dee39eaa418ff3b",
              },
              {
                x: 721,
                y: 2188,
                _id: "651293670dee39eaa418ff3c",
              },
              {
                x: 721,
                y: 2213,
                _id: "651293670dee39eaa418ff3d",
              },
              {
                x: 697,
                y: 2212,
                _id: "651293670dee39eaa418ff3e",
              },
            ],
            _id: "651293670dee39eaa418ff3a",
          },
          {
            content: "cas",
            offset: 1466,
            length: 3,
            confidence: 0.997,
            polygon: [
              {
                x: 726,
                y: 2188,
                _id: "651293670dee39eaa418ff40",
              },
              {
                x: 765,
                y: 2188,
                _id: "651293670dee39eaa418ff41",
              },
              {
                x: 765,
                y: 2213,
                _id: "651293670dee39eaa418ff42",
              },
              {
                x: 726,
                y: 2213,
                _id: "651293670dee39eaa418ff43",
              },
            ],
            _id: "651293670dee39eaa418ff3f",
          },
          {
            content: "d'urgence,",
            offset: 1470,
            length: 10,
            confidence: 0.943,
            polygon: [
              {
                x: 770,
                y: 2188,
                _id: "651293670dee39eaa418ff45",
              },
              {
                x: 878,
                y: 2187,
                _id: "651293670dee39eaa418ff46",
              },
              {
                x: 878,
                y: 2214,
                _id: "651293670dee39eaa418ff47",
              },
              {
                x: 770,
                y: 2213,
                _id: "651293670dee39eaa418ff48",
              },
            ],
            _id: "651293670dee39eaa418ff44",
          },
          {
            content: "appelez",
            offset: 1481,
            length: 7,
            confidence: 0.994,
            polygon: [
              {
                x: 883,
                y: 2187,
                _id: "651293670dee39eaa418ff4a",
              },
              {
                x: 963,
                y: 2186,
                _id: "651293670dee39eaa418ff4b",
              },
              {
                x: 963,
                y: 2214,
                _id: "651293670dee39eaa418ff4c",
              },
              {
                x: 883,
                y: 2214,
                _id: "651293670dee39eaa418ff4d",
              },
            ],
            _id: "651293670dee39eaa418ff49",
          },
          {
            content: "le",
            offset: 1489,
            length: 2,
            confidence: 0.997,
            polygon: [
              {
                x: 968,
                y: 2186,
                _id: "651293670dee39eaa418ff4f",
              },
              {
                x: 987,
                y: 2186,
                _id: "651293670dee39eaa418ff50",
              },
              {
                x: 988,
                y: 2213,
                _id: "651293670dee39eaa418ff51",
              },
              {
                x: 969,
                y: 2214,
                _id: "651293670dee39eaa418ff52",
              },
            ],
            _id: "651293670dee39eaa418ff4e",
          },
          {
            content: "15.",
            offset: 1492,
            length: 3,
            confidence: 0.959,
            polygon: [
              {
                x: 993,
                y: 2186,
                _id: "651293670dee39eaa418ff54",
              },
              {
                x: 1028,
                y: 2186,
                _id: "651293670dee39eaa418ff55",
              },
              {
                x: 1028,
                y: 2213,
                _id: "651293670dee39eaa418ff56",
              },
              {
                x: 993,
                y: 2213,
                _id: "651293670dee39eaa418ff57",
              },
            ],
            _id: "651293670dee39eaa418ff53",
          },
        ],
        styles: [
          {
            isHandwritten: true,
            offset: 468,
            length: 8,
            confidence: 1,
            _id: "651293670dee39eaa418ff58",
          },
        ],
        ner: [
          {
            content: "10002457751",
            category: "RPPS",
            offset: 287,
            length: 11,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff59",
          },
          {
            content: "26/05/2023",
            category: "date",
            offset: 457,
            length: 10,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff5a",
          },
          {
            content: "Prescriptions relatives au traitement de l'affection de longue durée reconnue",
            category: "prescriptionType",
            offset: 477,
            length: 77,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff5b",
          },
          {
            content: "AFFECTION EXONERANTE",
            category: "prescriptionType",
            offset: 556,
            length: 20,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff5c",
          },
          {
            content: "Ionogramme plasmatique",
            category: "examinationName",
            offset: 578,
            length: 22,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff5d",
          },
          {
            content: "Exploration d'une anomalie lipidique",
            category: "examinationName",
            offset: 601,
            length: 36,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff5e",
          },
          {
            content: "EAL",
            category: "examinationName",
            offset: 639,
            length: 3,
            confidence: 0.99,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff5f",
          },
          {
            content: "SGOT",
            category: "examinationName",
            offset: 644,
            length: 4,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff60",
          },
          {
            content: "SGPT",
            category: "examinationName",
            offset: 649,
            length: 4,
            confidence: 0.99,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff61",
          },
          {
            content: "Glycémie",
            category: "examinationName",
            offset: 700,
            length: 8,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff62",
          },
          {
            content: "Hémoglobine glyquée",
            category: "examinationName",
            offset: 716,
            length: 19,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff63",
          },
          {
            content: "HbA1c",
            category: "examinationName",
            offset: 737,
            length: 5,
            confidence: 0.72,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff64",
          },
          {
            content: "Créatininémie",
            category: "examinationName",
            offset: 744,
            length: 13,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff65",
          },
          {
            content: "Créatine-phospho-kinase (",
            category: "examinationName",
            offset: 798,
            length: 25,
            confidence: 0.99,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff66",
          },
          {
            content: "CPK) totale",
            category: "examinationName",
            offset: 823,
            length: 11,
            confidence: 0.9,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff67",
          },
          {
            content: "Gamma GT",
            category: "examinationName",
            offset: 835,
            length: 8,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff68",
          },
          {
            content: "Microalbuminurie",
            category: "examinationName",
            offset: 844,
            length: 16,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff69",
          },
          {
            content: "Ionogramme plasmatique",
            category: "examinationName",
            offset: 963,
            length: 22,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff6a",
          },
          {
            content: "Prescriptions SANS RAPPORT avec l'affection de longue durée",
            category: "prescriptionType",
            offset: 986,
            length: 59,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff6b",
          },
          {
            content: "MALADIES INTERCURRENTES",
            category: "prescriptionType",
            offset: 1047,
            length: 23,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff6c",
          },
          {
            content: "Protéine C reactive",
            category: "examinationName",
            offset: 1072,
            length: 19,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff6d",
          },
          {
            content: "CRP",
            category: "examinationName",
            offset: 1093,
            length: 3,
            confidence: 0.99,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff6e",
          },
          {
            content: "Ferritine sérique",
            category: "examinationName",
            offset: 1098,
            length: 17,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff6f",
          },
          {
            content: "Albuminémie",
            category: "examinationName",
            offset: 1116,
            length: 11,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff70",
          },
          {
            content: "Calcémie corrigée",
            category: "examinationName",
            offset: 1128,
            length: 17,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff71",
          },
          {
            content: "Vitamine D (D2-D3)",
            category: "examinationName",
            offset: 1146,
            length: 18,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff72",
          },
          {
            content: "Uricémie",
            category: "examinationName",
            offset: 1165,
            length: 8,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff73",
          },
          {
            content: "Thyréostimuline sanguine",
            category: "examinationName",
            offset: 1174,
            length: 24,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff74",
          },
          {
            content: "TSH ultrasensible",
            category: "examinationName",
            offset: 1200,
            length: 17,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff75",
          },
          {
            content: "NFS",
            category: "examinationName",
            offset: 1219,
            length: 3,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff76",
          },
          {
            content: "Plaquettes",
            category: "examinationName",
            offset: 1225,
            length: 10,
            confidence: 1,
            isHandwritten: false,
            _id: "651293700dee39eaa418ff77",
          },
        ],
        acts: [
          {
            content: "Ionogramme plasmatique",
            offset: 578,
            length: 22,
            confidence: 9.327684,
            code: "IONO",
            isHandwritten: false,
            polygon: [
              {
                x: 174,
                y: 975,
                _id: "651293710dee39eaa418ff79",
              },
              {
                x: 562,
                y: 975,
                _id: "651293710dee39eaa418ff7a",
              },
              {
                x: 562,
                y: 1017,
                _id: "651293710dee39eaa418ff7b",
              },
              {
                x: 174,
                y: 1017,
                _id: "651293710dee39eaa418ff7c",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff78",
          },
          {
            content: "Exploration d'une anomalie lipidique",
            offset: 601,
            length: 36,
            confidence: 10.979242,
            code: "LIPI2",
            isHandwritten: false,
            polygon: [
              {
                x: 177,
                y: 1012,
                _id: "651293710dee39eaa418ff7e",
              },
              {
                x: 715,
                y: 1012,
                _id: "651293710dee39eaa418ff7f",
              },
              {
                x: 715,
                y: 1054,
                _id: "651293710dee39eaa418ff80",
              },
              {
                x: 177,
                y: 1054,
                _id: "651293710dee39eaa418ff81",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff7d",
          },
          {
            content: "EAL",
            offset: 639,
            length: 3,
            confidence: 5.3038391670000005,
            code: "LIPI2",
            isHandwritten: false,
            polygon: [
              {
                x: 722,
                y: 1011,
                _id: "651293710dee39eaa418ff83",
              },
              {
                x: 813,
                y: 1011,
                _id: "651293710dee39eaa418ff84",
              },
              {
                x: 813,
                y: 1051,
                _id: "651293710dee39eaa418ff85",
              },
              {
                x: 722,
                y: 1051,
                _id: "651293710dee39eaa418ff86",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff82",
          },
          {
            content: "SGOT",
            offset: 644,
            length: 4,
            confidence: 6.144239,
            code: "GOT_68",
            isHandwritten: false,
            polygon: [
              {
                x: 176,
                y: 1055,
                _id: "651293710dee39eaa418ff88",
              },
              {
                x: 359,
                y: 1055,
                _id: "651293710dee39eaa418ff89",
              },
              {
                x: 359,
                y: 1094,
                _id: "651293710dee39eaa418ff8a",
              },
              {
                x: 176,
                y: 1094,
                _id: "651293710dee39eaa418ff8b",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff87",
          },
          {
            content: "SGPT",
            offset: 649,
            length: 4,
            confidence: 6.08279661,
            code: "GPT_68",
            isHandwritten: false,
            polygon: [
              {
                x: 176,
                y: 1055,
                _id: "651293710dee39eaa418ff8d",
              },
              {
                x: 359,
                y: 1055,
                _id: "651293710dee39eaa418ff8e",
              },
              {
                x: 359,
                y: 1094,
                _id: "651293710dee39eaa418ff8f",
              },
              {
                x: 176,
                y: 1094,
                _id: "651293710dee39eaa418ff90",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff8c",
          },
          {
            content: "Glycémie",
            offset: 700,
            length: 8,
            confidence: 5.750421,
            code: "GL",
            isHandwritten: false,
            polygon: [
              {
                x: 179,
                y: 1095,
                _id: "651293710dee39eaa418ff92",
              },
              {
                x: 313,
                y: 1095,
                _id: "651293710dee39eaa418ff93",
              },
              {
                x: 313,
                y: 1136,
                _id: "651293710dee39eaa418ff94",
              },
              {
                x: 179,
                y: 1136,
                _id: "651293710dee39eaa418ff95",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff91",
          },
          {
            content: "Hémoglobine glyquée",
            offset: 716,
            length: 19,
            confidence: 7.5897765,
            code: "HGLY_68",
            isHandwritten: false,
            polygon: [
              {
                x: 178,
                y: 1134,
                _id: "651293710dee39eaa418ff97",
              },
              {
                x: 501,
                y: 1134,
                _id: "651293710dee39eaa418ff98",
              },
              {
                x: 501,
                y: 1176,
                _id: "651293710dee39eaa418ff99",
              },
              {
                x: 178,
                y: 1176,
                _id: "651293710dee39eaa418ff9a",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ff96",
          },
          {
            content: "HbA1c",
            offset: 737,
            length: 5,
            confidence: 4.193861472,
            code: "HGLY_68",
            isHandwritten: false,
            polygon: [
              {
                x: 509,
                y: 1133,
                _id: "651293710dee39eaa418ff9c",
              },
              {
                x: 640,
                y: 1133,
                _id: "651293710dee39eaa418ff9d",
              },
              {
                x: 640,
                y: 1176,
                _id: "651293710dee39eaa418ff9e",
              },
              {
                x: 509,
                y: 1176,
                _id: "651293710dee39eaa418ff9f",
              },
            ],
            ALD: true,
            warning: true,
            _id: "651293710dee39eaa418ff9b",
          },
          {
            content: "Créatininémie",
            offset: 744,
            length: 13,
            confidence: 5.1989717,
            code: "CR",
            isHandwritten: false,
            polygon: [
              {
                x: 178,
                y: 1176,
                _id: "651293710dee39eaa418ffa1",
              },
              {
                x: 385,
                y: 1176,
                _id: "651293710dee39eaa418ffa2",
              },
              {
                x: 385,
                y: 1214,
                _id: "651293710dee39eaa418ffa3",
              },
              {
                x: 178,
                y: 1214,
                _id: "651293710dee39eaa418ffa4",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ffa0",
          },
          {
            content: "Créatine-phospho-kinase (",
            offset: 798,
            length: 25,
            confidence: 5.8377042900000005,
            code: "CPK_68",
            isHandwritten: false,
            polygon: [
              {
                x: 180,
                y: 1214,
                _id: "651293710dee39eaa418ffa6",
              },
              {
                x: 640,
                y: 1214,
                _id: "651293710dee39eaa418ffa7",
              },
              {
                x: 640,
                y: 1256,
                _id: "651293710dee39eaa418ffa8",
              },
              {
                x: 180,
                y: 1256,
                _id: "651293710dee39eaa418ffa9",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ffa5",
          },
          {
            content: "CPK) totale",
            offset: 823,
            length: 11,
            confidence: 5.914719,
            code: "CPK_68",
            isHandwritten: false,
            polygon: [
              {
                x: 552,
                y: 1213,
                _id: "651293710dee39eaa418ffab",
              },
              {
                x: 736,
                y: 1213,
                _id: "651293710dee39eaa418ffac",
              },
              {
                x: 736,
                y: 1256,
                _id: "651293710dee39eaa418ffad",
              },
              {
                x: 552,
                y: 1256,
                _id: "651293710dee39eaa418ffae",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ffaa",
          },
          {
            content: "Gamma GT",
            offset: 835,
            length: 8,
            confidence: 10.701513,
            code: "GGT_68",
            isHandwritten: false,
            polygon: [
              {
                x: 180,
                y: 1258,
                _id: "651293710dee39eaa418ffb0",
              },
              {
                x: 346,
                y: 1258,
                _id: "651293710dee39eaa418ffb1",
              },
              {
                x: 346,
                y: 1295,
                _id: "651293710dee39eaa418ffb2",
              },
              {
                x: 180,
                y: 1295,
                _id: "651293710dee39eaa418ffb3",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ffaf",
          },
          {
            content: "Microalbuminurie",
            offset: 844,
            length: 16,
            confidence: 6.57191,
            code: "MICRAP",
            isHandwritten: false,
            polygon: [
              {
                x: 181,
                y: 1297,
                _id: "651293710dee39eaa418ffb5",
              },
              {
                x: 437,
                y: 1297,
                _id: "651293710dee39eaa418ffb6",
              },
              {
                x: 437,
                y: 1337,
                _id: "651293710dee39eaa418ffb7",
              },
              {
                x: 181,
                y: 1337,
                _id: "651293710dee39eaa418ffb8",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ffb4",
          },
          {
            content: "Ionogramme plasmatique",
            offset: 963,
            length: 22,
            confidence: 9.327684,
            code: "IONO",
            isHandwritten: false,
            polygon: [
              {
                x: 178,
                y: 1338,
                _id: "651293710dee39eaa418ffba",
              },
              {
                x: 566,
                y: 1338,
                _id: "651293710dee39eaa418ffbb",
              },
              {
                x: 566,
                y: 1378,
                _id: "651293710dee39eaa418ffbc",
              },
              {
                x: 178,
                y: 1378,
                _id: "651293710dee39eaa418ffbd",
              },
            ],
            ALD: true,
            warning: false,
            _id: "651293710dee39eaa418ffb9",
          },
          {
            content: "Protéine C reactive",
            offset: 1072,
            length: 19,
            confidence: 11.678961,
            code: "CRP_68",
            isHandwritten: false,
            polygon: [
              {
                x: 182,
                y: 1536,
                _id: "651293710dee39eaa418ffbf",
              },
              {
                x: 460,
                y: 1536,
                _id: "651293710dee39eaa418ffc0",
              },
              {
                x: 460,
                y: 1575,
                _id: "651293710dee39eaa418ffc1",
              },
              {
                x: 182,
                y: 1575,
                _id: "651293710dee39eaa418ffc2",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffbe",
          },
          {
            content: "CRP",
            offset: 1093,
            length: 3,
            confidence: 7.148979486,
            code: "CRP_68",
            isHandwritten: false,
            polygon: [
              {
                x: 466,
                y: 1534,
                _id: "651293710dee39eaa418ffc4",
              },
              {
                x: 558,
                y: 1534,
                _id: "651293710dee39eaa418ffc5",
              },
              {
                x: 558,
                y: 1574,
                _id: "651293710dee39eaa418ffc6",
              },
              {
                x: 466,
                y: 1574,
                _id: "651293710dee39eaa418ffc7",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffc3",
          },
          {
            content: "Ferritine sérique",
            offset: 1098,
            length: 17,
            confidence: 8.917185,
            code: "FERRI_68",
            isHandwritten: false,
            polygon: [
              {
                x: 182,
                y: 1578,
                _id: "651293710dee39eaa418ffc9",
              },
              {
                x: 426,
                y: 1578,
                _id: "651293710dee39eaa418ffca",
              },
              {
                x: 426,
                y: 1615,
                _id: "651293710dee39eaa418ffcb",
              },
              {
                x: 182,
                y: 1615,
                _id: "651293710dee39eaa418ffcc",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffc8",
          },
          {
            content: "Albuminémie",
            offset: 1116,
            length: 11,
            confidence: 5.9744635,
            code: "ALBS_68",
            isHandwritten: false,
            polygon: [
              {
                x: 182,
                y: 1620,
                _id: "651293710dee39eaa418ffce",
              },
              {
                x: 382,
                y: 1620,
                _id: "651293710dee39eaa418ffcf",
              },
              {
                x: 382,
                y: 1657,
                _id: "651293710dee39eaa418ffd0",
              },
              {
                x: 182,
                y: 1657,
                _id: "651293710dee39eaa418ffd1",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffcd",
          },
          {
            content: "Calcémie corrigée",
            offset: 1128,
            length: 17,
            confidence: 9.208564,
            code: "CACOR",
            isHandwritten: false,
            polygon: [
              {
                x: 182,
                y: 1658,
                _id: "651293710dee39eaa418ffd3",
              },
              {
                x: 449,
                y: 1658,
                _id: "651293710dee39eaa418ffd4",
              },
              {
                x: 449,
                y: 1698,
                _id: "651293710dee39eaa418ffd5",
              },
              {
                x: 182,
                y: 1698,
                _id: "651293710dee39eaa418ffd6",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffd2",
          },
          {
            content: "Vitamine D (D2-D3)",
            offset: 1146,
            length: 18,
            confidence: 7.6030827,
            code: "VITD",
            isHandwritten: false,
            polygon: [
              {
                x: 183,
                y: 1701,
                _id: "651293710dee39eaa418ffd8",
              },
              {
                x: 482,
                y: 1701,
                _id: "651293710dee39eaa418ffd9",
              },
              {
                x: 482,
                y: 1739,
                _id: "651293710dee39eaa418ffda",
              },
              {
                x: 183,
                y: 1739,
                _id: "651293710dee39eaa418ffdb",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffd7",
          },
          {
            content: "Uricémie",
            offset: 1165,
            length: 8,
            confidence: 6.3185425,
            code: "AU",
            isHandwritten: false,
            polygon: [
              {
                x: 181,
                y: 1742,
                _id: "651293710dee39eaa418ffdd",
              },
              {
                x: 316,
                y: 1742,
                _id: "651293710dee39eaa418ffde",
              },
              {
                x: 316,
                y: 1778,
                _id: "651293710dee39eaa418ffdf",
              },
              {
                x: 181,
                y: 1778,
                _id: "651293710dee39eaa418ffe0",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffdc",
          },
          {
            content: "Thyréostimuline sanguine",
            offset: 1174,
            length: 24,
            confidence: 8.8146305,
            code: "TSH_68",
            isHandwritten: false,
            polygon: [
              {
                x: 184,
                y: 1779,
                _id: "651293710dee39eaa418ffe2",
              },
              {
                x: 564,
                y: 1779,
                _id: "651293710dee39eaa418ffe3",
              },
              {
                x: 564,
                y: 1821,
                _id: "651293710dee39eaa418ffe4",
              },
              {
                x: 184,
                y: 1821,
                _id: "651293710dee39eaa418ffe5",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffe1",
          },
          {
            content: "TSH ultrasensible",
            offset: 1200,
            length: 17,
            confidence: 9.721655,
            code: "TSH_68",
            isHandwritten: false,
            polygon: [
              {
                x: 571,
                y: 1776,
                _id: "651293710dee39eaa418ffe7",
              },
              {
                x: 860,
                y: 1776,
                _id: "651293710dee39eaa418ffe8",
              },
              {
                x: 860,
                y: 1820,
                _id: "651293710dee39eaa418ffe9",
              },
              {
                x: 571,
                y: 1820,
                _id: "651293710dee39eaa418ffea",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffe6",
          },
          {
            content: "NFS",
            offset: 1219,
            length: 3,
            confidence: 5.8248076,
            code: "NF",
            isHandwritten: false,
            polygon: [
              {
                x: 183,
                y: 1824,
                _id: "651293710dee39eaa418ffec",
              },
              {
                x: 244,
                y: 1824,
                _id: "651293710dee39eaa418ffed",
              },
              {
                x: 244,
                y: 1862,
                _id: "651293710dee39eaa418ffee",
              },
              {
                x: 183,
                y: 1862,
                _id: "651293710dee39eaa418ffef",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418ffeb",
          },
          {
            content: "Plaquettes",
            offset: 1225,
            length: 10,
            confidence: 5.8248076,
            code: "PLAQ_68",
            isHandwritten: false,
            polygon: [
              {
                x: 273,
                y: 1824,
                _id: "651293710dee39eaa418fff1",
              },
              {
                x: 429,
                y: 1824,
                _id: "651293710dee39eaa418fff2",
              },
              {
                x: 429,
                y: 1861,
                _id: "651293710dee39eaa418fff3",
              },
              {
                x: 273,
                y: 1861,
                _id: "651293710dee39eaa418fff4",
              },
            ],
            ALD: false,
            warning: false,
            _id: "651293710dee39eaa418fff0",
          },
        ],
        createdAt: "2023-09-26T08:16:33.166Z",
        updatedAt: "2023-09-26T08:16:49.756Z",
        __v: 1,
        s3Key: "651293610dee39eaa418fb64.png",
        content:
          "CENTRE DE SANTÉ FILIERIS DE WITTENHEIM 26, rue du Mal de Lattre de Tassigny 68270 Wittenheim Tél : 03.89.52.75.32 Fax :03.89.50.57.81\nFilieris\nConsultations sur rendez-vous Lundi, mercredi et vendredi : après-midi\nDocteur Philippe DOLL Médecine Générale\n680006939\nMardi et jeudi : matin\n10002457751\nphilippe.doll@medecin.mssante.fr philippe.doll.filieris@medical68.apicrypt.org\nMadame\nFemme\nLucien Klein\nNé(e) le 18/08/1934 88 ans\nOrdonnance de laboratoire\n26/05/2023\nA dovale\nPrescriptions relatives au traitement de l'affection de longue durée reconnue (AFFECTION EXONERANTE)\nIonogramme plasmatique Exploration d'une anomalie lipidique (EAL)\nSGOT-SGPT\nLaboratoire BPA - Bassin Potassique SELAS 32A\nGlycémie à jeun Hémoglobine glyquée (HbA1c)\nCréatininémie\n18 Rue de Mindere mim 68270 MMITTENHEIM\nCréatine-phospho-kinase (CPK) totale Gamma GT Microalbuminurie\nSIRET : 433 895 265 00273 laboratoire bassinpotseique@b2a.fr Tél. 03 89 57 33 33 - Fax 03 80 57 16 85\nIonogramme plasmatique\nPrescriptions SANS RAPPORT avec l'affection de longue durée (MALADIES INTERCURRENTES)\nProtéine C reactive (CRP) Ferritine sérique Albuminémie Calcémie corrigée Vitamine D (D2-D3) Uricémie Thyréostimuline sanguine (TSH ultrasensible) NFS - Plaquettes\nDocteur DOLL Philippe Médecin généraliste Centre de santé FILIERIS Nº Finess 68 000 693 9 26, rue Maréchal de Lattre de Tassigny 68270 WITTENHEIM\nMembre d'une association de gestion agréée, le règlement par chèque est accepté.\nEn cas d'urgence, appelez le 15.",
        width: 1653,
        height: 2338,
        isHandwritten: true,
      },
    };

    window.postMessage({ message: "insertActs", data: response.data }, "*");
  },
  false
);

const launchScan = async () => {
  //   const result = await DWTChromeExtension.scan();

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const result = {
    _content: `/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAAqACAAQAAAABAAAGdaADAAQAAAABAAAJIgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+IRrElDQ19QUk9GSUxFAAEBAAARnGFwcGwCAAAAbW50ckdSQVlYWVogB9wACAAXAA8ALgAPYWNzcEFQUEwAAAAAbm9uZQAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFZGVzYwAAAMAAAAB5ZHNjbQAAATwAAAgaY3BydAAACVgAAAAjd3RwdAAACXwAAAAUa1RSQwAACZAAAAgMZGVzYwAAAAAAAAAfR2VuZXJpYyBHcmF5IEdhbW1hIDIuMiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1sdWMAAAAAAAAAHwAAAAxza1NLAAAALgAAAYRkYURLAAAAOgAAAbJjYUVTAAAAOAAAAex2aVZOAAAAQAAAAiRwdEJSAAAASgAAAmR1a1VBAAAALAAAAq5mckZVAAAAPgAAAtpodUhVAAAANAAAAxh6aFRXAAAAGgAAA0xrb0tSAAAAIgAAA2ZuYk5PAAAAOgAAA4hjc0NaAAAAKAAAA8JoZUlMAAAAJAAAA+pyb1JPAAAAKgAABA5kZURFAAAATgAABDhpdElUAAAATgAABIZzdlNFAAAAOAAABNR6aENOAAAAGgAABQxqYUpQAAAAJgAABSZlbEdSAAAAKgAABUxwdFBPAAAAUgAABXZubE5MAAAAQAAABchlc0VTAAAATAAABgh0aFRIAAAAMgAABlR0clRSAAAAJAAABoZmaUZJAAAARgAABqpockhSAAAAPgAABvBwbFBMAAAASgAABy5hckVHAAAALAAAB3hydVJVAAAAOgAAB6RlblVTAAAAPAAAB94AVgFhAGUAbwBiAGUAYwBuAOEAIABzAGkAdgDhACAAZwBhAG0AYQAgADIALAAyAEcAZQBuAGUAcgBpAHMAawAgAGcAcgDlACAAMgAsADIAIABnAGEAbQBtAGEALQBwAHIAbwBmAGkAbABHAGEAbQBtAGEAIABkAGUAIABnAHIAaQBzAG8AcwAgAGcAZQBuAOgAcgBpAGMAYQAgADIALgAyAEMepQB1ACAAaADsAG4AaAAgAE0A4AB1ACAAeADhAG0AIABDAGgAdQBuAGcAIABHAGEAbQBtAGEAIAAyAC4AMgBQAGUAcgBmAGkAbAAgAEcAZQBuAOkAcgBpAGMAbwAgAGQAYQAgAEcAYQBtAGEAIABkAGUAIABDAGkAbgB6AGEAcwAgADIALAAyBBcEMAQzBDAEOwRMBD0EMAAgAEcAcgBhAHkALQQzBDAEPAQwACAAMgAuADIAUAByAG8AZgBpAGwAIABnAOkAbgDpAHIAaQBxAHUAZQAgAGcAcgBpAHMAIABnAGEAbQBtAGEAIAAyACwAMgDBAGwAdABhAGwA4QBuAG8AcwAgAHMAegD8AHIAawBlACAAZwBhAG0AbQBhACAAMgAuADKQGnUocHCWjlFJXqYAMgAuADKCcl9pY8+P8Md8vBgAINaMwMkAIKwQucgAIAAyAC4AMgAg1QS4XNMMx3wARwBlAG4AZQByAGkAcwBrACAAZwByAOUAIABnAGEAbQBtAGEAIAAyACwAMgAtAHAAcgBvAGYAaQBsAE8AYgBlAGMAbgDhACABYQBlAGQA4QAgAGcAYQBtAGEAIAAyAC4AMgXSBdAF3gXUACAF0AXkBdUF6AAgBdsF3AXcBdkAIAAyAC4AMgBHAGEAbQBhACAAZwByAGkAIABnAGUAbgBlAHIAaQBjAQMAIAAyACwAMgBBAGwAbABnAGUAbQBlAGkAbgBlAHMAIABHAHIAYQB1AHMAdAB1AGYAZQBuAC0AUAByAG8AZgBpAGwAIABHAGEAbQBtAGEAIAAyACwAMgBQAHIAbwBmAGkAbABvACAAZwByAGkAZwBpAG8AIABnAGUAbgBlAHIAaQBjAG8AIABkAGUAbABsAGEAIABnAGEAbQBtAGEAIAAyACwAMgBHAGUAbgBlAHIAaQBzAGsAIABnAHIA5QAgADIALAAyACAAZwBhAG0AbQBhAHAAcgBvAGYAaQBsZm6QGnBwXqZ8+2VwADIALgAyY8+P8GWHTvZOAIIsMLAw7DCkMKww8zDeACAAMgAuADIAIDDXMO0w1TChMKQw6wOTA7UDvQO5A7oDzAAgA5MDugPBA7kAIAOTA6wDvAO8A7EAIAAyAC4AMgBQAGUAcgBmAGkAbAAgAGcAZQBuAOkAcgBpAGMAbwAgAGQAZQAgAGMAaQBuAHoAZQBuAHQAbwBzACAAZABhACAARwBhAG0AbQBhACAAMgAsADIAQQBsAGcAZQBtAGUAZQBuACAAZwByAGkAagBzACAAZwBhAG0AbQBhACAAMgAsADIALQBwAHIAbwBmAGkAZQBsAFAAZQByAGYAaQBsACAAZwBlAG4A6QByAGkAYwBvACAAZABlACAAZwBhAG0AbQBhACAAZABlACAAZwByAGkAcwBlAHMAIAAyACwAMg4jDjEOBw4qDjUOQQ4BDiEOIQ4yDkAOAQ4jDiIOTA4XDjEOSA4nDkQOGwAgADIALgAyAEcAZQBuAGUAbAAgAEcAcgBpACAARwBhAG0AYQAgADIALAAyAFkAbABlAGkAbgBlAG4AIABoAGEAcgBtAGEAYQBuACAAZwBhAG0AbQBhACAAMgAsADIAIAAtAHAAcgBvAGYAaQBpAGwAaQBHAGUAbgBlAHIAaQENAGsAaQAgAEcAcgBhAHkAIABHAGEAbQBtAGEAIAAyAC4AMgAgAHAAcgBvAGYAaQBsAFUAbgBpAHcAZQByAHMAYQBsAG4AeQAgAHAAcgBvAGYAaQBsACAAcwB6AGEAcgBvAVsAYwBpACAAZwBhAG0AbQBhACAAMgAsADIGOgYnBkUGJwAgADIALgAyACAGRAZIBkYAIAYxBkUGJwYvBkoAIAY5BicGRQQeBDEESQQwBE8AIARBBDUEQAQwBE8AIAQzBDAEPAQ8BDAAIAAyACwAMgAtBD8EQAQ+BEQEOAQ7BEwARwBlAG4AZQByAGkAYwAgAEcAcgBhAHkAIABHAGEAbQBtAGEAIAAyAC4AMgAgAFAAcgBvAGYAaQBsAGUAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTIAAFhZWiAAAAAAAADzUQABAAAAARbMY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCf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ygjOCM8jFOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/0vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0/f6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1/f6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKjllWGJ5H+6ilj9BXH+Cdd8T+Ipb291Sxs7TStxWy2xyLLKM/eO49APYZPpjntKKKKKKKKKKKKKKKKKTIGPeloqAXVuZWjE8Rdeq7xkfhSm6twhczxBB1YuMVKCCAQcg9CKiNxCswhaaMSnkIWG4/hRPcQW0fmTzRxJ03SMFH5mlilinjEkMiSIejIwIP4imPdW8UoieaNZCCQhcAkDknFRQ6lYT27XMN7bSQK21pUlUqD6Eg4zzUb67pEYJfVbFQOpNwgx+tNPiHRQATrGnjIyP9JTp69aSTxJoUShpNZ05FPQtdIAf1pieJ9AkYKmuaazFtoAuoyc5xjr1zUr67pEV4bOTVbFLoHaYWuEDg+m3OarnxZ4cWTY2v6WHyRtN3HnIGT39Ku3WqWFjFHNd39rbxSfceWZUVvoSeeoqzHIkiK8bKyMMqynII9qp2us6XfXc1pZ6lZ3FzB/roYZ1d4+cfMoORz60201zSdQvZrKy1SyubqHPmwQzo7pg4O5Qcjnjmpr7UbHS4Bcahe29pBnHmXEqxrnGepIHQGoZtc0i30pdUm1Syj05wCt01woibPTD5wc/Wqj+NPC8Uvlv4j0hX/um9jz/Op7DxJomrXJttP1eyurgAt5UM6s2AcE4BzinWHiDR9WuZLbT9WsbueIZkjt7hJGQZxkgE454qD/AIS7w39v+w/27p32vf5fk/aV3bvTGetalzcwWdtLc3MqRQRKXeRzgKB1JNZum+KdA1m5+y6brNjd3GzzPKhnVm29zgHNbNFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf/S9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooryjxb8R9bXxVL4Y8K6ek98pC+ccNufGWUAkBQAfvEkZB4rC1HxJ8U/B0MWpa1GlxpwdVkEiQuF5xtJjwef7x74+h63xN42mvPhYPEvh64+zyySRqu7aSCJNrr6djz6elcx4dPxV8R6NDqllr9qkDtIixzoquCrbSGHl+oPUk11XhLRfiFZ+I1ufEes211p3lMGiikz85AxgbBwOe9cRB8VdX0rxxLBqFx5umi9eKRZU2eVGXwDnAAx1zzkD1Oa9J+Iep31p4Ka70W98iWSWELdRlSFRmGWyQRgjv71j6jb+N/FHhzw9feHtXt7CXyWa9Esu3zHOAPuxsDghvTr+XBXOq/EK08YR+FpfErHUpdqIUlRoySuck+WCB07ZHvmuoeD4h+G/CWt3+ta3BMywx+QUl3NGS6hiTtUDC98nrWH4bg+I/ia1fWNN8RZhimMSwS3TfMQMEn5SuOc9+/tVq08c+N/DPjmDSfEsf2xLrYPJhVSFBON6FVBPPXPatT4r6xrlrr2kaboF/cW1xOmW2XARTlsD5cc9z+HFQJ4M+KxkQy+LbbYpJ2reSfNwcD/VDjP14+lejeE7XXLPQkh8RXUV1qAdt0kTblK/w87V7e1R+NtRn0nwXqt9bsyzQwEoykgg5Aznt169q8m8Naf8S/FWlJren+KBFA8jokdxO4YYJB4ClTg9PpW14Y8aeJPDvig+GvGm+dpSvkXKLu2qcgMCq5ZSe56c9MYqL4qa3rMHjHR9M0vV5LMTNGmyO6K/OxIy6J823lepwccdDUjeAviSyGL/AITQgOysx+2S7lIPYhBweTj8OcZr0Twlpuq6ToUdnrWofb7xXYmfezZUn5QS3OcUzxrrU2geENR1O32faIYwIi6llDsQoJA6gE5/CvLPDmlfELxlokmrp4ultEncokTOyn5Dnd8qjaC3oOV9sAdN8OdZ8YLqs+h+KLG+YJGW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0nunMMgDkoWhVvLOBgfMD90H0rvNT0LTdZltJdQtRO1pJ5sOWYBH45wDgnjv0q3fafa6nZS2d7BHPbSrteOQZBFZmm+E9C0nR5tIstMt47GdSs0RBbzQeDvLZLccck07SfCuj6HN5un2jJIIhCjSTySmOMfwJvY7F6fKuBwPQVt1gDwd4eGinRxpVuNNMglNsAdhYHIOM+o6VPceGNFulsxNpsB+xAi1wu0wZxnZj7vQdPSprrQ9MvtRtdSubGCW+tDmC4ZPnj69D1xyeKzdV8C+Gdc1MahqWiWlxdhdpkdPvcY+YdGOOhOcVKfB/h1o7aM6JYFbVi8H7hcxsTksD1BJAJPUkVv0UUUUUUUUUUUUUUUUUUUUV//X9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//Q9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooppIUZJAA7mnUUUU0soYKSAT0GetOooppZUIBIBY4GT1NNWRHLKjqxQ4YA5weuDUlFFFFFFQW9zBdRCW3lSWNs4eNgwODg8j3qeiiiiiiiiiiiiiiiiiiiiiiv/0ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK8p+IsV3pXivTPEGjmWOW1gkur9U3lZooyi4YA4JwzDkD3PArttQ8R28fhVdXsWM/2pEFkqjJlkkwI1x9SM+nOehrkvg5aSf2HqGpahK8+pNeywSzySb+FxkA9Mbsnit+w8f6TqN7ZQxwX0dtqMhjsbyaDbDcsAT8pzuH3TjcBntRqXxA0rTNXutKe11O4vrZA5gtbRpHcHHKgckYOc9PfPFX9T8T29jfWunx2V5e6hcxmZbS2Rd6xjqzF2VVHbk5J4ANec6VdaD/wr3xHJ4h0zUn0mXWJN0EiSeeuChUSPu3KQQAWdh2BJr2NQAoA6Y9c1zmteLrfR2uVj0/UNQFom+7ayRGFsMZG7c654BOFyQBzjIzk6349eJPDs2hafNqdvrEx2yRbVLIoJKKHIw5x3wAA3Oa7SB3lhR3ieFmALRsQShI6HBIyPYkVy+qXuir8R9DtLiyun1gwTm2ugdsUaFcspywDEhegBI68UuteOrPSPts39l6ne2mnssd3d2kcbRxOcZX5nVmIBG7aCBnB5BAnHjC3PiHS9N+yym31aJpLG8V1KTbU3sNudwwO5AHIqCDx1Y+br41Czu9Oj0Mr9omuAuxw2dpQgnOcA4/2h3rndW1WfVvHngt5NDv7ANNLJG94yYkXym6LHI2GGf4sHn646Twje6Re33iCXTdKubC7F8Uv/ALQADLKFHzDDMMY+nrjmtnWNSOl6e92lhd3zKygQWcYeRizAcAkevJzgDk8VpDkA4x7VxzeO3k1fVNJsPDurXd7pros6KYUG1ud4LScjbyB1Pp1Iq/8ACzbI6Jb63HourNo7uI57wpGot23bTuUvuIB6kAj3J4re1/xGmh3Gn2qWN1f3moSPHb29uYwWKqXYlnZQAFB71mjxq954e1q9sNInfUNKleGewnlRCGXkneCVI25PGc4xVvwtq2r3/hK3v9U0qSG88lX8qORWaf5QcgHG0n+62MdM96wtM8X6No3w4t/EOm6Jdw6VJcSZt4ym6FmnZSzZboX7LkjcBjHTXs/Gkdx4nt9Dn0fU7N7pJJbae4iVUlVOScBiyd+GAPTOCcV1dFFFFFFFFFFFFFFFFFFFFFf/0vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK5nUCjeOdMje0nkjl0+6ieURExDLREKzYwMgHiuV8I+F9V0/wAQS6VqHmt4f0CV59NZ0P755QSpz1by1LD/AHm74GLfwxnmj8N6tF9muVuFvriaJJ7Z4N6tgqcMABk5/XPOa4SPULqSHwpq80GvXNxbXqteW6WUsVrbdQsUcSoFJHbAY+rcgV3+nXGfjBqchs75I57CKBJns5FjMiEsy7yu3oRznB6A1BfXsnhf4pXOranb3LaVqNjHDFdQWjy+VIp/1beWhbnkjPr9cc3fXNxeeBfGdjBo+syz3OqNNbxGwuCXQyp0JUgYCk44wMV7JbTrc2sUyrIqyIGCyoUYAjoVPIPsea8m1OLTdD8a64PEvg+XWYtQlW6sLu3sFuXYbQrRHpgqRwOvOfStXX1mstP8I6jFoU9jZWV+ZZ9Ps4d5gjZWC5jjBG75hnHQk/WvRLaZri1jmaGSBpFDGKQAOmR0bBIyPrXD+INq/GXwiTESWtbsB84C4Qn8a5iGw03R/EGs2niLwFc6tcS3slxZXsGnC68+N23BC54BXpyeB1wBzu+I4ZtJ1nwJqzaNIljp/nxXNvY27TfZTJEFQBUB+UEY4HYVx1/Y6v4h1Dxs1noOrwyahJZ3Nn9osWgWVYDlgWYYDc5A6k9QD06PWfFM+rah4SvLbw3r+LO7aa8ibS5g1v8AIU252Yb7xPB7DPNbXgSSZvEvi530/ULeC4vUuLea6tZIVlUptO3eoOQV5HuK6nXdWbQ9Me+GnX+obWVfs9hD5srZOMhcjgdTWrXDeHY7qDxz4x1Ceyu0trhrf7NI8DDzViQq+3j+9nHc5zyOa5JtN1b/AIUE2if2bqT6t5gUQG2fezfaRLu6cDbzkn24PFdT4xvdUaXw48VlrEulTyP/AGjBpqulwCU/dglSGVd2c8gcdegOT4TsNQ+w+MdLbw9eaal1JNJbGdFCkOmFXcGO9vdSQOec103gfULu48J2iXeh3+mtZ26RFLlQGkZVw2xc7sZHBYDOePWuNOk69a/BVdGfT9Qk1kXG5oU+Z2X7TvOXBAwU4Jz+FdTrcd5P8QfCF7Dpt40EMd0LmQKCsPmRqFDe+V5weMd8iu2ooooooooooooooooooooor//T9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo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ahVUegA4FILeFbhp0hQTuoVpAo3EDoCeuKiutNsb6SOS7sra4eI5jaWJXKH2JHFWZESRCjhWRhgqRkGmW9vDawrDbwxwxJwqRqFUfQCmtbQvdJcNDG06KVSQoNyg9QD1AOB+VWKrQ2VrbzPPDawxyyffdIwGb6kdegqzSAAAADAHQCloooooooooooooooooooooooooooooooooooooooooooooor//1vf6KKKKKKKKKKKKKKKKKKKKK4PxJ8T7DwnqKWes6PqsPmsfLmRYnR0BxvGJM++MZ9q7lHWRFdGDKwyCDkEVmeINes/DehXWr37N9nt1yVUjc5JwFXJAJJOBzWd4O8XxeM7CS/tdOu7ayDbI5bhk/eEdcBWJGPel8XeKJvDcNktlpp1LUL65Fvb2iy+WXOCSc7WwABk8YA5JFb9u07QRmeNEmKAuivuCtjkA4GRnvgfSoNTvJrDTZ7uK0lu5IkLCCJlVmx7sQB+f51j+BvE8vi/wzFq8toloZZZFESyeYAFbA+bAz+QrpqKKxfE+p6jpGiS3ml6W+p3SMoFtG2GYEgEjg9K1IHd4Y3ljMUjKC0ZIO045GR1xU1FFFctr/jKDR9Qg0ews5dV1y5QtFYQOF2r/AH5HPEae/PsDSvqfjOK0Mx8M6XM4APkQ6w3mH2G6ALn6sB70/wAI+KF8V2t9craSWgtrtrbyZmHmrtVc7wPutkkYyelVvFviPV9M1TSNJ0KygvNR1B3YpOWCRxJjc7Mv3R8wGT+AJ4rrqKK5DRdc13WPGGsQrb2kfh2wk+zxzlG86aUAbgDu24Vt2Tj0HJzjr6KK4f4meJNa8L6BFfaTHabXlEUss5JaPPTamMHoeSwx6HPHaxuJI1cdGANPoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/1/f6KKKKKKKKKKKKKKKKKKKKK8u+InhxfE/jDSNOkQbpNNvDC+7G2ZTGU/DPXjkZq18IvEn9p+G20W7lY6npLGGZHJ3bNx2nn0wVx22j1FVPiaZPEMWp6PEVNnpNg97ejJUmZgfIUEEdMOxB4+71q/8ABl0T4YWU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cY4JOQcHNU/iLeSaPqfgnXprCSO1s5ys6J832feEG3ao+Y4DgY9OhrrX8daFNNZ22malaahe3kqxw20FwpbnlmbGSoVQxOR2wOa5r4qKp1zwUZE3RDVBvyDjqnXHNQeFgD8d/F5KBW+zR8ng4xH0H5c/41c0Yonxy8RriUSvYQtkxrtICxjhtuf15544FdnpniDStanvItNvY7mSyk8q4CZwjemeh6HkZ6GuC+F9x5/jDx3mAIw1BSX24J+aQYPfHGQO2aX4fGL/AIWV44VAAUuFB+QA8s/fqen+e+TpWpjTviX8Rb14xdRQWhleAMMyhFHy4AP0/H3qDV/Dlj4N0lfG/ga8uWhzGws/PeSJ1b5dpAO5uvRiSD9MV2Xiiz0PxTqen+HNetzDezWpu7O5jk2yRSdHVOOvQ4OQccjgVm+BE13QfGeqeFbjUJdT0yytVmimeMjy2cgqhYk44yAuSMLkY5FYlprukeJPCup634jvA+ryRz28WlNKXEOO0cK8tnKZYqSPUck7Pw41rTbz4ULYrfQyT2VlILpC5/dBmk2hiemQPXp04wad8LL60HwhhQTRnyUuBIkj9Mu2MjggHI49+tcp4ajS+/Z11a1iVZbhGkkaGP7wAdWBI64AGec9O9ausXsHiL4MQ6fo0qX2oWVrbTTWsIDOqqwDAqMjsTg9QOhrf0z4v+G7vRYriaeUansAfToYHeVpT/AgAw2T057jOOa6nV/Edp4c8PLq+u5tYlEYmWMGXY7YG0bRzgnr7U3xZfW1p4Q1O4luYYY2tJAkksgVSSh2jJ9TisD4Y6zp0nw50o/brRWhibzVDqnl4kIJI4xz3xzkdc5NH4M6jp9x4avLWzlQvHeysV8xSzA7fmwCcDt+Vel0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//U9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorm/HhA8B62WzgWjnhsHp64P8q5TwD4YTVfhpp6Savq0dvdx5lhjudoIDnKqcblU4wQCMj0ya63UfB+kanoMWhyRTRaZFGIlt7eZo1KjGAcHnGO/qaj1HwVper6DBot/NfT2UONqtctuOOm5hyce9Vr/wCH2katp9pY6lNqV1BagCJZL6QAY6ZCkAnHGTyOxq03grSn1k6u0t99v8pYRP8AanDKg7A579/WuY8W+CdJ0bwx4l1e1nv1vLm2dp5HvXAkP+0uQp6nGfWneCvCVnqfw/0hLvUdSls57cPLZrdMsTMx3EcfPjPbdj25qP4ypa2/gS1tgsUcC3sAECDGUGRtVV56emK6WHwToUlrYwzLc31pZsXtobq7kljTsPlJwwA4AbOO1aGv+HNI8TWAstWskuod29dxKsjeqsCCD9DyOOlVdB8E+HvDMzTaTpy28zoEMnmM7YAA/iJx0GcdcDOasy+GdJn8TQeIXtmOqQRmFJhIwG0gjlc4PBPUd/pUXiHwhovihIhqtiJZIf8AUzIxSSPvwykHqBx0rKtfhb4OtLm2ul0cPc27b0llnkdmbOdzZb5iO2c47Vq6n4Q0XVdRTULi1kjvkGBdWtxJby4xjl42Ung45zVzT9E07S4JYrK1EPnczShmMspxjLyE72b3JJ96yIPAHhu3+1fZ7CWM3QIuGW7mzLnOdx35J5PJ5GeKhl+H2j22hz2GirLpkhdZreZJHk8iZSCrKrkgZxhgMbgSD1qmdU8P3Oq2reLtHtdN123/ANXNewgxMQM5iuCNrDuBkMOcqMVJf634Av7+O6abSdW1LYY41s1W7ndTgFQqbiR9eBz2zWhpWk3t9r58Q61CkE0cZgsLMMGNrGx+cuwJDSPhc44AAAJ5JtSeENAl1v8AtltMh/tEuHNwuQxYDAJweeAPyFNTwZ4civhfJo9st2H3CcKd+c5+91xnt0pB4I8NDVBqY0e1F+JjP9oC/PvJyST3pdY8F+HdfuRc6npME84GPN5RiMYwSpBP41sWdpb2FrHa2kEcNvENqRxrtVR6AVzVx8N/B1zqKX8vh2xM6nd8qbUJ55KDCk89x79q1tI8N6LoUUsel6VZ2aTALL5MIUyAZwGPVsZPX1NZ9j8P/Cmm6sup2Wh2kF2jb0dFICHGMqudq/gK37q0t762ktbqCOe3kXa8cihlYehBrL0bwloHh+ZptK0m1tZXG1pET5yPTcece309Kn1Lw5omsSrLqej2F7Ig2o11bpKVHoNwOKqweC/DNpdQ3VvoOnRXEBzHKluoZT65xT4PCHhu1vo7230DTYLqNtyTQ2qIwPrkAc8VPaeHtHsPt32TTLWH7exa62RAeeTnO71HJ46cn1NQQ+EfDlreLd2+habDdAtidLZA/wA3DfNjPIJH40WfhHw5p1zHc2Ph/S7a4jzsmhtI0dcjBwwGRwTTI/BfhaCQPD4a0eNwCAyWEQOCMHkL3BIos/BvhvT7pLiz0LT7eRHEimKBVCuAQGAAxkZOD1GTVvUtA0fWjG2qaVY3rRghDdW6SlQcEgbgcdB+VTabpOn6NafZdNsrazt9xbyreIRrk9Tgd6ig0DSLXUW1G30qxivjkG5jt0WQ56/MBnnvUkekabFaNaR6daJas29oVhUIWznJXGM55zTYdE0m3WZIdMs41mAEoSBAJAOgbA5/GpIdK062Egt7C1hEi7ZPLhVd49Dgciiw0yx0q1Ftp9lb2duCSIreJY0BPU4UAVEmhaRFfi/i0qyS8BJFwtugkyeD82M1buLaC8gaC5gjmhb70cqBlPfkGnvFHKAJEVwDkBhnBqJbO0QMFtoVD/eAjAz35p6W8EbmRIY0cjBZVAOPTNTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//V9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorO1bRNL1yBINVsLa9hRt6pcRBwrYIyM9Dgmk03QtJ0bzRpemWdj52PN+y26Rb8ZxnaBnGTj0zWlRRRVDUNJ07Vo1TULC1vEXO1biFZAMjBxkHqOKfZ6bZadF5VjZ29rH/cgiVB+QHuag1HQNG1eSOXU9JsL2WMbUe5tkkKjrgFgcVatLO1sLSO2tLeK2t4xhIoUCIo68AcCrNFFFFJnPSlooprqrqVdQynqCMg1FFa28DO8MEUbucuyIAW+uOtT0VC9xBGwV5o1Y8AMwBqaiiiiiio/MTzPL3rvxu255x64pqTxPI8aSIzpgOoYErnpkdqmooqC4uYLSFpriaOGJcbnkYKoycck+9T1CbmATCAzRiU9E3Dcfwpt3e2tlF5l1cw26f3pZAg/M1P1GRS0UUVUvr+00yzkvL65htbaMAvNPIERcnAyTwOSB+NWVYMoZSCpGQR0NOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//1vf6KKKKKKKKKKKK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KK//1Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1/f6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0/f6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//1vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK5jxf4vh8KWdqfsk97fXkvk2lpCcGV/rzgcjseo4rIsvHerQavaWfijwzJosd5L5VvcfakmjDkDarEY6k4+uOO40/FXjFNAmt9P0+yk1TW7jm30+IlSyj7zM+CFAHPPX9RW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CS3Vnkm1+xxyDjhX3uDznuMdR2HWunoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/1ff6KKKKKKKKKKKKKKKKKKKKK8bufD//AAkN18S9Ni3Jci4triB0IJEioXXGOQTggn/a45zVrRtdj+IniPwkYnEkOl2rahfp/duMeWgPPUMGYe1ct4a1C2sLXT7Sz0FdX8SNqd42m+ZcARQBSN7dQBwucd9ucjitfxS/in/hLvB0nip9GhV9RX7LFpxfzEOV3bmfjuo44zj611Nr5X/C9dQF1s83+yIzab+uNx3bf1zSSWtjF8c4JoDEt1NpTtcBGG5mBCgsMZ+6B3HQdaqQ6nreoeKfEMPgrRtDtTBcLDe398zh55FHdEGeCWwTkYz64EXw5TUYfiD4vh1WaCfUmW1a5mtlCwlwrcKOpwCOeDnOau/B+zWLwbdNII3nmvpxMyqoDkHb1Gcj8T1qP4b29svwhcW0aCOZLknEgcNyy9TjsBVfThM37OiiDcJP7Kf7gycZO7p7Zqt4V0XxLeeA7GSz8b2Fppv2YgwrpUciouDuV3Z+o5ySPXOa674b2lpY+B7K1sdWXVbWJpVju0iMYb942QASTwcjOa66iiiiiiiiiiiiiiiiisPUv+P5/oP5VUrzT43/APIjp/18pXe6L/yAtP8A+vaP/wBBFTX3/IPuf+uTfyNeefBT/kVLz/r8eq/xC/5Kf4L/AN9v/QhTviXd3er+JdE8IW1w8EF6265ZDglfT6da1dR+E3hmbRHtLKxW3u1T91dBjvDDoSayvF1hqmmfBiez1i5S4u4tqmVCTlc8Zz3qTXvEM/hz4OWNxaNtuZreOGNs/dz1I+lZOgaV8M4tFiOr6pp17qE6B7iae5+bcRyOvGKl+H2rW2lePr3wzpmpLf6NNGZrVhJvERHJUGsrwh4ah8TeOfEcGovI+mwXJka2VsLK+SBux6Va8f8AhjT/AAVqOh634ejNlK12sUkcbHawr2eNt8SP/eANZnib/kWNT/69n/lXgPhe78S694Obwt4ft2SKNpJrq5zjcD0QH3r0n4Parp0nh99IjtktNSs2IuY+jOc/errPG3/Ik6z/ANer/wAq43wzrLeH/ggmpRgGWGF/LB/vE8Vg+ELXwJdaSup+KtWsr3V7vLyi6uOY8/w4zxUuh6npXhn4mWmn+G9TjutF1MbWgjl3rC/t6Vr6H/yXXW/+vYfyFYk+if8ACQ/GvVdOmnljsXjDXKRtjzVABCk+mat/EvwPo3hzw2uuaHbmwvLSZMNE5+bJxzzXqeh3T3uhWF1JzJLAjMfcjmr9S6RpuNbudVYglreO3jGeRhnZuPfKflXRUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVyfjPxTL4egt1tY1e5m3N8wyFVcZ4z15/Q10trI81pDJIArvGrMB0BI5qeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/9b3+iiiiiiiiiiiiiiiiiiiiisfTfD1lpWr6pqlt5n2jU3R7gM2VygIG0Y461V0DwZo3hi91C70u3aKW/kDzZckDBJCqOwyx/yBjFuPhP4clgVbd9QsrmO5e5iu7W5KTRMxBYKSCADgds+9Jb/CrRUu47281DWdRv45Y5I728vC80YQ5CAgD5Sc5GM89a2PEvgvTPFD2k91NeWt5aMTb3dlMYpY84yAeR29OOcYyar6B8PdE8O6kdUha9u9UZGR768unlkkBI+9yF6ADp0FQ6r8OdK1HVLzUbe+1bSrq9x9pfTrwxCbHHzKQQeM8YxyT1JNX/D3gfw/4Unkm0Sw+yvLEsUhErsHAORkMSM8nmtHRtFsNBsmtNNh8qFpXmZS5bLscscknvTdK0DTdG0k6ZYW5itGZ2KGRmJLklvmJJ7nvU2l6VZ6PpcGmWEAhs7dPLij3Ftq+mWJJ/GuYu/hX4VumkC2dxb28r75bS2u5IoHPH/LNTtHTsBXW2VlbadZQ2dnCkFtCoSONBgKB2qzRRRRRRRRRRRRRRRRRWHqX/H8/wBB/KqleafG/wD5EdP+vlK3NJ8d+FYdGsYpNf09XS3jVlMwyCFGRWnbeJNE16O4tNL1W1u5zE3yQyBj0rz74S69p2k2mqaNqN1Ha3cN27bJm27h7Zqj4o8RWWv/ABY8MjT3863tJvLM68ozE5IB74xWv8Rlk0Lxv4e8UtGzWULeVcMozt9PwrsNU8caFp+gy6oupW8ieWWiCuCXOOABXF+JdX1PXfgrdajqtsltNMwKxrn7m7g80vivRrjV/gxpxtY/MltYY5tg6lR1/SrfhdPh9rWgW9y1lpsc6RgTxy4VkYDnPNP8H6joGpeMruDQPD9ulrZqR/aUfAJ9BVb4X/8AI3eLv+vr+pqT40/8gnRP+wgv8q9Kt/8Aj2i/3B/Ks7xN/wAixqf/AF7P/KuP+CaKvw+RgoDNcyZIHJ5FY/xD0S78K6/D440JSNrAXsSjhh6n2Peuq1XXrPxJ8L9R1OycGOWzfK55Rscg1zei6RLrfwHFjbrumaFmjX1IOag+HyeCdU8OwW2o2FjFqlsPLuEnG1iR/FzV7Tr7wvP4/g0nQPD1pcCEb5b6LpCR6etN0P8A5Lrrf/XsP5CjQv8Akuuuf9e4/kK1vjD/AMk5vf8ArpH/AOhV03hf/kVdL/69k/lWtWxpP/Hu/wDv/wBBV+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivM/Ei/2lBfXSjJvLmKyg7MoU5OOM9s9epr0pVCqFHQDFOoooooooooooooooooooooooooooooooooooooor//X9/oooooooooooooooooooooooooooooooooooooooooooooooooooorD1L/j+f6D+VVKoavomm69Zi01S0S5gDBtjk4z+FYX/CsvBn/QAtv++n/xrQ0fwf4f0C6a50vTIrWZl2l0LZI9OTUOreBPDWt3n2u/0qGS4P3nGVLfXHWrCeEtBi+xeXpkCfYm3W+0EeWfXrz+Nal1aW99bPb3UKTQuMMjjIIrmoPhr4RtrwXUeiwb1OVBJKg/Qmt/UNJsNV09rC+tkmtGwDEeBx06VNbWkFnaR2tvGEgjXYiDoB6Vzl/8OPCeo3TXNxo8PmsdzFCV3H3ANbmmaTYaNaC1060itoB/BGuPz9aj0/QtM0q5ubmxs0gmum3TOpOXPqcml1XQ9N1yKKPU7RLlIX8yMOT8revBq+qhVCgYAGBTLi3iureSCdA8UilXU9waq6To+n6HYiy0y1S2tgxYRoTjJ6nmrNzbw3dtJb3EayQyKVdGGQwPasqx8J6Fpun3NhZ6dHFaXIxNEGba/wCZq/pumWekWMdlYQLBbR/cjXOB+dY2reAvDOt3LXN9pMLzt96RcqT9cVo6N4f0nw/AYdLsYrZD97YOT9T1p0OhaZBrEurRWaLfzLtknBOWH54oh0LTLfWJtWis0W/mXbJOCcsPzxUuqaVY61YvZajbLcWzkFo2JwSOnSp7e3itLaO3gQJFGoVFHYDtUtbGk/8AHu/+/wD0FX6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKzNd1D+zdInuV2+YAFjBOMsTgf4/hXMwWa3niPRLHdkadAbyfDcmR8Yz+NdzRRRRRRRRRRRRRRRRRUF1dQWNrJc3UqxQRjLu5wAK57TvHWkahdi3Aubfe22KW4i2pKc4+U5P64rqKKKKKKKKKKKKKKKKKKKK/9D3+iiiiiiiiiiiiiiiiiiiiiikznpS0UUUUUUUUUUUUUUUUUUUUUUUUUUUVh6l/wAfz/QfyqpRRRRRRRRRRRRRRRRRRRRRRRRRRWxpP/Hu/wDv/wBBV+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisO58R21v4mtdEUeZNKpaRlb/VcZUEe/wDh61uUUUUUUUUVyPii4jn1jTrByfIjb7TcHsFGev4A/pT/AAbFJeLe69OuyTUZBtQknYiZUDn/ADwK6uiiiiiiiiiiiiiiiiiuYlt4fFd9LHMS+mWkpTYrfLO+Oc47A/55pPHcMDeD75po4yIlVkLAfKdwHHp1x+PfpW/YyPNYW0soxI8SswPqQM1Zoooooooooooooooooor/0ff6KKKKKKKKKKKKKKKKKKKKK8RuPCWgeKfi14tGuzPFDarbug84R5JjUEknqOB+ldf4Y+G3g/RNbh1TSJZZby3DFT9r3gZBQkgdeCRzUupfE7TbHVbqwstJ1rWGtOLiXS7QTxRNjJUtuHI7+nTqCK2G8Y6U3g6bxRbytc6fFCZiIsb+Oq4JGGzxgmuZf4w6R5C3kOh6/cab8u+/SyxAhOOCxbGQTg+/TNT3fxb0O33zQabrV7pqOEbU7WyLWwJ4PzkgnB4PH0zXReJfFFl4Z8Nya7Mkl1aoY8C3KkuHYAEEkAjnPWuYb4vaXE8c8mi65HpEkgjTVZLMrbtk4DAk52/rweKm/wCFq6Yby2LaVq0Wl3Moig1SaDZBKScAqSclT16Zxk44rqtd1yw8OaVLqepTNHbRsB8qlmZicBVUckkn/IrmbH4kwvqdpaaxoWr6It5gW1xfwhY2Y9FYg/Kx44P6cZ7yiiiiiiiiiiiiiiiiiiisPUv+P5/oP5VUoooooooooooooooooooooooooorY0n/j3f8A3/6Cr9FFFFFFFFFFFFFFFFFFFFFFFFJgHHtS0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVQ1bU7fR9NmvrlsJGOFzyzdlH1Ncfo+i3K67p11fLuv5DJdXjgfdJB2J04A/riu/oooooooorym+ebWPEdytnuWW/lWBTs4WFeGbPH93t716jBBHbW8cEShY41CqB2AqWiiiiiiiiiiiiiiiisrW702tkI4nIublvKhA6lj/hVuxtIrCzit4h8qDGe5Pc/ia5/xhu1H7DoMTLvvpcy/7Ma8k/59K6gAKoUDAAwKdRRRRRRRRRRRRRRRRRRX/9L3+iiiiiiiiiiiiiiiiiiiiivII/B/h/xZ8VvF0GrxtdGEW0iIrvHsJjAPKkZ6V2ui+BNB8KreTeH7FrW6uITGW8+R846feYgc15v8LtL8T6j4Wb+yfGkemiG5kWeyfSYpnSTPJdiwbJ9+mMdqtadpdlZfDnx3JZ64mrtM8puLiKxNsizKvzbQCVbrnKYH6VsWtutr+zu0cJRh/ZLyZB4y2WP6k1NrVtbR/AKSKBQIBpMbjaPZWzzjvUfxGfHwMZwePs1mcEA5+eP1/pS/FO2ii+EAjjVBbw/ZRgqcBQyjtyO3SnfF0R23w+sjFiKKG8t9iq2AAM4Gfbj8qPi/Dcmx8PXcV39jhttWiMl0VDC3LfKshB4+Ums3xtoci+HwPE3j2+udKu5I1S3i06FnmbOV2bBk+vHt9K9dooooooooooooooooooorD1L/AI/n+g/lVSiiiiiiiiiiiiiiiiiiiiiiiiiitjSf+Pd/9/8AoKv0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVxty6eJ/EzQlj/AGVo7b5+cLNNjIB9QuD+dbmkSC+WTU/4bg4iH92McD8Scn8q1qKKKKKKKo6rfJpuk3d7IwVYImfJ6ZA4/WuI+GWlSyQ3GvXiDdctttQy8qgyCRnpn29/WvRaKKKKKKKKKKKKKKKKK54t9s8YhMfLYQZYk5G5/btxzVvUdbtrGdbQK012/wByFOpPX8O35ioNG0aW2uJdQ1GQTahMMFucRr/dX06DpW7RRRRRRRRRRRRRRRRRRRX/0/f6KKKKKKKKKKKKKKKKKKKKKy7XQtNs9avNYggZb+9VEuJTK5DhBhRtJ2jAHYCtSuU1X4eeG9Y1SbUbmylju5wBPLbXUsPmgdmCMAfr1rRtvCui2fhx/D9tYJFpTxtE8Csw3K33stncSfXOfep00PTo9AGhpb400QfZhDvY/u8bcbs7unfOfei40TT7rQ20Se336e0ItzD5jD5AMAbgd3Qdc5qPUvDml6voB0O+tfO01kSMw+Yw+VCCvzAhuCo70/VtC07XNKOmahb+fZnaTHvZfukEcgg9h3qTVNIsNZtkt9RtkuIUcSKrZ4YZwePYkfjU19Y2mp2UtnfW8dxbTLtkilXcrD3Fczpvw18I6RqFvqFjo0aXNt/qXeaSQIck5AZiM88HGR26CuwooooooooooooooooooopjRRsctGhPqVpPIh/55R/98ijyIf8AnlH/AN8ijyIf+eUf/fIo8iH/AJ5R/wDfIo8iH/nlH/3yKPIh/wCeUf8A3yKPIh/55R/98ijyIf8AnlH/AN8ijyIf+eUf/fIo8iH/AJ5R/wDfIo8iH/nlH/3yKPIh/wCeUf8A3yKPIh/55R/98ijyIf8AnlH/AN8ijyIf+eUf/fIo8iH/AJ5R/wDfIo8iH/nlH/3yKPIh/wCeUf8A3yKPIh/55R/98ijyIf8AnlH/AN8ijyIf+eUf/fIo8iH/AJ5R/wDfIo8iH/nlH/3yKPIh/wCeUf8A3yKPIh/55R/98ijyIf8AnlH/AN8ijyIf+eUf/fIpyoqDCKFHsMU6iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiuf8UatLp9jHa2JU6neuILVCcYJ6sfQAf0qnqNimieE4dGs2Pn3BEKkfedmOXb+f510On2aafYQWkeNsSBeO/qat0UUUUU1mCqWYgADJJ7VzeoeL4YTJDpdpLqlzGcNHAeB+IB/lXH+JfFa+MLa20PS1Mf2mYLcmQjAw3C+/Iz+Ven21vHaWsVtEoWOJAigDAAAxU9FFFFFFFFFFFFFFFFNJCqSegGa47TbC51rUNRvTezW1rLLs8uEYZgoxyxyP8mumsdMs9OQra26xlvvN1ZvqTyau0UUUUUUUUUUUUUUUUUUUV//1Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKz7TVLO8uru2gmzLauI5VIIwT069e4/CtCq97e2+n2ct3dSCOCJdzuewrn/D1s+pXT+I76LbLMMWkT8mCLpwc4y3U/X3p10V1DxvaQhyVsoWkZQMjcfX9K6aiiiiimsyopZ2CqOSScAVgC7l8QzGK08yPToz+8ucY885+6nsMct+VU/FOv2/hLS0t9Ogj/tG7bZaW6LjcxIBY4B6ZHXqfxrA8KeFl0fX7OzlKSXMUJurkkk/vD0A+mV/KvTKKKKKKKKKKKKKhSeJ5nhWRDIgBZA3zKD0yO1TUUUU0nAJAyfSsbw04fSyeAfMOQAODgHBxxW3RXA6nqviTUJb+90S5t4dPsAQuVybgjluSMcDP+eR1uiaj/a2jWt8U2GaMMyf3T0I/MGtGiiiiiiiiiiiiiiiiiv/1ff6KKKKKKKKKKKKKKKKKKKKKiEsbSNGHUuoBZQeQD0yKezKilmICjkknpTqh+0Qm4MHnR+cBuMe4bseuOtPd1jQu7BVUZJJwAKjt7iC7t457eVJoZFDJJGwZXU9CCOCKnqul1BJcy2yTRtPEAZI1cFkB6EjqM4OPpViq8F3b3JlWCeKUwuY5BG4bYw6qcdD7VYooooooooooooooooooooooooorOl1ext9YtdKkuVF7co8sUOCSVXGT7de/XnHSp76/tdMspb29uI7e2iXdJLI2FUVg6N4/wDDHiHUjp+matHLdAZETRvGW7/LvUbjgE4GeOa19b1i20HRrvVb3f8AZ7aMyPsGWI9APWszVvHPh3QbO2udV1OO0FzGssUbqxlZT38tQW/T19K0tI1nTdesRe6XexXduSV8yJs4I6g9wfY1ka58QfC/hq9+x6rqyQ3AXcY1ieRgOOoRTjqP8g1uWGo2eq2UV7YXMVzayjKSxOGVsHB5HoQQfQiqtnr1re+IdR0WFJTc2EUMs74GweZuKrnOc4XOCBwRT013TJNdfRY7tH1FIfOeBeSicct6dRweeaTWvEGk+HLE3ur38NpBnAMh5Y9cKo5Y45wATWb4c8eeG/FM5t9J1JJLhV3mCRTHJt9QrAZH06ZHrVjxB4v0XwwYF1S7MctxkQwRRtLK+OpCKCcD16VJoHifRvE0M0mj6hFdrA22ULlWQ5IGVYAgHBwcYODjpWpcXENpbyXFxKkUMalndjgKPU1U0TWbXxBo1vqtiZDbXALJ5ibW4JHIPTpVueaK1gknnkSKKNS7u5wqqOSSewrjLf4teEpp4VN5cQwTSmKO7ntnjgYj/powAA69emOcV0+s6zYaFpU+p6jcLBZwqGeQ5PXgAAckkkAAdaxrD4g6FqGpWlgDe20t6oa0e7s5IEuOAcIzgBuv49s5GesooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorhTaW9v8Q7y2vUU2+pwK8W7P3xjp6HKn9K6WO3vbDOy4+1WwGSLl8OmPRsc/j+dYHmDxhq4Q710azf51cZW6k9M9MD0z+HPHaVzPhiI3NzqWsOMG7m2xjGMIox/k+1dNRRRRRXK+IHl1jVbfQLaRljP7y9Zf4U6gfjx+Yq5qDXem2Ur29xaWmn28XB8ss6gDsCcfT1rA8G6NNqGoP4p1TzJbiUbbNZx80Scgt7ZHT8fWtbRJDeeLNbuAylItkAwO4yD/6DXT0Vnvq9jHq0emNcqLyRN6xYOSOe/TseOtaFFFFFFFFFFcho08d7461O4EE0Mq2qIwc8EZ4OOx46GuvoooorC8MTCSwuFAwUuGU+vat2qGsXL2Wk3VzHjdHGzc/Suf1C8Gi/D0Mq5mniEcaL1ZpD298En8K6DSLBdM0i1slx+5jCnHTPU/rmr9FFFFFFFFFFFFFFFFFf/9b3+iiiiiiiiiiiiiiiiiiiiivB/FN1q2lfGXVfEGmRTTrpVvC9zCnO+Fo1VhgHkDO7ngEZ7V1fxP1K11/4MXmo2TiW1uRBIhOBx5q8H3B4I9RXWX3iGw8M+FoNR1KbZAkMYVV+Z5GIGFUdz/8ArOACa4Lw74i0LTvGlzquqaF4g03UNcn8tL/VbcLGowAsSnAKjhR0PQZbium+IN/NKdI8LWyzLJrs5hllj42W6YMvPYlTj6E1ra94i07wlY2kX2eSaeYiGy0+0QGWYjAwi8cKCCT0A9yAczR/iFb32rxaVqWjapo13cMRbfbodqTkAkhW9cA9QB0GckCq/jxz4evdL8Xwkp9kmW1vwM/vLZzg57fKTuHHc9K72vO/htsgk8WyPJGEGsTMWzjaMA854Hr19zTP+Fn3V2kuoaP4R1XUdDiLbr+NlXeF4YxoeXAPHB7Hpg13Gk6pa61pkGo2Uhe2nXcjFSp64IIPQggir9FFFFFFFFFFFFFFFFFFFFFFVNQS7l065jsJUgvGjYQyuu5VfHBI7jNeX6f4Yfw/8VvD8l1qNxqWo3tpcS3d1dbTl1QKPLGMoME8ZPHHFbvxasnuvBouDJbi3srqK5uIbiQIs8YOCmSQMnIwD1PHXFcheeMNG8d6/wCG7HRbB7CaO8Vo728iiixGvzNHFh8sDjBA747Gu2+JKjUNK03w8V3f2vfxQOCcAxqd7ZPUfdHTms/whBDdfE/xheTCNprMwWluNqgxRbTkDuBwKb4diTSfjL4ksLVoorW8tYrswDj95gAkD8WJ/wB78ucs/GFj4J1zxRpc9gdbluL2SYzWWyRijf8ALObuNpZhjnHzcDv1fwhgjTwZJdwzwPb3t3LPFBCylbdScCM7QACABkdqb4Xtr3xBoOu61puqtZT61es9pdqiTmGKNvLX5TlTkK3Hbd2PNY/hvwyPDfxnliS+ubwTaY8rzXcivK7llyWIx/L+dWfHb2tv8TfCN3rJC6OomVjPjyRNtO0nJxnJU5I4wPfDPG+r6NN408HXOn39nNqcV9sJgmViInwpDbScA5OMg98dTXY6hplnpOqX3iz7LqGoXq24iW3gxIwUdREhxgnqeea5HwReR618Tdf1d1SwuHs4YzpswIuF6He4KjBwF4BONwzjjM3iiSfx3rNx4ZspJ49I04F9VuYxgSyYykAzjPTLYyOla/woRo/hnoqsF5SRl29CDIxB/I1q+NLVL3wbq9s91FarJauDNMcInGfmODgfgfoa8avfGkmofCu30FtEubK1eNLc6u6SR2S7WGGDIhJyVwRjufeu++I1jAvwytkW9i8uxa2eJ3xtuNpChRwclgeAOv05rm9d8S3fjLW9C0u/0O88O26X6Spe36OjOyjIRPkxk47nHHXiva64HX5vF9xrtxHBrNh4b0W32+RdzRxSyXbY+YYZsKoOewPHfPEXgTxJqd34i1jQNS1i21n7GqS299bxoN6n7wYoduQSBjA6HrWL4W1Hx140hvmg8RQ6Xa2d3JEJ/sUU8sx3fdI4VVUY5xk55zW94Y8S63L4D1a/vkXUdS0yWeJTEuw3Jj5GVAGDzjAA6Vzmm6j4s1/TI9R0b4iabd6g6rOukLZwJtBPMZJO4DGeozxwf4q9cgMjQRtKgjkKgum7cFOORnv9amoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorjfHlsbaGw8QQxF5tNnVmwcZjJ5/XH5mk1HUpfFV0ujaNKRaYDXt4v8CnkKvPU4I//AFGuosrK306zis7SMRwxDCqP89e9U/EuoLpuhXM5OGK+WvGeW46Va0u1NnpltbNjeiANgd+p/WrtFFFFVb+7jsLKa6lYBIlLHP6D86w/CFjIti+qXa5vL5vMZj12Z+Uf1/Kor2wm8WXgSctFo1vJwgJBumHU9iFB4Hr19K6hVVFCqAqgYAAwAK5nwZ++i1O9ySbi8bgnoB/+uupqhqupW+j6ZPf3LBYoVyfc9AB7k4FedQ21xFqGneKr+Qpc310SE2gBIcYUe+RjHtiruhR6r42mu9Tu9QmtdNEnlwW1u/Bx1znjjjnnJJ6VqyWHiLQLhJrC5OqWAYB7aYkSqvfaehx17fQ101lqNvqCOYGO6NtkiMMMh9xVyiiiuZ8XXWq2VjBPp9x5MInUXUmwMY4yQuQD2Gcnv7gVv20Qgto4hI8gVQN8jbmb3J70tzMttayzPnbGhY456Cue8JwCY3+rlgWvZeBjoq5wep65zXT1lz6pHHqcWnwq0tyxDOFUkRp6se3HT/OdSiiuY0kf2b4p1CwYnZdf6TDk9fXv/nFdPWbryPJoN8sZAfyWIyM9BmuU8OCXxRe2d/Ksi2Gloqwblx502PmbqeBx+nuK72iiiiiiiiiiiiiiiiiiv//X9/ooooooooooooooooooooorzrSmEnxr8SQvGGQ6dCGynBGF4PHPevPfH9pc+BdJ1nw0sLSaDrDpPpzsfltZFdWdD6ZwfwwfWuq+J0cz2Xguc3q2Fml2nm3ksSyLbuUGx2DHBAw3Xj345r+OtC1KHRI4vFPxGMtlcTKIoF0WIySSDkbNh3cHnjscd66XxGSnxc8FeYwCtBehe2W8sZ/n79ayfiGbiL4leFGj1L+yvPingivvKEnlyEdCG+Ug5UevNLrmjyR+I9Bs/EPji8vLiS9SW0s4bGFH3D+LKDKr2JPHX8Nj4xOE+GGqrvCs7Qque581OMd+Aa7SyRo7G3jcEMsSgg9cgCvM/DcU15pfxEtbKNVna9uEj2DBYlDgdOuf51U8JAXfgGz1E/EC90+3ig2ywAW6rbFeCpym7jHGTzweQeeu+GMOmQ+ArAaQ1+1gzSNEb9VWQ/O2TheApOSPY12VFFFFFFFFFFFFFFFFFFFFFFFcJrqofi94TLOoYWl4UBzljtGcduhpvxHhnRNE1Q211dadp16s19BAu/8Ad/3ymMsFx2xgEk8Vznjfxro3jfQl8O+E7m41HVryZPKNujxiEKwJZmIGFwD0+vauowNT+LMIYbzommEsxAIEk7Y49DtjPPHBxWGus23gH4j+IZtf3WumawI57W+KFkZkU7oyVBO7LNgdcAdiKt+DJZPEnj3XPFkMLpo7wR2ljcPEEM+377DgEqCOpz1xnggZXgzxXpvgXQ77S/FMT6XqFnOzSSGByLwMx2ujcl+mM8DGPwbZ6pe6Z4K8V+J0jaK01OUDSbZ4dsg3sUUleM5LqRyenXGK9N0HS00XQbHTIwoW2gSP5VABIHJwABycmuUGB8amH2GQFtJLfamHynDKNoOO2eevWrHj/Un0uKwlv9Ft9S8Ol2/tJmiMklvjGyRQOw5ycccciuS0i00DxDrei23grTmg0eyuVv7++ERXeyqfLjEjfOzZJyAeAT9D1ev+Mbrwl4jkk1uBh4bkgXyryCEsYps4KyHPftgdx+GPpdyPG3xKh17Tre9h0nTrF4FvmQIlyz7hhCRkgEk5B4K84zzNB8J7fS7GeHT/ABT4mgiYmVoobtE8x8YJbagJJ4yep/KpvhHpE1p4St9Sn1HUppbxMNbXUjeVDsdgNiMMqSMZ55wK2fiJot94h8Cappun5a7kRWjTON5Vg23njnGOeP51zF941tbrwe+gW/h3VZdUktvsbaXJZtGUJUrknBAXALBhkYx0pdc8O6tpvgzwlLb2ZvbrQJYZ7i0hTDOoXDhApOWGcADr2qn4p8T2/wARdKfw14f0nUp7ie4RZbqa2ZIrTByWc5BU4BwDjJzjmvWkUqiqWLEDBJ714/qZ0u38fazL49g1OeyDxvpJeGaW22YIYBYsqe2Qw7ZPJq18Pbd4/iDrd3H4XutDsbu2Q2sb2bRIEUqvJA2qxwWK8Hnv1rpPhtb3tvoN/wDb7a4t531K4YLOpBK7vlIyBlcdD3qv4astZ0vQvFC6fZhLw6lczWMN0jKjk4K9SMqT3DY+nIHC65daVr+imF/AWtWPigoTusdPaMLLwMsy43oeT8wPAPTrXsegW97aeHtOt9RkMl7Hbos7s24lwBnJ78961KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK4rxdd3GtQ3PhnRkWa6lXFxKSdkHQgEjoTj8Pqam+HX2dfCsUUcXlzRSOk+Tks4PXnnpiuvrnNZjTU9f07Tid0cLG4nX2A+Ufn/ADro6KKKKK5jxtJu0q3st20XVwsbHOBjPf2zir9rf213OdPtIDLbRKEklBARRjhfU9MVrgAAADAFNkbbEzeik1geC4wnh2N+MyyO7YPfOP6V0VcPrB/4Sjxfa6Ki79O08+ffE5wzYwq+/wD+16Uz4n7x4fUxuUKEvlTjGMf4/rW/4U0qPRvDFhaRoUIiDuCcku3LZP1Nblcf4hiudE1VPENim6ErsvIQDhh2bgemee3HvXUWV5BqFnFdWzh4ZV3KwqxWbe63punSLHd3kUUjdFJyfxA6VYtL+0vo/MtbiOZe5Rs4+vpUlzAl1bSwSDKSIUPHYiq+jztcaNZzMrBmhUkN16VZmXdBIgUMWUjaTjPHSuZ8BMZdBkmLht87cDHy4wAPyxXUkgAk8ADJJrI/t63kuzDZW894ynbLJAgKofQsSOa2aKKxNa0ue6aG8sZViv7c/uy5IV1PVT+uKzpPEms2Xy3nh6ZsdZIXyD9MAj16mrNvc6lrnzfZ5bGzKlW83BZvcDr/AE+vSm+D1Fjpz6M6qk1i5UoDn5SSQf1rpaKKKKKKKKKKKKKKKKKK/9D3+iiiiiiiiiiiiiiiiiiiiisuDQdOt9dudaigZdRuY1ill81yGVeg2k7R07Ck1vQdM8Sac2n6vai4ti4fbvZSGHQhlIIP0PqKkvtH0/UtLOl3tnDcWTIEMMq7lwOnXuMDB6jrXP6N8MfCOg6nFqGn6SI7mH/VM88kgQ+oDMRn360nj7Rb/UNLtNT0lfM1bSLgXlvF/wA9sffj74JXOPfA75rZv9L0nxZoaW+p6f8AaLO4QSCG5iZHTI9DhkYZ9iKpeHvAnhnwrdSXOjaTHbzyLtMhd5GA9AXY7c98YzgZ6Cs/xXpt94h8T6DpS2z/ANl2039oX00keY228RxgnqxbOQOg59M9tVDT9H0/SpbqSxtY4Hu5TNOyDmRz3NYdz8OfB93fC7m8PWJlDbjtj2Kx/wBpRhW98g5710yRpDGsaKqIoCqqjAAHQAVLRRRRRRRRRRRRRRRRRRRRRRRRRUKQQxO7xxIjyHLsqgFj7+tOEaK7OFAZsbmA5OOmaWSNJUKSIrKeqsMg0qqFUKoAAGAB2oKqxBKgkdCR0p1FFFNAAGAAO/FOoooopMDOe9LRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRXL+JfEMtoy6VpKGfV7gYRVGREP7zc8cZI7cZPHW14b8PxaBYFWk868mbfcznq7fj2Gf61BoUEdj4l1+0jAUSSx3KgcD5l+b9a6Wuf0ULd65q2oAZHmC3RvZRz+uK6CiiiiisnW9Cg1y2ihmkkjEcgcNGecdxz61ftLSCxtktraJYoYxhUXtU9V73Isbjb97ymx+RrJ8Hbf+EYtCvQlz1z/Eata1fT2VgUs4jLeznyrdOPvEfePsOpqp4X8Pp4f0vym2veTHzLmYcl3+p5IH+PrXPfEdZbibRLLbF5NxclHYud/bgLjke+ew47jvgAoAAAA4AHanUx0WRCjqGVhggjIIrkV0/WfC0h/suP+0NMLlvsucSR59D3/wA8d6gvdU8QazJFBpNje2BAIle4TYuDjnJGcgZxj16dMX9H8EadpzGe6/4mF2+d0k6gqM+i9PxOTTr3wnHHN9u0R/sF8OcKSIn46FegH0H4UW/iSYrNY31oYNXTCJGOUlJ6FT6dM/1res4Tb2kUBOTGgXPqcfQVZrlW8J3FpLJ/Y2rzafbyNvaAJ5iqe+3JGM8f/q4q5b+HFBV7+/u72Qbs732Kc9sD/GtiC3htoVhgiSONfuogwB+FTUUUUUVh6nE9nqdvq0e7av7mdVGcoTw2BycVuUUUUUUUUUUUUUUUUUUV/9H3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiub8TeIZNJEdnp9u91qtyP3EIUkAd2P8Ant6VJ4b8P/2LBLPcym51O6O65uT/ABH0HsP1/IDoK5fVZjpfi/S7wxn7Peq1pPIP4WHKZ9ic1tatd/YdJubkHayRnafQngfqRUHh60ax0O1if75Uu/Pdjn+tatFFFFFFFFRTqWgkUdSpA/KuY8N6nBYeC47q5ZhHEzjA5J+Y8D861NIX7Yg1eWIpPcLhFbOUiz8oGemep+vsK2K4/wAcRZm0WcqrLDdglW/A5/SuwooooooqB7aGSZJnhRpI87HZQWXPXB7VPRRRRRRRRRRTHRZY2jdQyMMEHoRVawhmtoDDK/mKjERvnJKdgfcdKuUUUUUUUUUUUUUUUUUV/9L3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiue13xANOdLKxiF3qsx2xwKfu5H3m9B3x3/WpNC0Macpurt0utVlJ8+628nJ+6PQDp+H4Vu0VleINM/tjRp7RdolIDRFugccisN31LxBHZ6ZdafcW6I+b6RxtVgvQK3fPt/LmuwAAAAGAKWiiiiiiiiiuN0Hw1eQyPFqiqbW2lLW8SkFZCf4iM9OnBrsqKwPFekT6zo4htNn2mKVZY97EAkds/Q1tQ+Z5EYlwZNo346ZxzUtFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf/9P3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisnRNUgv4ZoY5A09pK0EyF9zKVYqCfqFzWtRXLaz4in+3f2LocQuNTbh2P+rtx/eY+v+evFaWi6HFpETs0r3F5LzNcyEln/MnArXoooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//U9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo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H2sIv/iacfCPhsxmM+H9KKE5KmyjIJ9enWpP+EY8P/8AQC0z/wABI/p6Ux/CPhqRgz+HtJYjjLWUZ/8AZacvhXw6pVl0HSwV4Uizj4+nFL/wjOgeYr/2Hpu9eVb7JHkfTirEekaZAzNFp9pGXBDFIVG4HrnihdG0tERF06zCoMKBAuF+nHFSHTLBlZTZWxDdQYl5/SgabYqu1bO3C4xgRLj+VKbGzYKDbQEL93MY478U820GAPKjwAQPlHQ9R+NOSGKNVVI0VV+6AoAH0pUijjzsRVz1wMZpwRRnCgZ68daXAznAz60tFJgYxgY9KMDjgcdKWiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/S9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//T9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//U9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//V9/oooooooooooooooooooooooooooooooooooooooooooooooooopMjOM80tFFFFFFRefEJRCZEEpG4JuG4j1xUtFQSTxRNGJJUQyNsQMwG5uuB6ng8VPRRRRRRRRTVZWztYHBwcHoadRVW2v7S9e4S1uI5WtpTDMEOTG4AJU+hwR+dWAQwyCCPa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oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//X9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooopDnjH40tFFf/0Pf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0ff6KKKKKKKKKKKKKKKKKKKKKzdS1zSdFER1XUrOxEpIjNzOse8jrjJ56j86hsfE+gapcJb2GtafdXDqXSKC6R3ZR1IAOSK2KKKKKKKKKKKKKKKKKKKKKKKKKK48eM5D8SW8JGwwot/NF0JDljtDY244HUZyfw79hRRRRRRRRRXOeG/GFj4nvtVtbK3u4zps/kSvOiqsjZYZTDE4+XuB1FV73xPqVr47sfD6eH55rK6iMjaisjbIsBiQRsx1AHLD7w+ldXRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//0vf6KKKKKKKKKKKKKKKKKKKKK5zxjoel6z4dvRqNlDcGC3leF5FG6Jtucq3Veg6elcf8GdB0f/hDNP1hbG1fUzJMDd7MyD52XGTyPl44xwffnf8AFPxI0nw1qCaUsV1qerNz9isU3ugxu+b0+XnHJxzjHNU/D/xR07V9dGiahp95o2puf3UN4uN/GQOxBwOhAHoSa0fGfj3T/BDacNQtbqZL1nUPCoIjC7clsn/aHHsa5i/+NljA009joWo3ulwuFa/ClIzyBkZXHXgZIya9C0XXLDX9Eh1exmDWkqlgzfKVxwwb0IIIP0rgrr4wC41iaz8NeGtQ12C3OJrm33BR6FQqMSOvJxnHGRzXT+EPHOl+L4ZltVkgvrY4uLOYYeL5iB7Hp26d8VR8Y/ES38L3tvplrYT6nq0+CttBkBAem4hWOTzgBSTjtXL3fxtvNJijGr+C9Q0+4mb9ylxKY1dBjc2WjByM9MHtkjNdr408aw+DbawuJrNrmK6n8ossoQRjH3uRyKzNK+J9hr/iqPRtHsLq6j8wxzXbfIiAKx3BeSRlcfNt9s96eq/EbxBH4jutI0bwVe3y28pia6cusZIGeoQhQR0JPcVZ8N/EiXUvEK+Htd0SbR9UlyYUaTergKW5yARwDjgg4PPaqmu/FqLQ/FeoaAdGmuZ4FUW/lyEtcSsFIQKEJA+Y88n5eAcgVn23xhvtN12HT/FvhyXSYJV3Lc5c7RjrtKjcPUjp6VHcfFzW0tzrUfhWVPDvmBUupmYNIpbbuJAwgPbggngHJr0RfEVteeEpPEGm4ubf7M9xEGJTdtBO08Eg5BB4rz+2+L2o66IoPDfhafUL4Em4CzHyol6KdxUHDYP3gvTpk8T2Xxhkkt5LOfw5cnxEr+TDpkDl2lcZ3EnblANpJyCQOeRkh2ifEbXl8VWmj+J9Ei08Xn+qdgYijHgAZZvNycAkbcZ6Guy8WeLNP8G6Q2o6kXcMwjjhjxvlY9hkgcDJJ9B64B4ubxd8S7e3OqSeEbX+zVXe0LNtnC88n94SMdT8ucdhzjuPCniSz8WeHrbVbIMiyZWSJvvROPvKfX69wQe9a1y7RW00ibd6oWXd0yB39q8k0P4n+LvE2mKui+G7e5vkkIuZlY+TEuBjG5lDMfm+XzAeB65ra8N+OdeTxSvhzxfpiWl5cDdaS26Haw+b7/zMuTt4KkjnBwaoyztF+0RFEkZbzdO2sxwdgCsePTkDpn6Vu+Mrvx9HfQxeE9OspbYIGlmndd5bJ+UAsABwM59Rjoa57VvHPjPwbqFtceJ9OsptHnOHltYyrR9yM72GR6EfNjAPetvxj431HTtbtfDXhqwivdbuAHInyI4kIYgk5HPyk8kfjVZdQ+J2lX1q2oadpepWU86JN9hZt1uhYKWwcFvvZyAQNpyAKyvEHxG8T6b8Sr7w7pWmQ6nGqItvbiMq+9o1OS+cbQSSc444yOtU7vxl4+8EatZ3Hi37Pc6XfcGOGNcwkdVUoMhuQcNvBHAOckT6/wCI/icdJm8Q22nwaTptv+9FtMEMzRcf6xWBII56FTjtmvQ/COvHxN4VstV2xpNMhEsaElVkUlWHqOR35rgRafGfUpTP/aGnaYh/5YlYeOvokvPb7x7e9SeF/Fvi7V/7c8LXz2cHiiyiD287KFUnIB8wAEHqDlRghugxXG/D+x8cTat4iPh7UdNguFuUGoSXKDEj7pPuEI3A+brjqOK7+x13xXB460zQNQ1CzldbRHvo4YBtYnflkY4PZe2Bg8citDxx4u1HTdQ07w3oMSvrWpE+XJJ92JRyTyCCcBjz0AyQehwdTT4leGdIm1ebWrK8SJB9ogwriJQTlwWVNxxtJ5UdcKeK1dd8UazD8Gk8QW9wsOqtBBIZY0VgpaRA2AQVPBI/Gus8L3V1e+FdKu713kuprWOSV3VVLMVBJIUAD8BXMeEvEmpan8QPFWm3lzM1pYOogieONREM9ioyc+5PGKwv+Ej8V/ELXr2x8KXsGlaLYt5c142HecnONuM+mQFK4HJPO0XV1vxL4J8RaTp3iDUI9U03U2Ea3JVY2hfAzzn5vmI4I6HqTxXqFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf/T9/ooooooooooooooooooooorN19Q3hvVFIyDaSjHr8hrjPgmc/Da2+bIFxMAcdt1YPwdX+0vFXi7Wro+ZdtOsYcjopZycf8AfK8dsVe+Omnwv4Pt9VC7L2zukEUqnDKG6j35AP4ZrB+MUxv7LwS84BFzueRc4DFhETx+J6+v1r17VLSBPDl7aRRRxwC0kjWMJhFXYRjAHT2rx/w7cT2n7O2suNxdpJI+MZCuyKe47MfSvRfhjZxWPw50WOJVG+DzXKqBlmJJzjqe2fauN1yEaT+0FolzaBYWvogLgbuJcq6k4x/sr36gHFN+H8aah8ZvF+o3UWbqBmjRid2wbto5/wB1QPpV/wCOrMvhbTmWRYyL0HJGf4T096r/ABvhS5t/DSSg7JL0o4ztJVtuR1B/UV6pZ2dtp9nFaWcEdvbRKEjijUKqgdgBXmNx8QfE/ibWbzTvAuk281vaMUmvrw/KT2KjcAM446k9cCsGUeK2+LnhY+KvsQmGPKazBCkYbIPqc59ueK2tEIH7RHiBGi4NqrKz9QfLi6Z/HpT/AI0RLLJ4XQorlr4rt3AFh8uRyDxXZ+PkU/D/AFxflUCykxnoMCub8Eg/8KLj3ByPsF1kABT96Tpgf0/OpfgspX4dw5QoTczcH/ex6D0x+FZHhTj47+KgV3EQ43AKAufLP1J/wPtTviw8MXivwXJc/NELqT5AF5O6Lk5PPbAx+I71vi+dQl8V+E7awniimMrNCZwPLEm+MAng5A4yMH1wa05dF+Lci7R4o0RQW5Itx0z6GI/TH61r/DTwffeDtFvbXUZLV57i7acC2csiqVAAyVXng9q7C9/48LjBC/um5JwBxXnPwLRk+HpLEnfdyMOQeyj+lVfiqsT+M/AiKiPdNqA+UYDFRJEep5Azn9aLpmH7RVimWB+wkdsFdjnHr1HqfoBU/inxL4q1Txx/wiXhKezs5I4t9zdyMrsnAboQdvBA+6Sdw6YyON+JXg/X9L8OLe634qu9ZRp8m1MZRVbY3zKckDgdAo6n612vjP4e6lrmr6b4k8OajBY6taxIqiZQFOOjb1U8gEjBBBGOnfIk8f8AjXwNc2kXjXTrW5sZn2fa7dlDt0yQF4OOuCq59anh81/2j5j5ymIWgZVZwMgwgfKCeTnJ47Z96d8fUDeF9MYkfJeZ5I/uHsTz+RrvPGEf/FCa1GjOuNPlAKcHhD0xXFfDDUrbQPhDPqs7t9ntnnlO5ieh4Xj344FZXhvTvGnxJsZNavfGE+lWhkKW0Omq0Y4OHyAVOOMDcWPXpjmp4H0qfSPjtqljcX1zqEsNswN3cOS75SM/NkknG4Ac9MVufCb5fGPjtGj8plvIx5YGBw83OP696r+J1iH7QHhtmAZjEv8AEBjiTHGPf1q5NN5X7QcCytlZLELF+8ZdpKMcY6NnaenA+vXp/iXJJH8O9aeNyjCEfMM8DeuegJ6e35da5PU5Q37PEctvlkW1hxuAHAlUH8uT+Heuw+HVyl38PdElTd/x7BG3Ek7lJVuT7g1yfgqd5fiz40gEsrIudil+FO4Zx6c9PTmuP+GXhD/hIba/U+JdZ0y5tZgJbWznEeCRgkkcMcgjPt713KfB61a8s7q88T69eSWkiyRCedWUYIOACDgHAHFem0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//1Pf6KKKKKKKKKKKKKKKKKKKKK5Txzrl7o+jFLPQNQ1drtXhK2aFjHlcZbAJxz6VxXwl1bWNMtrXwzqPhXVrZXkkf7dJavHEvylsNlQBnGOvJI9ahuLfxF8MfGeqapYaPPq3h3U5N7pb5LwHlugyRgluSMEEcg1V1y88T/Fa8sNDj8PX2jaOsvnXN3dxsMgehKhSeoAGckjOBmtj4vaHqd5H4bj0bSJ70Wcr5MK7vLA8vAPcA46+1en30TzWFzEn33iZVx6kGvOPhz4Tu3+F15oWu2k9m91LKCkgwwVgMEDtz/KsfRNc8bfDrTV8O3ng+61iGAsba50/cyFSc4yqN3J+8FPsau+D9D8Q+JvHbeNfEtgdNW3Qx2VpJuDDgjOG5AAZuSBknOKj8V+FfFvh/xxJ4r8GRLdJdL/pVoWGN2ACCpI3KcA8HIOe1cn8Rbzx5f6DY3fie3tLCza6EcdhbMwklO0ncQrNkYB/iB56d69G+KXh7WfENhon9k2T3UlteLLMqyJGVXHJ+dh+XNei14dpbeLvhlreq6faeF7rW7C7mM0E0CtyOcEsobBwcFWwcjI466EGh+ONe+I2h+JNZ0iGzs7djiGOdGa2TDff+bLEk9s9RwMEVu6Z4c1m3+M2r649kE0m4tlRLgyId7BEGAobI5Dcle3vTvib4Y1XxE+gSaXb+dJZ3m+UbkUKh25YliOPl7An2rp/Fdjc6n4T1WysgGuZ7WRIlJAyxHA54596xPCugapYfCuPRbuGO31M2s8ZjEgYKzs5XLDI/iGcZA5xUnw00DU/DfhFdP1ZI0uRPI+2NgQFOMdOKo6L4S1ax+LGs+IbhYP7Ou4SsLRyfMT8nDLj/AGTzn+dO+IXhHVPE2qeH7nTzahLCdnmMpw4BaMgqccfcOefTg1oePPBsfjPRktFuPst5C/mW8+GIU8ZBAIyDgeuODjiuXi1D4x2ERs20TStQZF2Le+co3H+8QZFz/wB8iuw8G2XiOz0iX/hJ72K71GadpN0J+VEIGFHAAxg8AfietdBcrvtZV4G5GHzdOnevnv4a/wDCwLPwrLdeFlsL2ye4KtZ3BAdHwMuM7RgjH8XbgV3HhjwX4o1DxjF4s8aXcRuLUMtpZREMseQRzjgAZyMZJOCTxWzc+EL+T4r2XimF4RZR2xhmVp2D52MBtQJgjJXq3rxxzjeLfBXiaHxr/wAJb4QvoReTKsdxbTgKCAoXOTwwwBwcEYyCe2drfgT4jeMdPI1nxFp9uVZdljbKwhYH7zMwGSR2BDD0Izmug8Q+GfG0Orf2l4U8RRxq8UcctjeAmL5FxuXIYAnAzgKfesd/BPjLxnqOn/8ACbXGnx6XZO0ht7QAvM3YHIIAPQ89O2Tkb/8Awg94PiyPF/22FrXydn2cod4Pl7OCOMd8nJ7elT/ELwfdeNNKtbC2vIbfypzJIZkLArtI4AIOckHqPyOD0Wqaa2p+H7zS/NWI3Ns9v5gTcF3KVztJ569M/jXP+FfBL6H4Im8NXt+86ymVTPb5iZVf+6ckg965PT/AnxF8NqdM8O+KLCLRlm3RfaE3SIp5b5TGwHJPAbB68ZNbfhj4b3fh/wAaTeIJtea+M0brIk1v+8Zm2knfu6Arxx049zW1rwL4mtPE+oa54M1m2spdRx9phuV+UEdWBKOGycnGBjJ55xVmD4farP4q0PxFqutw3F5p8OyfFsQZ23Oc5DKBwwH3ccdKuePvAn/CWJb3ljdGz1qz5tbjcwA5zgleV5GQw5B9RkVxHi3wn4zXwhqN/wCJPFcFxHaKJEt44dyycgfMcKB16bSeBz1z2vgOwt9Y+E2nWVwXaC5tpI3KMVbBduQR09vSuZtPhd4u06Z9P0/xpNaaIxOFiLiRQeTtUcLz6N6+tdN4N+Hf/CI+INS1NdXkvY7yMIscsWHTnOS+47vyFVfEPw2e512TXvDWsz6Jqs3M/ljdHMcemflJ4z1HGcZyarWvw68SXmpWF14i8ZTX0NnMkwtUgwrlSGGfm29R1Kk+hFem0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//V9/oooooooooooooooooooooooooooooorz/xRYfEVvEpuPDOqafDprxqPIuecMByTlDgf7p+vasiLwD4o8U67a3vjrVLSSysW3Q2ViDtkbuWOBgZA9SeR8vf1eiiiiiiiiiiiiimkBlIPQjFcp4A8HP4J0CXTGvxel7hpvM8ny8ZCjGNzf3c9e/411tFFFFFFFFFFFFFFZevaJb+IdDutJu5JY4LlNjtCQHAyDxkEdvSmeH9Ct/DuhWmkWkkrwWwIRpdu8gsW52gDv6frzWvRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRSZBz7UtFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf/W9/ooooooooooooooooooooorN1nXNN8P2H23VbtLW23hPMYEjceg4Brmm+LfgZIhIddTaTjAt5i35bM1p+HvHXhzxTeS2ui6l9pniTzHQwSR4XOM/Oozye1dJRRRXL+IfGdr4e13RtImtLmafVJNkbxAFU+ZVJPf+LsK6iiiiiisfWfEuleHntF1S6MBvJfKgxC77m44+UHHUcnAqXXdatfD2i3OrXwf7NbJvk8sAtjIHGSPWo/Duv2vibQbXWLKOVLa5DFFmADDDFecEjqD3rXoooooorirPxhc3XxT1DwsY7cWltaiVZMHzGfCEjOcYw/p/wDXTT/Glxe/E/UfCv2ZFt7O280ylSHLfIeucFcP6Cu2ooooooooooooooooooorjPidq+o6D4Gu9Q0udre5jkjAlUISoLAHhgQc9PXmpdT1HxGPAFrf6HaxX2tyW8D7JFAViwXecbl9ScZ/Ct/SX1CXSLSTVIootQaJTcRxH5FfHIHJ4z7mr9FFed+GfEOqX3xU8T6TdXZksLVFNvDhcRn5QcEDJznuTj2rSsLjxs3j27ivLKBfDQDeROGTc3A28bt3XOcgdPz7Kiub8ZJ4lfQwPCssKah5gz5iqcpgg4LcAg4PQ9Olbtt532WHz8ebsXzMf3sc/rU9eZ/CrWNS1a88SrfX8l0kF4FiR3L+WCz5wT24HA44rp/C9v4oga+/4SK9trlGlBtPJUB1TnO/CqPTGM9OSa6NmVFLMQAOpJpeoyKWkJwMmlqnc6lY2bpHdXttBI/3VllVS30BPNXKK88+I2vXhn0/wlotwItV1RsOwGTHDzn6ZwfwB6U7W7K48BfCm4h0e/uBcWaJi5kAlbJkUMQrHCjBIA6AdjXP6Fonj3xJolrqsPjmWGG6UuqPbAOvOOccdjwPzrp/DfhXxXpOrwXWp+NZdSs1DeZaPa43kggfNuJGCQenbFWPiV4gl8P+D7iWzuDBqE5EVqyrubd1JAwewPPauf8AhN4o1jUbnVtG8SXEr6nbMsipMAHVcAEcf8BP/Aq9SrzT4Sa3qWs22tf2jfS3Tw3YCmRy2wHPAyOBx06ivSiARg8ivH9Ws0+Fnjm01rT0eLw5qh8i8t4ogVhYfdx0wOSw64wwHBAHsAIIBByD3paKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//9f3+iiiiiiiiiiiiiiiiiiiiivMvjpuPw/QKwH+mx9e/Dd62ND8KeEG8O6bLNoGiNIbWIu8tnCWLbRkkkcmtWPS9L0K0vLvw7oemC7WM5jtYkgMuOdpZFJ+gweap+BvG1h430uW6tomtrqB9lxayNloic7T2yDg4OB0I7VW0/x4dX8fXHhzTdMa4s7QH7VqSynZG4B+XAUjO4beWGcNjOK5q7+NAt9U1TSU8PXE+owXBt7KKCUyfaSGYMSAmVwADgBs59BmpfDPxdnuvESaH4p0aTRrufHkNIroCWJCqyuARngBuhOelUPitKY/iP4LxI6fvOinBOZU4z/SvQPF3i/TfBmjG/1ByS+VghGcyvjO3ODgepPT9K4CT4o+MtLX+0NY8ETw6SGHmOivvjXPXJ4PUYyFFehX/ia2XwZdeI9LZL+BLZ54fLPEhAPHHI5GD3GDXAW/xour7RrU6R4ZudW1ho2e6trUOUtxuIU5CsWzgHHv1zxXS+M/Evi3TZNLt/DPh9b+4vFZpTKjskJAHysw2qvXqzDoeOlc0PiN448Panbnxn4bt7TS5W2tPaox2Hthg7qT/snBPOOlY3xc1HxL/wAJPpJisYP7NjuFk0qeNvmuHIjJD/NkfN7Lkdz26dfE/wARrLTdTvfEPh7S7W2gsnlR42En70EYUqJSWBGTgY+tdb4d8SrqXgi38QX+23QwvLKUVsKqlgSAcnouccn61wI8c/EPxTJJd+ENAtxpIYrHLcFdzkHByWcA9P4cgZxnIrqvAvji58RTXmk6zpx07XLAD7RF0R8k8qCSR2656jBNc7r/AMSfEOmeNtY8PadpkGo3A8tNPhjRiwYorM0mDyBnp8vHfHNZ0Pjb4h+EtUtJfGemq2l3c3lkxpEWj/3TGxxjOcNnIBA9R7UrBlDKQVIyCOhqG8u4LCznvLqRYreBDJI7dFUDJNeQaf4m+JHjm4k1Hw7DBpuil2jhaZoskgYyWZXJIPouOcc4JpPAf9vTfGPVZfEaQR6mun4lSIfKBmMLjBI5AB69/qB2mleFr+w+Jmu+I5GtjZ39vHHColYygqsYO4FcAZU9GPbiqvwr8Tat4o0G9uNZdWuoLsxZWLywBsU424BHXvzUvijxDqeleOfDGnW08aWl/KUniaPJf33FccezA5I4IrC8eeMvE+ieP9O03QALxZrbmw8pXDuxYBiRhhjg/eAwOcdayNYvfix4Qthr+qanp95YRSK09snlhUViFCn5FPUgDaSc46813+u+N7bSPAsfiVbeVzcRRmC3bhmdxwp+nOfocc1ySaL8VtbtBqT+ILbS5LgGRbALtEQwNqk7GKnrnlu2c8gb/wAO/GGoeJI9SsNYtRBqmmTCGZo/uvyRn0BBU5A46Hviu8rzPWvCnxA1vW7+eLxYmmad5n+hQ25bcFHHz7QvXr1br2rN0DVvGHhT4h2fhzxLqa6nZaih+zzBdxUgHBzwRyCCDntjvVe98QeO7r4m65oGg3MMiKEKfaNojtI8Kd33c5JOOjdePWs7XJfiD8N7iy1i61lNVsGbyriN5ndD3wVc/KcdGX05GOvc/EPxteeHtEsBokAn1TU3CWiMhfjAJOB1PzKBzjnPOMVzf/CBfEixtDqdv47nuNT273s3ZzDu6lVLFlPt8gHbgV1vhXxifFPgm51Iqltf28ciTIrZVHCkhvUZGDg8jkc9T574Yh+Ifj/QEUeJXsLCJ2/06NiJZ2/u/LtbC49R97+LtJpesfEFfEN/4GTUFmuwR/xMLgAtbR7cs6nALE7lxkE/TqEv38W/Dfxloz3mvXmsaffyFHieaTaOgK/vGkxjcCDnJxzjrXp/jLR9a1zRksdE1Y6XM8wM1yrMGEeDkLt5znb0K9OvY+b674H8R+G9Ml1CL4lX0lxbgzCG6uJIhJjnjMjZPB4IIbgHA5qfxbrNz4n+A1vqdwUaeWZFmZRhXKSlCQO2dufQV0Pi28utP+CqXNpdz2k6WdptnjkaN1y0YPzKCRxkdO9WD4ol8OfB+y1+VmvrlLKDDTSZMkj7VyzZJPJyec8HvWBY+BPE3iXT4dX1jxvf2+oXKiZYrI7YoQR8qgKQDxjOMck9TydP4d6vq1trOreEdbvXv5tOw9veyEl5kP3skkk43Lgkk849K9Jryvwesi/GnxgzFSGRcESDPGzgqOeAe/qPWjStQu3+Pmt2T3Nw0CWo2xNK2xR5cJACZwBkk5AzkmsnxAviHU/ja+laXrdzYQyWg8wrKxWNPL5KpnG7ngjuevWqviL4far4C08eKtF8RXU91ZEGcTRrudWYAkHnI55VgepOcjm98SPEM2vfCDTNdspXtTcToXWKVlO4B1ZRgjIBB6+ldZ4/8WXPhbwbFcWOJL64ZIYmfGRkZZ8Z5OAce5BORweX0r4H2c9pBf6vrWq/2w4EryRSKPLc89WUsSPXPrVj4LQm1n8T2vmibybpEMuSS5G/JOSf6VP8IZXfVPFqsqgLfAArIzZ+aTsScfp9KxtN0KT4teJb/WNX1BzoNlMYbK1hZSCccnnIHGCTjLZ7ACq+qeENN8D/ABI8LDTLi4W2vLve0Ukq4jIIHHTg5HXP1ro/Gkhh+L3g11YBnDJ93nBPIzj9Paur8fMyeA9aYeWcWzEiQAqR3BBBBGPauM0jxJN4c+BFhqNqsK3QRorZXBK7jK4HGc9Ae/8AhWJp3h34eX2krc+JvFFvea3eIGuZ31IBo3wOB9MYywP5YFbHwm1G5g17WvDsWqnVNItMPZ3CncqLu6Z7Z3dOmVOOM165Xl/hu3bVvjJ4k1O5Rg2nKttb/ewARg+3QZ/HpXQfFAsPhxrLKcERoc+29a898J6p8UrTwxYw6N4f0270xYiIJndFZvmJycyr3JHQdPxrt/B+pfEK71Z08V6JY2ViICVkt2UlpMjAOJW7Z7Y965/x0w8R/FLw7oCTjyLMma7TIwuRvOc9flUD/gVQ+N3/AOEW+Lnh7xKHVba9BhuCRgYACHLZx0ZT/wABr2GvKPguI1i8RrGxY/b+SV284PufTr+gr1euT+JGnx6l4A1aJ5FjMcXnpITjYyEMDnt0x+NO+Hd9NqPgHR7m4mM0vkmNnPU7GK/j93r3rqqKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//9D3+iiiiiiiiiiiiiiiiiiiiivN/jcob4dSbkdgLqInbnI5NYek/Arwrf6RYXs13q3mz26SuPNiwCygngx+9d94R8E6b4LtriDTZrqRLhlZvtDhsEZxjAGODj8BXlPxWDeCPGUWueH9Tezv9XgkW7hUZ44G8ccZPPrlcjvXo3wu0PTdF8DWP9nXC3X2pBPLcL/Gx6gegX7uO2D3zXOfCuNB478dyKihftg2HaCRmSXI3D6Din/HiKIeDLS7JKXMF4ohlBIK5Uk8j/dH5Csn4lFv+Et8ASyjfOWTeX653xnJHT1q348AvPjR4PsrgxvbrtcRseM7mPI6fwivWL2KKaxuIpgpieNlcMcAqRg5/CvHPADyy/ArXluCzRp9p2bvl/gBPJ/2s/nXZfCOBYfhxp/7uNJGkmMuzBywlYZJHU4Aql4z8c6rb+JLXwl4WtYZdYuBuea5OI4RjcMepwCTnpwAGJwOJ+IOhfENPDU194h1+yubQSoPsdmhAGTgEfIp4JzzmtLx+qr4a+H4RojIrQtHul27sLH0BGT27jsMEkY9I8eFh4C10q21vsUnzeny815yil/2Z2MIIzESQTkY+0/Nj2OCfUZr0D4dJCnw80EQIqJ9kQlV6bjy347s1ymqAR/tCaMICu6WxYz7FG7ASX73PQ/L2/hFO0CSOP4++JYiNsjWSHh87vliOSM8cEflTfjyoPgSBjj5b1TjIBPyOOO/p0r0nTCTpNmTjJgTp0+6K5r4oLI3w61fygSwSM8egkUnse2an+HMIt/h9osQMeVg+byzkbtxz+Oc5981yGmg/wDDR2sHJUf2evB/i/dxdP8APavWK8u+C0awaJrFugVEj1FwiAAEKAFGeP8AZ/T0pnjof8Xa8EMH+YO4KtkDGRjkDqeePYe9L4i2p8dvDDMPNLWrAKHI8s4l+YjkHqcdPrW78WFVvhnrCuxVcRZKqT/y2TsO3rXDeMTPN8E/DMs0zxQARCXK5Zv3bBBgkd8ck8dfauhh+Gl9cRRXEXxE8TPDIgdSLx8MCM5+906Gt3wd4Dg8H3t/dpqd5f3F8FEr3W0n5SxzkDJJ3dz2rr2O1STnA54Ga8T8NQ6v8XLnUtS1LX9Q07TIpfKjsLCTysKR0PJB4xksDkk4wOKrT+ELfwR8VvCttp91eT293KXZrxg2H6HBAAyRj35FdF4bwfjt4mIkbm2GUODggRe+cdxx/KrPxxjSTwCglmkjT7bHkxqGJ+VuxIz9M1lfEp103VvAOoXEkQsreXbLI/C/8sjk5B4wpP4V66XQRmQsoQDJbPGPXNeU/C9xfad4vvISj2U9wywukQXfhWJOcDPDL1q/8Dc/8K6Qkgg3UhGD06flVbSpQP2gtbj2OD9jQblxgjy4zzxnPamfGiNpE8NBIvMY6hgD16EjnqMA8f4Ve+KutatZnQtG0u+awOqzvFLdIwDIo2gAHjHL5yCD8uO5rL1D4P8AhjRdA1LUbm4vbi7jtZJGnnn2hn2k5wAOp7Enr3rn5I9/7NEex/MQXGWO37o+0Ecc8c45PrXY+LF834B4JCZ0+0OVXj70Z6Dt9KzfE9jNe/s/6eIQZzDb20rbF+8owCQDzwDn14qTw58LfA/iPw5puqLZ3BE0Su6C6bAb+Ie3Ppiur8MeDPCvhDU5Y9ITyr+aHc8b3LO5jBxnYT0yeuK6+vL/AAoJk+MviyBpG2LGrrG0jHG4RnKrnAzxkkZ6YPWjTWYftA6wp8sBrFCuACx+SPr3H/6vxqXE0dv+0dCJHVfOsNq5wOdh9fpXRfFXVrPT/Ad/BO6me8UQwQhlDOxI5wTyAOT7Vw/ijS5NP/Z90u1vzsmSRZD8m0qXLsoK5HOGAP4mtX4t2cuo+A9G1EIjLCyNICdoAePA5IIA3YHzAjnnAzXolpr+lS6FFqf9o2q2exS0xmQIh6YJzgHPGPWvP/g9PBcaz4wktmTyHvEaNUfcApMmDnrz70/4TFl8QeNIyy7kv1BRH3D70vzemT3we3QVU+EGqQ6ONZ0DV5I7K/juzIqTEIJB907SQN2Cv6/Wn+OtU0zVPiL4QtrfUbeaS0uj56Rz52EtGQCAOTx6/hUnxVl/srxj4M1yRmS2gumjlkGMINyE5zxyN35VveP/ABT4fTwbqVq+r2bTXNu0cUUcyuzEjjAB6e/A965Q6Xd6r+ztaR2CJJNCjTiPbv3qsrZwD3xk49eK1fCUfw68QeHra4bT9FjuGiCzwTqiuGXGcg9RnByOOa6fw8/g1NYu7Lw5FpSXsUSm4NhAq/JngF1GDz2zkV1VeZeFXj0/4x+K7OVokmu0jmjUScsAN3A+jZNdB8TOPh1rRywxCMlRkgb1rnfh14z8Naf4D020utYsobi3jfzYjJgr87HOPxHPvXWWfjfwxf332K012xmuDkhElB3YBJwehwATx2FeQeEvCVp8Vtd1/XtUluoLNrgCAW7KCxOeDuUjhQvQDrWx4u+DOj2HhW9vtKuNQe+tIjKPPlEglUYJBAXPChsYx15z2734c+If+El8E2N5JIXuYwYJyQAd68Zx7jB/GvPPht4r0fwzf+JrXW7+Gyme+3KHRwW5bJ7/AOfWvRbL4j+E9Q1GDT7XWI5bqdwkSCKQbmPbJXH6074g30en+AdbuJBlTbGPGCcl8KOn+9/kVD8Mraa0+HGiRTqFcwGQAHPyszMv44Irr6KKKKKKKKKKKKilkEcTOQ5AGSFUsfwA5P4VLRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX/9H3+iiiiiiiiiiiiiiiiiiiiiuH+Kmgal4j8Ey6fpVsbm7M8brGHVMgHnlmUe/WuXsdV+Lum6Va2UPg/TnS2hWIO9xHlgoxnCzAZwO1dJ4e1n4hT3N2df8ADFpBbx27SQra3Cb5ZBjagzIQM88nA96zvCPga9vdV1PxN41tIn1S+DQpZErIlvFjbgEEjkcDB4HXkmm+C/DnibwV4svNJhh+1+ErhzJDO0qbrdiMjgtuPQKeDn5SMfNXIaDeeL7D4g+MW8LaTa3wN0ftEM5WPA3SFCrblGc7vXPt1ral8LeN/iDr+nt4ysLbStIsGMght5VYzE44wGfJ+UDJxgE46mtr4i+D9W8QeI/DN1psCtBYys0771Gwb4yOCw7K3QHpz1rQ+IHgmfxNBZ3+kXIstb05t9rMDtDDrsJHTkAg89+xNc/Pf/FvWLH+ypvDum6f9qDQz33nowRSDyFEjEHHfDfQduosfBa6F8OLvwzpkzSSPazIJpfl8yVweTj7oyQPYDv1qx8PdF1Dw94IsNL1PZ9rhMhcI+8DdIzDnvwa5jxn4R8R23jW28YeD4bWe+MflXNvM+3ccbQ5yQGG3AIyCNoxntmav4c+KPjfSXh1l9F02DIxYdQ5B++zL5hGOow31FdJ4p8CX2t/D7TNGtLyOPU9PWHyp5GYKWUBW+YDcOMkEDPAqnHpPxJ1TStS0zXJ9Da3nsZYUkXO5pSAFLYXAXrnA/Ctvwr4ObS/h1F4X1d4rjdFNHO0JJUiR2b5Sw7BuuByM4rltM8LfEbwVE+m+H77SdS0lZC1ul6GDxg8nIGMck9GPTPGcVt+C/At9o+s3niXxDqK3+u3qbXMaAJGOOAcDPCqOgAAx71b0/wpf2nxO1TxPJdwNZXlssUcIB8xSFQc8Yx8hOcnrUnxD8KXXjDw9Hp1ncQQSpcpNunUspABGMD69wRxXUWsJt7OGFmDGONU3BdoOBjOO30pL2zg1CxuLO5QPBPG0cinupGDXlFp8PfiB4daSy8N+LLWDS2kLKs0Q3KDzwpjYA567SM9fatrwp8N9Q8PeMp9evPEL6i00Bjk8yIh5WOOWJYjAxgD0x6V6NXkepfDPxPpXiK/1LwTr8VhFqD+ZNBOWG09cZ2vuGS5GQNucDOTUmm/CjVh4lsPEmseJ/tmoQzrPcKbXcH29FRiw2j8MewxXVav4MOq+PNH8THUBGumxlPsvkZMhIbnfuGPveh6VpeLNCbxL4XvtHW8Nm10qr5/l+ZtwwP3cjOcY6jrUNl4TsY/Blv4Yvh9ts47dYZNwKeZjBzwcryMjByOOa4yz+Gvirw+Hg8P+O7qOw/5Z21xAH8pQeACdw7nO1VzxxXS+D/Bk3hme/vr7W7vVtRv9gmnmG1QqFtoUZJH3j3PsBXYV5RqHwjvIdbub7wx4ou9Dt7pg0lvCHwDkk4KuMjkkAjjJ59LOl/B+HTvEOl65N4h1C+1C0fzJ3ugH8889MnKjJ7lq6az8G29n48v/FS3cjXF5CImg8tdq4CDOev8A9OtSeNfCkXjPw8dJmuntkMqy+YiBjxnjH41PrHhbTNf0FdG1OHz7RVUIc4dCowGUjof/wBRyCRXBf8ACoNZltBptz4+1KTST8r2ixMAY/7gJkI/MEe1eiaPodloWjR6RYRulrGrABpCzHcSSSx5yST9O2AAKqeEPCVn4N0T+yrKe4mh81pd1wVLZOP7oA7DtUEHgqyg8e3Pi0XVybu4hETQkr5Ywqrnpnovr3NT+JvCNl4q/s77bc3cX2C4FzF9ndV3MOzZU8fTFM8X+ELDxjpB0++LRlG3xToqlo2x/tAjB7jv7da4nT/glbGMJr/iTU9UhQYihVjEifKRnBZ+nBGCBxzkcV1L/DvSpPAqeEXur9rBH3CUyL53+s34ztxjPHTp+daV/wCFrDUfB58MTyXP2EwJb7w4MuExg7iCM/KDyKt6Totro+g22jxbprW3hEA88Bi64x82AAc9+K4u5+Duim/mu9N1HVNNaUglba4ICkHOAeuOTwScdsVs+FPh9pHhC7uLuymvbm6uE2PNdSh225zjgAdcdfT656+sKz8L6fZeJdQ1+I3DX18ipKXlLKoUAYUdug/piki8KaXD4sn8Sqsx1KaMRMTKxQAALwvQcD+debeJ/DNr4j+OENhqoZrKWw3opZlJKqeUI4yCATn/AArotN+C3hDT7/7ZLDc3zBgwjvJQyZ91AG76Nke1dd4g8O6b4n0ttO1WBprZmD7VkZCGHQ5Ug1bn06zutNbT7i3jltGj8poXGVK4xjmvP7b4HeEbfUvtTC+njDbltZZwY19uFDH8WPvmut0DwfofhZ7p9Gsvspuypm/eu4bbu24DE4xuPTFT6T4c0rQrm9m021MEt7J5twfNd97ZY5wxIHLN0x+grI1/4a+FvEt+b2/0/wD0piDJLDI0ZkwMfMAcHjHOM8DmuF8SeEtA8HeJfB8mn2ot4XuykjtIxLvuj25Y5Hc4GRwDjNeq6zolhr+nvY6lB58DEHGSCpHcEcg/0JHQmuWsfhB4MsVkzpbXJdSmbiZm2g+mCAD79feus0fR7HQNLh03TYTBZw7vLj3s+3JLHliT1J71z2rfC/wjrF291c6UqzSMGkaGRo9+PXaR+mK1PD/hDQfC6yLo2mx2plGHfczuwznBZiTjnpmt6vOPiPo9/aajp3jPR4JZ73S8rNBF96SI/QEkDLZA7HPaup0vUdH8beGUuYlju9PvFKyROMjPdWHqD/jVVvh34PYkt4c09iQQSYgamtPBHhiwkWS10GwjkVWUN5IJwwwRk+oJB+tamm6VYaPaC00yygtLcMW8uCMIuT1OB3q1IiyIUdQyMCGVhkEehqlpmjaZolu0Gl2FtZQu29kt4ggZsYyQOpwB+VUJfBXhe4laWXw7pbSMxZm+yICxJySeOcnnmn2vg/wzY3Mdxa+HtLhnjbfHLHZxhkb1BxkH6Vwviia5+IHjS28Mae9xDpWmXAl1G5SMr865ICvkEHggEd8nkLXqiIsaKiKFVRgAdhT6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK/9L3+iiiiiiiiiiiiiiiiiiiiiiiiiiuP8L+EJ9A8TeJNXmuo501aZZI1CEPGAXOCf8AgeMD0rsKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKpf2XYf2l/af2G2+37PL+1eUvm7fTdjOOTxV2iiiiiiq0tpbTTRTTW8UksWTG7oCUzjOCenQfkKs0UUUUUUgAHQYpaKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//T9/oooooooooooooooooooooorHvPE/h/Trhre913TLadfvRT3caMPqCc1o211b3kCz208U8LfdkicMp+hFFzc29nbSXF1PHBDGMvLK4VVHqSeBWKnjrwlK4RPE2kFj0/0yP/ABroaz9R1jTdHiSXU9QtbNJDtQ3EqpvOM4GTyfYVQ03xp4a1e8Fnp2uWNxcnkRJMNzfQd/wrWvLy20+0kur25it7eIZeWZwiKPUk8CsdfHPhJ3Cr4m0gseABeR/41E/xA8II5Q+JdLLD+7cq2fpg81tWGoWmrWMd5YXMVzay52SxOGVsHBwR6EEfUVcrN1bXNK0OAT6nf29pGfu+a4Bb/dHU/hXP6d8UfBepSiKDXoFc4x9ojkgBz6GRVB/CutilSaJJYnV43UMrqcgg9CD3Fc1rHxG8J6FcG3vtahE46xwq0pH12A4/GnaN8QPCuuzrBYazAZ3OEimVoXkP+yHALfhmrXiLxfonhRbd9bvTarcFhEfJkk3FcZ+4px1HWsu3+KXgm4aNV8QW67+hlR4wP94soC/jitDX/GugeGYbObVb8RR3mTAyRtIHAAJI2g8fMvPvWIPjF4G3bf7ZfOM4NnMPp/B360wfGbwQXKjVJjjoRaSnJ9Mbc5/Cu+BDAEdDzTqKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//9T3+iiiiiiiiiiiiiiiiiiiiiuB+Lut3eh+AriSykMUtzKlu0qkhkVslivvgY/Gsnwz8GvBv/CP2Ut5ayajNNCkrTm4eMHcoPyhGA288dT710vhPwFpfgzUtRuNJaVLe9WMGB3LbChfo2eRhu+SMHk5487tIJvjJ43u5Lu5mTwxpUo8uGM7TKeQvfq2CS2MgHaMdR2tx8G/A00TqNIeJ2GBIl3MWU+oyxGfqDVvwn4Wt/hz4e1KI6lLc2EbvdJ5q7TCgXJHBwTwTkBevSuD8D+GD8Sry58X+LXN2BKYbazSQiJQAM8ZyFGeFyOck5zXWeJfhL4e1bS3XS7GHS9RjG63ngBRd45G8DqMgc4yO3vU+GWut428IXej+Ih9qurVvIuEnXmWM/dLepyCCfYd+aXxx4G8MaV4J1W+sNBsYbmCHzEkEWSpBBzz178Hg96Z8P8AwV4W1bwJpd7daLa3E0yMZJJIzlyHYcg49PT6V6Jpum2ek2EVjp9rFbWsWdkUS4Vckk4HuST+NXK8K+w6f4r+PWpWXiciRLVNlrau21XAAKqcdRhi+M8k9xxXo+pfDTwhqdi1q2hWdtn7stpEsMiH1DKP0OR7VzPxW12Twj4GsNEsLiZbi7QWyTAgSCKMKGPGOTlRwP4u1avhT4VeG9C0iOK90y11K9kUNPPdwrJ83oqsCFA6ccnvmrl/8NPC15cW1zDpcWn3NvKksUtgixYKsGwVxtPTHIJ64xXMfGYI194SWVY5InvirxyIrhlJjzwf8e9dhqvw98KatZtbz6DYxrj5ZLaEQunfhkwevbp61wnwWS31jw/f6Zf21vf2VhOPI+0Qo4UvuL4BzgHAPU9T607406TZad4b02awtba0KXbcW8KKzblPQcZ55xn37V6cuhaPKYpW0qxZ1X5WNsmVzjOOOM4H5Vq0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//V9/ooooooooooooooooooooorK1zQ7HxJo9xpmoI7204AbY5VgQcggjoQR/Q5GRXlS/DPx74Yi8rwr4u3WcTF4reZimMkkgIQydST2BJycVoeCfHeu6ve6h4T8S2nla1DbyBJkAUuwHIZR8ueQQV4PtVf9n9QmhaypPzi6TIzkj5On55H4V0vijUfiPba1JH4a0bSrrTRGpSS4b52b+If61f5fjWHpHinV/Hvwr8Ty3UNst5HHLCsdtGyLt8sHB3OSTyfStf4MMh+G9oFZSwnm37ex3k/yIr0KvI/hSJrrxp4y1Fjm2kuQiEMWU4d8YJ4Ix0x/hXa/ENVb4fa6rbsG0YfKMn8qofCZdnwy0ZckjbLgkk5Hmv6gVpeL18Vtp9v/wAIo1kt153743fTy8Hpwec4/wDr1znhu2+KH9u2suvXumjTAWM8SBd5GDgDavXOO/T8q0fGPwy0Lxncpd3LXFrfou0XNswBYDoGBBBx+B968/1fwz46+Hts2taf4slv7GF186GViAAWC/6t2Zcdsg5GRj2l+Jespr3h3wfrTxyWsE8sjOjsAqPleGYcgfK2CPy9PXtYXULrQrpdFuYob+WE/ZZ5OUVyPlY8Hj8D9DXlF/qPxK8L63okWsa7a30d/cCPy7WOMDaCN+cxA9DwQf6Ve+N0N3cHw1HZyJHK14wUu2AG+XaT7Z9jSzeDvilrCS2WreMbKCxmBV/s0YZ8enyxRnH/AAIfrXfeFfDFl4T0OLTLJpJVUlnllOXkY9Sf8K4n45DPhO0JOCtyWU4OMhGIzg16bbf8e0P+4v8AKpqKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK/9b3+iiiiiiiiiiiiiiiiiiiiiuS8dap4i0bSLe+8O2LX80Vyn2i3WIyF4iCDgD5upX7uSOp4zXFy/HaK1kNve+F9RtrxEBkgkcAq3ccqD+YH0qX4faHr2q+ONS8da1YnTRdIY4LV1KuVwoBIPPCqOT1JPAFV9Z8PeI/h74tufEnhWxk1TS78/6Xp8as7qSewHJGSSCAcZIIxyZ4/jRfXDGK28DatNMUJRIyzFmHbiMnHvg/StP4QeHNT0LwxeJq1m1ubyfzVhl+8F2gHIycDjoefUVgW2l+IvhNrl7Lpelzaz4bu3L+VbhnliwDjIA4IyRnBBAHIPAsX/xC8V+J7WTSvDvhPUbOaZdrXk6n92COcZUKD6MW7evTtfAXhCPwZ4f+xeZ5t1LIZrmRclS54wuecAYHPJxnvWj4utZr7wjqtpbwmeaa3aNYx/ETxis/4cadeaT4C02x1C2a2uovNDxM2SuZXI59wQfxrq6K8p1TXPiH4V8Rak6aDJruhTTl7URsXeMNztBUFwMnkMpAxgEAVmXus/EH4hWUmhReGJdDtpiBc3VyrphMk4G8KSDgA7QT7AGu5vfANjefD6Pwm08gSKNRFckZZJAch8Z9c8Z6EjNcZp9x8TPBEK6QdJh1zToVKW1zGSxUAZA+U7sY4ww68A4xUeoad488earpDX2h2umWNnMJ2mmbax5UlQpLMDwcfKM9yM10/wAS/Der+IH0J9Kt0mNpdGWYMyAhfl5G44zx/nofQKK4H4reGNU8VeHLaz0hA88dyJGVpQi7drDJzweSK7m3i8m2ii4+RAvHsMVLRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRULTxrkBssOCFG4j8BSRXMcpKgkMP4WUqfyNT0VF5y/afIwd+zfnHGM4qWioZrmC3CmaaOLccDewXJ/GpFZXUMrAg9CDms6XXLCKbYZi2DtZlU7VPuelS38tull51wXMQZSPLYg5JGOh96W/1GKwWMMrySyHbHEgyzmqUevIbyG1ns7mCeVtoWRePqD0P4VoNcsuoJbbF2uhYNu549qZd3MkF1ZoqgpK5VyVJxxxj0qC8ubqW7+x2ZSNgu6SZ+QuegA7moY57zTryKG9ukngmJVH27Sp9/wCXWtqiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/1/f6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKimfy4mcKz7RnauMn86a00mwFbaQn+7uUEfrTbafz4txRo2BwyPjKn3x+B/GrNFQtcQo6xvKiu3RSwBPOOn1qRmVFLMQFHJJPAqFbqBzGFkUmUZTH8XGePypWaMSopLbiDtAzg9M57fn7+9OMw8zy8Nu/wB04/OmxzbzsKsjqMlT2HOORx2qeq1um15+AMyZ4I54HWo7z5zGkTfvFlQ/LyVGec+gxUsplJCQkKzclyMhR9M9ai/f2zqzz+ZCSFbeoDAk4BBGBj8Khlsy2rxXHnTKPLIKqwAOCOCMdOT3qW8WJXWa6uxFAowEZ9ilvc55+lUbd7OLV4o7JnCyhvMVQTGSBkEE8Z69KWcR2+ozS3Gny3HmY2yxp5mFwOCO3IPQc5qxpsljcW8osiUDEl0wVKEj+6elV4GvbG0FrNpvnwRpt3wuG3/8BPNLcyxXHh6R7dPKWMj92Bt27WGRjt0qzL/yHbYsAVMDhD3DZGf0pNVjQyWUrLl47lSp7gHg0t2yx6tYs2BuEi5PrgYpmqTCO609A4EjXAwCM8YIP86qXMdtFrckt20kcUkQKv5jImRwc4IyfrSStpK3VvHbwR3UxYYCvu298nrXQUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//Q9/oooooooooooooooooooooorB13xj4e8NYGr6rDbSEbhFy8hHrsUFsfhWdp/wATfBup3C29vr9qJWbaom3Qhj6AuAD7etaXijxRZ+EdGOqX8NxLbiRYytuoZhnvgkcCtiCZJ7eOdPuSIHXPoRmpaKKK4Px/4r1TSL7SdF8PwrJq+pSna0qF44kHGWA55J7dArH69rArrBGssnmyKoDvt27jjk47Z9KnoornLrxnpVn4vtfDMnnf2jcruj2oCmME8nORwp7V0dFFFeepr+seHfiKmj67qH2rTNXYjTJDGiGJhyUJVRu5O3rn7p7nHoVFcpq3jey0jxjpnhmazunuNQAKTIF8tckjnJyfunOBXV0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU0sFGWIA6c06iqsl5HFeRWzK5eUEgheBj1NWqKKKzp5rk6ilrCwRWj3l9mSOceuP0p1291bxNcIySJGCzx7cEgA5wc9asPungBicoGwQ46469xTHiaJd0cjZyMh2yDz79Pwq1WZGixM18bgukpyTxjYeFxj045+tadFFRTxLNA8TbtrqVO04PNB8wKAig44+Zsf0NQ2+4ySl8CY4LALgAduec9KkEStu3uXbkcnGAe3H/66gs2DT3Kq0mxWACuDwcc4J6g1JFGqRjzEBcscn72eev8AnpT5IQ8AjULgFSAwyOCDTZpZIzFi2aXc2CUI+T35xUj582PC5GTk5PHFNVs3EgCAbQvzZ5PXj+X50Nu+1IQo2lGy2Oc5GBn86nqrGxkuLiNwCqlcZ57f41YChRgAAe1VZ5Gt7pZXZvIZdjeiHPB/HOKS5mSQrbIzl5CM+WM7VzySegpLlWF7bTBGMaB9xXJIyBjgdelNkXbqayvCZFKARuFz5Z5z9M5HNQyLeXOo2snkPHBCxJDsuWJBGeD2zVl/tsc7OmyaIgYRm2lD3wccj6022gma6kurhEjYrsVFOeM5yT6/ypY4byHCLPG8QBw0ikv+PPNAsA1g9tNKXaTPmOqgZJ74OcVJc2cd1GqszK6co6HDKemQaydU0qKO1N29xNJLE6MjSuMLhh2GBWvd2cF9D5VxEJEznBJGD9RUcWmWUONltHkEEFhuII6cnmp5oIbmPy54o5V67XUMM/Q0RW0EGfJhjjyMHYgGfyqaikByOhH1paKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0ff6KKKKKKKKKKKKKKKKKKKKK5rx14iPhfwffaomPPRQkIIz87EAcd8Zz+FcN4B+GelajpFv4i8T251XVb8/as3MjMoU525XOGJGCdwIHAHTnqtc+F3hHXLUxNo9vZS7SEnskELKfUhflb6MCKwPi7Zf2f8ACaCzWRiLWS3i8xAQflG3OM/1ra1zx1H4PstAa/sZJrS+jVJLlJRiEhVJyD97gk8f3TXbkhQSSABySa4/wn47g8U2Wq6g1m1lp9hMY1upJQySgZJYcDGBg/8AAhya5t/itq2pTSzeGPCF1q2mRMB9qDuC/GSNoQ4PtknpkDpW3pnxMsLjwnea9qdjd6d9in+zT2pXe/m4B2rwCfvDqFxzngZrmZfHOufbhrq/DF5XVcRXoUtMYOc4cR5Gcg46cmui1T4n2Nn4Bi8V2Vm1zHJKIfsssoiZH5yGIDcjHbOcisKf4u6xd2sl7oHg68vtNiHzXZL7SQPmwAh4Bzzk+4FWB8Xn1bToF8NaFcajrDR+ZcWoEhS25xywT5s9ugx3B4rV8C+Pr3xLqGoaPrGknTdUsxuKhjhxnB4IypGV9c5yKlvvEFtB8VtM0NtGtXuZ7ZnXUGX96g2udqkKePlI5IHJ+lWvGfjm38KeTZQW0moazdjNrYxA5fnGSQDgfhzg+5HLXHjzx94eKX/ibwlbRaRuVJZbeYFosnG4lXfjkDkDnuM16bp1/b6pp1tf2rl7e4jWSMkYJBGRkHoai1q7urDRL27sbNru7iiZobdOsj44H515vJrnxfCGVvCujOqHeqggt07Dz85/DNdX4E8ZDxfpc0k9qbPUbSTyrq1JPyE9DyARnng9CCO2a66vKIfG3jbTvGukaH4i03R4Vv5MLJbB2JTJBwd5wc7eo/D06vxr4xTwpZ2yxWj3uqXr+XZ2UfWRhjJOM8DI/MfUchd6x8XNKtm1a703SJ7eJDJNaQjLKvfGGJ49ienerHiT4oXMHg3SNf0CCI/bLgwyw3cTOyEA5XCsuDkcHuCD3r1AP+63kY4yQK4P4f8AjW/8WeFdS1O7ht1ubWZ0RIUYAgIGXIJ5OT2P5Vyui+OfiN4x0NF0TSbWGcbjNqTptibnAWMMSCR3PzfQVreBvGXiNPFMvhPxisX9oAboJURVZztL87TtZdo4KjjGDz09ToooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooqG5nW1t3mZWYIM4UZJqKwvUv7VbhFKgkgqeoIOKt0Vk69e3NjZxva7dzSBSW7CtQMM4yN3pSO6RIXkZVQclmOAKqQ6rYzTtDHdxNIOwbr9D0P4U671G0sCn2qZY9+duQecf/rqKDWbO4t5pxIUSH/WGRSu2qv/AAkdtsSUW14YGbb5phIUfX/69N1uSQx2bwJ5kZkD7g3yn0HfrnrVu41F7Szilmt2FxIdiwKwOW9M/wBaie91CzxLeQRNb4+byMlk9zk9Kmu76SG906OII0Ny7BmPXG3IxVa4uL641iSwguEgWNFkLCPLbTn1yDyPapbiWfzrWwW5VZnQvJJswWA67Rngn9Khnlj0uRZPt8jqSPMilfeSDxkenb2raBBAIOQehFZOoRXLaxYvbSxx4SQNvBOR8vbvVm4guZbcxmWFgfvK0ZAde4Jzxn1/SrML+ZEH27T3U9j3FN2O0oLbdi9BjknjnPbvxT5Cdm1WCsxwD/hSldykMc568VFbnZGIXlWSWMAMQefYkds1I4JAwzLg9sc/nTgNoxkn6mh87Dt644pFbMYYqVJHIxyKjVd05k2gfLtyRyef5U8b0j53OR6Y5pFUeaZNoBKgE9+M8frTVEytgsrqSTuPBUdhjv8ApT9m5Ar4J4OQO47/AJ1HClwseJ5kds/ejj2cfQk1MQCR7HPWjaNxbHJGKQqDIG5yAQOfX2/Cn03ABJAGT1NOooooooooooooooooopisNzDPI5NPoooooooooooooooooooooooooooor//S9/ooooooooooooooooooooorzb42QSS/D9yu4RJdRNKw52jJAJHfkgdR1Fdf4YuorrwjpM8BBRrOLbnjkKBj8+K8s8S+IPir4X0capqU2kRwGQRlIFDsCw4wCOgwe5rU+K11LqHwcs7uYjfO1tJI+3HJXOcDOOTW94u8PL4n+FYs4QTNHaRT25AydyKDj6kZH41ySePQ3wJEsFwX1MKNMUZHmM3AyAOSfLOfrT/GOiv4Q+BSaXDI4kkliNzJyrFnfc3GfXAxntXpPhDT7fSvCGk2dqCIktkYZ7lhuJ/Ekn8a80+Oclz9u8LWVtF5vn3EjeQ5zFM4MQUOvRupHPYn1Nbsl38XiV26b4Yw3BBMnH1+f+Wa4TWfC2t+D/hNq9tq08ERub+GSOO0kJTHcHpgcDjp8te4acgj8LWigDC2aDA4H3B6VwXwKwfAkzeSqE3j/OOr/KvU9T/9eoNPdV/aL1ZE3DfZLvyxwT5UfQfTHSpNSDD9ofRyGypsW3DeRj5Je3SsbX4dfvPjlJ/YL2Yv7e0RoZL5W8qNSnzD5Qc53Nj6nn03dU0D4oa3o82mX174aNvcLsm8vzVZlPUAmM4Pviuv8FaLdeHfB+m6TeyJLc2yFXaNyy5LE4BIBIAOOnajxp4mh8I+F7nVniE0iFY4YS2PMdjgDPp1J9ga4vRLL4neKNOTVLvxTbaLBdKJIbeCxSRlQj0bkZ4IyxPPbpVP4JQS2+q+LkuJTPcC6jV5iR+9IaXLY+ufzr2KvKvHKu3xc8F/OFVSxyQf74GMj14HNZ3xQW/l+JvhSDTrtLK7dCsF1JEGVHLHnB4Pbj3FbUnhf4nTRvFJ45s2jcFWH9nx8g8Y+5XC+OPB974R+Hml2M9xHdGPUJJTJEpRFDIAMknrxxXvy5FipcZIj5Ax6V5R8Hjv+HOsoBz5kuMnBIMYx9PT8K2/gwDH4ASAyrJ5N1KmQMdwf61l60sC/tBaBJgib7IR8qZ3ZSUcnPp9envXrFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFU9TTzNLulBAJjPJ+lUfDJ3aQG+cZkbh+orSvGuFtJDaoHnx8ik4GawJdHmhh+23WsSx3mMlwQqZ9Mfpx+VF9Pcal4MFznbMcMcd8Pjt/SrJ8OW01uJZN5vyA32gsQ27H8vwqrLcvq2laZBJyl3LtmdDwNvPcc5IrQ1PR7KXS5Y1hWMxoWR04ZSOev+NU3ka8sNImkkbY8gWReu/tyc+1aestaRaZI95E0kKEHYoOSc8dKgmn1G70+UrbRWgKnmd9+Vx1wOn41QExn8H204cAxshJU5HD4q9rbx29zp11M22OOfDHsMjGTVrUbmKLTpnZgQ0Z2AMPm44xz7is6SCSOz0UzndLHKm5snHINXlVx4hY4Ox7Yd+hDVX1O0jGp297NbiWFUKSbhuCc5Bx35qYXMJkWKzgRpOM5XYFXjOeMjg1qVUntzJdW0yhf3W7OSRwRjirDhyvyEBvcZpCnyqqttA9B1FOVSo5Yt9cU14UkZHdclDlc9jUlN2gMWwMnqadRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRTed+exFOoooooooooooooooooooooooooooor/9P3+iiiiiiiiiiiiiiiiiiiiiszXNHtNf0W60q9QPBcxlG4BK+jDPcHBB9QK8l0mbx58Lo20k6FN4j0kE/ZXs1bKZOT91WZQc5IYdehxzVfxTrni/4i6IuiW/gG/si8qzCeaUhcKCcZdEAJz3P866rxz4b1W8+E9lo9nZtc39uLZWhjIbJUANgkjgc13ulQyW+j2UEqbJY4I0deOCFAI44rwvS/CKP8crjSYCsmj2dwb544z8ifKGCkdAQ7KPpXs/inw/a+KPDl5o92zJFcKMOvVGBDK3vggcd+lecaNrXxH8KaZFolx4QbVvsq+XFdpc/eXJxk85GMAdDgDPNaOp+GPEvj7wfN/b1raaVrUV152mqH3LCuBwxUnrzzyc4OB92qFv4t+J2jiDTLzwh9vnUeWLtSWWTsGZlJA7ZJx74qXxHofjrxP8O9RttUs4H1Sa9SS3tIJo1EcS4BwSQOoLfMzHB7HgemadbyRaJaWswKyJbpG4JzghQDyD/WuR+FPh3VfDPhi4sdWtltpGumljjE4lwpVepHHUEfhRbeHdVj+MN7r0lqn9lyWaxxz+YudwUAjbnPY84pmpeHNbuPi5pmuQRQ/wBkw25WeQsoYna4C4xuPLA+n8jF4+8Cajq2qWXibw5drba5ZABVfAWVRnHOOCAzDngg4OOtZB1j4zXMQgHhzS7eRvlM2U/d/wC0CZ2BP/ATXpHh+31O10Gyg1m5S61JIwLiZPuu/cjgfyFZ3jnwx/wlvhS60lZvJmcq8MnYOpyM+x5B+tcDpo+MNtpsWiRWOnW6xAQx6hI8bFVHAP3zkYHXyyfb03vhn4L13wlfa9LrV3Ddm+ljdJ1lZnkKl8swI4J3Dua9Fryj4gsf+FteBwAWxITgDOPnXn/PpXS+O/A8HjWytitzJa39kxktJ16BjjIYenyjpyCPwPLrD8ZY4vsQn0lnHH207O3fpzn3QHitefwNq+s/DifQ/EGpx3erySvOt0S7xo+4lR2JXHGMADPAOBWHD4f+Kt/brpN1rVpZ6dgRyXEap5pjAxgBRn26g8de1b/w+8E6l4V8Narpl/PavLcyu0TQOzqAUC8hlGOc8YP1NaXw88MXnhHwrHpV9JavOsrOWts7ecdyBk/gKr6h4Ourv4o6T4pjuIEtLOBopYiW8xmKuox2x8479sYrtqKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKr32TYXGM58pun0rC0LVbS10tUuZPJfcTsYZOPwFT3Wtpc2F6NOd/PhQNkoRwe4yP51mW1xorW5eCxnvrsrkNLEZCzH3PH5dqt2tvc/wDCHS2yW7LcLuAjIJ53Z4z9alGqamtkIRpkxuNm0SAELnHXpmlOizvoVrbtLsvIWEgcf3s9M/jTp49cvYDA8dvAjrtd1bJP09B+dWbnSmfTrW1gdAbcqVLj0HtVjU7EahZtBv2NkMrY6EVmtol7dReXfatNLHxlI1CAj69/xq8NJgGknTd8nk9iCMjnP86dHpsYs3tZ3kuYn6iY5/XrUaaHp6AAxF1X7quxIH0rQaNHADorAHIBGcUbE379o34xnHOPSn0UUUUUUUUUUmRnHelqCSYI4TDs5GQFUn9eg/GnQzLMm5Qy84KsMEH3qWo1clnBQgKcAn+LjtUCPeeaVkgiEZ6OkhJ/EED+dOneQbY4Gj81s43noAOuB15x+dI0k0UqgoZEkYDKgDy+O/41aqhDJcR3KrKCYpwWXIOUbrtP4fyNX6KKKKKKKKKKKKKKKKKKKKiZ8Oi4Y7s8gHA/z71LRRRRR3ooooooooooooooooooooooor//1Pf6KKKKKKKKKKKKKKKKKKKKKKKKKil8zyX8kIZQp2Bzhc9s47VxPw78FX3hZdUvtYnt7jV9Sn8yaS3ZmQKCSACwB6sxPHp1xXd0UUUUUUUUUUUUUVj+I9NvdX0SexsNVl0u6kKFLuJNzJhgTxkdQCOvfv0rkvDnwtTTdci13Xdcvdd1OD/UPOWCR9ccFmJxnjnA64zzXotFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFV7kIYf3kxiAYHeH29+Bn36VYppAYEEAg8EGq66dZqABaw8eqAmpkhjiz5aIu7rtGM04KqjCgAewp1FFFFFFFFFFFFFFFU/OkmkniiXYIyFEuQQTj09qcn2lbk+YUaIrxtUgqffk5z+mKiuiTdwQGaVEkVsqgxkjB+8OQf581cZA4wd34MRVa+SM6fKsj7Y1UEsWIwBznP4VbByAR3paoln8l7ltkhQsYigJ+T04zknFWo5FlRZEYMjAMpHcGmq4jULI3zActjAPvSJ5UjCdGDHBUMrZGM/l2qeoy4BIHzMBnaCM/wCetV7qYRqhlXbCGzJIxGFA5BPPrirYwcEc+9VVnFxIRFv2xt8zbcK3A4BPXr1GehFOvJWhtndI/NfjCA8tk9BUFxJcT27LHbTxyHlWLINp9ep/kasW1zHdQrLG4ZSSDjsRwR+dWKKKKKKKPpRRTWJx8oBPoTinUUUUUUUUVBLHHmN3UEo2VyASCeOPTr2qeiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/V9/ooooooooooooooooooooooopCQASTgDqTS1zPjbxjZ+CdD/tO6iactIsccCOFZyevX0GTWtpF1cahpdvdXVk1lNMm827PuaMHoCcDnGMjt0rQooooooorC0jxXpGt6rqGl2Fy0t5p523KGJl2HJHUgA8g9K3aK5/xB4v0jwvdafb6nLIkuoSGO3EcZfJBUHOOgy6/nXQVXuru3sbOa7upUht4UMkkjnAVQMkmq2j61p+vaet9pd0l1asxUSoDgkHB61o0UUUUUUhIAJPQVzXhDxlZ+NLO6urO1urZLebyWS6Cq+cAnKqxx1xzXTUUUUUUVgeLvEMfhbwzd6o4VnjULDGWA8yRjhVGfc/kDVLwFJ4kuPDMV74luFlvbo+asSwiPyUPReAMnvz69a6yiiqeoahaaVp899ezrBbQIXkkbooH+elcz4G8a3HjSxu9S/sg6fp0UhSCaW43tNgnJK7QFxxn5jzkds1d8I+NdL8bWc9zpa3KpA4RxOgUgnnsSDxWlrus2vh/RbnVLzzPs1uoZxGMtjIHAyPWsW88b24+Hcvi7T7WSaEQedHBMfLY/NtwSM45z0zV/wj4gbxR4ZtNYNulv9o3/ALpJDIBtcr94quenoK3qo6pqUGj6Vc6jdttgtomkkORnAGeM4Ga57wd8Q9H8byXcWnQ3cElqFLpdKgJBzyNrMO1dfWVrmu6f4d0qfUNRnWKGJScZ+Zj2AHUk03w1rsPiXw9aaxbwyQxXIYqkv3hhivP5Vr0V53rnj7UPCnjCGx1/To49EvH2W2oQknHHJfnjGQCPqR6V6GCCMjkUtFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFUtRna2tDJGm9g64XGe4/pVwEEAjoaWiiiiiiiiiiiiiiiiiimsSFJAyfT1qgbO4tmuJLJ4Q08nmMsqnGcAHkH2pXuZLa3V7wKNz4d48lUB6e/oM8evFPurUTT20wlEckLkqSM5ypGOvTv+FTJEwlaQzOwYY28bR7imX8aTafPHKyqjIQzOMgD1IqaIqYkKnK7Rg+oqDUZpILCaSJN8gXCr6k8Uy0tJba2W3E5KKoVcIAQP8APtTdOi+yBrMyb/L+aPPXYen65/SrcE3moTjBDFSPcHFRS26vcQy5YNHkDBOCCOhGefxq1TGIVSxzwD0yf071E7efA6ouSwZQJFIBPTnjpURhdLaK1jVvLCBGdWAKgccU+ACGCGKK1MUYGAgK4Qe+D/LPWnywrLJEXAIjbeM/3sYB/U1PVaC2W3abYcJI+/b6E9fzqzRRTSeQMHn9KdRRRRR3oooooooopO/Q0tUr6TyY/NkcJChBZgGJPPAwPfFWwQygjoeadRRRRRRRRRRRRRRSDp6UtFFFFHeiiiiiiv/W9/ooooooooooooooooooooorlPiT/wAk513BH/Hq2c46ZGetZvwa/wCSWaQMcAz4Pr++eqPxxUv8OnTcoBuY8hmC5HPr+FdzpMix+H7GSRkVFtY2ZicADYOc+leVeJ/H3w41XxVpM+o3d/eLpbs0RgjDWxckfM38TY2gjbx9elejf8JnoDeF5PEcWoJNpcYBaVFYleQMFcbgckcEZrmtT+Nfg/TYYnW4ubx5F3eVbQ5ZR23bioB9s1fl+KnhFPDa62dSDQM2xYAv74uMErsPcZHPT3pfCPxO8P8AjO7e0sGube7X5lgukVWkXGSV2sQcfXPtiuh1/X9P8M6RNqepz+VbRegyzHsqjuTXAad8ePCl7qMVtPDqFmkjY+0Txp5aehbaxIHvjjPPHNen+bEIfO8xPK27t+4bdvXOfSvMNS+Ovhyzv5ILaz1C9hiP7yeFFC9ccBiDj34rpvCfxA0jxlfX1rpcd1i1VWMs0YRZASR8vzE8Y7gVyvw68w/EjxmPNd4lm4HG0MWOcev5dh610fi34l6F4TlNnLK19qeQBY2o3SAnGN3ZeCDzyewqn4b+K2la9rCaTdWV7pd7Iu6JbxQqv7A9QfqBntXPfHCRbe48K3TsyJDduzuOQACh6Z+vY9/xlu/jxpiTP9i0W/ubRHCNcMRGD9AQefY4/Cu3l17RvEHga81WM/btLltZDLGj7GZQp3ITkbW6jqKzfh5qWgyeCHuvDumXNjp0Mkp+zTOXfcOW5LN17c/lXOt8dNMl0yOTT9HvLvUpGI+wK2GAHcsAc/QAmtvwP8UNP8Z3c+ntZS6ffxLu+zyuGD9cgHA5GOQQOvfnF7xp8QdN8GRwRSRveajcf6iygPzOMgZJwcDnjuewODjmbb4zPbalBb+JfCuoaFbzsRHcXJYZx1JVkXgcZwSeeleqI6yIrowZWGQQeCKoazrFloGlXGpajMIrWBdzN1J9AB3JPAFeX2Xxl1fU4Z7yw8D3s9jHkiVZHO8BgMDbGRuAzxn8a6fwH8Q4/HVnqUp05rIWhC488SF1IPPQEHjpgj0Jrkvg1PLY+G/Ek1raCeWKcSrbowQN8n3V64GQcV3ngbxpB420eS8S1NpNDJ5U0DSB9rAA8HAyOeuKoeIPiBLpHjjTfDFnpQvri7CtI5uRH5YJPIG05wASenQetUvFfxPOk66PDvh7SX1jWTjciP8AJHxnHy5JIHJHAAOc9qxb34u+INGS1TWvB72M9xKArTzskTJ0JDbT82e3YYPeuu8aeNp/CV/oVuljFcrqdwYXYylTHygyAFO77x9Og9eOsu7gWllPcsMiGNpCM4zgZrlvAfjKXxZ4TOtX1tFZhZHDBJdyhV756jv1x0rjL7x/q/i8yyeG/B0Wp6VZyKY7i/gWTe+CMqrOu0jnoWIBGQucV0Hgj4kv4h1W50HWtOOm6zbKWZOdkgHUgNyvBBwc8HOay774o61rt9PafD/Ql1RbRsT3V0QsfXA2/OvB5wSQTg8Y5q94P+Iup3utr4f8WaONK1Yr+7cHCTEAnhSSRwDggkHB5HSvSvrXkHxovLzUZtC8IWTsv9qzfviuTwGXble4zluv8Ir0+x0+DR9EhsLRSkFtD5aAdcAfzrxT4OeK9E8O6ZqdtrOp2toXlQwl3/1gAOWGBjr3/wAK6f4h+OvCup+BdW0601y0uLqWJfLjjbO87lOAcY/w59KrRTi4/ZukkRYUH2GRcRH5RiQg/jwfxrlfAXifx2PCFppHhHw7DcxWplMl5cfddmfcApLIoIyc5LE8dK7/AMA/ES/1vV7nw34k08WGu24L7VG0SKMH7pJwcEHgkEHI4qL416utn4LGnKGafUJAgVCM4Ug9M8/NtHfrXNW+lW/w2+KHh+O3URWeoW4gnYdGbZtJ5OQd4Q/8CPrXuVeXfEzwH4em0nW/E7afI+rmEMJFmcAsAqglQcdAO3b1rc+FEgb4ZaLtHCxuvbqJGHYmofiF8QB4PtoLSytTe61ecW1uEZgOQMkDk8nhRya5ubUPjBptrJqL2WnXyBCwtEiDOOh+6rK2QM4ALH2rs/F2jL4p8BXVtc2p+0vbedHH5ZZklA3AAcHOeMdeaz/hP4lk8SeCLdriRpLu0Y28zsoG7HKng/3So+oNd5RRRRRRRRRRRRRRRRRRRRRRRRSZGcUtFFFHtRRRRRWZrW/7EgSR0Pmr9xdxOOcY/CrkRVY0Pmbt+MEn7xx2qeiiiiiiiijNFHegdKKKKKKKKyvs95a6i0tsUkt5uXickbG/vA89ec8elPuE1C5m8uMpDBhSWIyx5+Zevp/OrrglRgZIYcZx3/yaiIvDKCDEqA/d5JI+uKmKF42STB3Ag4HaqsmnrJEqefcLgAZSZl4/A082qmOMPJIwjcOPmxz746jPNWicU3apYOVG7GM45ppSJ2+ZVZ1x1AJHpTwoBJAAJOT706kBB6EUtFFFIT0HFLRSd/ajoOBS0VDDPFPHvhkWRCSAykEZBweR71LkZx3paKKO9FMZ1T7zAfU07cMZyMUueKKTPpzRnjjmgUtMcKVKsAQ3GD3pIQfKUMqqQMYXoPpUlN45GRnrxThSZApu9dwXcNxGcd8fSgyDGfTrz0pQ6kkA9ODQXA4JxQro3Rgfxp1NyM4yPenZppOPr2FBJyOOKQsBj/DmnA5weaTJzycD+dKORS0UhIHU0tFFFFFFf//X9/ooooooooooooooooooooorl/iKhb4ea7tOD9kY5xnpzXj/AID8GeL9b8K2uo6T4wm0uyLOsdpHLKVUhiGJAYAZOT+Oaj8c+DPE3h/w2dQ1vxddalAswX7LLLKyAnID5ZiMjr0rqvirqT2nwl0eyRnRb3yI5CDtyoTdj8SBUOm+ONF0fRotMt/h5ra2YTYvnWKnzvUn+8T361x1gb+HwZ43s/7Lv9O0iRIZrOC8jkATEwO0FzjJBGcegr0v4S+HdFk8B2eoSaXaPdXe8zvIgkzhmUDJJwMAce5rk/hBoGmXHjbxJPcWMMxsJttsXIIiy7jhenQDk9O2Oc6Pii3t9L+O/h2axjSGa4Ceb5ce0NkupJPrt4+h9hUfjtV8Q/G7w/oF6qy2ESqxif7rEgu2QeDnYo9+lei+O9JtNT8D6rBPDGVitXkiJA/dlVyCPTpXkM2t3T/s7+QJ5023YtSd5JMW/dtz2XBxjPQY6V7D4G0Sy0Pwjp9vZxIgkhWWRggUu7AEk479voBXE/DZRH8UPGkSJsjRwFCn5fvt0FJ8O2A+LHjZCgR94JHB/iP496X4aWaX3jzxVrd1GrXizKiF1+aIMX6ZJI+VVHv7dK0vjHBDF4Wh1RYyL22uFWGZG2uobIIBAPfHGDWB8YZBeaL4SuZ4QWlly4boAyqTkmvXH02yfTTp5tIPsRj8v7P5Y8vb6bemK8R+GrzweFfHli8rpawI3krtyqEiQMQByc4Xj2963/hL/wAklv1QhiHuMMBjPy/n/KpfgRYWsfgqS9EMX2uS5dZJQmHwMYUn9fxqtrNvHbftDaHOiwp50BMhEfzM3lyDJOPYDNYM994mb41eIbzw/pFtqd3AqxrHcOEEaBVGVLOuCefzNaPimL4oeL/D0ukX/g+xhjkKsJIrmIsrBs8Zm444PXjPrx6j4TsbzTfCel2WobvtcFskcu5gx3Ac8gnP515/8fZ5IvCNhEshWKS7/eAdGwpIH516RodnbWOhWNtZxJHbxwKERRgAY+leX/BpWTUvFyt0W6UeXtwy5Mnrzj/I71d+DtvbWia9HZtFLGbtSTH/AA/L0Y9D+HA6VR0lB4C+Ld3pwSKHT9YPmwKpclyeQoGCAVbf3AwR3wKb8PoT4k+IGv8AjScCUxTG1tQmGAAXbnIPHyhf++jT/hI1rN4n8R6hOCdQuJc+bJ0A3sGRCScjIB46AqDyKufG2IPaeH8wq7G+KI7My7GK8ElQTjiq/wAZIBJqnhGdoZH2Xbhip2gcxnuPY/r1r1LVAG0i8VjgGBwSBn+E14b4Ukntvgb4jWNVYiVlZ5NjgZCAkr8wxg1e8I2/xHbwlZPoM+hpp75eJZDukwc5B2KEznPvnvUc3g3x2niKbxRrgsblo7OVJo7MlnceU6rtTaAxBIOCah8B6X8QrPw7Iugy6XbWjys6RXqMZMk4ydqnHA4H+FbCeBvHupeLtK17Xr7SpWsnT5bfIJTOWBO1fU8V675yggSHyyezEc15f4tNrH8bfCUlwzqwt5CrZBUHD4yCOOc88n6Yr00XEVzC/kTIxweUIb8vWvBPhN4L0XxPp+oXGsWX2lo5/wB0dvlgghgduwgMPocA9Oma6bxX8NNB0nwvqdzo2hLDfqgaG5e8csr7hggu/B/HvzmooBqEfwDurSe0IZbaUuyyq6qvmE8NuOcD346dq2vg/JPH8ObEpbeZEHmIKOuWPmNnjjHP+T1rD8RXXl/HXQJ1t7sbYv3yrGSMbZACQoJPXvn8OtY3jjX7i/8Aixp0mn6dNejSURhATtDbuWLf3ACQOcdOmME5/wAQ9b8TeKdLiu5vCclrDp0zSxX6EPtXOOcZHYE4J6Z6CvbfCniK28ReG9P1FZAZJ4gZEA+YOOG4HbIPtjFQ/ECWaDwFrcsWzctqx+bOKyPhLIU+GeksfNfIl/gPH7xug9P8+1cnr+ow2/7QGi3F/I8VoIdsfm7gN3luB8p/2mX2z+dewpexSMAnmHIyG8ptv/fWMVMxIQkKWOOAD1ryb4GSbND1l5QsWb7HC7QTtGTXqsV1DMxVGJI/2SKe0mzHyOf90ZpVdWBIPA69sU37RDu2+amfrR9oi3Fd3I9qjFy4HzW8wHrgH9ASactzE7bQzA+hQj+Yp/mLs3A7l9V5/lQsqMcA8+hGDUlMYlRkKW9hio/tPXdFKuPVaDOpHyrKf+2ZH8xTTcMgJe3nCjuAGz+AJNN+2JgYjuMnoPJYf0wPxpXuwq7hBO/sqZpFvGI+a0uF/wCAg/yNKb2INgpOPcwPj88UG9h4x5jDuVjYgfXApn9o2zcROZTycRqWP6dKYdRkbPlafdvj1UJ/6ERTlvpmXmwuFbsDtx/OlF1ctkGxlQ+pZCP/AELP6Ukl3MjgCznk/wBwjj65IFSKLqVATthPcY3H881OiFf42b601hK3R1X6DOaif7TEuUUTf7Odp/OmrcXLZBtCrYzguMfnURutSQZ+wK49FmAP68frViOedjh7R0996n+tK0lwXPlwptHd3xn6YBqIy6gASLWAkdB55Gf/AB2mNc3sYDSWqbc4PlsWb64A6fjUwa5kUPGYwO6PGwJ/HPH5Gmm4u1OHsS49YZQf/QttVtQ1KwtoYzfCeNPMG0+U/DduVFRQeIrCcsES48pMfvfKLJ7cjNWzqJZMwQSy8ZB8t1B/EinRXN20uyWyKLjIdZQw/pUl1di22/uJ5c9oo92KjTUQ0e9ra5j56PHj+tPN7CE3PII+/wC9BTp1605rlRKiLHI+8ZDKuQPqe1NlmuAjGK1LMOm5wM1HHc3mwma0Oc4HlsDn8DSpdTPEJhbPsIPyHiTOcYwcD9aqT6zcRv8Au9JvpEHVtgGPw6n8Kkl1mGCESyw3YBUEIlnK7D8lqZby4YEjTrrHb5owT+BbinLcStgGwuVHruj4/JqkDz/88hjtufn9Bj9aa8l5n91bREdzJMV/kpoEtwo+e2zxn924P4DOKmLHy87STjO3jP8AhSjDc4OR69qaGmL8ooX/AH+fyx/WkaR16QSN9Cv9TQXmIJWIewZ8H9M1Gj3hJD28KjsVmJ/9lFDfbs5X7Pj+6d38/wD61OMk3I8hifVXGP1/woEtxn/j2wP98ZoDXRbHkxhPUynP5Y/rUq7iPmAB9jkU0E/883H4jn9aQvIJNoQFSODu5/EU0m6xkQwbv+uh5/8AHaqSS6kYC8dqqOGxsLBy3PUcgAd+v4VYEd2R880X0WPGfbkmpMSgHEKEjp8/X9OKjVbzt9njX+6AWP58fyp5WYD923PT950/Smn7bjK+QPY5P68fyqVDN/y0WP6qx/limmTDlRG7EYzgcc+569KY73CozxqkvdVJKH9c/wBKZb3N5I5WawMOBwxmVgfy5/SqkTajDLe7bIktKGiMlwChGAOO46dMVZhGpOH857aLk7Qqlzj35FV5odWE0Ztp0cDmXzsKreygAkfjUkQ1dj8/2OED+He0pP44XH602KfVmhmaWxgWRGIRBPkSD1Bx8v4iomfxDPBujhsLRscI0rSk/iFAH5Gq62mvXFqHXWo4WPI2WwYH8W7e+BWhpy3zWQF5c28kuSDJbjg8/wA6vKhjXAJb3Y0AyZ5Vceu7/wCtTyoYYYA0zbnOUT/H9KPLAbKgLjgYqtKl9tby5IWzjG5SpH4jOfyFWP3ixkjDuBwM4BpE87B8wrzyNvb2/wDr0Okgj2xOFbsXXcPyyKAku0+ZLnnjYuP8aQRyphUkBXnLMMtVaSHUnkYLdwJER8pEJLA5/wB7FFrbXixsk110OFKRgHHqcluaseVNxi4OB6qMn6051mIPlvGp9WQt/UU1VuQG3vExPQhCoH4ZOf0pGjuiQRPEMekR/wDiqPLumfJnTbj7qx4z+OTS/ZUb7685yMMaZ9lcyEmUCPsqJtI/HNN+xyNtJu51AOSoKkH8SuaRtLtGbe6Ozj+LzGB/Q0z+yogRsmuUA9J2OfxJJp0enmJspd3P0dgw/UZqfyWP33Vh3ynP5g1IsQRdoLH6saaYmYDErKR3UDJ+uc0LEysXZ2Y9AD0A+gpPKk37hO+3+6VH+FPCyBcF1J9dv/16aUc8CTYvbavP68fpUf2aXcT9tnGewVMD/wAdpRDMgylwWb1kQEfpj+dO8uTruj3+vln/ABoeGRwP9IkQ99gHP5g0iW5zl5pn47tj+QFL5Mm7P2mXHphcfypDbyf8/Ux/75H8lpfJZhh5pSPTIH6gA0ot0HeT8ZGP9aX7Oh7yf9/G/wAa/9D3+iikOe1RsJs/K6AehQn+tNK3GOJYv+/Z/wDiqNt1/wA9of8Av0f/AIqgC4HO+JvbaR+uTQ6TsuFmRD7Jn+tIiXIxumjb/tmR/WpB5vOSntgGmkTjoY2HoQR/jTgZMDKrn/e/+tTueeR+VNIfOQVIx0xj9aF3soLgK3fac/0phSVfuyAr/tLk/nkU5lnz8skYX0KE/wBaTy5cg+cc+m0bf8f1pwWQqQ0gz6ouP55ppifjFxIMey8/XikMUpOfPYe20YrE8bRzSeCta8gEzJaSOmADyFJ6HIPToRzXPfByNH+HFlKivGHmmKgOSoHmN056Uz4vWt03gWW4t7qWOS3uIpFK4DA7gAVPGCDg9fp2qHxl4O1XxZ8OrC1triN76CKKVFmQKXOzDDcehwT6AnrgVj6N8XNG0Wy+w+IbS/tdXs1Ec6bCd7DjO0n5SRgn69TUepeKJ/HfgTxW1lo0llp1vDG1pcSwsHuMsSwG3jI24wCeG564rtfhnbPD8OtKilWaNyjlhIu1hmRv4T09vauW+GWm3lr4z8Xow1CCIXPyNNBhHHmPypIAzgDoOmPTmx4s0gTfFXw5K1lql22EJuUX9zCAzZyVjyD0P3wB6erPiJ4X1Cz8R6b410aya/lsCPtNsr7XMag5IPU5BIPBIzkA81n33xRh8W6bJoHhrQ799VvV8o+cE8uHPBY4JJA9wB6+ldDd/DiW7+Fz+GWu7db93+0vPHbrGjS7t2Ni4AGPlyPrjtXPaN408eeHdLttDu/AN9eXNsohS4jZ9hHRQSqMpx3IYDFP+FX9oP4+8VvqsKxX7bWnRXB2OWOV469OucVveDdOvbf4leLrq4sLmKCR1EVxJEypICSRsZvve+OB+NZNwusfDbxnqmqW+k3Wq6Fq7ea62ifNbybiTkdh8zcnAORk5FUtd1XV/ivcWuh6Zo13Z6KJUlvLu6IXCjqMDIyM8DJOeSABkavxe0q7lstAfTdIutRNncHEECO4C7RjdtBIHy9ePrSaj8VtUFiYLDwVri6s6YSOa3barY5IAG5sdcbRnHarng7wPe6L4C1iC6lB1jV4pJJmRANjMhCrx1IJOfcml+Fmi39l8NpbC+tp7a6lkmHl3EZjYZGBwRnHvU/wf03UNI8CLZ6lYz2k63MhEcylTtOOcHnHWo9V0PUX+NOjaxHaTvYLZsj3CH5Y2Ak4b0zu/WqfinwzrujePo/HHh6Br/fF5d/ZKw3soUL8gJGRgA4BzkDAOTUE3xJ8aXsQt9L+Heow3ki8SXiyeUh98ome/Vl/pXpWlG9OkWZ1FQt8YU+0BcYEmBu6cdc9KxvHXhOLxj4Yn0xnCXAxJbStnCSDpnHY8g+xNcLp4+MGmWUWgw2GmPFF+4j1WeVW2oBw2N+TgeqE+oNO+CQuI7rxVBc7ZbiO7TzLlPuyvlw2Dj1Gf+BdBWx8KvDmseHE11NVsmtVnvN8G6VH8xeecqSfTr61lfHLSIJdD0/W45Xi1C2uBDFtLbnDjlVAPUbc/ga7fwPoCeGfB+n6aI9kqx+ZMOM+Y3zNngdCcfQCuF1fwt4u8J+Kb3VvCFla6lp+oyebcWlwVLJIfvH5ipwScjBJ7EYHPJ+Po/Ft1Z6bqXiuxtbK2S72RWUEzlshSS3DMADjHDA9OO59M+IvgSXxX4aih0+aRL6zfzbeN5iEc9CD1AOM4Pr3AJrDs5PinfOljPoGjW0JTZJd3JYnGD1Kzbuenyjv27bPgfwbeWfge90XXkaE3csvmQJIsihGAHBO49u5PSsfTtD8ffD+wl03QorXXNPVwbUS4VkB3FsgyKF+YjpuznPHNbOgP8QtX1yGfX7a10rSo1cTW0bI5uNykDj5yMHB+8v0OeM+fQPHfhDUmfwxfHWdJmZR9i1Fwz2w4GFJZcqO2CMAYwcZOhow+ImqeJIpNbgsdN0mCQsUgfLzADAHyueCefm7dga9AwCMEZrzr4mW0uj2Vn4q06yhe50ydXlO5kbyyQDjbx7HcCMMTjIGO303ULXWdKt9Qs5N9vcxiRGBwcH6dD2rk/h54R1Xwn/a66nPbzJdTiS3WCZ3CL82RhlGOvQZro/Emmf214c1DTRFDI1xCyKs5YIW7bivIGe4rA07wffQfDE+GrqSAXf2aSMCGVzDuLMVG4rv28jPfriuc0jRfiT4Q0220zTbPQr21VmbIuJiyEnJyXdepJ6A/hW14O8Hanb61ceJfE00M2rzqVhijQEW6ngjfyW4wAMkKM8nca0fCHh3VdKudUv9dltJr+7m+R7UkgRAkqpyq45Y8cj35NdJfWFtqVnLZ3kImt5kKSRsTtdT1BrA8GaLreh2N3a6xd2dyvnE2ptowm2PGApVUUDp0APU81V8V+HPEGtyz29lqtpFps8IR4LiASENkZxkEYIGOQetZvhHwf4r8M6pbWza3ZS+H4zIWtkt1SQ53FRkIDwxz97t0xxWv448HN4psonsrv7Bqtswa2u1HzKMgldw+YDjOVIIPqMg8yvhv4sXCR2914t02CFQMywpvfj1/dLu7dxmuk8Z6pZeFPBF1e3McEs6xCGLMSr5kpGBxjA7tjsAaj+GXhhPDXgyziltI4L+YGa5wAW3MeASPRcDHau0IB6gGgDFNKKxBKgkdCR0p9FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFRMzK6AKWDHBIx8owTk/oPxqWm4O4nJxjpTqKKKKKKaCckYPHf1p1FFFITgZNRxzRzKWjkV1BwSpzz6VLVWe/t7aZIZZNruMgbSaik1OGPnErIDhpFjO1fcn/CrqsrqGUgqRkEd6dRRRTXdUUs7BVHUk4FUr2VZraWGOTbIyFkOCM49D0ParuQqZY4AHJNRG4VY1eQNGp6l+McZ59KnqF0VpInOMoxIz9COKVtsoZCVIB2up56jp+oomfyYHk2swRS21RycDoKZc3H2dYyE3F5AgGcdabcJOQrxSBdrAspXhhnnOfapJQJGWItjdyV9QOv8xUf2RFkjaMmNEJPloAFJPfgdaJhHLMscjEAYcDcV3Hn88Y6UGMRujxlwBhCgyQR06dseoqRwrTIpJ6FsZ4OMdfzpfLG5ccKo4UAY/wA/41LRRUO1GLbcghwW25GTgfnxilVVVxzlscZOTjv/AE/SnBtxYehx+lJFJ5sSPjG5Q2PTNQ2QIs41PVcr1z0OO/0pLAbYZFwRiaTr7uT/AFq3RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//R9/oooooooooooooooooooooooooqMxozq5UFlztJHIz6VJRRRRRVW/FydPuRZlRdmJ/JLdA+Dtz7ZxXmqa38Xo0aN/DGmSyDhZVZNp6cnNwD69hj0rf8AeE73w/b31/rNwtxrWpSCW7dANowTtAwAM/MSfc+2T2tFFFFFFFFFFFZPiG11K90G8t9HultdRZP9HmY4CsCDzweOMdDXBLo3xhMDQv4l0Vi3/LXZhgPbEI/l+Ndb4L8Kw+D9CWwE5ubl3MtzcMCDLIepxk4HYfT1Jrpq43xN4Su/EnijRbyW8SPS9NYyvbHcTO+QeRwABtXnnqeK7KiuO+IHg2fxtocGnwaiLJorgTFmiMivgEYIDD1z36e+a7GiiiiiiioLm2hvLWW2uYlkgmQpIjDIZSMEGua8I+EG8Hm5s7TUpZ9JkbzILaaMF4WP3v3meR7bR9Sa6yiiiiiiiiiiiuU1nwLpviHxFZ6vqlxeXAs/wDU2TMn2dfXjbuOSFJ+bnaAeOK6uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis3VgTDESSUEmXTy1bcACcfNwPrWdC0l34jSSB2MEceHLfL+AwMEEmujoooopm1d5bA3EYJ9v8mn0UUUVTvb1bNE+RpJXOEjXqx/wqhpJlGo3IvBGLtlUnGM49B7Dip9QQXF7bWsy/6O+5mz0ZhjA/rQ0UNhe24toljadtjIgwCoHXAHbjnjrWpWbK4i1y3Bdh50Lrt428EH8+f51akuoY8AsC5zhB95sHBwO/JqPTrdraxjhcKGXJIXoMknH61aUkqCepFRxnfGTkk7mAJxxyR2oWGNSW2gu3V8cnt1qRRhQMk4GMmobiPzkCsNyE/MvGCPfI6U+dC8DKrbWx8rDse1PJHHPU8c9aR1LKR8vtkZpw6cnNIxwOvf0zTqYcOncBh9DUZ3SRRsjYOVbJXnHfg9OM1K+7Y2372OPrTdmZFc9QCODxzj/Cm5doQxQqeCVzkjnkcU5l/eBgBnofp/n+dEm7GFxnIyT0xnn9M04g7gQeO4pH37fkKhuPvDinc55xiloxzmjvUSxIsrSqPnYAEnngdvangAEkAZPX3oACgAAADoBTqKKKKKKKKKKKKKjB5GepHbJH+eakooooooooooooooooooooooooooor//0vf6KKKKKKKKKKKKKKKKKKKKKKo6hq2n6TAs+pX9rZQsdokuZljUn0yxHNU7HxV4e1O5W2sNc065nc4WKG6RmY4zwAcngE/ga2qKjllSGJ5ZGCoilmY9AB1Ncj4I8X3njJL++Gmi20mOYx2k7SfPPg85XtjjnPU47Guyoqn/AGhZ/bvsP2u3+2bS3keYPMwMc7c5xyPzFVNY8SaRoD2yaperbvdMVgUqzFyMZwAD6j8616KguZ0tbaWeVtscSF3OCcADJ4HJqloevab4j08X+lXDTWxcpvaJ4zuHUYcA/pWpRRXCp4r1nU/iVN4e0mGzGmaaiNqVzNG7OCwJCJhgATwBnPRjzjFd1RRRWBonivTPEN9qNnYNM0uny+VMWjIUnLDKt0PKt78dK36KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKz9QWdkh8l1XDEtufbng8Z/8ArflUltKJSzbkLnG4Lzjt35/SrCnb1YtubA4/z6UuVVSc8DJPekOJIjtYgMvDL157ioJrxIYTIQcCQIcnGOcZ57Vh3eqyTXVs1i8zwyvt3IPlD9MfTnPNdHD5nljzdu/uRTsfNnJ6dKDuwcAH05p1HakAxSFQSCQDjpmspGaLxPMhxtlgDL9RxUmpEz3NrYkqI59xk9SFwcD6/wBKimsYNLja8tR5ZRQHUncHX0JPP61sVmX8UUmpac0hUgNIArchiV/+tVqW1RjvRVSUcq4HQ+/qPalt3aSJXeNo25BVhjkHGfp6e1LaxiCBIRn5BjnJ/U0+RFkXa4BGQcEZ6c05c7RkAHuBTqY6hxg+oP4jmhwWRgrbSRgHGcU+iiiiikAAGBwKWmOpZcBiDkHihSxUbwAe4BzT6KKKKKKKTI9aWoVuYXnaBZFMqDLKDyBU1FFFFFFFFFFFFRoGAO47jknOMcZ4FKxVcM30zjpT6KKKKKKKKKKKKKKKKKKKKKKKKKKK/9P3+iiiiiiiiiiiiiiiiiiiiiqGsalFo+jXupTn93awtKffAzj8eleQ+A/Bo8f/AGjxd4vke+W5lItYA7IgCkhsgHIXIwFBx8pzuzXVa58HfCerWLR21o2m3GMR3Fq5+UjplSSrc+2fQitjxL4203wfc6NZ6mtwTqLmJJU27I9pQFnLsCB84OeeAc+9HSvil4d1rxcvh3Tnubm4dnCXCIvkttQsSCW3EcEZxgnpxg1W8ZePtGt7ifw1DYX+t6hMjJcWem7w8aYGdzJ8w4P8Occ5x3b4K8f6NeXUPhhdEvdBu4Yv3NpcxbEKjoFJwckc8gZ55NM1z4o3Fhrl3pGk+E9V1eezk8u5eFTtQkAg/IrnBz3A/GpvC/xRtNb10aHqWk32jao+TFDdqcP1IGSAQSBnkY7AnjPnA8X31p8ZbrWYPDWqPLcRbG04wkXBCxhQ23BOMLnp0Oa7vVPGOmXkWgz+IfB0qy3V61vAmoQLm3IKfOA655yOg/h68V0fjbxpB4JsbS7uLSS5juJvKIjdVZflJzg9elcjf/GdozJc6Z4V1G/0hCwGo5ZI2C8EghGGMg9T9cV3egeItN8VeHl1K0O+1fckkci5KkcMrDn/AOuCPWsn4d6/p2veFWu9L0aDSrSKZ0W2t9u3OAxICgAZz6Vylv8AG77bZqth4Xvb7VicrZ2khlGwAZcsE3DqeNvbnGRW94P+I0+v6y+i6rodzpWoKm8LJuw3flWUMvHTIwfXpnV8WeNbbww8FqlrPf6rdKWtrG3Ul3wQMsQDtGTjODnnHQ1xkHxC1PwsVm1r4fvpGnXM264u7XGAzHlmVV5bJ7kE89TxXTeL/iJD4RutJL6e93p97G8r3UcuPKRdvIXGG+8O4rlp/i14j0+WHUNQ8FXdtokpyJSG3hSSASxAUEnkBsZ45wQas33xS1zUWefwn4Uu77TYhzeTQyYkPcKgA6H3J9h367wP4zs/GujG+gTybiJtk8G4tsJGQQcDII5zj1HaqnhHxTFr3iXxLYRaZFaLYTIplUYeckuCXGB3Xjk5Bql4k8eanF4gk8P+FNBl1XVIgTNLJ8lvF8u7G7IBPrkqM4GSeBT034heIdP17T9I8aeHV05799sN1bzAx54ABG5h1PJDZGRxjmvTqKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKo3sayvblyV2yZGMcnaeOf6Zp0T+XC0kiODnk7Ms3pwo96sM6JEXbhAMnI6D6VDcNMYT9kMRkyGAboRnn6fXmp8nZlwBx83PAqte2sd5b7GcBc5zxx+NZy6WdOa3FtH5qhslM4wexyeg659TitcviZV2sdwJzxgY/XvTyGzkNx6EU7OBnn8qXvTWzwRjio0i2NI2923tuwxyF4AwPQcfqamqo1ux1BbgFQAm0jnJ60l1ZJd+W+9o5YjlJU+8vqPoe4pjacZjGbqeSfY4cKQFXcOhIA5q/UbxJIULrko25fY1JRRRRRRRRRRTSyggEgE8DJ60oIIBByDS1EJFOOCOvJGOn1p5OBkAnntUcrTKuIo0ds/xMVGPrg1N3qtbXDTmYNEY/LcryevvUzkKASccgfrUMzOjQkOFUPh8kDIIIA6euPTpVmokLEuCwYBuABjHHQ81DB5sgYyMyESMAMg8Z4zx+VWdvQknj3quxxfx5YfNGwwSOuR0H5/lVW6tml1GOTzHQRJu+9w/YjGc9M8+9aHmp5Xm5+TbuzjtWbHAltriiMhRNCzsuACxBHPA961qKKKKKKKKKKKKac44AJ9zSMW2HA+bHY96fRRRRRRRRRRRRRRRRRRRRRRRRRRRX/9T3+iiiiiiiiiiiiiiiiiiiiiuO+KcU03w01tYFLOIVYgf3Q6lv0BpnwoeF/hlovknKrG6njHzCRs/rmu0ryD4y2K6nr3guxkgMsNxePHIijBKlogRu7ce/8q9PstOsdE082+m2MFtAgLCG3jCAn6DufWvDvhjqniuz0fULzRPCserS3tyXnvHvI4SXwDtIJGerHty1aviDSvH3inxJod/P4RtrEadcqWlW8hlLJ5itnlsjG0kY5+Y+tbOpfE3WdQ8RX+h+CvDjapPaHZLd3D7IlcEg8HaMZBAy65IOB3PM6mfFn/C0PB8visaakzz/ALmOxz8qhhndn3I7mtsKf+GkiWaX/j2+Ufw48j/9f41Y+MbMmo+D3GwAaj958YBymOvHr1pnx1KR+HNMYxLJIbwqhbjb8hJ598Y5OOfavVDFG0PlbAIyu3aBgY9K8p+CSOvhTW4Y40jjS9dY/Lff/APqT2+tW/grKZfAN029RJ9slB2qPlOxcccflVT4DyZ8LX4KKCtyMEIASCgPYDIyTjr3xVnxWUX42+EtwUM0LYYjOeJBj9e9YepzeJj8ctZbw5b2U95BaxrtvxhAhjQ/Kc56ntjv71s63pPxR8R6LdaTex+FUguAoZozLuGCDxuDDggHkfSs3UdFvdN174aafekSXdmXEqxuWQAOnO5jk9u35cCuw+LSo3w01bzEZwPJICnBz5qDjg+ta/giB7bwPokL8MllECM552j2FcT8G1McviiJUZUS/wADI7/MMZ9sDjtnrUPwviEHxG8cxAqAtx03Ak/vJOeAOP8AGuX+HsHjW4vNfk8NXWmwyG5H2xtRRt7tufGCIycfe4PQ54Ga6HX/AAR8SvFFlFZavqmgT28colXymkidWGR8rCI44JHINex0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVQ1DA8pvOCMpJCnPzcHpjmoyz2t2qoks4ncBvlAWNcHJJxz09auPaW8j73gjZvVlBpyRqiAbUzgZ2rgfl9ak6Dj9aWikJwMnpSbhgHIwehp1IRkEetV0aO2hWN5wxXClnbkk+tSxSLJGHVgQfQg/yqSiiiimB0ZiqsCw4IB6UM6pjcwGTgZPU+lNWeN5WjVsuvUYNOZ9vRSxxnApvm/cOx/mOOn3frRKWWM+WMuQQuQSM9s+1MSYmbymGG5I56gHH+f8irFMU5LDng9xTHWUyIVdVQfeBXJP0OeKlzkcVXc+X5ZOQS/O3nrnjp0zVjGTnn86WkAA6VXEv+neTyAItwGODzj/P1qSdXeCRY22uVO1s4we1RQ3DPbrI8TqQuWXBzn2HU1LGzsCXULz8uDnI9egxVSFSz3DZzKkrFBuOBkYH+emaes0V0joyh5IXG5enzA8EfiOKnmZlUFYy/zDgY6Z5PPp1oeJmIYTOpHQcY/HiqtnC0V/ektIVYoV3A4HHOD3p1uu+S4YPh/NxuA5wO3P1xViOJY+F4UHIUAAD16D3qvcll1C0ILYbepA6dM88+3oaWR1XVoVLfM0TBRj3BJ/SkcbY2t5JFkaRiAGGMqT0x3wM0XEpTU7NAv3xIC2OgABq9RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX/1ff6KKKKKKKKKKKKKKKKKKKKKgubeK6tZbaZQ8UyGN1PdSMEflXiOlR+NPhFezaemlXGv+H5n3xvbxsWQ4xkbclCeMhgQSBg9SegvfiL4r1NRa+GvBOpR3UmQbjUIiscZHbsuT/tOuOOopfiRpWsahq3giWGxuLlre7zdS20RcRHMRJOOg+VuT6du/qleK2eneK/hVrmo/2RokmueHr1/Njjt8+ZEewwoYgjoeCGAUgg5Fbdn4+8Y6xq1la2ngW8sYHmX7RcXwcBIty7iNwQZ2k4GSSegOKwNO/4Sn4Y+I9ajh8LXWt2GpT+dFcWYYnAyeSA5z8+MNjkEgkVPMvjHxT498Maxe+GJNP022lJjUsGkjXI3NITjGcDAIB4PXqdHxpoWvaZ8SNM8Y6Jpj6mixGK5t4mCsMKV55ychuCBwV57VV8SxeJfHVl4bvV8O3Om3NvqTebDIxPlIAvzksqnB5HA/Otv4ueHNV8S+HrG20iyN5PHdh2i3qg27GGSWZen164r0WvO/hX4e1jQNF1S21e0NrJNds0SGVXyuOu5Sf8ad8JtB1rw/4RubLWontrhrlmjQujMF2KM5UkdQfyqH4R+HNX8OaJfx6zZvaTT3IdUMivxtA42k9+OfTuOaseJfDuq3/xM8L6va2hksLIOJ5RKi+XnPUEhjnI6A+9V/Gng7WpfFNn4t8LXCLqdunlzW8j4EyDIwM4B4JBBIHQ5BFMm174pS2yxW/hCyt7hhhp5buN0U56hRJnp6nr2Pd+q+GfEup6v4JvLr7PNd6aWk1G4Qqqbsp06E5w3AXHHauo8aWOoaj4Q1C00pN986L5K/JyQwOPn+Xt3qbwpZ3en+E9Js79Nl3BaxxyruDYYDBGRwfwrnPh74c1XQNQ8RyahbpFFeXnmW5EiuXQFuSRzjBGAeeah8EeFdV0Pxp4o1G8gjS0v5i9u4lDMw3seQOnBHUVU1nwb4j0PxNceIvBNxbkXOWudLnO2N2PJx2OT83VcHPJDECubj4va1izl0/S9GiYrvuo5FLgcbgp3yYzzj5cjjnvXq1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFZ2pSiBoJWRiqsfmAzjIwKmD3BZAY0bPJZXwB/nj1qSWYwrlvKGThdz4yfyqGKeSQY3wGVcF0RtxX2/LvSz/aC8flSKqk/N8u4+2Pb1ND3IhhVZJQZtpPCE7iOu1Ryee1MgvYZ13RTPIRwAUxk4+lH2oWoVJjKzuSV/d5zz0+XOOverm47C2xjjoOMmkVw3VSCMdR60bv3m0bc/XnFVLtpJLeWNcxlgFV8E4JOB93nr16YrO8P6Re6d893q1ze5jCBHkDIh3E8YUE8YGT710FFUNQneMQ28LFJrh9iPjO3HJPPsKYLQxhha3TtcKBkySbt3+8PwNS3rTC3Tyyy5dQ7JjKr3Iz/nFV70IhQ2qsbokEeWfvAHncehHXqavSwrMyF+QhztIBycVHP5fmw7oi8m/wCQgcr6nPYY/wAKt1ChLOz5IA+UA47Hk0u5ftBTndsB9sZpXBypVc4PPTpUlRtlZFIxtPDZP5UqurltpztOD9aTBSM/xYzgDjj0pJmRYizjIBBx754/WpahWTM7x7GAVQdxHBzmpqrMWW+jAUlGjbLBehBGMn8TUk27yJNoJbacAdc4qpZXSPawZS5DbAP3kTZ/E49vX+dWllLyFRE4UDhzgA/rn9KZEjJczkgfOVYfljrj2pl7bPJG8lsVS6K7EkIztBPNPu4GuLcxh9pJU5xngEE8fhVmoFgC3Lz72O9Qu04wMdxSeSfMkPmvhsEDj5cent/9el+ypgfNL1/56t659aV4VeWN26xkkcDuMU4xqXVyoLLkA+metRtawvcpcsmZkBVWyeB9KlKKzKxHK9D6U+iiiiiiiiiiiiiikBzS0UUUUUUUUUUUUUUUUUUUUUUUUUV//9b3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis3UYxNNbId5XcSwU4AHqfX/69QRW8EEgEdxLKVU4XBZAx53ED6mrkcKzxqZminH+yPlA44xk56VOqhiXCbXGQMimiMJGyxRrGANqjAA/Tt2p6ARxhWbJAySxqOFowBHAEKZOSr5xUkcscpYIysVOGA7GpaaORnHJ561lJfG4kI8u8CMxAKxZUAHryvf8eKz9Rsr5tPvhp+mxM00aeUrXBhZ8YJDAD5SOQMH/AL56noot3lJvUI20ZUHOD6Z71LRWRrMM0z2XlSyRfvtrMjbSARVltMtVhCRxrEU5SRRhlOMZzVdb2SfT7KYZUzyIrMBwBnr7Zxj8atiytIo1KwRr5XzKfTv1qYSjyVkOACAeTUSSeQCbmeMM3POFwOOOvqf1q1UFtH5UCqV2k5ZhnuTk/qTRIpE0cixqxGVY5wQuM8evIFOkj3hRvZcMG+U4zjt9KlqKaJJU2vkqSDwSOhz2oijESkAKMsWOBjJJprwI86TZcMgIGGIHOOo79KldFkXawyPSnUmOc0tFFGOc0UUUUUUUUUUmQKWq322AyOgkGUzu9sdadNcpBatcHLqBn5Oc/Sojfw+UXQl8DovPbPOOlSR3QayFzIpjXZuIPJFU5NSnhAlks5EhJA3HHA9+cj8q1KKKKKKKKKKaGUkgEEg4IB6U6iiiiiiiiiiiiiiiiiiiiiiiiiiv/9f3+iiiiiiiiiiiiiiiiiiiiiiiiiiiuX0HxrYeI9e1LTNPtrt008lZbwqnkM2cbVIYkng9h0PtnqKKKY7ogy7Ko9ScU+iiiiiiiisnRvEGmeIoJZ9JuhdQxSGJpFRgu4AHgkDcORyMitaiiiiiiq15dR2NlcXcoYxwRtKwUZJCjJwPXiqmg65Z+JNIh1Sw837NKWC+bGUbKkqeD7g1qUUUUVz2m+LLDU/E+p6BDFcLeaeqtKzqoRs4+6c5OMjqB1roawm8V6KnihPDZvT/AGs43i3ELnjaW5YLtHAJ5Pp6it2iiiiiiiiiuZ8YeMrHwfZQy3CSXNzcPst7SDmSU5AOB6DI/Egd63LS4kuLGK4uLaS0kdNzwyspaP2JUkfka4nWPjB4O0q58g373jc5azTzEBHbdkA59iR64rZ0bx54d12aCCy1AfaJ1DRRTI0Zk68KSMMRg5AJIwazdX+Kfh/Q9XvdNvI77zbN1SR44QyfMu7gg/hzjmpdG+KHhHXLmO2ttVWO4kYKkdwjR7iegDEbSTnAGc1peK/F1h4QsoLu/hupY5nKAW0YcjClskEjjjr710Q5Ga4iH4i2mraxfaR4b0+41e7tV3GZJI47U8ZH73JOCQVBCnn25q34N8YjxSt9Bc6fJpupWMxiuLV5PMC4JGQ+AG5BBx0I9wT1lUtU1K10bTLnUb2Qx21uhkkYKWIA9hyabpWrWWtadHqGnXAntZc7HCkZwSDwQCOQetX6KxdX8T6VoV9p9nqNw8U+oSeVbKsTvvbKjGVBA5cdcd/StqiszXdTOjaDf6kqJIbWB5QjsVDEDOCQDj8qz/BHiGbxV4UtdYnt0t3naQeWjZACuyjn8K6OiiiiiiiiiiiiiiiiiiiiiiiiiszULMXc0Csisi7i25senpyef/10Q+QlygjuUBI27IzwSPXrz+PerNvFHFHtWYuN5OS+ee4/nVa0iEFxMsl7NO/ZWbO1TyMAc/jViO6guvMSEl2UgN8rL+uKl3p5mwjL7c4Azxn1plvDDEDHDAsaqT0TAOeuKcxZsoYpME4yrAfj1zUuMZIySeeTVSdr5ZYhBHC6M37wyORtX2AHJpixXks8bTGKONS4KRyN8wJ+Ungduo9T1450KKKKr3NtHdwNDKCUb06j3FV5rG5uI2je+dY2GCEjUEj6nNWngR4PKwVTGAFOMfTFRvaJKAJHkkAOcFsD8QMZ/GpzGh25UHacrx0+lKFA6euadRRRRRRRRRRTHdI0Luyqo6ljgCmxTwz58qVJNpwdjA4p7OExuPWoEuElZQolBOcbomXp9Rx/WrNV5ZmjZVjjaTLAOQfuD1/+tRDLK52yxiNx1AbcD9Dx/KnO779iAZxkkjgVFbyzu7JNFt287l6HPbnv9Mj37Ui+e99J+82wpgBQo+Y4BOTU0MbJvzK77m3Ddjj2GO1TVm28cV+PtkiLIC58oMudgBxke/GasxTf6yOSRWkj5fapAAPIqCC2WW13TtIzygFjuII9AMdKLbzzby2/+rki/dpJtyOnBx09KmjtLaC28pY18vHOec+5P9abpilbCIZJHJUn0JJH6Yp9y27ZAuQZTgkdlHX/AA/GpXiSRNrqGXIOD04ORWbrDTG0aJYj5TcSuRkBe/AycYzWjBIksCSRfcYZXjHFS0UUUUUUUUd6KKKKKKKKKKKKKKKKKKKKKKKKKKK//9D3+iiiiiiiiiiiiiiiiiiiiiopJUhjaSR1RFBZmY4AA6kmvF9Ni8Q/F7Vr65udTu9J8L28nlJb2r4M57jI69ASWBAyAB1xp3XwXk06zd/CvinWLC864muPkkI6AmMKR9efpXd3XiKz8P2OljX7tYLu8McAARn3zEAEDaD3PXgVK/ifRI9eTQ21O3GpscC23ZbO3dg+h288+o9RVXxV4m0TQdPaHVdZ/s2S5RkieMF5lyMb1UBjxnqRgcZrE+HWoeDLWwGg+G9U+0TIXkk89SkszZ+ZuVXdjgfLxjFaWufEjwp4c1CSw1PVQl5HjfDHDJIVyARnapA4IPJ707QviF4X8S3gs9M1RHumG5YJUaJ26k7QwG4gAk4zgDNebaj8QdOh+MsF6devI9EtUaC4jHm+V5gWRSDH3wxHODzg9sjf8Ya18PPHHhiK41HWbv8As6C7MQmtbeQMkpQ8EGMnofTHNd5rviDSvC2mpe6rcNbWgdYg6xPJgnoCFBI6da53Ufi54Q03UBZtfvcP/E9vEXRD6E9z9M11ul6paaxp0Oo2E/nWs67o32lcj6EAj8a5zxJ8SPDnhiea3u7l5rmEAzQWwVmjzjG7JAB5HGc8j1FW/DHjnQPF6P8A2TebpkGXglUpIB64PUe4ziumrF8TeJbDwro7anqXm/Zg6xnyl3NluncVyuofGfwfY3gto7me7O0sXt4xs6ZxlyuT9M88da6/Rdb07xHpUeoabOJ7aXI9we6sOx/z0rxz4eeNNI8FeD7+TVZpJGkuy8NvbR5coFVSdpwFGRgkkAnjrXoPhP4n+HvF98LGxa6gumUskNzEFLADJwVJXgds56+lbPibxZpPhHTTeatc7Ax2xRIuZJW9FHf69B3NchpXxv8AC2oXq29zHfacrDInukTyx6ZKsSM5HOMe9d3qusWOiaRNqt9cCOyhUO8oBbgkAYAyTkkdPWvOz8dtDVGuDomtfYwSFnEUeGIOMffx1z3rpNZ+ImkaT4X07xBJBez2N8yiMwxruUEE7mDMMAY9+cVzl38dfDtvfPHBZahdWiHabtEVVJ4+6GIOOe+D7d66271vT/EPw/1LUdMuFuLWSxmw+OhCHIIxkEemK8y8GfE7SvCvgOw05ludR1APKwt48KIo95ILO3CjHPGcd8V3/gr4jad4yubmyitriy1C3Te9vPzleASCOuCRnODyKn8Z+PdO8HRwRTRSXmo3AzBZQffYZxk+gzwOCSeg4OMXSvizBLq0Om+ItFvfD01wP3D3oYIxz0JZVx256e4r0mivLvCSqfjP4xZI5FcRoHYnKnhMY444+tdBf+OoI/FkHhzSrN9Tv2DNOIn2pAARksxBXjJzyMYxyxCmi+o6O/xii046Ep1RLUyf2l5uCAU6bcYPGRnOR+NTeKfiNp/hPXotO1K3kEBt/tD3CkkgfMAAoXBywC8kD5q5u4+NN1p93GdU8HalaafLIViuWZgZB1BVWRQTt5wG/E16DrOvjTPDEutW1nLfqER4oYThpAxAGM9OufX2zxXDXnxP8T6fC93d+AL6KyjAZ5pJ2XYvdj+7/nj8K66y8caLe+Dv+Eo814NPAO8TAB0bdt2EAkbicAc9xXG23xV8SagUu7HwJfzabKcRyqJGJBJAOQmMcZJGQOme9dpF4ysP+EQHiO9hntYMsjQbfNkDrIY9oCZydw/DvjBxyNx8SvFPkjUbPwNcyaUIxKZXlIZkKg5Hy8Y57Ee9dx4X8Taf4s0ddS06TchO2SMkbomwDtOPYg/jW3Xlfh61/wCEs+LGs65dbJLPRmW1s1KAjfg8g+o5bHbeKu/FrWJ7bSbHQ7SdYJtYmMTOzbf3agblz15LKOPXHeun8NeE9N8M6clvawh5uTLcSDMkrHqS3XHYDsOKbdeDtDuPEVprxs1i1G1kLiWH5PMO0r84HDcY5PIwOccVwOllJv2itajktfMUQqVc5IRhDFzjoDgDnr0rR+Lnh7RIPBt/rMdhawanG0flXEYETszSKDyMbjgk856Vy3xAvLi8+EfhW+1GQtcyKC7MhcuTGcNkEDng5PXOa6Hxh4q1DXL628H+Eh59xOFF/dxS5FunGVJUgjjkkkf3Rkkgd34X8N2PhPQ4tMsEG1BmSUqA0r92bH+QMDtXDfEO1l8L+LNJ8baeqj94LfUBt+/HwMk/7uRz3C16mCGAIIIPIIrivijPq9v4Mu20yC1mg2MLzzgSVix1X5hyDz36dK5L4dXfj7/hHdNisrLRzo+87JpT82wyNv8AuOMYOcDac8DPetXWfiHrV/4mk8P+BtMt7+5tSftVzcgmFccYUhl6HIyTyQQAetN07x/4h0PxLb6F44022txePstNQtNwiY8cHJORkgE5BHGRzmsf4pnxCfFujlIrAQR3Cf2STIfMklJi3BxnkbsdOw5PauqtNR+JENjqc2paTpM0yQg2cVoxzJKWxg7pPu456j8elZr3Xxc+xi4Gn6UJdqsbYMjNnuOWA47Dd/wI1Y0nxi3jL4aa5NdWiw3ttayxXMSqSufLJBAPI47c49T1q18LpobH4WWVzcHyYIhPK7FgQF8x2JGAOMdsVgJ4j+InjlHvvCkVrpOkb9kMt3saSTGck5De3QemCea2fCXjXWJfE9x4U8WWtvBqyoHt5LbJWZQuW3c8HHIIwD8wwCMH0Wiiiiiiiiiiiiiiiiiiiiiiiq8sEcs6u6k7VIHPHJHb14qIQRrdri2OcFvNyMA+nXPerMcaQrtQYBOeTnJpQqhiQoDHqcdafTEdJFDIysCMgg5yKYZl8xUwzbs8hSQMep6U5pAh+YED+9xijzQVYjBAGRg5z+VQG7j+0xWxdFuXUv5TN820cE8e+Kt0UUUUUUUhIHWozNEJPLMiB8Z27hnH0pyyIzbVdSeuAeafRRUUkyRFAx5dgqj1NPYkKSAWIHQd6hkleNN7J8vU9BsHfPPP4VJIziLdGu9uMDOKrTmeCISITMVIDKcLnJGT+A6D+Zq7VW7EjRqiMqq52OSMnBHbmiWMRLH5JEW0gBVHDe2BTZ3RrqK2kXckqOSCoK5GOv60+YRQKsmUj2kDceBjPSo7t8XdogMZJdmCseThT0/P9aIZd8v763WKU5AO4MSvGMn39Ku1Gkao8jKOZDub3OAP5AVCnlz3Pmo+fLBQgE4ycGq9tcSyzXCIoBjlZXZs+nygD6Y/yasRCeOTEjeYG6EADbgf1p6w/vpHJyrHgDjsAc+vSoowYbryFH7opuGWJIOenJ6Vcqlpzu9qRJGEZXZSo6dfoKULE97coDlzGm8YHQ7gP60+xO6yi5Bwu3I9uP6UsBLT3GWYgOAAeg+UdPzqASR37OqyqYUbBCNyxH9P8KuLIjlgrBipwQD0qug36lI2BiOIKPXJJJ/kKluTILdzDnzMfLgD+tUjqYWAlosT8ARbhliT0Hf8x3qbTLZ7TT4oXPzqCT7ZJOPwzV2iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/9H3+iiiiiiiiiiiiiiiiiiiiiuc8dyPD4D1ySNirLZycq20gY557cVjfCBIV+G2mvbjCyPOxyST/rWHPvgD0+ld5XkXxythdWnhyDeVaXUPLDBc4DADPpnp6V1WifDHwtoNxbXltZSzX8DmQXk87tIznOWOCFydx6ACvIdC8Y+GpPE+r6/4m0W91O8uZ/8ARQsCzRwxjgLtZ8ZxjHHGODzR4l8T+H9V1rR9R8I6He6bqtvOpeVLZIlZCQBuCMdx7fRsZ6CvRfFnirwF4e8RyLd6PFqWuy484W1pHLKvyjG5mI5244BJxjjFcNq2p21/8QPDMtt4SufDgF0HM0ls8JuvmTnagXIHc5PDc4FdFrEVuP2h9HSOCAFocylkwGJjlPY4JPXkdQOavfGm3gXw1pcfk7EOoKP3eEC5Vsknt9ev0q18cVz8PycMSt0hGAcdG64Bro9J8FeGrLRktItGs2jkQNI0sfmO5POSzZbvxzx26Vwnwmu20jRvF0QZzbabMzxxtnKEB8gZJ/ur175rE+G3iuPRdImmHg/WtT1K4laSXULO187zuvBbrxnoPU/jej1DUNU+J2j61pfg7WdMyfKu5LmydUlB43HAAXjI3E46ccVqP8R/HjTeVD8Prvdk5aSKUD25xj8c1L8ULu91D4PQXeoWJtr2WSF5bbnMbc5HPNdn4Y0DR7DwtaW1pp1okFxbRmYLGCJsqMlifvde+a4P4cW40P4oeK9A04lNLjUSiF33lWBGNp4wMOR0J4XJOMmP4J6VpFzDquppZbriO5Ecbz/M8Y289guc5OVUdcdqu+NtNhtfi34R1KC38p7iXZNMikByCAN3GM4OM9cewqK+hTX/AI/Q2V8xmtdMtVmihOCgfaGGRj1YN/wEc8Yrs/iFpdpqngXVYrtNywwNOjDAKOg3Agnp0x9CR3rgza634r+AWnrZJJcX6MCqBlDOkcjLjnA4UcDvgdc4qTRPjbptjb2+ma7o2o6fcwqsbFUDKoHG5g21h06BTTPi3cabceA9EfSGtjpc12BEbYBYyuxvlGOFGc59COmRXq1rpVjZ6aum29rDFZKhjECIAm09Rj3yc+ua8l+HIht/Dvjqzt0cxQGQKrHJI2OAOwzhQO3Stv4JWVtH4DhvktYkup5ZFlmCLvdVY7QWHJA7D3qlcxx2n7Rdl5IeNrqyLy4XAkxG4Gcdfujk9wKg8Hpb6r8bvE2oXFu32m0DLCzg/LgiPcM99ox24Jro/jDYWd38Ob+4uoUd7Ro5IWbqrF1U4PuGI/Gqp1DxnN4G8M3XhaG0uppLVDcrORyNq7SCzL6HP1H4v8KXfxMm16JPE2n2UGmbX8x4zGWzj5QNrkjn2P8AUcLrGqalofjzxrc6Pa3txqMyLGv2eMv5UW1S8m4AhcYwMjr2rvfhHF4ePhBbrRVlNzK+L+WfBnaXrh2HUDd8vseed1Z5tnX9oNJ1jkjV9PJZmQ7ZAEAyD04JA69uneo9bht5f2gtCFxCzhrFvL3RAoWCynqeuOfocV0vxOgW6+HuqRsgcfuuMMf+WqdlIJ+gPPSszTfE9v4Q+E+i3t1FJLL9mSOK3XIaRsHjvjABJ9MVTg1X4oa/bG5tNL0bSrR0DRi4ZnlkUjJIzwPoyjn2Oa5bwd4auvFHwb1XS9PvIvtEt6JYcu6oMbSVPy/LkA9MjkZ7ir+k/EXxF4N0qDTfEnhC8S3s41hF1DD5aADG0cAxn5e4YcjGKr/EjxhBr9h4RvNKaU2dxcTS+W8eHE0exVVhkAcuRnOOcgmumgv/AIso0UbaH4eWEfKcO2QAOv8ArOmfb/GtP4ceH9Z0K11V9aWCOa9uzOsUEm9UBHOPT6ZPAFduThSfQV5j8EZ5rrwxqU87M0j6gxZiflJ2JnHb8vzNZvxs+02moeGdUEqx29vO6M27DBiUbpnkYUn2xXrscqTRrJG6tGwDKynIYHoQalrwrVU8RXPxv1e38M6jHa33koSZwBGF8pMg5BJ6g52nmt0/DTxN4kkgPjfxQLu2ibcLWzjCqffdtUA++0nGeai+OMa2vhDSoIQiQJdBAGi34UIcDOCR+HWsK58PX/wi1zT/ABFprXF9o80QjvzIxBBI5BAHAJwVJHBGCRnJ9q0jVrLXNLg1LT5xNazruRwfwIPoQQQR2INcV8aAD8OrjJjH+kRcv/vdjjg//Xru9Px/ZlrjBHlJjBz2FYfj+OebwHrEdscStbkA7yuBkZOR7ZrH+D4C/DKwCFi4knB3/wB7zW/TpWN8FhIbTW5rto2vTcIJcbS4GCcFlABGWbpwOaf8dIom8G2cjFBIt4qoWAJwVbPYntk49KT4mYfXfAjyqpuftu7ORgfNFu4I57dRx7V1/jnxM3hLwrcarGkckyFUiWU4Usxxz3OBk4HJxXI6d4X+IeuWgu9V8aHTxOgZIrSD5lUjPONm0/8AfR96yPh7bmy8BeNo2M4KPP8Av5owWkxGRnByDyDnrzmptHilT9nK6WM7XEc/IIPSY55wBjg/40eEPD/jbUfDOn3Ol+M10+xZWVLY2KMYgGIIz0Y5BOe+c1v6N8PNXtfGtp4l1rxQdVntldQhs/L4ZWUYIfAA3E4wf616NRRRRRRRRRRRRRRRRRRRRRRRUMgPnR8jGCCC2M9O3eoyksZBSViqhiQRuJ9BUhPKO33euGwNvFV4ks/N2o6lg+4AMeuD789TUzsjHaRIDgNlUPT0zj9KlUgjgEc+mKaCqKM7FA4wD0NQ3DTqyeXGud3XrkY78cf/AFqZDHeiZXeeEw4wYxblWzzznccdu1XqZJIsUbSOcKoyT7VkxalqV1tkt9O2wk9Zn2sR64q5Z3wu/NRo2iliba8bdfY/Q0zT7ua5lu0l8seTKUUKCDj1OaqWh1C+Nw32/wAlUlMYQQKSMe56/lUtzJd6cEne4M8G8LIroAQCeoIA6e9S6rLLGLXyndQ9wqOU64IP/wBapfsSiMp59zz385s/n2qQW0Xk+UyB4+Mh/myfU5qnd28EM9rII1VmmCMQvLZB6nPsDznpWkEVSSFAJ6kDrTqau4KN5BbHJAwKGZUQuxwqjJPoKz5Y7do2vr0p5SgOPMb5YwOcjIGM8Zz6VpVVvYmmh2EkR/8ALQAZLL3XHvT7adLm3SSI8EdMjg+hxTZIHeRZBKflOQpAKj39f1qzVe6K+V5bMyiU7AykAjP1qldWHlxNLbSOJoYm8kEghTj39eOvFWxIksNvIWI34Zdp4JIz+VVr2ORInkSRjOxCxoXGAScZGR71bnuorZ41lbaHJAY8AfU1V1H/AEqBILd0MjSKepwAGBPT6VpVRnnnF7FDHCWiZS0r4PA7Ae9LHMiCGIW7xBzhV+UY4z6/XpzTtskE8kg2mKQgtliCpxjPPHp6U2J7ia9cldlvGPl9ZCe/0pQsqXjsGkdJFGMsNqY7Y68568/yp0KOxE08YSbG0DOcDPt+FWqpG3dLh5oMbpBht7tx6EDkVNBEY95Z97ucs2MfTj6U0QFZGdJXG5txU8jp0H86lihSCIRxrtUdMVGtnEsaxqHVV6BZGX+RqSOJYgQoOCcnLE/zpwVQxYAAnqcdadRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//0vf6KKKKKKKKKKKKKKKKKKKKKrXtrFf2FxZzDMc8TROPZhg/zrxbwt4nl+E94/hTxRayrZPI0ttfQxlgwzy2ByVPHTJU9Rzx1Wp/GvwhZWhe0ubnULngJbw20iMSemTIFAH5n2NYPxevJbjw/wCE7q7tktZ57gNLBIc+UxQMV5A6Hg8A/SvZq8L0DXB8JPFuraP4ghuI9G1CczWd2ELg4756twVBxkggcYOa61/jT4Xlvbez09b++uLhwkax2xUEn/ewfyBrkNH8QaZ4H+KXih/E8U8U9zLvt7loPMKoSzZBGSFYFRx/dwehxW8a+NrHxV4x8JTaXb3JtLa+2RXU67I53Lx52cgnbgZBIPzDj13fiAR4W+KOg+MrmK5bT1jMM0sSBgjYZcHnur5/A4rN+JvjHSfFvg+0vNJuJja2uqLHNK4MQz5TN6g/T3rpvjlH5vw+QhGLC7jwBknkNxxXolhu/s613nLeUmTjHOBXlnwstlvrnxvavGY4JrrycqOcHzAee/BHbv71Q8MeJbr4VW03h7xZZyCzSUtZ3drEWDgk5yTgEcA+ozgj06bRvizZ+JNbtNO0TRdTnWSUpc3DxgJbrz8x2lvbrjqPpXo1edfGtN3w4uGwxKXETDaenzY59uaxrP416ZpmkWVvq2jaxFfiBFKmNdsh2jDAswJDcHOO/er/AMLtF1eW+1TxdrsRt7rVDtit9pUqmcliDyM4GPYZ7in/AAfs9RsrDWk1G0uoHN6dpuY3VnGOSNwAI/3eKXxxpl5d/EnwXd29lczRwTP5ssULMsY3KfnboP8A9fpVXxvpuseHfHll440bTpdQgEJi1GCIAsFAwCAAW5B6gcbOeDWfrvxUj8XaJc6H4S0jUrrUb1fJDPEoVEPDMcMccZ5bAGck8YPRzLrXw68C6LZaNpJ1qWCTZdxQo+WDBmZlIyV+cjkg8dh25nxF8SbDxfoF3olj4T1W81SQeX5E1qrCB8cScbj8p6ZA6c4rF8ZaHd+Gfg54d0/UQBdrftLKi4IQtvbacdcZGcHqOK6+T4q6t/ZzofAuvRaoRtiie1cxs3POduSOhxj8e9X/AAZ4QvPD/gHUYbxHXWdRSaS4+YM24hgg+U4zjBO3uTyetT/CPT73TPAUFtf209tcefKximjMbAbvQgH/ABqjqdjqDfHHRb5LG6ayjs2R7lY2MSkpLwWxtXkrwSOoxnNZuvab4h8EePbnxZo+nHU9L1A/6ZbQKxkj+UZ4GerfNuAOOQcdTV8Qa94j+Jlt/wAI5pHhq+06ymdWurzUFKBVU5AIx6gHAJJwOMZr1rS7CPS9JtNPhJMdrCkKk9SFAH9Ku153oOiapb/F7xHqc9rJHYTQIsMjHKzEhM4OO20jBPHbIrHufC2teAPF0eqeD9PmvNGvWP23TYtoEeBwFyc9SxHYYwTgitM6HqUvxrh14WMq6f8AYQPtBYqM7GGCAfU9Gx69hUmqeHtSn+M2j63Hp8p0+G3KSXayrtU7JRgrkN1ZecEc/iN34hWF3qngXU7OwtzcXUiIY4gASxDq2MH2Brjdc8Fa1q/wg0bTUtZBq9iqH7MZUQnqpBOdvAIPUdPWiHxz4/1CEaZY+BJbO/ChPtV2XEPHBYAqqj2G8+26ovCGm+NtA8B6l9h0zy9ZOoLLHbXbK/moQobkso55P3h370/UPHXjS/tJdIPw4vftNwhid3ZmhGRjOSmz82x61LB8K57r4W2+g300UOrRTtdQzRElYXJ+7nAJ+Xg+/TOBU+m+KPiNYWX2TVPBbXl1GoAnhuEVWXoCcM2WJ64xjriuu8KTeJZ7GeXxNb2lvctO3kxWpyBF2zyeTyev5dK6KvK/AMkfhnx/4h8IyRGISy/bLN2AXehGdqjvgHqP7rDtXd+JvDtp4o0ObS7wsqSYKyLjKMOhGa83tJPib4HsItJh0u2121iJS3mQElUGNuTuB6EjBXjHUitfSE+Iuu6xpl5riWulabbSGSa1t3KvORkKCAWOORwWA7kdMTQ+FtUh+M8/iJbYLpsttsabzF+ZtirjbndnI9MV6JXn3xX8Nax4q8N2tpo8EU0yXO90kdU+XYwyCfcjofzrtJLCC60o6feRpNDJD5UqEfKwxg1wfhHwv4n8HeJbixikjvfC875jMs/7yAbeMKR14CkDgjB65qH4rC61y50bwlZxPIbyYTXAEZ/1akDIPAOMknB44zjINemqoVQqgBQMADoKrajYw6lptzYz7vJuImifacHBGOPevLvDeh/EjwpCmj2MekT6es+4zyrtG0nJKAMCMjqCvBz16mxf+DPFPhrxVe6/4LmtZor9i9zp1yAqs3J65GRliQQVI6HIJqP/AIRHxb451izvPGgtrDTbJy8enWzBmkJ7FgWwDgZOScZAAzmun+IXhO68VaJCunXCW+p2c4ntpJPu56FTwe3PQ8gVgXfhfxv4t0O90nxRdabBEYw9tJaLz5ytkFv9nHpg8+3MNjpvxY+z2ulS6hpltbonlvfgCSQL0BA7tjocD3wea0vBvgbWfD/h3X9Pv7+K4mv94gkWZmHKsNzZUbSScnG76mtXwR4VuNB8DroOrm3mdjKJRC7MjI7HjJCnocdBXJ2vw98aeEr24Twb4gtBpcj7xa3247evGNrDv95dpOBnOK3PDegeOl8SJqnifxDbS2sKMsdlZg7H3DncNqjggEE7j15Fd/RRRRRRRRRRRRRRRRRRR36UUUUVRupSl5bIsLuZNw3A/KnTqKtKpXAYlz13EAYqJ4pJTE4lA2kFgBlT9KkXOCPc5PT3704qWQqTye44pVGFAGce5yaa5f5dgUjIzk9vas3WpbeHSbp3kKLap5rbeSuOQMe9WraMuqXLlvNZACA7bcZJ+7nGeevWrlUtStPttk8IPJwRzxkfgaqx3WpWsEaSacZdoClo5R/KrFnqEN1cSxiKWKeMDcsse0keo9RUWneYupalG+3aJFZcdcEZ5qK2W6W6vY7d4v8AXb2MqscZxwOnYevWkDSz3wtdRIX5t8Kxj5JQPUnJyPTiptcAOngmUxASKS6tgjntUsemJHybq8k/3rhv6EVahiEEQQM7Ad3csfzNV9RJWKFgcBZkLEttGM9zV2imhgwypBGccU2SNZY2Rs4PXFVri3cwSeTK6MF+TaTxgdMdP0qVI3FqEMjhyvLkgkH19KdvcIAUy3TgjH1+lNtomjt1RyN5yzbegJOSB7c04tIfL2pgE/Pk8gU9ECRqgzgDHJz+tRzwpcwNFIMq36dxTTE0iFJGO09cEc89On+c1JNBFcR+XKiumc4YZFRiygFwLgoGlCBATzgD09KmkjSVCkihlPUGmR20MTbkjAb1qakwM5xzS0UUUUUUUUUVA1zEk3lFvnxuIAJwPU+lNN3bKhczIFBCk54BPAB9KnZgqlmOABkmmxyJLEsiHcjgMpHcGld1jjZ3OFUZJrMfULzyDcpb4hHOxlO4j1znj8jV+1uUu7ZJo/uP0pJLu3hO2SaNTnHLYx9fSpwQQCDkHvWfrNw9tpztHMsTkgBmz60y1lt7KwaVrx5Yw3Mkh7+g/wAmp7TUYb2V441cFVDfMMZBq7RRRRRRRRRRRRRRRRRRRRRRRRRRRRRX/9P3+iiiiiiiiiiiiiiiiiiiiiiql7p9lqds1rqFpBd27feinjDofwIxVOw8MaDpV0LrTtF060uAColgtURgD1GQM81qPGkgAdFYA5G4ZwafUckaSxtHIisjDBVhkEfSoLfTrK0cvbWdvAxGC0USqSPTgUl9plhqkQj1CxtruNTkJcRLIAfoQanjijt4lihjWONBhUQYAHoAKdJGkqFJEVlPUMMg02KKOCMRwxpGg6KigAfgKloopCAQQRkHtS0VxPxR0fU9d8Ez2ekWhurszRsIg6rkBufvEDjrzXT6PBJbaLY28yBJYreON14OCFAI4q/RRRRRRXA/FXw3q3ifw5a22jwrLdQ3ay8yiMqNrDIJ+o/+vXeLwoyADjoKdRRRRRRRRRRRRRRRRRRRXH+NPCM3iD7Jf6VfnTNas3BgvEXqmclG7le+OnUHgmuns/tX2SH7b5X2rYPN8nOzdjnbnnGfWrNFFFFFFcd4Y8FSaLruqa5qepf2nqmoPnzRb+UsS4xtVSzdgBnPRQPr2NFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFVJndbuFEkC7wflKg5xj3B6VI0hE0ce18MCdwxtGOx/P9Kl6jjp+VGCFwDz2J5pMkA5BJHp3qKeN3Q+W2GxgHcQBnqeO/pToIvJhSLcz7AFDMck4HU+9Rw2NtBdXFzFEFmuCDK+TlsDA/SrVFVb+OaWzkWBysuMqR3x2rPt9ciBS3uRKlwoxJ8hIBH09fpT4WlvtUSeON47aJCu512mQntg9h9KktreSPXb2fYwilRPmPQkDtUlvDNHqV5I6jypdhRh7DBzzUl7aC8g2BtkikNG46qwpt1ateWBgl8veSpJ27lyCD0/ClSC9C4e8RjxyIMf1qSCKaLd5tw02cY3KBj8qfNCk0ZR87SQeDjoc1LRRRRRRRRRRRRRRRRRRRRTWBKkKQGxwSM4NKTgZPSojcRZYeYpZV3EA5IHrinF1BQE/fOF9+M/0pJZkhQvIQqggZJ9TiknmEMRfDMegVcZJ9Bmokug03ksjq3XocDjv/nFSTSmPYEUszttX0HGcn24qvKY4HSCO3aZ2GeecAepP8qhQQSTCGWFPtBG47YgpVc8dzn0yCRn0q5FuaOWKT5mU7eO4xxVa3WeSyj2OUwgXa2DyPcf/AF/pUsDPeW7rdQ7GDbWQHjjB69xUl3OttbNIw3fwqv8AeJ4AqK3tmg0tLdCI5BHjI6Kx64/E1TuE0qCLyrhi7MNpLMd7f1qfQn3aPASCD8wwWJ/iPc0a1bwzadK8kSu0YypI5HIzTNUhgGisqxIkeVYIFAGcjtitQAKAAAAOABTqKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//U9/oooooooooooooooooooooooqGO4glOI5o3PorA1NRRRRRRRRRRRRRWTqfiPRNFdE1TVrKzd/urPOqE9+hNJp3ibQtXl8rTdZ0+7lxny4LlHfHrtBzUWpeLfDukXRtdR1qytrhcZilmAYZ5HHWqJ+I3g/DH/hIbEhPvEP07fzIH41ZsPG3hrVdQisLDWbS4upQSkUb5LYBP8ga6GiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiomVjKpBIUDkjHPtTtpLBskccjPBoR1dQyMGU9CDkU+iiiiiiiiiiiiiiiiimkgYyQM0pGRiloooooqMHy4xvfOAMscDNKXUDJYdcde/pTZpo4ImllcJGv3mPQfWqiarbvOyfMEBCiYgbGJxwD+NW5pVhjLNkgcADqSeAKrrdsZnRoisQHyzZ4P5jp+dPuJjDJGzMfLY7MAZJY9PpUhkAaOPKrIw3bCeSBjOPpkVC8ssLb2BeMkDAHK5PX6Dv/kVJNIyyIm5FQg7ixwfwpttE8aAecZV55bk/gc9KrP5M82LmWNnSQ+WFH3OeM+/FW4iZbcrI6sSWUsh464/Co5yTBHEVZDMdhwAdgwSfboMU66hUwfKjNs5CrjJ9uaLmSNYopGAxvXbngAngc9utN1BvLsncAHYVbDYwcEetOkDtdwsCTHg8AjGcd6UmQPIzlUiAyCW9O544H409s/aYj22sOnfj/wCvUUACzXbsgQmTJbI5AUYNPVoZJzIpBKpjeOmCfX8KdFgu8gUqWwOe4Hf9aoaTNFFapajczRlhlYzjqfyqa2cKbm6f5UdsjOOFUAdvfNQW15BNL9pmuIt2P3cfmLhFPQ465NXJ5Gks5jBuLgEDAwc+2aqQ3X7kCC1dZcYUGJh065JAAP40/SYbi30wLPHiYM52ZHqcdCRVi5ie4sJYgoDyRlcN0yR36/1pl1avcaabcMu/C8t0yCD/AEq7RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX/1ff6KKKKKKKKKKKKKKKKKKKKKYzrGjO7BVAySTwBXisUWt/GHWb5Jb2bT/CltKE8uMbXmx04PVuMncMDI4J6bWo/Arwvc2wWwlvrGdeUkWXzFz6srdfwI+tdV4V0++8J+FXt9d1Q3n2RpX+1O7MfJByud3Iwo6c46AmsGX43+CY7gxC9uHAP31tmwffnB/Suv0jxFpWuaOdW0y7W4s8MS4UqRjqCCAQfrXKL8ZvB/wDZIv5Lq4j3OUSBof3jkYzwCQBz1JAq9pvxS8Jappd5fx6l5S2gzNFMhWTB6bV53Z/2c1HovxV8M65q8GnQy3MM1ySLdriLakpx0BBOCewbGe3UZ3PE3iew8K6dHe6h5hjkmWJRGFzk9/mIGB161zWofGPwjYa0umLcXF224rJPbxhooyPViRuHuu7oaseIfit4Z8PQWsklzJem5USKlmFZlUjILbmULnsCc+3BrY8K+MdJ8YWMlzpkj/u2xJDKAJE5OCQCeDjisXxR8VtA8J6w2l3UN/cXiBS6W0KnbkZHLMueCOmaTwz8WPD3ifV/7MgS+s7luIxeRKodv7oKs2D7HGe1d7XK+PfE48KeGJb1MefK4ggJOArtn5jweFAJxg5xjFch4P8AhRptzp41fxOlzqGpXw8145532xgnIzyGZiMZ3H2wO+h4h+Dug6jbSHSC+k3WwBGjJeLIIOShPt1BHPJzXSar4F8Oa3dy3ep6YlxczBfMk8x13bRgdG4wK8vs/C+jWPxtfQLa3lTTjD5ht/MbGfKzw24t157c+1en6b4D8M6PqUWoafpUcF3Du8uQSOdpYEEgEkZIJGcV01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFIDkZFLRRRRRRRRRUDEm4QeW2ADlxtwPb1/L0qemRxpEgSNFRB0VRgCn0UUUyOVJV3RurL6qc0+iiiiiqtjdx39olzErKj5wHGDwcf0q1UUyu0LrHJ5bkcNjOPfFKzqm0OygscDJxk+1Mju7eUyiOZG8o4kwfu/Wo/t9uS+JMquAzAErycdelWgQRkcioLoJ5Sl2QKrqxL9OCP1qGW7njXzFtJHj3Y+Vhu2/wB7B7frU0k7GBZII/O3424IAwe59qY73UUAkYRyuq/OiDbk+xJ4/Gi5f95HCJGiLfNu25BA6rntxUkUZDBvNZgVAx2Pv9aCAJtzuQW+VVzwR16evBot2V4y6S+YjHKnOeKqiUy6bMLcMrRs0eHUno2D9eKuBAIVUYOAMdhUFz5v2AkDfKFGQg+8e4+hqdYIktxAiKsQXaFA4AqlGXa1s/OjYsHAfBJ2kZ5PryBzV2ZVeFw6K6lTlWGQR6GqjtJJa20zBFIZHbg4Ud8fn144z9KsSTiKeOM4AcMSxIGMY/xFIzxqFaSZQ3Y7sD8s+lPlEYYO6/dBO7HQVUYl7yNILjC8OUA4Cjt14zn0/pTytuLqYtbRmYANuRRvYfzqWA7gZACFbG1Txj9cflSIjtaqGaRGx6jd7Z7Z6U8/voWV04bcrKR25qusf2vToMK0RBVgrZyMH86e0Vw33pkOG3Y2kdzgcH6dc/SpHtkdoXf5nhOVYj2xTpIEkYFwxGMbdxwR7jofxpJxIYyYQrSryoY4BPpnBxVeWZY2Il6sMEBwo2dyQTxjPJHoPpTke0LERGPc2SUjIyxHByAeetTwiQ5d9wLfwHHy/lTZLS2lXbJbxuvPDKCOetTKoVQqgAAYAHanUUUUUUUUhIAyTikV1b7rA/Q06iiiiiiiiiiiiiiiiiiiiiiiiiiv/9b3+iiiiiiiiiiiiiiiiiiiiisTxY7ReD9ZdSQwspcEAnHyHnjmuT+Ciwr8PkETq7fa5S7L3ORjP4Yqv4t+IfifQtWvrex8G3VzZWhB+2ssnluu0EsCFx3I6nGM+w3vC3iyHxX4Jn1jVrWGytcyRzJK2Y/LA5JJxwQa4pfidorh9F8H+B5tXtUARo4oBHGVPQlQjEA8/eAqh8K5F/tjxz5enNpqtFvWxfOIPv8AyEEAcZx0q38D/DmkT6Je6pcWMFxfLcmASygPtQKpwoPA6nkDJ/SoLTw5piftAXdm+n2qWSQieC2RAqFhEhyFHGMluD356Vb+NEFppVx4f1W1tVhvUuH/AHsCKrMAFPPQnHb8eRmtv42BH8CwiV9sRvYsvtLY4bsOv5it7WPDOiWvgfUbS10qzigSzkZFiiAwQhIII5zkA561z3wV0vTIvBcepW1uv2y5ldZp2UbyFY4XPYD0FR+Cobez+Lni61tRDFHtV2jiA5JIbJPUYLHjpzxV3xR8StO8OeIX0nTdGn1fW3UebHarg8DIUsAWJA5xg4Brh/Fuv+JNU1jw62s+H/7Jt5LoGEh90ku1kYhl4IwQDgjuT2r32vH/AI/KP7A0p2jJRbhxuGeCV6Z6cgHr6V6cXnPh/wAzTRHJP9mzbhz8rNt+XJ9OleRa74z+KXh7Tor7VdM06zhyEJCpKXYk4GFkPOB645617ap3ICCDkZyOhryVJlT9oqVGdgzwAKpUYYC3zwep79PQ165RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRTPLXzPMx82Nuc9qfRRWHEzjxRMn2iTbsDeWWOOnpVy61ayspBFNMPNxny1G5vyHSnWWo2eq2xe2mWRCCCOhHbpWJoeox2emx2kVtLcTKzmRYU4Tk9ST6YrdstRt723aWNigT76yDayfUdqz4tV1C+dpLKxQ24yA0r7SxHpVtNS8/TLi4iTZNCrbo5P4WAzg0lhJd3flXbTx/Z5EyIlT+tRrBqVyxlmumtVydsMaq2PQlj1+lLYTveJdWks3mmJthni+XcCM8Y6EdKq6RFDY6ZNPDLcMkYkGyU/KNrHov9amttKtbq1jmvF+0TyoGaRmPf+7zx+FSQsRb39nI0k7QAjL9WVlyBnv6VDdlJPDts7AMp8n7pOOSo/rVjWdsOjy4+RPlVtg52lgCB+dWMTNBJH9nhC7MIjPkHjoRjgfnUlvG8VuiPjcowcMSPzPNQ6oSumzsATtXdwQDxz3q1lPLzwEx34GKoWTFNMgXcyb87WZScAkkZ9OPXjtTr6yhntpVkM2T8w2SNkHGOBn9OlTzSxRQo85UqSPmI+UH19hURht5LuK6Cs0wG1ZAOinnB9uf5VOTm6AaLIC5V+OD3H8qlCgMSBgnqfWmBDtZS3UnlRjGf61IBgAVBJugsnwxLRxnDHkkgdaitYZlhh3XLSKEGSQMtx3OKtlQVKkcEYqBbciJkM0h3HOc8/TnNTSRpKhSRFZT1VhkUixJGgREVVHQAYAp20bt2Bk8ZoIDDDAEHsaUADoAKWiiimIixxqiDCqMAegp9FFFFJzn2oyMZyKjmlWCMuwYgdlGTVRtWtFJ/eAovWQEbfpkmrysGUMOhGRSkgDJ4FVob+C4u5LeJtzRqGYjpzSXl19mjXanmSu21I8jLHv8ApUS3kyXEcdzatGH4WRWDKD6E9v61oVQu2ea5jtIyyZG9nAPAHT9aijFxa6lFE8zTRzq3JAG0gD0qPUUiuNRgindkiWMsQGIDEkAA8e1Tafa2qObiC4nk3pjEshPH0PIrSoooooooooooooooooooooooooor/9f3+iiiiiiiiiiiiiiiiiiiiio5YUmieKRdyOpVge4PWvDdL1W/+DGvXWm63Bc3Phy6fdaXMeGwfXBx82DhhnPy5GR16XWPi/4Nv/D+owQ6hMZJLSRVVrd13EqQBnGOc+tYOk6Pqk/7Pmq2f2Ge3und5VhaHYzoHRjhQBwQDjj9Kf4N+Lfhfw94IsdNlgvBd2kZVoIogd7FiSQSQOSc1D8OLyXVfGfjq9urRrWeaHdJbPkvFkt8rZA7ewra+Ak7S+CbwbkKLfMq7MY+4hPAHHXvVbT4i37S2rNsB22ivnpj9zGuffuKX47k/wBnaGoj8wyXToEABLEgYA4PJx07+hrU+OEe/wABRKFP/H7F91N2OGrudeDHw1qaqCWNnKAF7nYelct8H4zH8ObJSjp+9lwrrtYDeeo9azfCsBX4y+LpHTbuiQrlMEghOQ3ccDoep/LnbrX/APhWvxM1zUNcsp5bHUzvtpoY+uSCQpYAE4+8MjoPaqXi7xVe+OrrQZtN8ParBp8dzuhuZYeZidvTBxgbTnBP1Fe+1zvjXwzD4u8MXWkyOIpHw8MpGdki8g/TsfYmvONC8e+IPA8CaB4n8NX0sdqvlwXVsMh1HTBPysMY5DZHcelXxr4ku/iXpcWieHvDeqPcw3AklkmRVSMgEbS2SoJz3P8AXHuCZCKCACAOAc15XJpV+f2gotQOm3RsRbnF2LdvL3eQVwXxj25PXjvXq9FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFIQD1paKKKKKKKKKKKKKKKKKKxJyI/FltgsDJbkEBTg4z1NOE0Npf3KWVpNcXEjb5WBAUHHALHpUdj9sHiCaS7SGJpbcERI+4qAcdcDNL4djihW+iRUEkdwyvt9O39ac6n+19QSGNj5lsC/A2l+g984q5pMyTaVauibB5YGz+7gdKp2Xlz3msCFkKsyqTnI3bOas6O2dFtWABPljhTxmsyA6ddJJcanPmYMd8MsxCxkHoq5+lWNGlje/uvIhaK2ZEMQMZXcBkE8/hT7F0V7rTpIphmWQgmI7WVufvAY7n9Kfbyz2ECWcltcTmJdqyoq4cAcd+D9amsbaRXubi4RVkuGBKZzhQMAE1GLKdtCSzLrFMFC7hjAwf8AAVoyxrNE0bjKsMGqqxXwypuotoPB8olse53Yz+FWI4/LjClmb1Zup/KnFAU2HJGMcmkSGONNiIAn93tUlFIRkYPSkCqv3QB24FOoooooooooooooqpJexLMYFJeRcb1QElQehOOlPgm84HKOjqcMrdR+XBqTedxABwO/qfQUy3l81WyoVlbawBzz1/rU54FZsQuLu3hnYqkmdxjDkAjPqD7e/pVzzWWFndcFc/KOT7VXFq7nzJJCJCDgEDCZ7cc8c8giraNuB68HHPWklkEcTueAqk/lVSNrVoo1ZwyuoA3Pwx69M9atYim2vhX2k4PBwehqvPtmnSzEYMZXfJxwADwPxP8AI1dqOVd6Y3FfcY/rWbEkFnrYghiEazQ5O3oSCafdTSR6tGkURkdojtBbCrzyTTZri6spPOuDG9sSAfLB3LnjJycYz6Y/GtQHIzWdeRtLPEkDiKcqf3hwcL3GP4s//X9jWaKewu4p5XE6MRGCRs8rPoOhB/DFXJrG2uNQWWbLsqYWNj8v5d6o3dqlhqdjJZEQCaXy5YlOFcYz09sdvWt2iiiiiiiiiiiiiiiiiiiiiiiiiiv/0Pf6KKKKKKKKKKKKKKKKKKKKKKjeNJo2jkVXRhhlYZBHoRVOPRtKt7kXMOmWcc4ORKluoYfiBnvWhVD+yNN/tI6l/Z1p9uIANz5K+aQOg3Yz+tX6KKKKKKKQqGGCAfrQBgYHSloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorNuLOSTWbO8RRtjV1c7scHpxUSWWoWc9y1nJbNHNIZdsytlSevI60yz0ia31P7fcXvmzMhVx5eBj0HPAHFPTRfJuZ7mC8mjlmcs2FUjB7Yxz9atWOnQ2AcoWeWQ5klc5Zz71HJo9rJLJIvmRNIcyeVIVDfUVatrWG0hEMCBIxyADmpI40iQIihVHQCmNbQNIJGhjLjncUGfzqaiiiiiiiiiiioI7qGcgRyKxIyB3I9RU9MZtuOCcnGBTs84NNctjC43HpnpSbsOFxyRnIHHapKKKo3JY3tpHnCMWLcZzgdOe1WBbwjpEg53cKOvrTpJBGuTk+gAJJ/KmCSQSkOo2YGCoJOe/alkkZHTC5Q53Nn7vofpUIufOu/JgZCqDMrDnrnAHv3q5VS0kMrXLFcYmKjjGQAB+NORES+kKj5pFDPx6cD/PtUzllX5FyfTpUEU370wyshmwW+XjIz6deOKtVTtTFNCs8OQjZ2jlc+5HrxSQl2SS1cYZU65yMHIHfJ6e1PtWdolyF2n7pVgwAHvTbMs7XJIO0TEKSMZxj+uannKCCQuCVCncAcHFQxG0kslKCL7MQMDA2/5zTNLiSK0xHuEbOzIGGCBk/wD6/wAaLNC17ezspXc6xjPcKP8AEmr1FZ9zG51iykDAIFkDL3PFOvLcm6gukB3xZDberKe2O9U72e5vYvsaW3Mow7kkKg9eR7GtkDAAHaqN7YvPKk0MrxyoNvytjIqJbCe4aI3U7skZDbGC8keoHFS3unpduHBCtjaSR94dR+tMh0lY7xLl55JGQYUMxODjHcmtKiiiiiiiiiiiiiiiiiiiiiiiiiiv/9H3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiio0ljkLBHVipwwU5wfQ04MCSAQSDg+1OoooooooooooooprOqLudgq+pOKAQwyCCPUU6iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiio5JY4gDI6oD3Y4p4ORkdKWqE2qWsDyRkyO8YBdYomcj8h7VZt7iG6gWeCRZImGQyng1QXVmnbdaWM9zB/z2QqAfoGIz0rQhmjniWWNtyN0P6VLWba3F9dWyTqtsiuMgHcTjt/Srm2RolDNtfA3FBxnv17VXmguBC4S7mLMCF+VMgnpzjtVqNCkaoWLEDBY9T70Sx+bGU3umf4kOCKgaG3gkVxEiyk/LtXDH16depq0az5po3vUto8+eCGZgCNq9evQk46fWtGio2dVI3EDJwufWpKpT3Bhnj82LKMwSN1ySCfXjge9Xaid2QHETt9COfzNPByAcEexqpdKrz26lHOSw3KxULx6jv6VKLaPzlkJcuoIBLnof/1UXE0kZjSJNzyNtBPReCcn8qZdExxGZ7gRInLHAwR6c+9STTpHB5hwwbAUZ+8T0FUrGMWDeR5CxiQl1KA4z1IJ/r0rUrOj8y2vpiY2MM2HUxpnaQOd3fJ47dqsQSvMzHyykY4UtwW9eO1MJniklwpmViCiggFfUHJ6d/x+lJDHK92888SIVGyPa27K8EnpxzV2s6KymtVMdrKiRkk4ePJUnqQQRnnnn1qzBCYk+dt8jHLPjGf8B7VCliV3Kt1cKjMTtDDv15IyOfQ1ZhhSCFYkztXgZOalqs9lbSy+a8EbPx8xXmrAAAwBgUAYpaKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//0vf6KKKKKKKKKKKKKKKKKKKKKK+bfDvxE8T6d4otdS1rULq40WW6a2n3nKIfTA4UqMN7gHrX0Brmr2uhaHd6reOFgtoy5J7noB+JIH414n8MPFviTWviNHDqmq3U0MsEkzW7MRGMrlcL6cjFenaFpOo2vjTVbyfxSb+0k3BNNLZ+zEsGHG44wOOg610l/qVjpNqbrUby3s7cEKZbiVY0BPQZYgVDp2v6Pq+4abqtjelDhhbXCSYPvtJp1prOl38cstnqdncRw/614Z1cJ/vEHjoetTWN9aajarc2VzDcwMSFlhkDoSCQcEccEEfhWUfGnhcXYtv+Eh0r7QX8vZ9sjzuzjb1654x61vE4GT0rm38f+EI3ZG8TaVleuLpCPzB5rasNRstVtEu9PuoLq3f7ssEgdT68ivMPguU+0+KwrqzfbwTtzg53889zz3qh8KtSstI1Dxhd6leWdnbG8UeZLKF3HfJ6+56erdB39P0jxVoOvytFpWr2l3Ko3FIpAWx6464q5Pq2n2t/BYXF7BFd3HMULuA7/Qd6mu7u2sbSW7vJo4LeJS8ksrBVQDuSelUk17Sn0VtaS/gfTQCxuUbcmAdp5HoQRVDU/HHhrR1tWvtXhj+1ZMIAZywHGcKCQMjGTgZqefxboFvoX9tTatbf2aG2G4Vtw3ZxtwMndnt1FJoHjHQPE7Sro+pR3LRAM6bWRgD32sAce9YXjLR9AvPFnhu+1bVrmzvYJiLGGIDErhkJydpx2B5HBrotX8S6PoNxaQapfx20t4xW3VwTvIIB6D/aXr61j3nxQ8GWOoPZTa5EZ0YK3lRSSqCe29FK/XnjvXQy6xp8OkPq7XkR05Y/ONyjb0KYzuBGcj6UmkavYa9pseoaZdJc2jkhZEBAJBwRzzwRUK+ItKk8QtoK3inVFjMjW4VshcA5Jxjow4z3qE+LdD+26laPfiOXTV3XXmxuixjj+JgFbqOhPWuf13WvB/jbwPq6S6tMdIhMYu7i3icNGQysuAyHdyB0B7963PBljpmn+EdOttHnmn05Yy0EkyBHYMxbJAVcHJP8IPrzWPq3xW8JaRePbXGoPJIjlGMETOoI64bGGx0O3ODkHpXQaB4k0jxPZNeaPerdQq2xiFZGU+hVgCPy5rZooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorPm1GRJJESwuZChxuC4DfQ1Vj1m7nMgh0uRjEQHBlAIPp71o2ks80Ae5t/IkJP7veHwPqKjtri5nurgPCI4I22Ix+8x9celR315JbalYRBlEU7MrAjknHGK0aKxPLOrahcpO8qW1s/lrGj4Ehxkk454qe0V7K9NmXd4GTfEZCSQc8rnv6+1H9mQeZPcXxjmZmJBcYWNegAyeOO9M0OIQwzpC5eyEn+jEnPGOce2c4rXrnLG8GlCWymt5ZblcyO9um/zAT1wOQQOxq3YRrPY3zQyhjO7kIGyIiRjb7HuR70+w1C0j0uDzp44DEgR1lcAqQMHOabpFx511qAUvsE25QykYyO2exxn8a1HBaNgOpBA5xWVHpl2LeFTqMkbRdBEvy47DB6/jmr9rK8sbLIQZY3KPgEDPb9CD+NG7zb0pt+WJQ2cfxHP9P51ZqGaeK2haaZwka4yx6DtSvHGxDsq7lB2tgZXjse1ReeYrVJZQeg3Ffmxnv/kUlyIvs0jsCdy4ygyx44xjqeamh8zyU80gybRuKjjPfFDtIpUqgYZ+bnkD29aqzSLdBraMTK3BLmMqFGeoLDBP51NP52+J4SNqk+Yh/iGOx9RUU6PeBIpLb9yxDP5m09DnGOfQVeooqKWFZWiZv+WbbwPfBH9alqC4torpVWVchWDD1BoWCNc/LljwSxLHHXGTUmxcKNowv3eOlOI6e1LRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//0/f6KKKKKKKKKKKKKKKKKKKKKK+ffBvhmLxV4I8X6YW3XqXYlgcrkpKoJGDknnBB9jTV8SXHj/w54c8D75Teyz7NRfyyP3URyDkjg4GTx1X353rS2+z/ALSMqRxlIhahUCpgbRbqAPoP8BWh4KYH40+M8LjKLyOBwQKxU00/FL4oaomqTSSaFo7lEtxIybv4eB2yysScg8AfTsx8JvDNprWm6tpMEmnXVlOJf3UjOsoAxtIYnH1H45ryz4d+CV8Z3Ou2d9q13Dp0FwkkttbbR50hL7WJIIGNp/h78Guy+Isa+EfBml+EvD6PDFqMrxANM+QuQzDfnIBZhkdwSMY4raHwZ8HDRvsX9nOZ/K2fajPJv3Y+91x17Yx7VV+EWtX2oaPqWiapMZ5dLkWIOxJOxtwC7iBnBQj1/SsK+/4U9ojy6XFpzajcBmV4rbzp3BA5w5bHGOx4xVT4S6naD4kavY6F9og0SW3Lx2t0f3ilSO2T0LMOvQjPNbnwXRI77xYqSb/9NXPHQ5k71yfw98IaT4t8ZeIjrKy3MVnKdkIdkU7nbuCGIG3p0571rfEvwzpXgVdI8S+HIItPubW4EZUNlW4JB5zzgEH2bmtnxkSfjF4MkRsJIhG48gjJOOP/ANXT3rtPHeR4F1srv3fY5MbGwenY4OK4OwhaX9m6SOVXDC2m4cc8TsR6+n/6qsfDbwD4ZuPB1jqN5py31xdoxZrwbwoBZQAvQYA+v5ccv8OPA2iat4t8Q22oW01zZaRPstoJ2O3LMwJYdCdqL398dMbOq6Jpvhn42+F/7HtYbNLlG8yOIbU+66nCj1H6/jV74tRgeLPA8wbDrfMAOmfni7/561S+Odsl1deGI5klMLSzI7LnaoJizng84zjp0NdZqfw38JQ+Gru3h0O0Ro4GKzhAZgVBIPmEE5+tc34QSeb4EajbTysCsVyitvzsXrxjBAGehwa3vg7t/wCFa6eFk3gSTc4Yf8tGPOf6cVi2jsP2jb9FwoNiGbJPzfuk6Dgfz6H8MuLwbZ+KfjN4g/tgSNawBZVgRwgl4UfNjnHftz3611fjnQNJ0L4Ya9DpNlb2CSRozmFQm9gygZPc9ufWshNYuPD/AOz9a39nhpRbLGCWK7d8m0kEHqMnGKxfCHizwponhq3s18I6tPMqNJNM2mq4kfGTg5PHYcAADtU3w6vN/wAVdVl0vQbvStJvbf5opYCgR1CnnAwvO/Az/F+Fe20UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVlaaoj1PU1AwfMVj+IJp2r3Rt4IkE625lkCGQ/wjqce9ZjrotsHltLiRLlASJEZ3JPv1BFWrp3vIdIvFXaxnQsuOmRz1+lblFY+lbYtW1WHflvNWTaT03DNS3J/4nmnhRztl3fTA/rVkNa33mRlUlETbWV0yA341RgjFlrRgt/8AVTRGSSPcSI2GACATwDzwB2rYrK0u4jjjmt55Ylu0kcyjIBOSSDj6EUmnyxT6vey25DQlUDOv3WcZzg9+MVENRsvPnN7AkVxC20kx7iQemDj0/nVjTI3Z7q8kRozcyZCMMEKo2jIx1OM1osMqQDgkdR2qkkl9FEI5LdZH6B1k4Pu2Rx+tS2cLwQnzmVpnYu7KMAn2/ACpUhWOWSQfekILH6DFS0x0WRCjqGUjBB70wwLlOWAXoAxA/EZ5qaokghjO5IkVvUKAaloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/1Pf6KKKKKKKKKKKKKKKKKKKKKK8l+CTJ5fiREJOL4E+n8XPU+ldho/gPRtE8Vaj4jtPPN5fZ3I7L5cWTltgCgjJHOSa4uLf/AMNHzYn2r9my0XPzfuAOece4/Gp/BuG+OHjHDEgRL/DjByn+FZPhvVLbwD8WPEena032O01WQTW91ONsZ5ZlJY4GPnYZ7EYJr0Wfx/4XS4treDWLW8nup1gjispBO25jjJ2E7R7nFcJ8Dc/bPFgYhnW6jUkAAHmTnj6mrfxu0y7kstG121ieRNKmdp9uPlRth3H2ygH411EHxL8Iz6MNS/ty0jQJvNvJMqzg/wB0x5zn6fyrgPA1hrKfDrxbr1jHJHc6oHktIthzhdxJUZ5zuIGO4p/wt8Q+B9F8JC5vZtOtNVR2E8joPMYZyuwgEkYA4XPIp/gjXbLxN8bda1WwfdbyWeImdCrOB5a5wfofTj3rQ+Db79V8Yg53DUByc5xuk45+lc58N/FWi+HPGPi1dav1tDc3H7ppEODseTdyBweRxV34g+LrXx1eaP4Z8J3Ruria53yXCIyrHgepHIALMSOgWtH4sbtE8S+E/ETI72tnN5cjA5K4ZW/Mjd9cVN45+KnhS68K6lpthevfXd3btCiQRsAu5fvFmAGB7ZPtVfRU3/s3TLJ8x+zXHUHnEz49+wrrvhY5k+G2jFjkhJEPOcYkYY/SuY+Fg2+O/HaSf68XSZAAAA3y+nTtUnjSUR/GvwZlhgowx7ksB/Om/F1m/wCEj8EIMfNqBxzjnfF3PHeq/wAa3SO/8KsywlftMgy+dyndEcjHJ6cj6V6lq4ZtFvlXO428gGOudprzP4W2n9tfB2+sSSxuGuIgc4JJUY/pWJ8NfiP4f8LeEpdJ1u4uLW8trmXERhdycnO3IGAQcgg4/wAHeCfECeKPjdcaxHb3FrDcWBMMU4G5kCoA3HHPXjPXrW34UkUfHXxfDuBbyVbaMf3Y+eBnviuq+JfHw61s84FvuOPQMCe4rnNL0RvFvwHs9LgdFkmtQYWI43JJlR2xnbjPv3rK8K/FOy8M6Db6J4vgvLDUrNREqNAxLxj7pIPTjj0OMiuq8LfEi08YeI5tO0qwuvskFv5sl3KMDcSNq4GQM5bqQflOBXd0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVi2rFPFF9GOEaJWx6nj/GrGrWZuIoZY08yS3fzFjIB3+o5qOTVZxF+50u8MpAwrIAoPuc0Xtvd3On2u5I2uEljkcLwBg84ye1XZWuhdRCJIzAc+azMdw9MCrNZd5psr3P2uyuBb3RUKzFNyuPcU6006SK8a7urkzzlNinYFCDqQKdcaXFNcNOs00ErDDtC+3d6ZqS10+GzZ3Qu8r/ekkYsx9s1cqtPY2ly++a1hlfGMvGGOPTmpo40iQJGiog6KowBT6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK/9X3+iiiiiiiiiiiiiiiiiiiiiisrSfD2l6E90+m2iwNdSebOVZjvbJOeSfU1q1mHQdKOuf219ggOp7dn2or84XGMA/SlttD0uz1a61W3sYIr+6AWe4RMNIBjqfwH5VX13wxoviW2S21jT4rpIzmMtlXQ5BO1gQwzgZwecc1S0r4feFNDuUutP0W3jnjOUkctIyH1BcnB961NN0PSdIkuJNN021s3uW3zGCJUMh5wTjr1P5mtFlDKVYAgjBB71x7/CzwVJei8Ph62EgbdsV3WP6GMNsI9sYrsAAqgAAAcADtXK3Hw48HXWpNqE3h+za4JywCkIx7kxg7ST6kc1tW2i6XZ3z31tptnDdugR544FWRlAAClgMkAADHsKdZaRpumy3Elhp9pavctvna3gWMytzyxA+Y8nr6ms658E+F7wS+f4e0tmmYvI4tUDsxOSSwGc5J5z3qxo/hnQ/D4f8AsjS7WzMnDvEgDOOwLdSPbNaF3Z22oWklreW0VxbyjDxTIHRh6EHg1k2Hg3w1pfm/YtDsIvNUpJiBTuU9VOex9K0IdLsLewOnw2NtHZHINskSiPk5PygY5JJP1qe1tbextUtrW3it4IxhIokCKo9gOBRDawQSSyQwRxtKcyMqAFz6kjr1NOaCJ5UlaNGdM7HKglc9cHtQ8EMro0kSO0ZyhZQSp9vSmz2tvchVngilCNuUSIGwfUZ781YpqqqjCgAZzwKoXGiaTeXq3l1pdlPdINqzy26M6j0DEZrQwM5xzSYGScDJ706io5Yo5kKSoroeqsMiljjSJAkaKiDoqjAFPooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//W9/oooooooooooooooooooooooooooooooooooooooooooooooooqnqWo2ulafPfX04htYV3SSEEhR68c0un31rqdhDe2cvm28y7o5ACNw/HmrdFFFFFFFFMZ0QAuwXJwMnFRXl5b6faS3d3PHBbQqXklkYKqKOpJNR6bqNnq1hFfWF1Fc2sudk0TblbBIOD7EEfhVyiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiim7l3FcjcBkjvinUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//X9/oooooooooooooooooooooorwC/8G6zZfELS/DZ8Za3NbXcBkkuHuHDKBuO0DfzkqPz6V7do+njRtFtLBrua5FtEIzcXDZdwO7Gsp/iB4QWQxnxNpe4YyRcqVH/AAIHH610MU0csKzRyK8TLuV1OQR6g+lc8vj7wm+ntfjxBYfZkfyzIZQMtjO0DqTjnAq5o3ijQ/EDyLpWq211JHyyI3zAeu084569KvahqVjpVqbrULuG1gBwZJnCrn0yawrD4heE9TvhY2mvWjXJdUVGYpvZhwFLABj9M88da6csFUsxAAGST2rjpvin4Ktr42cmvQiXIBKxSMnIz98Ltxz1zWzoXinRfEyznRr+O7FuQJdgYbSc46gdcGqln488M32k3GqQ6tELG2lEMs0yPEA5xhRvAyeR0zT38beHIvDsWvyapEulysyxzlWG9lJBCrjcT8rcAdqx4vi94GkljjXXCC5wpe0nVfzKACui1bxJpOi6J/bN/eKmnfLieNWlDBiApGwEkHPasO++Kng2wliil1xC0iK/7qCSTaGGRu2qdpx2PI7irV74/wDC+m6Pa6tc6rGLO7UtbsqMzSAdcKBng8cgYPFW/DfjDQ/FUUr6RfCcxH94jIyMvvhgMj3HFR6p400HRdZg0nUr/wCz3cyeYu+J9gXn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3U/z69KlbwD4QkJLeGdIyTnIs0H9KYvw/wDCCZ2+G9MBY53C3UEfQ9R+FPfwF4SkJL+G9LYkYLG1Tcec9cZoPgPwkUKf8I1pW0knH2VMZ/Knf8IN4Sz/AMizo/p/x5R/4e9OHgnwoFUDwzo42kEf6DHwR/wGn/8ACH+GfNkl/wCEe0nzJM73+xR5bPXJxSDwV4VXp4Z0YY44sIv/AImprXwzoNlIktpomnW8kbbkaK0RSp9RgcGteiiiiiiiiiiiiiiiv//Q9/oooooooooooooooooooooqKWKOaJ4pUV0dSrIwyGB6gjuKyv8AhEvDe0r/AMI/pW0ncR9ijwT69Kf/AMIv4fDs/wDYWmbn+8fskeW+vFSjQNGXONJsBkYOLZOn5U2Pw7okJHl6PYJjpttkHp7ew/Kpf7G0vIP9nWmQSQfJXjPXtSro+lr93TbMfSBf8KeNNsVXaLK2C4xgRLjH5U4WNoF2i2gC4248sYx6U4W0CqUEMYVgAwCjBx0zTkijjZmRFVnOWIGCx96kIBGCMikIBxkA4ORmjYuc7R+VOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/9H3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiikGcc9aWiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv//S9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooppIAJJAA6k1iWmpPrGpuLXd/Z8HDTA8SvnoD6CtwAAYAwBS0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV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sLtxnJ3eucCqfi/wfceJLzSL6y1h9MvdLleWGUQCYEsAOVJA7fqaqxeG/GiXUEknj3zIkKeZENIhXzACNwznjIz9M8VZ8ReEbnVNXg1nR9Ym0bVo0ETzpEJUmjBJCuhIBwSe/fvgYq6T4L1JNetdb8SeIpNZu7EOLNBaJbxwbxhjtXO5scA8fjRLu1/4nWwiybPw7EzTsVBVriZcKoJzyqDJxgjcOcHB7eiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/W9/ooooooooooooooooooooooooooooooooooooooooooooooqnFp9lBfT3sVpBHd3AVZpxGA8gXhQzdTjtmrlQQW8FshSCGOJWYsQihQSep47ms638MaFa6n/aVtounRXwJIuY7VFkBIIJ3AZyQSCe4NT6loulayiR6pplnfImSguoFlC5643A46CkOg6Q2lDSm0mxOnDpaG2QwjnP3MY689KdDoul22mjTIdOtI7AHItUgURdc/dxjrz9asS2lvNNDPJBG8sBJikZAWjJGDtPbI44rmbjwTaX/jS61zUktb21msUtRZ3FusgUq+7dzkenGOtdPa2tvZWyW1rbxW8MYwsUSBFUewHAqJNOso4zElpAsRfeUWJQC2c5xjrnnNSXdpbX1pJa3dvFcQSDa8UyB0YehB4NRafpthpNqLbTrK3s7cEsIreJY0BPU4UAVPHDHEpWNFRSSSFGASTkn8abcWltdWj2txbxTWzrtaGRAyMPQg8Ypljp1lpdt9n0+ygtIB0it4ljUfgABVkqGUqwBBGCD3qnY6Vp2mK4sNPtbQSHLi3hWPd164Az1P51dwBnjr1prIrEFlB2nIyOh9aUKASQAMnJ96dVWaxtJ5BJPaQSuOjPGGI/E1aoooooooooooooooooooooooooooooqre3tvp9q9xcyCONepPf2Hqa4a81LVfGM76fpaGCxU/vJi2AB23Edf90fj6jrdE0Gz0O1EVuu6Qj95Kw+Zz/Qe1a1FFFFFFFFQXVtDe2strcxrJBMhSRG6MpGCK5q0+H2gWVxayCO7uIrRg1rbXd5LPDAwGAVR2I47Zzg4I5ArrKKKKKKKKKKKKz7jSbG71Cyv57fdd2ZdoJdxBTeNrDg8gjscjgegrQoooooooooooooooooooooooooooooooooooooooooooooo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zhAF/g6cd6474DszeBrjldgvG24z/cXPWs34NaFpN/Hquq3WnxSX0N60cMky72jQjPykk4JyeRg1a8YWFlp/xe8J3kEIhnupAJTHGqiQg7csRyWw2O/Ax06ZXjfWp1+Mtqh0m51qLTbXMdhCpYlnXJbaAeOVJ4/hHpVvxV4x1PxN4budMk+HOuPJIAUM9pIVjcHhh8mTj8M8joa7j4a/2gPh7o8eqwTW95HG8bxTRGN1VXZVyp5HyhaZ8TNIvtc8BahY6dGZbpjHIsa4y+2RWIGe+BXEeGvi/pOk6bp+ha7pd5aXEMS27FIsqNo25dDhlJxyAG69etQ/E/UdHl8M+G9N0OziuNFurx2EOnfu42KMAY8LgDczt7g89a6B/G/iaNGtIfhlfG1WMIiNMFBGANu0RkBcZHXpjgdBwZ0XWtJ+FviiLVrM6Xay3tvJbW9xyqZk+bbtyT/COnbgV6x8OdD0nS/B2nXGm2aRPdW6SzTFMSSMRkliST1J4zgdq53e0X7Qmz5lWWyyuXIDfu+cA8H7o6f3apWanVv2ir5rkh1022zAuT8n7tR078yMfqRXTfFvyx8ONRaVQwDwlc54PmLyMHrXPeO5WT4HaXIr7l8uzJY4yRgH3GelelaE2/w/pr4I3WsRweo+QV5Z8M717KTx+YlYTW87TIHBJ/5akZOAMZHoKxPhhqHjOx8PSvoHha0v7aeZ2ku5LpI2kcKMDBYEAe45z2rWudP+I2t+NvD2tX3hu2sjYyASXFrcRg+UxG4MDISQAW4H949a9pooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/9f3+iiiiiiiiiiiiiiiiiiiiiivH/E27/hoXw3skO424yDhQBiXvnk/h7V7BXknj+z1Tw58QNK8cWFhJfWkMRhvEQ8ouCufXkOcHplRn32T8ZvBQtxIdSmEpUkQG2kVsjsSQFB+rY964/4i60viPS/A+pvZS2b3WouEgnyGUCRV5474B6dDxnrXuVeT/CUkeJvHCZQgX6n5XVsHfLnocj8f8a0/jYrt8NrnYm7FxETxnA3dat+LdGutb+E8thaRE3Qs4ZEizkkptYr7khSB7+lYXgH4oaBfafoXhuNLmPUpIRb7UUbEZVPO7PQgZGAetSfArcfBd4xdXU37hSgG3hEHUDmovgdC8Gm+IEZWULqJUBhzkKM84Htx2qz4+truX4keCHhBEQuGVnEbMOGVsE9Oi+uevpTfG+ma1oXjWw8ZaBpJ1DCeTfxRAtIU4HCjk5HcA4KjPFSS/GfSBboIdJ1U30hZUtJI0Vyygk5AYsBx12nr0647jQNQutV0Gzvr2zezuZo98lu6spjOehDAH8wKo+L9d1Dw9oq3+n6Y+oSLMqyQqrn5DnJyisRjjnaRXC+I/ip4e1fTpdEOjaheX91CUW0MKP5chHQ4LHcvX5QSCOmRxSPwu1a4+F1jbKRHrtncvexJhVxuIyg7A4VWA4GcA45Namn/ABfnS1S31Xwjr66pEoE8cdrkZx97naRkc428Z6kc1H4pudf8X/DTWmvPDtzbE3MBsrVEkaZ49yEsy7dxOd3G3j3Aye78Fxyw+CtGinSVJUs41ZZYyjKQo4KnkfSuSfR7xfjxHq4tLk2b2JDT7H8tWCYxuxt9OM+pqn4v0fW/DHj5PGug6fJqMU6bb61RiOibc4AJAwFOcHkH1wcfxp4v8QeKvCl5DD4Xn07SojE93dXoIIG7K7AV9QuSA3B6DrXWa34fufEPwWg0qz+a6NhbNGDkbimxiB05IUgZ9RWBo/xK8QjR7bSLTwfdXOr28KwEsGijDD5QSpXIwACQSMc8gc1d+Eula5bz+J5fENlLbT3k6Ft8HlCQ/PuK4wCOeq/XPNZmm23iv4U6rPY2ekXmv+HrmQPEYEZnh46ALuIOMA7gAcDBHNdRp3izxXreo6dDD4VuNOt2kWS9ludwMcXoN6oCTzkLuI9BnI9Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//0Pf6KKKKKKKKKKKKKKKKKKKKKKqPp9nJfJfPaQNdou1JzGDIo54DYyByfzq3RVEaRpon88adaibAHmeSu7A6DOM1cKgkEgZHQ+lOoooqNYkViVVQSckgd/8AJP51JRRRRRRTcDOcDI4zTqKKKKK5vxzpc2s+Dr+wtrR7qaUJshR0QsRIrdX4GMZ/DjnFaOg289n4f061uURLiG2jjkRDlVYKAQOTwDWnRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//0ff6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK53QfGeh+J767tNHvDdPaAea6Rt5eCSBh8bTnBxg9jXRUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV/9L3+iiiiiiiiiiiiiiiiiiiiiioLq6hsrSa6uHCQwoZHY9lAyTXivw++J2u6x40jtNZlY6dqJkFopgUKhBJUKyqCcY28k9uh6+415lpuo3f/C+dZsJb+5a0+wpJFatcM0YbZHyE+6v8R+pJzzgZ0WpXY/aMlsWvpjbeRhbcyNsXNurYC9Ooz26+terpdQSTNCk0TSryyK4LD6ipWdUXLsFHqTinU1WVs7WBwcHB6Gq89/Z21sbie7hig4HmvIFXJ6cnin213b3sImtbiKeI9HicMp/EVVtda0u+mNvZ6lZ3EwBzHDOrsADg8A54rD8f6XqGp6DHHp3iBdEeOXc9007xArtYbdysO5B5z0reFxBpmmRPf3kSpHGqvcTSBVY4AyST3NQ33iLRNL8pdQ1nTrQzJviFxdJHvX1XJGR7ir9vcQ3UCT28sc0TjKSRsGVh6gjrWF4xvoLbw9dW8mu2ejT3KGKG6uSOD/FtG5STjPQ8decYpngjT9H03w3DbaNqEF/CGLTXUUwkEkvAY5BOOmMZ4AArRfxFosQvDJq9ggsSBd7rlB9nJOBv5+XJ4GcUab4i0XWZGi0zVrK8lVdzRwTq7KM4yQDkCq8XjDw5NqAsYtc0+S6LbBGtwpJb+6OevtTfGFkNR8J6haPqi6SkkY3XrYxCAQSTll44x1HWneFLZLPwpp9vFqq6qiRcXynIn5J3A5b+ZqLVfGvhvQrprXUtZtYLhSA8Rbc65GRkDJHGDz6j1rVsNRstUtvtFhdwXUOcGSCQOM4zjI78irtFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf/T9/oooooooooooooooooooooorzr4y66dH8CS20UhW41CRbdQBk7er4/AY/4FXKeN/CUvh74V+HL22VUv9CdJHk24KGRgW4/66betexaXfx6ppFpfwMpjuYllG1tw5GcZ/SvNdPlkH7RuqpuIRrADGTz+7iNc34h0m41v4/zaZDqE1gJ41MksWVcp5ALKCvXIXHJ6Z+hteLvhPZeFNAl8RaFquopqGm7JEaUxj5QQvBRFIIH1zjGOc074m6s/iP4M6Fqk8S+ZcXEbSArnawSQEjjjkH8DXseknOj2JJJP2ePqMfwivMPgyudM8TIodIftrBIsqVTIJO3HHf6frXNfDH4fW3i/w6lxrl5dS2FtKyW9hHKUVX2jLnuDjAGMdAe9RWXgxE+KWt+CrDVrm00e4hWS7WEgSSIEVhGWx28zqeoJznPNvxr4O034d6v4c1bw8ZY7hrnyyJ5C+WwMNntwWBHQ57d+u+OKRP8AD4ebgYu4yGKg7Ttbp9en40vxWAPwi2LuZT9nwRweCCD+lV/D3wj8PXug213rMl1ql7dwJJ9qeUr5YKjaEAPQDAw24fhwK3wdl/siy8T6e87Paadc71DODtGGDHtjOzOMD1rj/DV/4T8RXd9rnxG1QS39xLttrNjMqwIvoE4x2A9uck1ag1Lw3ovxN0GXwLdt9kvpFgvoEMixnJAAO9efvE98EH7taOh+DbHxR8UfFf8Aadxcm0trncbWOVkE25nA3EEHAIJAHr6dYPFngy10T4heH9M0C6u9Lg1GNoH8iV3aME4bBZs4IPTOBjOMmtL4hfDTwv4f8DXepaZZS293atFiYXEjswMiqeCxH8WeAOa6jWrl7v4JXFxNN57yaOGeXJ+c7BkknB5rL0rWbjRvgBFqdmAblLVkiI+TazSlAR9C2ffHvXK+Edb+Fel6Oi6zLHe6rcZe7mv7F53DtncAdhx6Ejknkk1pfDzV9Kj+Kup6f4XmT+wbu2EohCsArqBkrvJPUt0wMEDHAr2uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/1Pf6KKKKKKKKKKKKKKKKKKKKKK8R8eQXXjr4uab4Zsbw2yaZC0klyi7jE5AcnGRnpGOvBP4VdvPg74kvrWS3uviPqdzC4w0M0crI/fBBmI6+1a3wZ1p7rwxcaHcqUvNImMMiGQOQrFiPwBDL/wABqhZOB+0hqaluTYKBk/8ATOM4A79M1TeWO1/aVLvLHEstuFJkfbuPkAADnk5A4rrPixrVrpHw+1NJmjM13H5EMLNguWIBI78DJ/CuJ8V6LdaX8BNHgu43ElnLHLPH9zaHZvlO04yC6jvz716TZeMfDqeGrXU5NXtIrXyEYl5wSvH3SOpbPGMZz2rifglPHcad4jlt0Ihe83oGbLYIOM49sVe+BRU+ApNoCj7Y+VH8J2rx/kmqtgyL+0ZqgfeXayAT58gDyoj0I479D/On/G4J/Zug722n7fgMScD5fQAk/hzVz43lR4AG4gA3kQyQTjhumKT4pFW+EJZQrAi2K5OF6rj04/Ku48Pp5fhvS0znbaRDIOc/IK8x+F8FvqGpePdOiRooXnEXmZy2GMwPtxzj61j/AA4vfCum/bfDPi7TtKh1a1nZTcX0UZWTn7u9x2I4yecjFeh/2z4Ct9csbCzGkzanPMEgWyhjkZG65LKMJjGeSD6VhfDyVm+JvjiNlHyzKNwQDOHfqR1PNHjo7Pi54JO0EszDJ5/iHbt16/4Vu/Fltnwz1Z9zLtMB3L1H75ORVO5OfgQTHvP/ABJF5Tgn92M/h/SsjRNIufEv7PUOnQRpJcywOYkB2hmScsoyT32gZz3pfh58R9CHhuDTNcng0vUdPX7O6XI8sMoOBgnuAACDzkGup0Pxz4b1rxAdH0RjcSiJ5nmhi2xLgqCCTgknI6AjjrXX0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//9X3+iiiiiiiiiiiiiiiiiiiiiiud0fwjpuja/qetwG4kvtRbMzyuCFGc4UADjp1yeBXRVhaT4V0zRda1DVLFZo5tQbdPH5pMec5yF6A5J/M09PC+kR+J5PEa27DVZIfJabzWxt4H3c7ew7dqydc+GnhTxFqU+palpjS3s6hXmFzKvRdoIUNt4AHbtWXonwb8J6JqK3wiub2WMho1vJFZEI6HaqgH/gWfXrzXcX9ha6pYT2N7Cs1rOhjljboyn/PWuKsfg34OsbyO5+xzXHltuEVxJvQn3GPmHscium0Hwvo3hlLmPRrFbSO6l82VVdmBbpwGJwPYYA9Kk0Dw3pXhbTjYaPam3tS5k8syvJ8xxk5Yk9hRF4d0qHxDPr8dmq6pPCIZJ97ZZBjAxnHYc4zwKdrPh7SvEEUEWqWaXSQSeZGrEja3TPBFS6to2na5YtZ6nZxXdsxDeXKuRkdCPQ+9Jqej6drOlvpuoWqXFm+3dC+cHaQR78ECrkMEdtBHBCgSKNQiIOiqBgCqWnaHpmk3F5cWFjDbzXknmXDxrgytknJP/Aj+ZqprXhLQvETRyappsU00eNsylo5APTepDY56ZxVTQ/AHhbw7dC70vR4YblT8szM0rpkYO0uSV4JHGODWza6Rp1leXN3a2FtDc3Tbp5o4gryn/aYcn8aW40vT7y9try5sLWe6tifs80sSs8RPXaxGV6dqffWFpqdo9pfW0NzbSY3wzxh0bByMqeDyAfwpG0+yew/s9rOA2Pl+T9mMY8vZjG3bjG3HGOlOsrK1061S1sreK3t0zshgjCIuTk4A4HJJ/GszUfCHh3WLr7VqWiWVzccZlkhBZsDAyep4A61Y0vw9ouil20vSbKyZ1Cu1vbqjMB2JAyfxrVoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//1vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKYzLGhd2CqoySTgAVjeH/FWi+KIppdFvRdpAwWRhG6hSRkD5gOcf55rcooooooooooo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losUly3LyxyPEXPq2xhuPA5OTTtA+H/hfw3eC90vSo47tQQs0jtK6ZznaXJ2nDEEjBI4NamieHNL8PR3Mel2n2dbmYzzDzGfc56n5icfQcU6TQNLl16PW3tFOpRR+Ulxk5VeeMZx/Ee3en6xouna9ZCz1S0jurYOH8t843DoePqaXU9I0/WdMfTNQtY7izfbuhfodpBH5ECrVvbw2ttFbQRiOGJAkaL0VQMAD8K5u8+HPhDULlri40G081iSxjBjDE9SQpAJ961NH8PaR4ftVttK06C1jChSY1+ZgP7zHlup6k1rVkax4d0jXzD/AGrpttd+RkxmaMEpnrg9QDgZHfA9Kg0zwh4c0W7+1abotnb3ONolSIb1HTAPUD6Uaz4Q8P6/MJ9U0q3uJwuzzSCr7euCy4JHtVzStF03Q7U2ulWEFnCW3MsKBdzYxk+p4HJqSTTLGa+hv5bK3e8gBEVw0SmSMEEEK2Mjgkcepq4QCCCMg9Qar2NhZ6bara2NpDbW6fdigjCIPoBxTpbW3mkSSWCORozlGdASvToT06D8qwfGfiK+8MaOl9YaJPq7mXY8MJYFFwTvJVWwAQO3evOdY+Jms+J9Mm0fQPBuoLfXsXlSSyLkRB8A/wAOMEcbmKgde1eleCfDp8K+EbHR3kWWWBWMsijAZ2Ys2OBwCcD2ArWutMsb4g3llb3BAKjzolfAPUcjpUlta29nF5VtbxQJnOyJAoz64FLcW1vdx+XcQRTJ12yIGH5GktbO2sovKtbeKCPOdsSBRn6CrFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf//T9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//U9/oooooooooooooooooooooorjLPxu0nxFu/CN5pxgkjj823uklL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vklEciTRnvhsZH4GqjeCvCjHLeGNFJ97CL/4muC+M7QRap4QmnYKsd47Et93bmMnP5fzrtZ/iB4Tt7eSZvEOnssYyyxTCR8eyLlj68DpXnth53xV+IdtrcMRi8OaM22N3OGmcHdxjoSQpIJ4UDIy1ekXfjLQdP10aLfahHaXhQOouAURgfRz8pPI4zXB/FfxdoOreDJdJ0nU7XU7+4mjMcVjIJ2G1gxPyZ9MevNeheFLCfSvCelWF1IZJ4LZEdiu3kDpj26fhXDeNL43Pxb8F6ZayI1xBJJLKm1SVRgCeeo+WM9MZ969Toooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/9f3+iiiiiiiiiiiiiiiiiiiiiiivMdK+EdtpXxCbxJHfj7Ks0k8dksRBDMOAX3HIBJIGB0FenVx/grwSfB8+ryC9iulv5hKu218powCx2ltxLj5uM4xz61l638Nru78WT+IdC8S3GjXVyAJ1SHzFYgAcAMowcAkMG554qpqvwqur+KyuoPFF9Fr1qrB9QwQZiSTkhWBUgNtzk/KAMYxVS5+Dl3rFlJ/bviu/vb4keRK+50gXOSApb5ieeeAM9DXT+IPAcWt3nh25F+9u2ikbcR7jKMp78fc9D1rc8S6FB4k8PXmkTyNFFcqAXUAlcMGBAPHUCpdE0qLQtFtNLgd5IrWIRq7gAtjucADNZPhTwbb+E5tSkt724uWv5RK/nKg2kbum0D+939Kk8P+ELLw5q2r6hayytJqcolkR1QKhyx4wAerHqT2p2leEbLR/Eeq65bz3LXGpYM0buDGpBzlQBn9aPFXhKw8X6fFZX9xdRJFKJVa2kCNnBGDkHgg/X0Iq/rWiaf4g0yTT9Tt0mtpOdrDlSOjA9iK4KP4K6bBEbeHxHr8drgr5CzoFwexATB79u9dn4X8M2HhHRItJ00zNAjFy0z7ndj1JwAPToAK2ZI1lieNxlXBUj2Neaf8KN8MeTHD9s1bbG4kH76Prxz/AKvHbr1roPD/AMOfDPhu9e8sLD/SWkLh5XLbMk42r91cZIBAzjvXX0V5N42t5/BXji28cWsDvYzp5GpiNRnsqnqOWGACf4lHqBXol/YaZ4m0U2twVu9Pudj7oZiA+1gykOhB6qDkHtXLr8HPA4J3aQ7qTna11Lwfruz+tdNovh3SPDtsbbSLCC0RuWMa/M+M4LMeWxnuTUXiHwnonilLddasvtQtyzRfvXTaTjPKkeg/KsWH4T+CIJHddDVmdSrGW5mkzn/ec88detbvh/w1pHhazktNGsxawSSeY6+Yz5bAGcsSegHFbNY2u+GNH8SxRRaxZC6jhYsimRlAJx/dIz0HWsiL4YeC4bjz18P2zPndiRndc/7rEjt6V1Fra29jax21pBFbwRDbHFEgVUHoAOBWF4h8DeHPFE6T6vpUc8yDaJldo3x2BZCCQMng8VJpngzw9pGqNqdlpsaXzIEM7uztgDGRuJwSOrDk9yav63rFloGj3Oq6hMIrW2Qu7EgfQDPUk4AHckVw3w70/wDtzVLzx9eQotxqQ22wIYGOMALjkYP3QAw6j16n0uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv//Q9/ooooooooooooooooooooooooooooooooooooooooooooqvc21ve20ltdQRz28qlZIpVDK4PUEHgimWFhaaZZpZ2NrBa20edkMEYjRcnJwo4GSSfxq3RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX/9H3+iiiiiiiiiiiiiiiiiiiiiisTVPFOkaNqthpl9dNFeX7BLaMQyNvJIHVVIHJ7kVt1gw+LtHm8VzeGo7lzqkKb3j8ptoGA33sY6MO9b1VNRvYtN026v5VdoraF5nCDLEKCTgevFZXhPxbYeM9FOqadFcRQiVoilwqhwwx/dYjv610FFcZ8RfE0/hzw+kWmH/idajKtrYRjaWMjHqA3BxnvxkjNbfh6z1Kx0O3h1i/a+1HG6eYqqjcedqhQBgdBx2rYoorlvF3i/8A4RN9NH9mTXgvZfKLRNjy+VGTwSfvfpXU0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//0vf6KKKKKKKKKKKKKKKKKKKKKK8d+KBK/E3wU5ZhiZcccf61fY89P89PYq8f01in7SWrIWbLWg44x/qozx3/AMn2rX8WfFJPCHjWDSL6yB0024mmul3F0yGwAoGDkqB261P4c8c634hi1a4vPCtzpdlbWpmtzco5+0HBIGSqgggdBnr16Z0Phr4iPiTwdHqMlpa2TebIjRWw2oMHrjtXLN8S/EnibVbq18BaHDe2lpxLd3ZwG6/d+dRz2yST1xitbRPHGvWa6gPG+gf2SllbfaTdwndFIN20KMFgW5HAY9egrMh8X/EbxPbHUfDPh6xg0uX/AI93vpAZHA4JxuHcHtj0J61f0X4kXOo+HNc+22UVl4i0e3kkmt5M+USucEZOcZAyM9xzyK5nSfiB8S/F+lo+gaFZZhLC4uyNqSNnhUDvgEDry3P93obOh/FHxVqltPocfh8XPimKTblSEhVAfmaTLDaR04OCSPobGi+NvGWieOLHw/4ys4TFqPy28sIUsGJ4OU4IzwQQCOD069D8R/F+o+E/7E/s82uby78qQTxlyUGM7cEY6+/atbxr4q/4RTRRcxWcl5fTyCG1tkz87nuSOgAyT/k1xklt8ZYFfVW1DSGRV806YiKTjHKD5Bk/9tPxPSuy8C+Kk8YeGodS2CO4VjFPGBgBx1IGT8pyCMmuooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/9P3+iiiiiiiiiiiiiiiiiiiiiivHviyhi8f+Brg7WT7Q3ynp8rxkk/gRXsNePWI3ftJagwbdi1xxKfl/cpxjv8AhwM+tReI1V/2jPD6nB/cKcNg4IWQ5Hp/P9K9X1lS+h6go6m2kA/75NeXeB5J7L4D6lKhzIkd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00yWxfSzdJKQWknlbzBg5G1lwV/4DjPQ5FdHf+GdH1PQU0O8sI5NNRUVIMlQoX7uCCCCMdQamv8AQ9N1PR/7Iu7RH0/ai+RkqMKQVxggjBA/KrdrawWNpDaWsSxQQoEjjUYCqBgAVU0/QdK0m6urnT7CC2nvG33Eka4MhyTk/ix/M1U1vwh4f8Qyebq2k211KE2eay4fb6bhg4/H1qvo/gLwtoVx9o07RLaOcHKyvmVkP+yXJK/hiumrnvGHha08X6BJpl0zRksskUqfejYHPH1GQfYmszwB4judU0gabq6fZ9asS0M0UjjfIqHb5gHXHTJxjJ9CK625tbe8t3t7qCKeGQYeOVAysPcHg0W1rb2VtHb2sEUEEY2pFEgVVHoAOBSXdpbX1rJa3dvFcQSjbJFMgdHHoQeDWMPAvhIAD/hGNGOPWxiP/stbVvbQWlukFtDHDDGNqRxqFVR6ADgVHaadZaejLZWkFsrnLCGJUBPqcCrDKsiFHUMrDBBGQRUdvbw20SxQRJFGucJGoUDJyeB71PVe7tLa/tZLa7t4riCQbXimQOrD0IPBplpp1lY2iWlpZ29tbJ92GGJURfooGBVogHrS1DHbQQuzxQRozdWVQCampjosiMjqGVhgqwyCKZDBFbx+XFEkaddqKFH5CpqKKKKKKKKKKKKKK891rwRqXinx3aX+tTWx8PWKkwWSSszSvxy42ADJxn5m4UDua9Cooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/0vf6KKKKKKKKKKKKKKKKKKKKKKKKKKKyfEWkf2/oN3pJu5rRbpPLaaHG4LkZAyMcjIPsTUfhjw7a+FfD9to9mzvDbg4kkxuckliTgDua2qKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKwZvB3hi5kMlx4c0iVznLPZRseTk9V9ST+Na1nZ21haR2tnbxW0EYwkMMYRFHoAOBViiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/T9/oooooooooooooooooooooorI1/xJpPhawW+1m7+y2zSCJZPLd8sckDCgnsak0XXNN8RaXHqWlXIubSQsFkCleQcEEMARyO4qK98S6TYa7Z6Jc3RTUrxS8EIidtwGedwG0dD1IqDxF4v0Twp5Da1ePbpPu8srbySA7cZzsU4+8OvXt0NYB+M/gMED+23IxnIsp//iK6HSfF2ia3pE+q2d6o0+BzHJcTq0KqQAc5cDjkc1zsnxk8ERyyxjU5X8o4ZktZSvXGQdvT379s11GheItI8TWH27R71bq3DbCwVlKt6FWAI69xWvRRRXnmp/GHw3pWr3OmXEOpGa1d0maO3DKm04JJ3dO+fatPw/8AErwt4lvEsrDUdt9JnbbzRsjNjPQkbWOBnAJOKs6x4rfS/GGjaCmn+eNRDM0/nbfJA77dpz+Yrp6KKKKKKKK57UvF+naV4m07QJ1na91DmIKo2gc8kkj+70GTz0qz4l8Q2vhbQLnWL2KeS3t9u5YFDOdzBRjJA6kdSKvWF5FqOn297CHEVxGsiB12tgjIyOxq1RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//1Pf6KKKKKKKKKKKKKKKKKKKKKK8o+PaE+DLJijsi3y7ivQfI3Jqn8Po7n4f+N77wdqEzNYX5Fxpkrj77bckexIGCD3TjqM3PGTyj41+DsyMsJRgFLfKTluwPXp+lZ/xwtlm1rwiZYVMBnkjeRo8qMtFwx9CM8exr0Y+CfCAO0+F9DBxnH2CLp/3zXmvxos9P0nSdC0y1s4bDSbi8kkuEs4RGN4CgNhRgnBbqOce1eiaN4Y8IHQY4NM0vS7nTpFHzCFJRLjuxIO4/Wrug+GtJ8NJdRaRaC1iuZfOeNWJUNgD5QTwOOg4raoooryj4eW6SfEPx08pSQm6AVGGSBvck9Mdx0z/jS+Mnh6ygXT9Z0u3ittdkudokhYRvNhS2ewLDA5PPbngVc8as5+KXgRvP+ds7sfKT8ynnHY+ntXWeMdR8U2S2EPhbS4L2e4lZJZLgnZAoHDH5h79+2MEkCuU1TxX8R/C9p/ams6Ro9zZREedFZb1wp4z5jOdpzj+EjB7V03iD4haXofg618RjNxFeBPs0asFLlhnknoAM5+lc9a6z8WJreK/Oh6OyHlrU7o3K+oJkJB9iPwz03/B/inUfEHhO91G7itftttJKii2V/KfaoZcZJJ64OD1BFS/DzxLfeKvCqanqC2y3JmkjYWyMiDacdGJIP1qC+8Vaha/E/TPDkccTWVzAZJX8lt6ELIfvZxglV7cc8nPFbxX4y1S38QQ+FvC1jFd61KgklknJ8q2TrlhxnIz39OpOKxrzWPiL4NY6x4gm0rUtGMyLPFao4khVmCgphB3I+8Wz0yMg1y3jP+39R+Jmg6hbahpzi9aNtGkiGVWLOQZMg85OeM9ePStL4gWXxCi8H3smu6no02kKY/tEVuGEjAyJtGdg6NjkEcZ47VseDbf4gx2OjX1zrWktoCQo7xAESGHHcmLqB6HnHXvS2OseMvH1/NfeH74aJ4ejbZBPLAjyXBHVtrIevTgrj/aOQJdA8TeKPD3iy18NeMpYLw3sZktr6BRgEA/KSFXd0A+6Dk988UdM1nxj8Rr25utD1yDR9Kt5TH5YtiZRz8pbevzHAyQGUcgdQTXZeDrbxhZfbbfxXe2d8Bsa2uYAAWyW3KwCrjGFxx36nt1lFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFNydwGOMdfSnUUUUUUUUUUUUV//1ff6KKKKKKKKKKKKKKKKKKKKKK8u+O0csvgSFIomc/bUJYfwgKxzVz4k+GJtY8L22raamNb0gLcW0iZ3FRgso4yemQMdRjua5R/FyeKPHPgLVLV1SWZHjuIRIVMb7sMuPwPXqMH6WfjzBDPJ4ZWZflaaZCQDuAPl5xwfT+VarfAXwiybRNqS/NnKyx5PHTOzp7V11v4I0GDwsPDn2ISaaCTsc/NuJzuyMYOe4rgLr4IHTne78L+I76yvAcqJXKhh3UvFtYDB6gGtj4Y+K9e1a91XQPEqF9R01ubjYF3/ADEFTtAXjjBHUHn39LrzjWND+Jlxql7JpfiexhsZJiYIJEUMkR7bvJJB6+vbmuv8O2+r2mjRW+t3sd7fo7h7hFCh13HbwFAB244x+J6nYrwmx0vxTf8AxM8Ux+G9dg0547gyTB03BwWO0EbT7/Suns/hfe6prlvrHjPXG1aW1x5NvEmyLg5y3sTg7VCjgZJHFQ/ES5a3+JfgfCKR57c7QGGXQYDehz0rS+IXjDVdLvtO8OeHUjOtagQVlkwViXOBweMkg9eAAetct4t8JeM08G6jqWu+NHmMKea9pBB+7fBXAyNg6gH7nBrG1yUDQfhi9zDKkO8hweFGJI+oI7jnk9M9eo+gJseRJld42nK+vHSvLfg/tk+HOpW9uvnbZpVU4IEhMa8YzkenatH4OaimoeDpmEPkyJdNvQtkklVO4+5+g+lVNcm+z/HjQMIoElmUZjzyRLjHoeMfT1rn7qxvdW+M+uadp+uHQ78hXFxHbl3nTyozszvweMHoOF9jW3qfwt8U61aG11H4hXE8DFWeNrH5SQcjgSDuAayvFOnPo/jr4d6U87zi2EcfmqNnmFXAJxk4/PjPeu0+LaGT4YayArNhYm+XsBKhJ+gxmp/DWbr4U2AiUbn0kKoVgefLwOVrzX4beENT17w2Lyx8XanpEMczxfYrVm2IQAc434yScmuytPhaYtc0/Vb/AMTapqcli4aNbxvMyM5IJJ6E49h78YyLn4T6/oWrz3/gbxENPSSTeLObcsa+xwGVhycArxW34C8U6/daxeeGvE1vIdUtI/Na58tUV1zjjGAw5GCAO+RXolFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFJkD8aWiiiiiiiiiiv/1vf6KKKKKKKKKKKKKKKKKKKKKK88+MejahrnggWemWU15cC6R/LhAJAAbnGR6iu7tYzFaQo5JZUUMT1yBXiv/CtdT0P4xWWoaNppOhfaFn8yMoBACDuXBOcA5xgdCBzXRfFzw3rfiE6Cuj6ab0QXDtNmRFVAdmM7iOOD09PevUK4rx5b+M9+nX/hCWEvbCX7TazOMTg7Co2kYONrc7lIzweTXJx/EX4iuktqfAM4vuEjkMMoh3+pJ42++7Hv3rf+Gvg7VPD6ajq2vTq+sas4lnRAp8rknBYdSSxzjgdvU+hUUUVwXhjw1q+k/ELxLqd2kX9n3u1rWRHBPLEsCMA56dfbBNd7XEeLPDGo6z4x8L6pai2NtpszPceY2HwSpG0YOfunuOcdao/ETwfrGqalpviHw1JEuradkbJCB5i5BGM8ZHPUgYNYGoaF8VPGum3dpqs+n6LauhU2iBSLg8EAspcheuTu/wCAnNbVz8NrnUvhfp3h65uYYdVsB5kM8e4xq+SdvY4IOM44PODjBow6D8V57ZdK1DXtNjs2UpLewgtMqj+7hVJJ/Dvk+s3wKG3wXdKSuRet8qgDb8i/j78+tZK+CPH/AIR1S9t/B19anSruYSq02zfH/stvBJx0yMkjng1o6N8N/Elv480zxNrOvQ6hLGrtdgl1KuVYBIwBjYMg/wAPT7vNbPjX4dDxFqdtrmlag+l67bcLcJnEgHQNg5BHPI6gkEEYxjjwz8Wb1hb33jPT7e2dcSSW0QMg91xEh9OjD/HX8afD6bxNomkx2uo+VrOkhfs93Juw5wu7dgnBJVTnkjHvRofhjxbd6Zq+n+Ndct7+C8hWKAWqhTEfmy2Qic/dx16Vi+HfAvj7w/fW9oviyCXQ4LhWMfzeY8YYFhhlO3PPAfH61Nf/AAs1HTdXutR8GeJJdFW5x5lkI8w59scADsCpIycHnFT6b8PfE15qFteeLPF0t6LZt8drbRhY9wBAJJAB6/3c+9Z9v8P/AIgaDElhoHjWM2BAB+0od0YHACKwkwMf3So46V0ngjwA/hW6vdSv9Um1TVr0AS3EnAUA5wMkk54yT/dGAK7iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiimMFYqWAJU5Gex6f1p9FFFFFFFFFFf//X9/ooooooooooooooooooooooooooooooooooooooooormvB3hG18HabPY2tzPPHLMZczMSVyAMfp1710tFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf//Q9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorkLTSNP1u91E3T/AGtUuSByV2EMcrx1wQPyBzTjbP4X1GyS2lkewvLgxyRP8xRiCQQcjjPXI6Dr66eteJbDQzGlz58s0h+SC3jMkh98Dt1/I+lLo3iG11kvHHFc21xGAXt7qPZIoPTIyaL/AMSabps5gllJkRQ0gXGIwem4kgD6dfanT6/p8WiNqSXUbQEbUYcgv6YHvUXhvU5dT0wSzMxnDvvJiKDG9tuMgZGMf5OaE8V6DJeG0TVLZphJ5ZAbIDYzjd0/Xrx1rUur23skRriVY1dxGpbux6Cku721sIRNd3MVvGWCh5XCjJ6DJps19aQXMNtNdQxTzZ8qJ5ArSY67QeTj2qS3uYLuIS288c0Z4DxuGH5isPxFq+o6fe6da6dBDJJduylps4GMYxz7mobjWPEFgGnudISe1XG4wsFcDJyfvEYA5zn8q2X1a0TSf7T80NbFA4Yc5z0A988VlR+IdRuLKK7tNBnmhfJP75VOM8ED+LPXitDRdat9atmkhDJLGQs0Tggo2OnuPf2pND1ddbtp5lt3h8mdoSrHOSAMn9cfhWm7rHGzscKoJP0qCwvYdRsYby33eTMu5Ny4OPp2q1Wdqms2ekRxyXjuiSNtBVC3PvjpVSPxboLbQdUgQNjDSEqpyMj5jx0960r3ULTTkje7nSFZHEaFu7HoKtVE0sayLGXUO2Sqk8nHXApPtEP2jyPOTzsbvL3Ddj1x1xSrNG8jxrIjOmNyhgSuemR2qWiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv//R9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorl9Ju7DTdQv7ae4SO5mm8wptwOScYIAouNTh1zVdPg06VnjhlMs0oiOAADgAsMc+vuMdapW8sVl8S9SF6Y42ubaMWrucFwByM9sHOPxoknt7z4nWYtNsrwWbieSPouc8Ejr1XjPGas+FpppNa19LqONZ4rkKGQAMyEsVzyfX1/rV6I6U2h6lHpIgWFfNEvkINu/HzegNZV3dSr8MZ7iNvLk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Vyo8NSXXhs3l9qd+uotAztKkx+UYJ2EA8jHBGcE+nAEWnX11pHwvglhXy7pt0cRBB2lpG+b0zjnHIzUUt2mmQ217p/iG/vbpdrSW12zskqnAbjb8rY5x+lehK25Q2CMjODXB6vfXt94jvrGXWLnRoLYKYZUhJR/lyxZuAB9fwORU3w1N6PD1wlw8UqLcN5cwclpM9dwxj05BOf56qw+II40ubvVLZfmDSwRW+Qq/xAMeT27e3vTvEt9qVnpEDWLRRXUsiozMAVX5ST147d6oaxrOv6Js1C8i086fu+eKIOZF+XOCxOOo6gfhVXxY+pf8JHo8aRwtbtMrW2VJxICpJf09Bj/61bmoaxeae+n2gsjdX93ncIjtjTaBuOTzjn/EjiobDWVs9Vg0S9s0s5pkL23ltuWTqWHseM9Tn+fSV59oEegTz30t88SXUsryYknIYx8/McBRjk9M44yc5rorWz0vT9MvrrSdgBiO6QTeYCVDEZLEjgsev8gKyLBPs3w1ZY4UgYhxsjXaATKRzlvzOa6nSix0iyLqysYELBuoO0ZzWP4zkC6Kg8mWVnnUJ5abtjYOGIyOh/XFSa59ua9022tLp4RKXWQ+o29eMcj6/wCIT+w9UQnyNenCZ+7LH5mF9juzn39+lReJZtTW402007UGs2ndklmEKycfKoOCDjluO2etQ6vF4o0+0uL211eG4SKMOYXtVU/LyxBz3Hb8qW+8RTnwRFrETLbzS7OvzAfNg44OcgHsetaeoalcWum20lrEZp5woViMKCRnLcgDJwOo61SudS1/SbH7Xfw2txGpzIlsrblHpkn9cV0aOJI1dc7WAIyKfRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//R9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooork9e16c6gug6JiTUZv8AWyZ4t16kn3x+XHsK2dG0e30axWCIbpDzLKfvO3ck1p0UUUUUUUUUUVyniu1e1ntPEFqP31kwWVQPvxk4xn8fyJroY3ttTsEkAElvMmRnuKpW3h7SrN42t7QKYzuXLMwB7HBPJGePSrOo6bb6pbCC5VsBgyspwysOhBqK30a2hvftjtLPcAYS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M27vn/d7dzzV++u0srKa6kGVjXOB1J7D86qaDqkmr6b9rkgSEl2Xakm8cHHXA57fhWrRRVOzuzeLI4t5okDlVMoALgfxAZyBnI5weOlXKrXt5DY2/nzkhN6pwMnLMFH6kVZooqnZ30F9E0lvIZEV2jJKFfmUlSMEDuDz0ParlYmluyXepPcSBQ115aF5M/QDP1GBW3RRRRRRRRRRRRRRRTERUGEUKPQDFPoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//X9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooornPE+uyaZBHZ2Kebqd2StvGBnHqx/p7/Q1P4a0FNB0zyN5luJWMk8zcl3Pv7VuUUUUUUUUUhOBk1j3NnJrJCTsU07+KDHzXA/2jnhfbv3qn4g0q21C/0eO7jY2aSvuVQAoOzKhj2XgjjrkCm6zpumafbwXFnbW9rdpMhg+zxKrOSwBG0Y3cE/TrXT0Vk+HIVg0CzRV2gpv246ZOcfhnH4U7w+Q2i27BEUNubCdOWJ/rWFcCS78MwW8cJkF3fussbsyhl852ZWPUA7cH2PcVJcW+ptEy2/h20triP5re4iuEJRumcbV7duh6Uvj+Fm8PLdxkrJazJICDggE7f5kVFEZtWuta2ssbPZ2rowySG2s3btnFbFxKupyaZAuDFKPtUi9cooGB/30y/lVfTp1HhmedrhLJPMnPntt2xjzGAbkkYxjr+I7VjaheaONPmvNPm1cTj547iMXJTdxyd3yYPcHg/WtjWbd7vX9Lt1vru3Qxzs6W82zeML1x9eD256VW1m7i0tbTT5dTurOzETyS3WTJK4BGEDEMcnJJPXA49RV0zVrOHWLOz0/W7jVEuXZJI7gl2i2qW3K4UY9CD1z1GDnXe11LUr6aQapPYWsTGOKK2jiLOR1dmdW79FAHTJzninrY1O18NTxTTx3Nws8K28zIMy/vEI3oF2g5yOOCBnjtJex69poN+dVju0Rl32n2VUVgeCFbOQckHknpWpfpqcksUNhJDAhy0lxInmFcEYVVyMk88np71VsLrUV1iSyvr2wul8oyL9miMTRkEAhlMjccik8Kln0dpWMmZLmdv3gwf9Yw/L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ooooooooooooooooooooooooooooooooooooooooooooooooooooqhq2pwaPpk17cH5Ixwo6sx4AH1NYvhbSJ4vM1nVcSapd/NkjmJOyj04x+grqaKKKKKKKKKKKKKKKKKKKKKK46xcQ/E3VI+B51shHHUhV/wADW9rcTy6cwVS6rJG8iDPzIHBYce2eO9ZV7qug32kFIvInkliPkW4XbKSRxhSAy89yBilvUh+16cmsXGLf7Oflf5VMoxks30zjoOD6iqSWulW3jDTG0aRFkdZBdJBIChj2HaW685A7j+VTahrc+q30mmaPeW0EUbbLi8aUAg91QdzjIyOh+lb2lWdtY2EcFq5eJcneZC5Yk5JLEkn8az7GNr7xRfXsm1obMC1txzlXIDSHHTuoyPQ1JqxdNe0J9yrCJZQ5YgcmMhR+Zo8SSZs7a0RlM1zdwoik9QHDt054VSfwrcrk72/j0m61m3ilUXd0Y5LaEsMs7rsyB1PK5q5q8NtpOkWlyFKxaXIjgrnIT7jfX5WOaXTJ11LXdQvY1R4YVS2gnVgQ/wDE+MehIHX+tZvw/keTTtQYyiQG+lIPPHPTJA/rWoGRvG20MS6WHI4wMyfnnj/PNbtc/pBD+IvEBD7v30Klck7cRD34/CqfihrlNb8PGySJ7vzZvLSUnaf3fOf+A579cdasR33ipW/e6PaOuf4LnBx+PX9Pxp/iSBLq60e3kAMcl2Q4ZAwI2Nxz0/Dn8M1X0WefR9Ql0G9lZowTJYTSvkyR9ShPAyvOAOw7AVmRzxD4WPM0SvG2/wCXG0NmcgHH45FacnifVgUMfhe9dCMk+YAfbjFO8K3Ul9eazdzW/wBmke5RWiI+ZCsajDHuf8aoaFPpmn+E7Oa7tGZcuQzwh8AszD5toGMHH6c9a39HudPvY5ZrG1MO1tjkweWScZ64569qyvDIW28PanKsQAa7updqHhvmPI69ai8GLJpMMGkyurJNardwkEk5P+sXJ9CV/Oma6l3d65bzQTSJBZ3MEAWNWYSM7qz5I6YCrz7nPWu0oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//U9/oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo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pplunOdzLvb82ya1gAAABgDoBTqKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//T9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorz6RPI+MsLCd4RPaEtGo4m+TAznpjb27gV6DRRRRRRRRRRRRRRRRRRRRRRRRRRXGeGIwfGPiSXcciULjOeMn8uldnRRRRRRRRRRRRVG5cLqdiO7eYB+Wf6Veooooooooooooqne6nY6eAbu8gt8jI8yQKT9Aetc5e/Ebw7ZoxS6kuXU42QxnJP1bAP4Vnnx3rV9F/xK/C167N9ySRGKfjwo/Wl8z4h6oiqkNnpeRyzspz+W85/KpI/AupX0YGueJb2cEfNDbkqufq2c/kKuWfw38NWkgle0lupBj5riZmH/AHyML+ldLa2VrZIUtbWG3U8lYowgP5VZooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor/9T3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiim4BIOOR0p1FFFFFFFFFFFFFFFFFFFFFFFFFFFcV49026SO08RaccXmmNuZQm7fGSM8e3P4E10+l6lbavp0N7auGilXI9Qe4PuKvUUUUUUUUUUUUUUUUUUUUUUUUUVxHgHM1zrd4f+WlwBu9cFif5129FFFFFFFFFFFFZl7uGrabgKQWkBznI+Q9O351p0UUUUUUUVi3nirQ7IHz9Tt8g4IjbzCPqFzj8axJfiPp8haPTLG8v7gHiNE+8PUYyf0qs+u+N9VV107QBYRk4825YBx9A2P/QTUo8MeKtTU/2t4l8nOB5dmhwR3BPyj9DVm0+HGgwZa6W4vXJzmeYgA/RcD881v2ei6Vp7KbTTrWBl6OkShvz61o0UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUV//9X3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiionjSaNo5EV0YFWVhkEHqCK8+aO4+HusPPGks/h66dQVB3G2bH+cHuODzg139rdQXtrHc20qywyDcjqcgip6KKKKKKKKKKKKKKKKKKKKKKKgu5xa2c9w2MRRs5z7DNcv8OoTF4WEh25lmdsqMdOOR+FdfRRRRRRRRRRRRWTfbjrmmADgCZmOOgAH+IrWoooqhe6xpunki7voIWAzsZxu/LrWLdfEDw/bD5Lpp2/uxrg/+PYrOfxj4iv8AKaR4UusnBSS7yisO/XaP/HqV7Lx9qqqZr6w0tD95IgWZfyz/AOhU0fDs3jhtY1+/vCv3QnyfnuLE/hite08C+G7RsrpcUp9ZyZf0YkfpXQRRRwxrHEioijCqowAPYVJRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX/9b3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiioZ4IrqB4J41kikUq6MMhh6GuDfStX8DzPcaKkl9pDHc9o7Fnj9cd/x59+gNdDpXjHRNXKpBdrFMxwIpvlOemAeh+gNdDRRRRRRRRRRRRRRRRRRRRRRWJ4uuHtfCuoyRAlzFsAH+0Qv9aTwnamw8JafFKuxhFvcEYxuJY/zpNG8TWeuX93bWiuyW+MTEYV+xxW7RRRRRRRRRRRVK5ubW0mWS5u4IRtwoldV+pyefSsm78caBaozC/WUgZ2xKTn8cY/Wso/ET7W4XSdCvr8dyg6D32hh+tD3fjzUji1sLPTYzyHnYFvyG7+VNXwXrGpDOueJbllY/PBakhPbBPH/jtaFr8PfD1uyvLayXcinIa5lZh/3yML+lb1ppljp4IsrG2tgevkxKmfyFXKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK//9f3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisTVvC+k60Ga7tV85v+WyfK/TAye+PfNc8NJ8W+HDjSruPU7EdIJuHUe2SB+TDr0qeL4gW9tKIdb0660yVvu+YhIbHU8gfpn61vWniXRb9AbfU7dsnADPtJ/A4NaqsGUMpBB6EU6iiiiiiiiiiiiiiiiiiuO+I07J4eigRQzT3CrtJwDjJ6/XFUPF2rzTCDw5pkhLsgN3JGC22MDOAR6gHPtx3ro/DekwaZYoYovLLLhVxjC5J/M9TW7RRRRRWbc65pVpu8/UbVCvDL5oLD8BzWPdfEPw3ajd9vMpzjbHG2f1wKzm+KOlyP5dlp+oXUmcbUjHXt0JpjeLvFd1LssfCc8ecY+0ow/MnaKU2/wARL0lhcWNipIyjsDge21T/ADpq+CfEV0uy/wDF1wYj9+ONGO71HLY/Sr0fw50UzGW7lvrwkHImnxn3+QKf1rbsfDei6ftNtpdqjr0cxhn/AO+jk/rWoAAAAAAOgFOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooor//Q9/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooqOWKOaMxyoro3VWGQfwrnb/wAB+Hb8l/sC20h432rGL9Bx+lZqeALmylmbS/EV7arJjgpuP4kFc0yXSfHdnGVstZtbhV5Bl++/t8ysB+dP/tbx3bwnzNBtpivJZZVJP4Bgf0pX8b6rFGzSeFNQXyx87FXC/h8hpqfEmzRgLvTL6DsfkB5+pI96uW/xH8NzoGe7eAH/AJ6xnj8s1oW/jHw/ckCPVIBkZBkygP4sBVwa7o7LuGq2JHr9oT/GpoNSsbniC9t5TnH7uVW59ODVoEEAg5B6EUtFFFFFFFISAMk4FQS3lrBxNcwxn/bcD+dea/ErxBZNPpMFveW0wVnkZUYPzxt6dO9P8PvoVgrre6pbm7mAmvJYpg3OSRHuXr/tEfTNdXJ468ORg/8AEyRiP4Vjcn+VUn+JfhuIE/aJWA7iPGfzxVY/EyyuEB0zStQvH7jZgAeuV3elNXxh4mup/LtPCNzGDwpn3KPqSQoApwl+Id84Q22naeBn95uBB4+r/wAqjfwx40vuLvxSlspySbVWyD+G2nj4dSXWwav4hv75VySuAoJPf5i2Pwq/a/Dnw3bgb7SW4Yd5rhz+gIH6Vr2/hzRbRlNvo9jGVO5WW3QEH1zjOa1aKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK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ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooori/GWrXE80PhvS2DX15xIQf8AVp15x04yfoPeuY8f6do3h7SvClnqDN/ZUV/i7d0LLIpUl9+3nn056YpbXUfgtNeR28NvorzyOEQNYMQzE8DJTB5rVi8f+IdUa7TRfBst4bWeSOSY30axMoJC7GbG5jjlcfLkZ6jPX+HNbh8RaDaarBG0STqcxv1RlYqw/AgiqPiHxQdFv9N02106bUNR1Bn8m3idUwqLkszHgDpUfh3xHqmpald6brOgS6VeQRrMuJxPDIjHA2yAD5gQQRisdvHPiO8tp9S0Twc15pcfmbJpr9YHmCn7yoVJwcHHrxV298dhfDGkarpulyXdxqzIlraSTLF8zdQznIGOemc1d0TXdautSew1rw7Jp7iLzEnhm8+B+cbd4UbW9jiuikljhiaWRgiIpZmJwAB1NeZa74r8Ra14U1Cex8MK+i3UDxxXq6gvmMjfKJBHt6d8Z6c+1amj6DcamfBOvJdZWysmE4YgGQPEAOAvJz15H41t+FfEjeIvDzapLbC32yzJsDE8IxAOSB1AB/Gudn+Jb2vgnSNdbSmuLrUpTClpA5J37iMDgknA6YqzN4x1zRvC81/r3h0Q6m12Laysba6WT7SzYC4YZ285684HTtWfeeOvFei6tpNnrfhq0to9RukhS5hvDKoyRlcBc7ueO3XrWvrPjDVU8QzaF4b0IapeW0ayXcs1wIIoNwyoyR82Rnp04684q/8ACwJX8J67eNZR2+taQfKubJpdyJIWwh3YGVPX8xVK98e+JtMs7bXL3wzbxeH5Xj3SG8zNHGx4kZQuBwQdvOOme9beu+J9YXxHD4f8N6Zb3l6YftFzPdzGOG3jJwucAlieenTjg84l0nxVd/YdUbxDpkmnXWlDfcGNWeCRCu4NE5ADccEdQawLjxp4ws7GTxFceHLL/hHkxIUS5P2pYe74Pyn1xx/WvQbK6hv7KC8t23QzxrLG3qrDI/nVmvOD4q8d3dpc6taeGbS10yNWZIb+VkuXVSfm2nAXIHRsY9+Mu1T4h36+FvD2s6RpMV1JqkgQ2sk21snjap4yd3fGOKtWPivxJp2t6dY+KtGtraLUpGit7mymaRYpOqpJkYGRwCDyR067akni3xdqGs6vY+H9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iiiiiiiiiiiiiiiiiiiiiiiv/9f3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/9D3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiik79PxpaKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK/9H3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiqk1ik7l3knz22ysoH4A0+3tRBnEszg9pHLfzqxRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRSDPcilooooooooooooooooooooooooooooopOc9Biloooooooooooooooooooooooooooooooooooooooooooooor/9L3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/9P3+iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiv/9k=`,
  };

  return `data:image/png;base64,${result._content}`;
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
