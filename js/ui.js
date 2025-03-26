import {StateClass} from "./stateClass.js"
const main = document.querySelector("main")
const loader = document.querySelector(".loader")

const updateUi = (data) =>{
    setTimeout(() => {
        loader.style.display = "none"
        showAllCountries(data)
    }, 2000)
}

const showAllCountries = (data) => {
    data.forEach(element => {
        const capital = Array.isArray(element.capital) && element.capital.length > 0 ? element.capital[0] : 'לא קיימת';
        
        let state = new StateClass(
            element.name.common,
            capital,
            element.region,
            element.population,
            element.flags.png,
            element.latlng
        );
        state.render(main);
    });
};

export {updateUi} 