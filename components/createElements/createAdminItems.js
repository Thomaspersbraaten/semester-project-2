// import { startEdit } from "../ui/index.js";
import { deletePanel } from "./deletePanel.js";
import { editPanel } from "./editPanel.js";
import { populateContainerWithCards } from "./populateContainerWithCards.js";
// Creates the admin cards, and adds the functions for the delete and edit button on the products.
export function createAdminItems(products) {
  const itemContainer = document.querySelector(".admin-item-container");
  itemContainer.innerHTML = "";
  console.log(products);
  products.forEach((product) => {
    populateContainerWithCards(product, ".admin-item-container");

    // Edit
    // Shows the edit panel
    const editBtn = document.querySelectorAll(".card-action__edit");
    editBtn.forEach((button) => {
      button.addEventListener("click", (btn) => {
        const targetID = parseInt(btn.target.dataset.id);
        // startEdit(products, targetID);
        const clickedProduct = products.find((item) => {
          return item.id === targetID;
        });
        editPanel(clickedProduct);
      });
    });

    // Delete
    // Shows the delete panel which acts as a confirmation for deletion
    const deleteBtn = document.querySelectorAll(".card-action__delete");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", (btn) => {
        const targetID = parseInt(btn.target.dataset.id);
        const clickedProduct = products.find((item) => {
          return item.id === targetID;
        });
        deletePanel(clickedProduct);
      });
    });
  });
}
