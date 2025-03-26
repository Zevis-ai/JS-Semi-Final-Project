import {updateUi} from "./ui.js"
const url = "https://restcountries.com/v3.1/all"



const doApi = async () =>{
    let data = await fetch(url)
    let resp = await data.json()
    // saveToJSON(resp)
    console.log(resp)
    updateUi(resp)
}



// const saveToJSON = (data) =>{
//     let dataStr = JSON.stringify(data)
//     let blob = new Blob([dataStr], {type: "application/json"})
//     let url = URL.createObjectURL(blob)
//     let a = document.createElement("a")
//     a.href = url
//     a.download = "data.json"
//     a.click()
// }

export {doApi} // export the function doApi
