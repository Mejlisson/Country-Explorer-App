import './main.scss'; 
import { fetchCountries, fetchCountryByName } from "./component/api/api";
import { CountryDetails } from './component/type';

// DOM-element
const searchInput = document.querySelector<HTMLInputElement>("#search-input");
const searchButton = document.querySelector<HTMLButtonElement>("#search-button");
const resultsContainer = document.querySelector<HTMLDivElement>("#results-container");

// Funktion där vi skapar ett kort
function createCountryCard(country: CountryDetails): HTMLElement { // här har vi argument country och objet 
    const card = document.createElement("div");
    card.className = "country-card";

    card.innerHTML = `
        <img src="${country.flags.svg}" alt="Flag of ${country.name}" class="country-flag" />
        <h2 class="country-name">${country.name.common}</h2>
        <p clzss="country-capital"> Capital: ${country.capital}</p>
        <p class="country-region">Region: ${country.region}</p>
        <p class="country-population">Population: ${country.population?.toLocaleString()}</p>`; 
    return card;
}

// Rendera resultatet
function renderCountries(countries: CountryDetails[]) {
    resultsContainer.replaceChildren(); // Här rensar vi tidigare resultat
    countries.forEach((country) => {
        const card = createCountryCard(country);
        resultsContainer.appendChild(card);
    });
}

// Funktion för sökhantering
async function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        const countries = await fetchCountryByName(query);
        renderCountries(countries);
    } else {
        const countries = await fetchCountries();
        renderCountries(countries);
    }
}

// En eventlyssnare
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Vi hämta och visa alla länder vid sidstart
fetchCountries().then(renderCountries);
