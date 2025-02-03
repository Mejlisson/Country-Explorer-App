// src/component/render/render.ts
import { CountryDetails } from "../../type/type";
import { createCountryCard } from "../countryCard/countryCard";

const resultsContainer = document.querySelector<HTMLDivElement>("#results-container");

if (!resultsContainer) {
    throw new Error("Results container is missing");
}

// Rendera länder
export function renderCountries(countries: CountryDetails[]) {
    resultsContainer.replaceChildren(); // Här rensar vi tidigare resultat
    countries.forEach((country) => {
        const card = createCountryCard(country);
        card.addEventListener('click', () => {
            window.location.href = `/detail.html?name=${encodeURIComponent(country.name.common)}`;
        });
        resultsContainer.appendChild(card);
    });
}

// Funktion för att visa felmeddelanden
export function renderError(message: string) {
    resultsContainer.replaceChildren();
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    resultsContainer.appendChild(errorDiv);
}