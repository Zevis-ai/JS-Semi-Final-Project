import { StateClass } from "./StateClass.js";

const main = document.querySelector("main")
const loader = document.querySelector(".loader")
const searchInput = document.getElementById("searchInput")
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
            element.borders,
            element.cioc
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
                element.borders,
                element.cioc
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
            element.borders,
            element.cioc
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

searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value;
    const filteredData = data.filter(item => {
        return item.name.common.toLowerCase().includes(searchValue.toLowerCase());
    });
    showAllCountries(filteredData);
});

const findCountryByCIOC =(_cioc)=>{
    let country = data.find(item => item.cioc === _cioc)
    showOneCountry(data, country.name.common)
}

export { updateUi, findCountryByCIOC };
