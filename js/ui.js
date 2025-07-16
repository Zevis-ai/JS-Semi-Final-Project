import { StateClass } from "./StateClass.js";

const main = document.querySelector("main")
const loader = document.querySelector(".loader")
let data;


const updateUi = (newData) => {
    data = newData
    setTimeout(() => {
        loader.style.display = "none";
        showSixCountries()
    }, 2000);
};

const createStateInstance = (element) => {
    const capital = Array.isArray(element.capital) && element.capital.length > 0 ? element.capital[0] : 'no capital';
    return new StateClass(
        element.name.common,
        capital,
        element.region,
        element.population,
        element.flags.png,
        element.latlng,
        element.borders,
        element.cca3,
        Object.values(element.languages ?? {}).join(" , ") || "X"
    );
};

export const showAllCountries = (data) => {
    main.innerHTML = ""
    data.forEach(element => {
        let state = createStateInstance(element);
        state.render(main);
    });
};

export const showOneCountry = (data, common) => {
    data.forEach(element => {
        if (element.name.common === common) {
            main.innerHTML = "";
            let state = createStateInstance(element);
            state.render(main);
        }
    });
};

export const showSixCountries =()=>{
    main.innerHTML =""
    let countrys = ["India","Israel","United States","United Kingdom","Thailand","France"]
    let arrData = data.filter(item => countrys.includes(item.name.common))
    arrData.forEach(element => {
        let state = createStateInstance(element);
        state.render2(main);
    });
}


export const showNoResultsMessage = () => {
    main.innerHTML = `
        <div class="alert alert-warning text-center mt-3" role="alert" style="font-size: 18px; font-weight: bold;">
            🚫 No results found. Try searching for something else!
        </div>
    `;
};

const findCountryByCIOC = (_cioc) => {
  let country = data.find(item => item.cioc === _cioc);
  if (country) {
    showOneCountry(data, country.name.common);
  } else {
    console.warn(`not found a country with the cioc=${_cioc}`);
  }
}



export const getCountryNameByCIOC = (_cioc) => {
  let country = data.find(item => item.cioc === _cioc);
  return country ? country.name.common : "Unknown";
}


const showErrorMessage = (message) => {
  const container = document.querySelector("#errorMessage");
  if (!container) {
    console.warn("Error container not found");
    return;
  }

  const errorEl = document.createElement("div");
  errorEl.textContent = message;
  errorEl.style.cssText = `
    background-color: #ffe0e0;
    color: #900;
    padding: 1rem;
    margin: 1rem auto;
    text-align: center;
    border-radius: 8px;
    max-width: 400px;
    font-family: Arial, sans-serif;
  `;

  container.prepend(errorEl);
};


export { updateUi, findCountryByCIOC , showErrorMessage};