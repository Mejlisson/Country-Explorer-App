import { CountryDetails } from '../../type/type';
const apiUrl = "https://restcountries.com/v3.1"; //basurl till mitt API  1 Endpoint

// Funktion för att hämta alla länder
export async function fetchCountries(): Promise < CountryDetails[]> { //Promise < CountryDetails[] visar tydligt att denna returnerar en arrya av CountryDetails.
  try{ //hanterar fel vid eventuella kraschar
    const response = await fetch(`${apiUrl}/all`);
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

const apiUrlName ="https://restcountries.com/v3.1/name/{name}"; //2:a Endpoint

// Sök efter länder baserat på namn eller region
export async function searchCountriesByName(query: string): Promise<CountryDetails[]> {
  try {
    const response = await fetch(`${apiUrl}/name/${query}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch country with name "${query}":`, error);
    return [];
  }
}

// Funktion för att hämta 20 random länder, denna förnyas vid
export async function fetchRandomCountries() {
  const countries = await fetchCountries();
  const shuffledCountries = shuffleArray(countries); // Blanda arrayen
  return shuffledCountries.slice(0, 20); // Returnera bara 20 länderna
}

// Hjälpfunktion för att blanda en array (Fisher-Yates-algoritmen)
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}