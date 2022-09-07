import { createAdminItems } from "../createElements/createAdminItems.js";

const searchInput = document.querySelector("#search");
const adminItemHeader = document.querySelector(".admin-item-header");
const searchX = document.querySelector(".search-form__x");
export function searchControlAndClearSearch(products) {
  const searchLength = searchInput.value.length;

  console.log(searchLength);
  if (searchLength >= 1) {
    searchX.style.visibility = "visible";
  }
  searchX.addEventListener("click", () => {
    searchInput.value = "";
    createAdminItems(products);
    searchX.style.visibility = "hidden";
    adminItemHeader.innerHTML = `List of products`;
  });
  if (searchLength === 0) {
    createAdminItems(products);
    searchX.style.visibility = "hidden";
    adminItemHeader.innerHTML = `List of products`;
  }
}
