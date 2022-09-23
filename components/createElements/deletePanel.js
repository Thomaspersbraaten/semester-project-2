import { deleteProduct } from "../formSubmissions/deleteProduct.js";
import { fillForms } from "./fillForms.js";
import { displayModal } from "../ui/displayModal.js";
import { hideModal } from "../ui/hideModal.js";

export function deletePanel(product) {
  displayModal();

  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Delete it";
  btnConfirm.classList.remove("btn-success");
  btnConfirm.classList.add("btn-danger");
  modalHeader.innerHTML = "Are you sure you want to delete this product?";
  modalHeader.style.color = "red";
  const modalMessageContainer = document.querySelector(".modal-form-message");
  modalMessageContainer.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;

  // Cancel actions
  btnCancel.addEventListener("click", () => {
    hideModal();
  });
  const deleteaction = "delete";

  fillForms(product, deleteaction);

  btnConfirm.addEventListener("click", () => {
    deleteProduct(product);
  });
}
