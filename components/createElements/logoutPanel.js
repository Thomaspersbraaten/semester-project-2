import { confirmLogout, displayModal, hideModal } from "../ui/index.js";

// shows the logout prompt
export function logoutPanel() {
  displayModal();
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.innerHTML = `
 <div class="modal"> 
    <h2 class="modal__header">Are you sure you want to log out?</h2>
    <div class="modal__btns">
    <button class="btn btn-large btn-warning cancel">Cancel</button>
    <button class="btn  btn-large btn-success confirm">Logout</button>
  </div>
  </div>
    `;

  const canclBtn = document.querySelector(".cancel");
  canclBtn.addEventListener("click", () => {
    hideModal();
  });

  const logoutBtn = document.querySelector(".confirm");
  logoutBtn.addEventListener("click", confirmLogout);
}
