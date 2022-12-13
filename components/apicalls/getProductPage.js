import { displayMessage } from "../feedback/displayMessage.js";
const contentContainer = document.querySelector(".main-content");
const spinner = document.querySelector(".spinner-container");
const spinnerDatabase = document.querySelector(".spinner-database");
let timerId;
export async function getProductPage(url) {
  timerId = setTimeout(() => {
    spinnerDatabase.style.display = "block";
  }, 4000);
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    displayMessage("catch-error", "there was an error fetching the product details", ".main-content");
  } finally {
    spinner.style.display = "none";
    contentContainer.style.display = "block";
  }
}
