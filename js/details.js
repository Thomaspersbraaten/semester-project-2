const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { getProductPage } from "../components/apicalls/getProductPage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { setupProductPage } from "../components/createElements/setupProductPage.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";

const detailsUrl = baseUrl + "products/" + id;

createNavMenu();
cartInfo();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);

const theProduct = await getProductPage(detailsUrl);
createBreadcrumbs(theProduct);
setupProductPage(theProduct);
