import "./filter.scss";
import { CountryDetails } from "../../type/type";

// Skapa dropdown//Optimerad vertion
export const createDropDown =(): HTMLSelectElement => {
    const filterDropdown = document.createElement("select");
    filterDropdown.id = "filter-dropdown";
    const options = [
        "name", "region", "subregion", "currency", "language", "borders", 
        "population", "landlocked", "area", "timezone", "startOfWeek"
    ];
    filterDropdown.innerHTML = options.map(opt => `<option value="${opt}">${opt.charAt(0).toUpperCase() + opt.slice(1)}</option>`).join('');
    return filterDropdown;
};

// Filterfunktion
export const filterCountries = (
    countries: CountryDetails[],
    filterType: string,
    query: string
): CountryDetails[] => {
    switch (filterType) {
        case "name":
            return countries.filter(country =>
                country.name.common.toLowerCase().includes(query.toLowerCase())
            );
        case "region":
            return countries.filter(
                country => country.region.toLowerCase() === query.toLowerCase()
            );
        case "subregion":
            return countries.filter(
                country => country.subregion?.toLowerCase() === query.toLowerCase()
            );
        case "currency":
            return countries.filter(country =>
                Object.values(country.currencies || {}).some(currency =>
                    currency.name.toLowerCase().includes(query.toLowerCase()) ||
                    currency.symbol.toLowerCase().includes(query.toLowerCase())
                )
            );
        case "language":
            return countries.filter(country =>
                Object.values(country.languages || {}).some(language =>
                    language.toLowerCase().includes(query.toLowerCase())
                )
            );
        case "borders":
            return countries.filter(country =>
                country.borders?.some(
                    border => border.toLowerCase() === query.toLowerCase()
                )
            );
        case "population":
            const populationThreshold = parseInt(query, 10);
            return countries.filter(
                country => country.population > populationThreshold
            );
        case "landlocked":
            const isLandlocked = query.toLowerCase() === "true";
            return countries.filter(
                country => country.landlocked === isLandlocked
            );
        case "area":
            const areaThreshold = parseInt(query, 10);
            return countries.filter(country => country.area > areaThreshold);
        case "timezone":
            return countries.filter(country =>
                country.timezones.some(
                    timezone => timezone.toLowerCase() === query.toLowerCase()
                )
            );
        case "continent":
            return countries.filter(country =>
                country.continents.some(
                    continent => continent.toLowerCase() === query.toLowerCase()
                )
            );
        case "startOfWeek":
            return countries.filter(
                country => country.startOfWeek.toLowerCase() === query.toLowerCase()
            );
        default:
            return countries;
    }
};
