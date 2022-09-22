import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { createAllStoreProducts } from "../components/createElements/createAllStoreProducts.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
import { hamburgerMenu, fixMenuPosition, sortProducts, searchForProduct, searchControlAndClearSearch, scrollToTop, showAndHideScrollToTopBtn } from "../components/ui/index.js";
// import { homeProducts } from "../components/createElements/homeProducts.js";
// import { populateContainerWithCards } from "../components/createElements/populateContainerWithCards.js";

// Initial page setup
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);

//

const products = await getAllProducts(herokuUrl);
const searchInput = document.querySelector("#search");
searchInput.placeholder = `Search among ${products.length} products`;
createAllStoreProducts(products);
// const storeContainer = document.querySelector(".store-item-container");
// products.forEach((product) => {
//   homeProducts(product, ".store-item-container");
// });

// Searching for products
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForProduct(products);
});

searchForm.addEventListener("keyup", () => {
  searchControlAndClearSearch(products);
});

// Sorting the products
const sortingSelector = document.querySelector(".form-select");
// resets the selected index back to its "label" when page is refreshed
sortingSelector.selectedIndex = 0;

sortingSelector.addEventListener("change", () => {
  const selectorIndex = sortingSelector.selectedIndex;
  const selectorValue = parseInt(sortingSelector[selectorIndex].value);
  const sortedProducts = sortProducts(selectorValue, products);
  if (sortedProducts) {
    createAllStoreProducts(sortedProducts);
  }
});

document.body.addEventListener("scroll", () => {
  showAndHideScrollToTopBtn();
});

const scrollToTopBtn = document.querySelector(".fa-angle-up");
scrollToTopBtn.addEventListener("click", scrollToTop);
