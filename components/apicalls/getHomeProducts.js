import { homeProducts } from "../createElements/homeProducts.js";
import { displayMessage } from "../feedback/displayMessage.js";

// Gets all the products for the home page
export async function getHomeProducts(url) {
  try {
    const response = await fetch(url + "products");
    const data = await response.json();

    // splits featured and not featured into separate sections on the home page
    data.forEach((product) => {
      if (product.featured === true) {
        homeProducts(product, ".featured");
      }
    });
    data.forEach((product) => {
      if (!product.featured) {
        homeProducts(product, ".un-featured");
      }
    });
  } catch (error) {
    displayMessage("error", "there was an error fetching the products", ".wrapper");
  }
}
