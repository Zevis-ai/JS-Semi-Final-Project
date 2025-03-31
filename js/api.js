import {updateUi} from "./ui.js"
import {declarEvent} from "./listeners.js"
const url = "https://restcountries.com/v3.1/all"




const doApi = async () =>{
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data)

    updateUi(data)
    declarEvent(data)
}

export {doApi}
