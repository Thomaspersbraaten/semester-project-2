const itemContainer = document.querySelector(".admin-item-container");
const spinner = document.querySelector(".spinner-container");
import { startEdit } from "../ui/startEdit.js";
import { startDeletion } from "../ui/startDeletion.js";
import { getAllProducts } from "../apicalls/getAllProducts.js";
import { baseUrl } from "../consts/baseUrl.js";

export function createAdminItems(products) {
  itemContainer.innerHTML = "";

  itemContainer.style.opacity = "1";
  spinner.style.display = "none";
  products.forEach((product) => {
    itemContainer.innerHTML += `
        <div class="card col">
            <img class="card__img img-fluid" src="${product.image_url}" alt="${product.title}">
            <div class="card-body">
              <h3 class="card-title" >${product.title}</h3>
              <p class="card-price">${product.price}</p>
              <div class="card-action">
                <div class="card-action__edit" data-id="${product.id}">
                    <i class="fa-solid fa-pen-to-square" data-id="${product.id}"></i>
                    <p data-id="${product.id}">Edit</p>
                </div>
                <div class="card-action__delete" data-id="${product.id}">
                    <i class="fa-solid fa-trash" data-id="${product.id}"></i>
                    <p data-id="${product.id}"> Delete</p>
                </div>
             </div>
        </div>
        `;
    const editBtn = document.querySelectorAll(".card-action__edit");
    editBtn.forEach((button) => {
      button.addEventListener("click", (btn) => {
        console.log("bart");
        const targetID = parseInt(btn.target.dataset.id);
        startEdit(products, targetID);
      });
    });

    // Delete
    const deleteBtn = document.querySelectorAll(".card-action__delete");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", (btn) => {
        const targetID = parseInt(btn.target.dataset.id);
        startDeletion(products, targetID);
      });
    });
  });

  // Edit
}
