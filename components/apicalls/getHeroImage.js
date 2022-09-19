import { displayMessage } from "../feedback/displayMessage.js";

// returns the response for hero image
export async function getHeroImage(baseUrl) {
  try {
    const response = await fetch(baseUrl + "home");
    return await response.json();
  } catch (error) {
    displayMessage("catch-error", "There was an error fetching the welcome image", ".hero-image-container");
  }
}
