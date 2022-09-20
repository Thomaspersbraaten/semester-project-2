import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { createAllStoreProducts } from "../components/createElements/createAllStoreProducts.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { searchControlAndClearSearch } from "../components/ui/searchControlAndClearSearch.js";
import { searchForProduct } from "../components/ui/searchForProduct.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
import { sortProducts } from "../components/ui/sortProducts.js";
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);

const searchInput = document.querySelector("#search");

const products = await getAllProducts(herokuUrl);
searchInput.placeholder = `Search among ${products.length} products`;
createAllStoreProducts(products);
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForProduct(products);
});

searchForm.addEventListener("keyup", () => {
  searchControlAndClearSearch(products);
});

const sortingSelector = document.querySelector(".form-select");
// resets the selected index back to its "label"
sortingSelector.selectedIndex = 0;

sortingSelector.addEventListener("change", () => {
  const selectorIndex = sortingSelector.selectedIndex;
  const selectorValue = parseInt(sortingSelector[selectorIndex].value);
  const sortedProducts = sortProducts(selectorValue, products);
  if (sortedProducts) {
    createAllStoreProducts(sortedProducts);
  }
});
