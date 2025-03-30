import { StateClass } from "./StateClass.js";

const main = document.querySelector("main")
const loader = document.querySelector(".loader")
const searchInput = document.getElementById("searchInput")
const burger = document.getElementById("icon_borger")
// const side_burger = document.querySelector(".side_burger")
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
            element.cca3,
            Object.values(element.languages).join(" ")
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
                element.cca3,
                Object.values(element.languages).join(" ")
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
            element.cca3,
            Object.values(element.languages).join(" , ")
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
    if (filteredData.length === 0) {
        showNoResultsMessage();
    } else {
        showAllCountries(filteredData);
    }
});

const showNoResultsMessage = () => {
    main.innerHTML = `
        <div class="alert alert-warning text-center mt-3" role="alert" style="font-size: 18px; font-weight: bold;">
            🚫 No results found. Try searching for something else!
        </div>
    `;
};



const findCountryByCIOC =(_cioc)=>{
    let country = data.find(item => item.cca3 === _cioc)
    showOneCountry(data, country.name.common)
}

document.getElementById("icon_borger").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("active");
});
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("active");
});
window.addEventListener("click", function(event) {
    let sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target) && !document.getElementById("icon_borger").contains(event.target)) {
        sidebar.classList.remove("active");
    }
});


export { updateUi, findCountryByCIOC };
