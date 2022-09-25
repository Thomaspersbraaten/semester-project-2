import { editProduct } from "../formSubmissions/editProduct.js";
import { fillForms } from "./fillForms.js";
import { displayModal, hideModal } from "../ui/index.js";
import { validateDescription, validatePrice, validateTitle } from "../validations/index.js";

export function editPanel(product) {
  displayModal();
  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");
  const modalForm = document.querySelector(".modal-form");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Confirm edit";
  modalHeader.innerHTML = "Edit product";

  fillForms(product);

  // Cancel action
  btnCancel.addEventListener("click", (event) => {
    event.preventDefault();
    hideModal();
  });

  // Edit action

  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const imageUrlInput = document.querySelector("#image");
  const editForm = document.querySelector(".modal-form");
  const imageContainer = document.querySelector(".form-image__img");

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    imageContainer.src = imageUrlInput.value;
    const titleValid = validateTitle();
    const descriptionValid = validateDescription();
    const priceValid = validatePrice();
    if (titleValid === true && descriptionValid === true && priceValid === true) {
      const featuredCheck = document.querySelector(".form-check__input");
      const titleValue = titleInput.value.trim();
      const descValue = descInput.value.trim();
      const priceValue = priceInput.value.trim();
      const imageUrlValue = imageUrlInput.value;
      editProduct(titleValue, descValue, priceValue, imageUrlValue, featuredCheck.checked, editForm.dataset.id);
    }
  });
}
