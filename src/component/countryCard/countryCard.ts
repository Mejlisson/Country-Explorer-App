import "./countryCard.scss";
import { CountryDetails } from "../../type/type";


// Funktion där vi skapar ett kort
export function createCountryCard(country: CountryDetails): HTMLElement { // här har vi argument country och objet 
    const card = document.createElement("div");
    card.className = "country-card";

    card.innerHTML = `
        <img src="${country.flags.svg || country.flags.png}" alt="Flag of ${country.name.common}" class="country-flag" />
        <h2 class="country-name">${country.name.common}</h2>`; 
    return card;
    /* <p class="country-capital"> Capital: ${country.capital}</p>
        <p class="country-region">Region: ${country.region}</p>
        <p class="country-population">Population: ${country.population?.toLocaleString()}</p>
    */
}
