import { confirmLogout } from "../ui/confirmLogout.js";
export function logoutPanel() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.style.display = "flex";
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
    modalContainer.innerHTML = "";
    modalContainer.style.display = "none";
  });

  const logoutBtn = document.querySelector(".confirm");
  logoutBtn.addEventListener("click", confirmLogout);
}