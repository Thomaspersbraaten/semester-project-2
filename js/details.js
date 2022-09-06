const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { getProductPage } from "../components/apicalls/getProductPage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { setupProductPage } from "../components/createElements/setupProductPage.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { cartInfo } from "../components/createElements/cartInfo.js";

const detailsUrl = baseUrl + "products/" + id;

createNavMenu();
cartInfo();
const theProduct = await getProductPage(detailsUrl);
setupProductPage(theProduct);
