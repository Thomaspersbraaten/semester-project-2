export function hideModal() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.innerHTML = "";
  modalContainer.style.visibility = "hidden";
  modalContainer.style.opacity = "0";
}
