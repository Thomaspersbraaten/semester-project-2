import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { createAllStoreProducts } from "../components/createElements/createAllStoreProducts.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
import { hamburgerMenu, fixMenuPosition, searchForProduct, searchControlAndClearSearch, scrollToTop, showAndHideScrollToTopBtn } from "../components/ui/index.js";

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

// sets up products in the store page
createAllStoreProducts(products);

// Searching for products
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForProduct(products);
});

searchForm.addEventListener("keyup", () => {
  searchControlAndClearSearch(products);
});

// Scroll to top
document.body.addEventListener("scroll", () => {
  showAndHideScrollToTopBtn();
});

const scrollToTopBtn = document.querySelector(".fa-angle-up");
scrollToTopBtn.addEventListener("click", scrollToTop);
