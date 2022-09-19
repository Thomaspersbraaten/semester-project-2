import { createAdminItems } from "../createElements/createAdminItems.js";
import { createAllStoreProducts } from "../createElements/createAllStoreProducts.js";

const searchInput = document.querySelector("#search");
const ItemHeader = document.querySelector(".item-header");
const clearSearch = document.querySelector(".search-form__x");

// This function is triggered on keyup
// Clears search and repopulates on either "clear search" button or when user empties the input.

export function searchControlAndClearSearch(products) {
  const searchLength = searchInput.value.length;
  const { pathname } = window.location;

  // shows the "clear search" button on input
  if (searchLength >= 1) {
    clearSearch.style.visibility = "visible";
  }
  // when clicked clears the input value and hides "clear search" button
  // Repopulates the container for Store or admin and resets header.
  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.visibility = "hidden";

    if (pathname === "/admin.html") {
      createAdminItems(products);
    }
    if (pathname === "/store.html") {
      createAllStoreProducts(products);
    }
    ItemHeader.innerHTML = `List of products`;
  });

  // if input is emptied by the user repopulate the container, update header and hide "clear search" button.
  if (searchLength === 0 && pathname === "/admin.html") {
    createAdminItems(products);
    clearSearch.style.visibility = "hidden";
    ItemHeader.innerHTML = `List of products`;
  }
  if (searchLength === 0 && pathname === "/store.html") {
    createAllStoreProducts(products);
    clearSearch.style.visibility = "hidden";
    ItemHeader.innerHTML = `List of products`;
  }
}
