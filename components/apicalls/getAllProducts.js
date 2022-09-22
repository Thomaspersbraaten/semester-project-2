import { displayMessage } from "../feedback/displayMessage.js";
const contentContainer = document.querySelector(".main-content");

// returns all products for the store
export async function getAllProducts(url) {
  try {
    const response = await fetch(url + "products");
    return await response.json();
  } catch (error) {
    displayMessage("catch-error", "there was an error fetching the products", ".main-content");
  } finally {
    // hides spinner, displays and populates the "main-content" container for the active page
    const spinner = document.querySelector(".spinner-container");
    spinner.style.display = "none";
    contentContainer.style.display = "block";
  }
}
