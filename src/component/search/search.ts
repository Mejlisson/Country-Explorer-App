import "./search.scss";
import { /*searchCountriesByName,*/ fetchCountries } from "../api/api";
import { renderCountries, renderError } from "../render/render";
import { filterCountries} from "../filter/filter";

// Funktion för sökhantering med filter

export async function handleSearch(query: string, filterType: string) {
    try {
        if (query) {
            const countries = await fetchCountries();  // Hämta alla länder 
            const filteredCountries = filterCountries(countries, filterType, query);  // Filtrera länder baserat på filtertyp och sökfråga

            if (filteredCountries.length > 0) {  // Kontrollera om resultat finns och rendera
                renderCountries(filteredCountries);
            } else {
                renderError(`No results found for "${query}" using filter "${filterType}".`);
            }
        } else {
            const countries = await fetchCountries();   // Hämta alla länder om ingen sökfråga finns
            renderCountries(countries);
        }
    } catch (error) {
        renderError("An error occurred while searching. Please try again later.");
        console.error(error);
    }
}


/*
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

*/