import { API_URL } from "../config";

const extractData = async (apikey, files) => {
  let responses = await Promise.all(
    files.map(async (file, index) => {
      const response = await fetch(`${API_URL}/prescription`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apikey, file }),
      });

      if (!response.ok) throw new Error("Error while extracting data from prescription " + apikey + " file : " + file);

      return await response.json();
    })
  );

  responses = responses.sort((a, b) => a.index - b.index);

  console.log(responses);

  return responses;
};

export default extractData;
