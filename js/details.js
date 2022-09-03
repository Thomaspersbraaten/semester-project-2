const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { getProductPage } from "../components/apicalls/getProductPage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { setupProductPage } from "../components/createElements/setupProductPage.js";
const detailsUrl = baseUrl + "products/" + id;

const theProduct = await getProductPage(detailsUrl);
setupProductPage(theProduct);
console.log(theProduct);
const addToCartBtn = document.querySelector(".btn-cart");

let cartArray = [];

addToCartBtn.addEventListener("click", () => {
  console.log("yes");
  cartArray.push(theProduct);
  console.log(cartArray);
});
