import { modal } from "../createElements/modal.js";

export function displayModal() {
  const modalContainer = document.querySelector(".modal-container");

  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modalContainer.innerHTML = modal;
}
