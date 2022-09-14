import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { createAllStoreProducts } from "../components/createElements/createAllStoreProducts.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { searchControlAndClearSearch } from "../components/ui/searchControlAndClearSearch.js";
import { searchForProduct } from "../components/ui/searchForProduct.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);
const spinner = document.querySelector(".spinner-container");

cartInfo();
createNavMenu();
createBreadcrumbs();
const searchInput = document.querySelector("#search");
const products = await getAllProducts(baseUrl);
console.log(products);
searchInput.placeholder = `search among ${products.length} products`;
// products.forEach((product) => {
//   createAllStoreProducts(product);
//   spinner.style.display = "none";
// });

createAllStoreProducts(products);
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForProduct(products);
});

searchForm.addEventListener("keyup", () => {
  searchControlAndClearSearch(products);
});
