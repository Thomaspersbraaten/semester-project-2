import { editProduct } from "../formSubmissions/editProduct.js";
import { modal } from "./createModal.js";
import { fillForms } from "./fillForms.js";
export function editPanel(product) {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.style.display = "flex";
  modalContainer.innerHTML = modal;

  const modalHeader = document.querySelector(".modal__header");
  const btnCancel = document.querySelector(".cancel");
  const btnConfirm = document.querySelector(".confirm");

  btnCancel.innerHTML = "Cancel";
  btnConfirm.innerHTML = "Confirm edit";
  modalHeader.innerHTML = "Edit product";

  fillForms(product);

  // Cancel actions
  btnCancel.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "none";
  });

  // Edit actions
  btnConfirm.addEventListener("click", () => {
    const titleInput = document.querySelector("#title");
    const descInput = document.querySelector("#description");
    const priceInput = document.querySelector("#price");
    const imageUrl = document.querySelector("#image-url");
    const featured = document.querySelector(".form-check__input");
    const editForm = document.querySelector(".modal-form");

    // const { createAt, description, featured, id, image, imageurl, price, published, at, title, updatedAt } = product;
    // const { description, featured, id, image, imageurl, price, published, at, title, updatedAt } = product;
    // console.log(description);
    // console.log(titleInput.value, descInput.value, priceInput.value, imageUrl.value, featured.checked);

    editProduct(titleInput.value, descInput.value, priceInput.value, imageUrl.value, featured.checked, editForm.dataset.id);
  });
}
