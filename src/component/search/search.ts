import "./search.scss";
import { searchCountriesByName, fetchCountries } from "../api/api";
import { renderCountries, renderError } from "../render/render";

// Funktion för sökhantering
export async function handleSearch(query: string) {
    if (query) {
        // Sök endast baserat på namn
        const countries = await searchCountriesByName(query);
        if (countries.length > 0) {
            renderCountries(countries);
        } else {
            renderError(`No results found for "${query}".`);
        }
    } else {
        // Hämta alla länder om ingen sökterm finns
        const countries = await fetchCountries();
        renderCountries(countries);
    }
}