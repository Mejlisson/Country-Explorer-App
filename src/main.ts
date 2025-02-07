import './main.scss'; 
import { fetchRandomCountries } from "./component/api/api"; 
import { renderCountries } from './component/render/render';
import { createDropDown, filterCountries } from '../src/component/filter/filter';
import { handleSearch } from './component/search/search';

// DOM-element
const searchInput = document.querySelector<HTMLInputElement>("#search-input");
const searchButton = document.querySelector<HTMLButtonElement>("#search-button");
const searchContainer = document.querySelector<HTMLDivElement>(".search-container");
const filterDropdown = createDropDown();
searchContainer?.appendChild(filterDropdown);

//Ändra placering av filter så den ligger före search
if (searchContainer && searchInput) {
    searchContainer.insertBefore(filterDropdown, searchInput); //insertBefore - Detta var något nytt och väldigt bra
}

// Kontrollera att DOM-element finns
if (!searchInput || !searchButton || !searchContainer) {
    throw new Error("Kritiska DOM-element saknas!");
}

// Event listeners
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    const filterType = filterDropdown.value;
    handleSearch(query, filterType); // Se till att handleSearch tar två parametrar
});

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const query = searchInput.value.trim();
        const filterType = filterDropdown.value;
        handleSearch(query, filterType);
    }
});

//Hämta och visa 20 slumpmässiga länder vid sidstart
fetchRandomCountries()
    .then(renderCountries)
    .catch((error) => console.error("Renderingsfel:", error));