import { createNewProduct } from "../formSubmissions/createNewProduct.js";
import { displayMessage } from "../feedback/displayMessage.js";
import { displayModal } from "../ui/displayModal.js";
import { hideModal } from "../ui/hideModal.js";
export function createNewProductPanel() {
  displayModal();

  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Create it";
  modalHeader.innerHTML = "Create a new product";

  // Cancel actions

  btnCancel.addEventListener("click", () => {
    hideModal();
  });

  // Create actions

  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const imageUrl = document.querySelector("#image-url");

  btnConfirm.addEventListener("click", () => {
    const featuredCheck = document.querySelector(".form-check__input");
    const titleValue = titleInput.value.trim();
    const descValue = descInput.value.trim();
    const priceValue = priceInput.value.trim();
    const imageUrlValue = imageUrl.value;
    if (titleValue.length === 0 || descValue.length === 0 || priceValue.value === 0) return displayMessage("alert-warning", "Please input atleast one character in each field", ".modal-form__message");

    createNewProduct(titleValue, descValue, priceValue, featuredCheck.checked, imageUrlValue);
  });
}
