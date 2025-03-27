import { StateClass } from "./stateClass.js";

const main = document.querySelector("main");
const loader = document.querySelector(".loader");

let data;


const updateUi = (newData) => {
    data = newData
    setTimeout(() => {
        loader.style.display = "none";
        // showAllCountries(data);
        showFiveCountries()
    }, 2000);
};

const showAllCountries = (data) => {
    main.innerHTML = ""
    data.forEach(element => {
        const capital = Array.isArray(element.capital) && element.capital.length > 0 ? element.capital[0] : 'no capital';
        
        let state = new StateClass(
            element.name.common,
            capital,
            element.region,
            element.population,
            element.flags.png,
            element.latlng,
            element.borders
        );
        state.render(main);
    });
};

const showOneCountry = (data, common) => {
    data.forEach(element => {
        if (element.name.common === common) {
            main.innerHTML = "";
            const capital = Array.isArray(element.capital) && element.capital.length > 0 ? element.capital[0] : 'no capital';
            let state = new StateClass(
                element.name.common,
                capital,
                element.region,
                element.population,
                element.flags.png,
                element.latlng,
                element.borders
            );
            state.render(main);
        }
    });
};

const showFiveCountries =()=>{
    main.innerHTML =""
    let countrys = ["Israel","United States","France","United Kingdom","Thailand"]
    let arrData = data.filter(item => countrys.includes(item.name.common))
    arrData.forEach(element => {
        const capital = Array.isArray(element.capital) && element.capital.length > 0 ? element.capital[0] : 'no capital';
        
        let state = new StateClass(
            element.name.common,
            capital,
            element.region,
            element.population,
            element.flags.png,
            element.latlng,
            element.borders
        );
        state.render2(main);
    });
}

document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const countryName = e.target.getAttribute('data-country');
        if (countryName === 'all') {
            showAllCountries(data);
            return;
        }
        showOneCountry(data, countryName);
    });
});

document.querySelector('.logo').addEventListener('click', () => {
    showFiveCountries()
})

export { updateUi };

//    console.log(resp[246].borders);