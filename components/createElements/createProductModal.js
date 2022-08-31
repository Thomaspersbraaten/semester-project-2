import { modal } from "./createModal.js";
import { createNewProduct } from "../ui/createNewProduct.js";
import { displayMessage } from "../displayMessage.js";
export function createProductModal() {
  //
  // Setup the modal
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.style.display = "flex";
  modalContainer.innerHTML = modal;
  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Create it";
  modalHeader.innerHTML = "Create a new product";

  // Cancel actions

  btnCancel.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "none";
  });

  // Create actions

  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const imageUrl = document.querySelector("#image-url");

  //   const formMessage = document.querySelector(".modal-form__message");

  btnConfirm.addEventListener("click", () => {
    const featuredCheck = document.querySelector(".form-check-input");
    const titleValue = titleInput.value.trim();
    const descValue = descInput.value.trim();
    const priceValue = priceInput.value.trim();
    const imageUrlValue = imageUrl.value;

    console.log(titleValue);
    //
    console.log(titleValue.length);

    // if (titleValue.length === 0 || descValue.length === 0 || priceValue.value === 0) {
    //   return displayMessage("alert-warning", "Please input atleast one character in each field", ".modal-form__message");
    // } else {
    //   createNewProduct(titleValue, descValue, priceValue, featuredCheck.checked, imageUrlValue);
    // }
    if (titleValue.length === 0 || descValue.length === 0 || priceValue.value === 0) return displayMessage("alert-warning", "Please input atleast one character in each field", ".modal-form__message");

    createNewProduct(titleValue, descValue, priceValue, featuredCheck.checked, imageUrlValue);
  });
}
