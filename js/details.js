const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { getProductPage } from "../components/apicalls/getProductPage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { setupProductPage } from "../components/createElements/setupProductPage.js";
import { getCart, saveCart } from "../components/storage/storage.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
const detailsUrl = baseUrl + "products/" + id;

cartInfo();
createNavMenu();
const theProduct = await getProductPage(detailsUrl);
setupProductPage(theProduct);
// console.log(theProduct);
// const addToCartBtn = document.querySelector(".btn-cart");

// let cartArray = getCart();
// console.log(cartArray);

// addToCartBtn.addEventListener("click", () => {
//   console.log("yes");
//   cartArray.push(theProduct);
//   console.log(cartArray);
//   saveCart(cartArray);
//   cartInfo();
// });
// console.log(cartArray);
