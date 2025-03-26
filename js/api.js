import {updateUi} from "./ui.js"
const url = "https://restcountries.com/v3.1/all"



const doApi = async () =>{
    let data = await fetch(url)
    let resp = await data.json()
    console.log(resp)
    updateUi(resp)
}

export {doApi}
