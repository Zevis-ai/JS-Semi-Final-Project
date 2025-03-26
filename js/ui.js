const main = document.querySelector("main")

const updataUi = (data) =>{
    setTimeout(() => {
        main.innerHTML = data
    }, 2000)
}


export {updataUi} 