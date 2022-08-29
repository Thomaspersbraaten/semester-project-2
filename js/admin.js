import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { getUser, getToken } from "../components/storage/storage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { createAdminItems } from "../components/createElements/createAdminItems.js";
createNavMenu();
const user = getUser();
const token = getToken();

console.log(user, token);
if (token.length === 0 || !user.id) {
  location.href = "/";
}
const header = document.querySelector(".admin-header");

header.innerHTML = `Welcome to the admin control panel: ${user.username}`;

const products = await getAllProducts(baseUrl);
console.log(products);
createAdminItems(products);
const searchInput = document.querySelector("#search");

searchInput.placeholder = `search among ${products.length} products`;
