import { adminCard } from "./cards/adminCard.js";
import { productCard } from "./cards/productCard.js";
// Populates target container with the product card (folder consts)
export function populateContainerWithCards(product, container) {
  const { pathname } = window.location;
  const targetContainer = document.querySelector(container);

  if (pathname === "/admin.html") {
    targetContainer.innerHTML += adminCard(product);
  } else {
    targetContainer.innerHTML += productCard(product);
  }
}
