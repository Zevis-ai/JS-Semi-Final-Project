const main = document.querySelector("main")

const updateUi = (data) =>{
    setTimeout(() => {
        
        main.innerHTML = data
    }, 2000)
}


export {updateUi} 