import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { createAllStoreProducts } from "../components/createElements/createAllStoreProducts.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
const spinner = document.querySelector(".spinner-container");

cartInfo();
createNavMenu();
createBreadcrumbs();
const products = await getAllProducts(baseUrl);
console.log(products);
products.forEach((product) => {
  createAllStoreProducts(product);
  spinner.style.display = "none";
});
