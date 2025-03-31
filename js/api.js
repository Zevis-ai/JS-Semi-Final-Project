import {updateUi} from "./ui.js"
import {declarEvent} from "./listeners.js"

const url = "https://restcountries.com/v3.1/all"

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
    }
};


export {doApi}
