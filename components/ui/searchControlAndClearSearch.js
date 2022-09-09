import { createAdminItems } from "../createElements/createAdminItems.js";
import { createAllStoreProducts } from "../createElements/createAllStoreProducts.js";

const searchInput = document.querySelector("#search");
const adminItemHeader = document.querySelector(".admin-item-header");
const searchX = document.querySelector(".search-form__x");
export function searchControlAndClearSearch(products) {
  const searchLength = searchInput.value.length;
  const { pathname } = window.location;

  console.log(searchLength);
  if (searchLength >= 1) {
    searchX.style.visibility = "visible";
  }
  searchX.addEventListener("click", () => {
    searchInput.value = "";

    searchX.style.visibility = "hidden";
    if (pathname === "/admin.html") {
      createAdminItems(products);
      adminItemHeader.innerHTML = `List of products`;
    }
    if (pathname === "/store.html") {
      createAllStoreProducts(products);
      // adminItemHeader.innerHTML = `List of products`;
    }
  });
  if (searchLength === 0 && pathname === "/admin.html") {
    createAdminItems(products);
    searchX.style.visibility = "hidden";
    adminItemHeader.innerHTML = `List of products`;
  }
  if (searchLength === 0 && pathname === "/store.html") {
    createAllStoreProducts(products);
    searchX.style.visibility = "hidden";
    // adminItemHeader.innerHTML = `List of products`;
  }
}
