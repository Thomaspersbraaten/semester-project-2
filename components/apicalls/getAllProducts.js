import { displayMessage } from "../feedback/displayMessage.js";

// returns all products for the store
export async function getAllProducts(url) {
  try {
    const response = await fetch(url + "products");
    return await response.json();
  } catch (error) {
    displayMessage("catch-error", "there was an error fetching the products", ".store-item-container");
  }
}
