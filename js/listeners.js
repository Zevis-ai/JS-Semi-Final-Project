import { showAllCountries } from "./ui.js";
import { showNoResultsMessage } from "./ui.js";
import { showOneCountry } from "./ui.js";
import { showFiveCountries } from "./ui.js";

export const declarEvent =(_data)=>{

    // search
    document.querySelectorAll('#searchInput1, #searchInput2').forEach(input => {
        input.addEventListener('input', (e) => {
            const searchValue = e.target.value;
            const filteredData = _data.filter(item => {
                return item.name.common.toLowerCase().includes(searchValue.toLowerCase());
            });
            if (filteredData.length === 0) {
                showNoResultsMessage();
            } else {
                showAllCountries(filteredData);
            }
        });
    });

    // sidebar
    document.getElementById("icon_borger").addEventListener("click", ()=> {
        document.getElementById("sidebar").classList.add("active");
    });
    
    document.getElementById("closeBtn").addEventListener("click", ()=> {
        document.getElementById("sidebar").classList.remove("active");
    });

    // sidebar links
    document.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const countryName = e.target.getAttribute('data-country');
            if (countryName === 'all') {
                showAllCountries(_data);
                return;
            }
            showOneCountry(_data, countryName);
        });
    });

    // show 5 countries
    document.querySelectorAll('.logo, #home').forEach(el => {
        el.addEventListener('click', showFiveCountries);
    });
    
    // show one country
    document.querySelectorAll('.showCountryL').forEach(button => {
        button.addEventListener('click', (e) => {
            showOneCountry(_data, e.target.innerText)
        });
    });
} 