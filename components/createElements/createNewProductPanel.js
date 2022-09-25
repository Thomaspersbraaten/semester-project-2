import { createNewProduct } from "../formSubmissions/createNewProduct.js";
import { displayModal } from "../ui/displayModal.js";
import { hideModal } from "../ui/hideModal.js";
import { validateTitle, validateDescription, validatePrice } from "../validations/index.js";

export function createNewProductPanel() {
  displayModal();

  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Create it";
  modalHeader.innerHTML = "Create a new product";

  // Cancel actions

  btnCancel.addEventListener("click", (event) => {
    event.preventDefault();
    hideModal();
  });

  // Create actions

  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const imageUrlInput = document.querySelector("#image");
  const imageContainer = document.querySelector(".form-image__img");

  // Sets the src in the img tag on input
  imageUrlInput.addEventListener("input", () => {
    imageContainer.src = imageUrlInput.value;
  });

  titleInput.addEventListener("blur", validateTitle);
  descInput.addEventListener("blur", validateDescription);
  priceInput.addEventListener("blur", validatePrice);

  const modalForm = document.querySelector(".modal-form");
  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleValid = validateTitle();
    const descriptionValid = validateDescription();
    const priceValid = validatePrice();

    if (titleValid === true && descriptionValid === true && priceValid === true) {
      const featuredCheck = document.querySelector(".form-check__input");
      const titleValue = titleInput.value.trim();
      const descValue = descInput.value.trim();
      const priceValue = priceInput.value.trim();
      const imageUrlValue = imageUrlInput.value;
      createNewProduct(titleValue, descValue, priceValue, featuredCheck.checked, imageUrlValue);
    }
  });

  // Makes it impossible to input anything other than numbers into the price input
  priceInput.addEventListener("keypress", (event) => {
    if ((event.which != 8 && event.which != 0 && event.which < 48) || event.which > 57) {
      event.preventDefault();
    }
  });
}
