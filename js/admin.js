import { getAllProducts } from "../components/apicalls/getAllProducts.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { getUser, getToken } from "../components/storage/storage.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { createAdminItems } from "../components/createElements/createAdminItems.js";
import { createProductModal } from "../components/createElements/createProductModal.js";
import { editPanel } from "../components/createElements/editPanel.js";
import { deletePanel } from "../components/createElements/deletePanel.js";
import { logoutPanel } from "../components/createElements/logoutPanel.js";

import { cartInfo } from "../components/createElements/cartInfo.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
// import { startEdit } from "../components/ui/startEdit.js";

createNavMenu();
cartInfo();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
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
const adminItemHeader = document.querySelector(".admin-item-header");
adminItemHeader.innerHTML = "List of products";

createAdminItems(products);
const searchForm = document.querySelector(".search-form");
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
  // console.log(targetId);
  const clickedProduct = products.find((item) => {
    return item.id === targetId;
  });
  deletePanel(clickedProduct);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(searchInput.value.trim().toLowerCase());
  const searchValue = searchInput.value.trim().toLowerCase();
  if (searchInput.value.length >= 1) {
    console.log(searchValue);
    let productsToRender = products;
    const filteredProducts = products.filter((product) => {
      // if (product.title.toLowerCase().startsWith(searchValue) || product.description.toLowerCase().startsWith(searchValue)) {
      //   return true;
      // }
      if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    console.log(filteredProducts);
    adminItemHeader.innerHTML = `Showing search results for "${searchValue}"`;
    createAdminItems(filteredProducts);
    // // const searchTarget = product.title.value + product.description.value;
    // searchForProduct();
    const deleteBtn = document.querySelectorAll(".card-action__delete");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", startDeletion);
    });
    const editBtn = document.querySelectorAll(".card-action__edit");
    editBtn.forEach((button) => {
      button.addEventListener("click", startEdit);
    });
  }
});

// function searchForProduct() {}

// logout

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.addEventListener("click", logoutPanel);
logOutBtn.addEventListener("click", () => {
  console.log("yes");
});
