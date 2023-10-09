import { API_URL } from "../config";
import { getChromeStorage } from "../utils";

const extractData = async (files) => {
  const apikey = await getChromeStorage("apikey");

  let responses = await Promise.all(
    files.map(async (file, index) => {
      const response = await fetch(`${API_URL}/prescription`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apikey, file }),
      });

      return await response.json();
    })
  );

  responses = responses.sort((a, b) => a.index - b.index);

  console.log(responses);

  return responses;
};

export default extractData;
