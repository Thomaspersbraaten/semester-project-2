import { startEdit, startDeletion } from "../ui/index.js";
import { populateContainerWithCards } from "./populateContainerWithCards.js";

// Creates the admin cards, and adds the functions for the delete and edit button on the products.
export function createAdminItems(products) {
  const itemContainer = document.querySelector(".admin-item-container");
  itemContainer.innerHTML = "";

  products.forEach((product) => {
    populateContainerWithCards(product, ".admin-item-container");

    // Edit
    const editBtn = document.querySelectorAll(".card-action__edit");
    editBtn.forEach((button) => {
      button.addEventListener("click", (btn) => {
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
