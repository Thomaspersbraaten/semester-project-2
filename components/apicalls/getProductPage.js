import { displayMessage } from "../feedback/displayMessage.js";
const contentContainer = document.querySelector(".main-content");
export async function getProductPage(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    displayMessage("catch-error", "there was an error fetching the product details", ".main-content");
  } finally {
    const spinner = document.querySelector(".spinner-container");
    spinner.style.display = "none";
    contentContainer.style.display = "block";
  }
}
