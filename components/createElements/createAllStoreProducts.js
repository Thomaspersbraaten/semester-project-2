import { productCard } from "../consts/productCard.js";

// Clears store container and removes spinner
// Fills the store container with customer facing product cards
export function createAllStoreProducts(products) {
  const storeContainer = document.querySelector(".store-item-container");
  storeContainer.innerHTML = "";
  const spinner = document.querySelector(".spinner-container");
  spinner.style.display = "none";

  products.forEach((product) => {
    storeContainer.innerHTML += productCard(product);
  });
}
