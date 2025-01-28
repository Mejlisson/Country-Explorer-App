import { CountryDetails } from '../../type/type';

const apiUrl = "https://restcountries.com/v3.1"; //basurl till mitt API  1Endpoint

// Funktion för att hämta alla länder
export async function fetchCountries(): Promise < CountryDetails[]> { //Promise < CountryDetails[] visar tydligt att denna returnerar en arrya av CountryDetails.
  try{ //hanterar fel vid eventuella kraschar
    const response = await fetch(`${apiUrl}/name`);
    if(!response.ok) {    //response.ok gör att vi kan kontrollera om svaret är lyckat
      throw new Error(`Error: ${response.status}`);
      }
    return await response.json(); //returnerar en array av CountryDetails som hämtas från type.ts
     }
  catch (error) { //hanterar fel vid eventuella kraschar
    console.error("Failed to fetch countries:", error);
    return[];
  }
}

export async function fetchCountryByName(name: string): Promise<CountryDetails[]> {
    try {
        const response = await fetch(`${apiUrl}/name/${name}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch country with name "${name}":`, error);
        return [];
    }
}


