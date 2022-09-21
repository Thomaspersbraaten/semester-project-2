const itemContainer = document.querySelector(".admin-item-container");
const spinner = document.querySelector(".spinner-container");
import { startEdit } from "../ui/startEdit.js";
import { startDeletion } from "../ui/startDeletion.js";
import { getAllProducts } from "../apicalls/getAllProducts.js";
// import { baseUrl } from "../consts/baseUrl.js";
import { herokuUrl } from "../consts/herokuUrl.js";

export function createAdminItems(products) {
  itemContainer.innerHTML = "";

  itemContainer.style.opacity = "1";
  spinner.style.display = "none";
  products.forEach((product) => {
    const { id, image_url, title, price } = product;
    itemContainer.innerHTML += `
        <div class="card col">
            <img class="card__img img-fluid" src="${image_url}" alt="${title}">
            <div class="card-body">
              <h3 class="card-title" >${title}</h3>
              <p class="card-price">${price}</p>
              <div class="card-action">
                <div class="card-action__edit" data-id="${id}">
                    <i class="fa-solid fa-pen-to-square" data-id="${id}"></i>
                    <p data-id="${id}">Edit</p>
                </div>
                <div class="card-action__delete" data-id="${id}">
                    <i class="fa-solid fa-trash" data-id="${id}"></i>
                    <p data-id="${id}">Delete</p>
                </div>
             </div>
        </div>
        `;
    // Edit
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
}
