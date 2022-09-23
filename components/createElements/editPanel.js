import { editProduct } from "../formSubmissions/editProduct.js";
import { fillForms } from "./fillForms.js";
import { displayModal } from "../ui/displayModal.js";
import { hideModal } from "../ui/hideModal.js";

export function editPanel(product) {
  displayModal();
  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Confirm edit";
  modalHeader.innerHTML = "Edit product";

  fillForms(product);

  // Cancel action
  btnCancel.addEventListener("click", () => {
    hideModal();
  });

  // Edit action
  btnConfirm.addEventListener("click", () => {
    const titleInput = document.querySelector("#title");
    const descInput = document.querySelector("#description");
    const priceInput = document.querySelector("#price");
    const imageUrl = document.querySelector("#image-url");
    const featured = document.querySelector(".form-check__input");
    const editForm = document.querySelector(".modal-form");

    editProduct(titleInput.value, descInput.value, priceInput.value, imageUrl.value, featured.checked, editForm.dataset.id);
  });
}
