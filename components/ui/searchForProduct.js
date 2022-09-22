import { createAdminItems } from "../createElements/createAdminItems.js";
import { createAllStoreProducts } from "../createElements/createAllStoreProducts.js";
import { sortProducts } from "./sortProducts.js";

const searchInput = document.querySelector("#search");

// Searchfunction for Admin and store pages

export function searchForProduct(products) {
  const { pathname } = window.location;
  const searchValue = searchInput.value.trim().toLowerCase();

  if (searchInput.value.length >= 1) {
    const filteredProducts = products.filter((product) => {
      if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    // if no products was found, show helpfull message and empty product page.
    const itemHeader = document.querySelector(".item-header");
    if (filteredProducts.length === 0) {
      if (pathname === "/admin.html") {
        createAdminItems(filteredProducts);
      }
      if (pathname === "/store.html") {
        createAllStoreProducts(filteredProducts);
      }
      itemHeader.innerHTML = `We found no results for "${searchValue}". Try being more specific.`;
    }

    // if products was found, show results and update header.
    else {
      if (pathname === "/admin.html" && filteredProducts.length > 0) {
        createAdminItems(filteredProducts);
      }
      if (pathname === "/store.html" && filteredProducts.length > 0) {
        createAllStoreProducts(filteredProducts);
      }
      itemHeader.innerHTML = `Showing search results for "${searchValue}"`;
      // const sortingSelector = document.querySelector(".form-select");
      // sortingSelector.addEventListener("change", () => {
      //   const selectorIndex = sortingSelector.selectedIndex;
      //   const selectorValue = parseInt(sortingSelector[selectorIndex].value);
      //   const sortedProducts = sortProducts(selectorValue, filteredProducts);
      //   if (sortedProducts) {
      //     createAllStoreProducts(sortedProducts);
      //   }
      // });
    }
  }
}
