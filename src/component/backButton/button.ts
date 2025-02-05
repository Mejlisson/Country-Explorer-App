// Importera eventuella SCSS-filer om det behövs
import "./details.scss";

// Funktion för att initiera "Go Back"-knappen
function initBackButton(): void {
  // Hämta knappen från DOM
  const backButton = document.getElementById("back-button") as HTMLButtonElement | null;

  if (backButton) {
    // Lägg till en klick-händelse
    backButton.addEventListener("click", () => {
      history.back(); // Tar användaren tillbaka i webbläsarens historik
    });
  } else {
    console.error("Back button not found in the DOM.");
  }
}

// Kör funktionen när sidan har laddats
document.addEventListener("DOMContentLoaded", () => {
  initBackButton();
});
