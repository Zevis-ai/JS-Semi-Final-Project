import {updateUi} from "./ui.js"
const url = "https://restcountries.com/v3.1/all"



const doApi = async () =>{
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data)

    updateUi(data)
}

export {doApi}
