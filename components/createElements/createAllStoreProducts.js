// import { productCard } from "../consts/productCard.js";
// import { homeProducts } from "./homeProducts.js";
import { populateContainerWithCards } from "./populateContainerWithCards.js";

// Clears store container and fills the store container with customer facing product cards
export function createAllStoreProducts(products) {
  const storeContainer = document.querySelector(".store-item-container");
  storeContainer.innerHTML = "";
  products.forEach((product) => {
    populateContainerWithCards(product, ".store-item-container");
  });
}
