export class StateClass {
    constructor(_name, _capital, _region, _population, _flag, _latlng) {
        this.name = _name;
        this.capital = _capital;
        this.region = _region;
        this.population = _population;
        this.flag = _flag;
        this.latlng = _latlng;
        this.mapId = `map-${Math.random().toString(36).substr(2, 9)}`;
    }

    render(container) {
        const card = document.createElement('div');
        card.className = 'state-card';
        card.innerHTML = `
            <img src="${this.flag}" alt="Flag of ${this.name}" class="flag">
            <h3 style="font-size: 35px;">${this.name}</h3>
            <p><strong>Capital:</strong> ${this.capital}</p>
            <p><strong>Region:</strong> ${this.region}</p>
            <p><strong>Population:</strong> ${this.population.toLocaleString()}</p>
            <div id="${this.mapId}" class="map-container"></div>
        `;

        container.appendChild(card);

        setTimeout(() => this.loadMap(), 0);


    }

    render2(container) {
        const card = document.createElement('div');
        card.className = 'state-card';
        card.innerHTML = `
            <img src="${this.flag}" alt="Flag of ${this.name}" class="flag">
            <h3 style="font-size: 35px;">${this.name}</h3>
        `;

        card.addEventListener('click', () => {
            container.innerHTML = ''
            this.render(container);
        });

        container.appendChild(card);
    }

    loadMap() {
        const mapElement = document.getElementById(this.mapId);
        if (!mapElement) {
            console.error(`לא נמצא אלמנט עם id: ${this.mapId}`);
            return;
        }

        // יצירת מפה
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
