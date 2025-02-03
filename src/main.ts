import './main.scss'; 
import "../src/component/search/search.scss";
import { fetchRandomCountries } from "./component/api/api"; 
import { renderCountries } from './component/render/render';
import "../src/component/filter/filter";
import "../src/component/render/render";
import "../src/component/details/details";
import { handleSearch } from './component/search/search';
import { createDropDown } from '../src/component/filter/filter';

// DOM-element
const searchInput = document.querySelector<HTMLInputElement>("#search-input");
const searchButton = document.querySelector<HTMLButtonElement>("#search-button");
const searchContainer = document.querySelector<HTMLDivElement>(".search-container");

// Kontrollera att alla DOM-element existerar
if (!searchInput || !searchButton || !searchContainer) {
    console.error("Required DOM elements are missing");
    throw new Error("Required DOM elements are missing");
}

// Eventlyssnare för sökknappen
searchButton.addEventListener('click', () => handleSearch(searchInput.value.trim()));

// Eventlyssnare för Enter-tangenten i sökfältet
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch(searchInput.value.trim());
    }
});

// Hämta och visa 20 slumpmässiga länder vid sidstart
fetchRandomCountries()
    .then(renderCountries)
    .catch((error) => console.error("Failed to render countries:", error));

const dropdown = createDropDown();
// app.appendChild(dropdown)