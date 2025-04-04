import { findCountryByCIOC } from './ui.js';
import { getCountryNameByCIOC } from './ui.js';

export class StateClass {
    constructor(_name, _capital, _region, _population, _flag, _latlng, _borders, _cioc, _language) {
        this.name = _name;
        this.capital = _capital;
        this.region = _region;
        this.population = _population;
        this.flag = _flag;
        this.latlng = _latlng;
        this.mapId = `map-${Math.random().toString(36).slice(2, 9)}`;
        this.borders = _borders;
        this.cioc = _cioc;
        this.language = _language
    }

    render(container) {
        let bordersContent = ""
    
        if (this.borders && this.borders.length > 0) {
            this.borders.forEach(border => {
                let countryName = getCountryNameByCIOC(border);
                bordersContent += `<button class="btn btn-primary btn-sm rounded-pill m-1" data-border="${border}">${countryName}</button>`
            })
        } else {
            bordersContent = "No bordering countries";
        }
    
        const card = document.createElement('div');
        card.className = 'state-card card shadow p-3 mb-5  rounded';
    
        card.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${this.flag}" alt="Flag of ${this.name}" class="flag img-fluid rounded">
                </div>
                <div class="col-md-8">
                    <h3 class="mb-3">${this.name}</h3>
                    <p><strong>Capital:</strong> ${this.capital}</p>
                    <p><strong>Region:</strong> ${this.region}</p>
                    <p><strong>Population:</strong> ${this.population.toLocaleString()}</p>
                    <p><strong>Language:</strong> ${this.language}</p>
                    <h4 class="mt-3">Bordering countries:</h4>
                    <div class="borders-container">${bordersContent}</div>
                </div>
            </div>
            <div id="${this.mapId}" class="map-container mt-3"></div>
        `

        const borderButtons = card.querySelectorAll(".btn");
        borderButtons.forEach(button => {
            button.addEventListener("click", () => {
                const border = button.dataset.border;
                findCountryByCIOC(border);
            });
        });
    
        container.appendChild(card)
        setTimeout(() => this.loadMap(), 0)
    }

    // old render
    // render(container) {
    //     if(!this.borders){
    //         this.borders = "No bordering countries"
    //     }
    //     const card = document.createElement('div');
    //     card.className = 'state-card';
    //     card.innerHTML = `
    //         <img src="${this.flag}" alt="Flag of ${this.name}" class="flag">
    //         <h3 style="font-size: 35px;">${this.name}</h3>
    //         <p><strong>Capital:</strong> ${this.capital}</p>
    //         <p><strong>Region:</strong> ${this.region}</p>
    //         <p><strong>Population:</strong> ${this.population.toLocaleString()}</p>
    //         <div id="${this.mapId}" class="map-container"></div>
    //         <h4>Bordering countries:</h4>
    //         <H2>${this.borders}</H2>
    //     `;
    //     container.appendChild(card);
    //     setTimeout(() => this.loadMap(), 0);
    // }

    render2(container) {
        const card = document.createElement('div');
        card.className = 'state-card';
        card.innerHTML = `
            <img src="${this.flag}" alt="Flag of ${this.name}" class="flag">
            <h3 style="font-size: 35px;">${this.name}</h3>
        `;
    
        card.addEventListener('click', () => {
            container.innerHTML = '';
            this.render(container);
        });
    
        container.appendChild(card);
    }

    loadMap() {
        const mapElement = document.getElementById(this.mapId);
        if (!mapElement) {
            return;
        }

        // create map
        const map = L.map(this.mapId).setView(this.latlng, 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker(this.latlng).addTo(map)
            .bindPopup(`<b>${this.name}</b><br>Capital: ${this.capital}`)
            .openPopup();
    }
}
