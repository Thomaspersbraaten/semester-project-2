const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { getProductPage } from "../components/apicalls/getProductPage.js";
import { baseUrl } from "../components/consts/baseUrl.js";

import { setupProductPage } from "../components/createElements/setupProductPage.js";
import { getCart, saveCart } from "../components/storage/storage.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
// import { cartQuantityInfo } from "../components/createElements/cartQuantityInfo.js";
const detailsUrl = baseUrl + "products/" + id;

createNavMenu();
// cartQuantityInfo();
const theProduct = await getProductPage(detailsUrl);
setupProductPage(theProduct);
