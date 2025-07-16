import { updateUi , showErrorMessage} from "./ui.js";
import { declarEvent } from "./listeners.js";

const oldUrl = "https://restcountries.com/v3.1/all";
const url =
  "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,latlng,borders,cioc,languages";

const doApi = async () => {
  try {
    let resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    let data = await resp.json();

    updateUi(data);
    declarEvent(data);
  } catch (err) {
    console.error("Error fetching data:", err);

    // Display error message to the user
    showErrorMessage("We encountered a temporary error. Please try again later.");
  }
};

export { doApi };
