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
        // יצירת כרטיס מעוצב עם Bootstrap
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 mb-4';
        card.innerHTML = `
            <div class="card shadow-lg border-0 rounded-4">
                <img src="${this.flag}" class="card-img-top" alt="Flag of ${this.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${this.name}</h5>
                    <p class="card-text mb-1"><strong>Capital:</strong> ${this.capital}</p>
                    <p class="card-text mb-1"><strong>Region:</strong> ${this.region}</p>
                    <p class="card-text"><strong>Population:</strong> ${this.population.toLocaleString()}</p>
                    <div id="${this.mapId}" class="map-container rounded" style="height: 250px;"></div>
                </div>
            </div>
        `;

        // הוספת הכרטיס ל-container
        container.appendChild(card);

        // טעינת המפה לאחר שהכרטיס נוסף
        setTimeout(() => this.loadMap(), 0);
    }

    loadMap() {
        const mapElement = document.getElementById(this.mapId);
        if (!mapElement) {
            console.error(`לא נמצא אלמנט עם id: ${this.mapId}`);
            return;
        }

        // יצירת מפה עם הקואורדינטות מה-API
        const map = L.map(this.mapId).setView(this.latlng, 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // הוספת סמן למיקום
        L.marker(this.latlng).addTo(map)
            .bindPopup(`<b>${this.name}</b><br>Capital: ${this.capital}`)
            .openPopup();
    }
}
