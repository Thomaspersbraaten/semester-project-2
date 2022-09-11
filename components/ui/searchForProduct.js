import { createAdminItems } from "../createElements/createAdminItems.js";
import { createAllStoreProducts } from "../createElements/createAllStoreProducts.js";

const searchInput = document.querySelector("#search");

export function searchForProduct(products) {
  const { pathname } = window.location;
  // console.log(searchInput.value.trim().toLowerCase());
  // console.log(pathname);
  const searchValue = searchInput.value.trim().toLowerCase();

  if (searchInput.value.length >= 1) {
    // console.log(searchValue);
    // let productsToRender = products;
    const filteredProducts = products.filter((product) => {
      // if (product.title.toLowerCase().startsWith(searchValue) || product.description.toLowerCase().startsWith(searchValue)) {
      //   return true;
      // }
      if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    const itemHeader = document.querySelector(".item-header");
    if (filteredProducts.length === 0) {
      console.log(filteredProducts.length);
      if (pathname === "/admin.html") {
        createAdminItems(filteredProducts);
      }
      if (pathname === "/store.html") {
        createAllStoreProducts(filteredProducts);
      }
      itemHeader.innerHTML = `We found no results for "${searchValue}". Try being more specific.`;
    }

    if (pathname === "/admin.html" && filteredProducts.length > 0) {
      console.log(filteredProducts);
      itemHeader.innerHTML = `Showing search results for "${searchValue}"`;
      // itemHeader.innerHTML = `Showing search results for "${searchValue}"`;
      createAdminItems(filteredProducts);
    }
    if (pathname === "/store.html" && filteredProducts.length > 0) {
      itemHeader.innerHTML = `Showing search results for "${searchValue}"`;
      createAllStoreProducts(filteredProducts);
    }
  }
}
