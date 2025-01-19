// src/utils/api.ts
const mainUrl = "https://restcountries.com/v3.1";

export const fetchAllCountries = async (): Promise<any[]> => {
  const response = await fetch(`${mainUrl}/all`);
  if (!response.ok) throw new Error("Error: Failed to fetch countries");
  return response.json();
};

