import { getAllProducts } from "../components/apicalls/getAllProducts.js";
// import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { getUser, getToken } from "../components/storage/storage.js";
// import { baseUrl } from "../components/consts/baseUrl.js";

import { createAdminItems } from "../components/createElements/createAdminItems.js";
import { createProductModal } from "../components/createElements/createProductModal.js";
import { logoutPanel } from "../components/createElements/logoutPanel.js";
// import { cartInfo } from "../components/createElements/cartInfo.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
// import { searchForAdminProduct } from "../components/ui/searchForAdminProduct.js";
import { searchForProduct } from "../components/ui/searchForProduct.js";
import { searchControlAndClearSearch } from "../components/ui/searchControlAndClearSearch.js";
// import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";

const user = getUser();
const token = getToken();

if (token.length === 0 || !user.id) {
  location.href = "/";
}
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();
window.addEventListener("resize", fixMenuPosition);

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
// Setup the admin page
const header = document.querySelector(".admin-header");
header.innerHTML = `Welcome to the admin page`;
const adminItemHeader = document.querySelector(".item-header");
adminItemHeader.innerHTML = "List of products";
const products = await getAllProducts(herokuUrl);
// console.log(products);
products.sort(function (a, b) {
  return a.id - b.id;
});
console.log(products);

createAdminItems(products);
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search");
const searchX = document.querySelector(".search-form__x");
searchInput.placeholder = `search among ${products.length} products`;

// Create
const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", createProductModal);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForProduct(products);
});

searchForm.addEventListener("keyup", () => {
  searchControlAndClearSearch(products);
});

// logout

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.addEventListener("click", logoutPanel);
