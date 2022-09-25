import { displayMessage } from "../feedback/displayMessage.js";
const heroContainer = document.querySelector(".hero-image-container");
// returns the response for hero image
export async function getHeroImage(baseUrl) {
  try {
    const response = await fetch(baseUrl + "home");
    const data = await response.json();
    const heroText = document.querySelector(".hero-info");
    heroText.style.display = "flex";
    const theHeroImage = data.hero_banner.url;
    const heroImageAltText = data.hero_banner_alt_text;

    heroContainer.innerHTML = `
        <img src="${theHeroImage}" class="hero-image-container__image" alt="${heroImageAltText}">
        <div class="hero-image-container__filter"></div>
        `;
  } catch (error) {
    displayMessage("catch-error", "There was an error fetching the welcome image", ".hero-image-container");
  }
}
