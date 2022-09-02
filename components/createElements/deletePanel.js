import { modal } from "./createModal.js";
import { fillForms } from "./fillForms.js";
import { deleteProduct } from "../ui/deleteProduct.js";
export function deletePanel(product) {
  //   console.log(productId);
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.style.display = "flex";
  modalContainer.innerHTML = modal;

  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Delete it";
  btnConfirm.classList.remove("btn-success");
  btnConfirm.classList.add("btn-danger");
  modalHeader.innerHTML = "Are you sure you want to delete this product?";

  // Cancel actions
  btnCancel.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "none";
  });
  const deleteaction = "delete";

  fillForms(product, deleteaction);

  btnConfirm.addEventListener("click", () => {
    deleteProduct(product);
  });
}
