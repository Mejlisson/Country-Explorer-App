import "./details.scss";

function initBackButton(): void {
  const backButton = document.getElementById("back-button") as HTMLButtonElement | null;

  if (backButton) {
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
