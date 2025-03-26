export class StateClass {
    constructor(_name, _capital, _region, _population, _flag) {
        this.name = _name;
        this.capital = _capital;
        this.region = _region;
        this.population = _population;
        this.flag = _flag;
    }
    render() {
        return `
        <div class="card">
            <h2>${this.name}</h2>
            <p>Capital: ${this.capital}</p>
            <p>Region: ${this.region}</p>
            <p>Population: ${this.population}</p>
            <img src="${this.flag}" alt="flag">
        `;
    }
}
