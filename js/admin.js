import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { getUser, getToken } from "../components/storage/storage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { createAdminItems } from "../components/createElements/createAdminItems.js";
import { createProductModal } from "../components/createElements/createProductModal.js";
import { editPanel } from "../components/createElements/editPanel.js";
// import { startEdit } from "../components/ui/startEdit.js";

createNavMenu();
const user = getUser();
const token = getToken();

console.log(user, token);
if (token.length === 0 || !user.id) {
  location.href = "/";
}
// Setup the admin page
const header = document.querySelector(".admin-header");
header.innerHTML = `Welcome to the admin control panel: ${user.username}`;

const products = await getAllProducts(baseUrl);
console.log(products);
createAdminItems(products);
const searchInput = document.querySelector("#search");
searchInput.placeholder = `search among ${products.length} products`;

// Create
const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", createProductModal);

// edit
const editBtn = document.querySelectorAll(".card-action__edit");
editBtn.forEach((button) => {
  button.addEventListener("click", startEdit);
});

function startEdit() {
  const targetId = parseInt(this.dataset.id);
  console.log(targetId);
  const clickedProduct = products.find((item) => {
    return item.id === targetId;
  });
  console.log(clickedProduct);
  editPanel(clickedProduct);
}

//Delete

const deleteBtn = document.querySelectorAll(".card-action__delete");
deleteBtn.forEach((button) => {
  button.addEventListener("click", startDeletion);
});

function startDeletion() {
  const targetId = parseInt(this.dataset.id);
  console.log(targetId);
  const clickedProduct = products.find((item) => {
    return item.id === targetId;
  });
  deletePanel(clickedProduct);
}
