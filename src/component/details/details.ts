import "./details.scss";

import { searchCountriesByName } from "../api/api";

const displayCountryDetail = async () => {
    const urlParams = new URLSearchParams(window.location.search); //adresserar till url för detail html i renderCountries funktionen (rendet.ts)
    const countryName = urlParams.get('name'); 

    if (countryName) {
        const country = await searchCountriesByName(countryName);
        const flagCard = document.getElementById('flag-card');
        const infoCard = document.getElementById('info-card');
        const mapCard = document.getElementById('map-card');

        if (country.length > 0) {
            const detail = country[0];

            // Kort 1: Flagga
            if (flagCard) {
                flagCard.innerHTML = `
                    <img src="${detail.flags.png}" alt="${detail.name.common}">
                `;
            }

            // Kort 2: Detaljerad information
            if (infoCard) {
                infoCard.innerHTML = `
                    <h1>${detail.name.common}</h1>
                    <p>Region: ${detail.region}</p>
                    <p>Capital: ${detail.capital}</p>
                    <p>Population: ${detail.population}</p>
                    <p>Languages: ${Object.values(detail.languages).join(', ')}</p>
                    <p>Borders: ${detail.borders?.join(', ') || 'None'}</p>
                    <p>Currency: ${Object.values(detail.currencies).map((c: any) => c.name).join(', ')}</p>
                    <p>Timezone: ${detail.timezones.join(', ')}</p>
                    <p>Start of Week: ${detail.startOfWeek}</p>
                `;}

            // Kort 3: Karta
            if (mapCard) {
                mapCard.innerHTML = `
                    <a href="${detail.maps.googleMaps}" target="blank">Google Maps</a>
                    <br>
                    <a href="${detail.maps.openStreetMaps}" target="_blank">OpenStreetMap</a>
                `;
            }
        }
    }
};

displayCountryDetail();
