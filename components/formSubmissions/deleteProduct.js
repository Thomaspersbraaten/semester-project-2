import { baseUrl } from "../consts/baseUrl.js";
import { displayMessage } from "../displayMessage.js";
import { getToken } from "../storage/storage.js";

export async function deleteProduct({ id, title }) {
  console.log("yes");
  console.log(id);
  const token = getToken();
  const deleteUrl = baseUrl + "products/" + id;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  try {
    const response = await fetch(deleteUrl, options);
    const json = await response.json();
    console.log(json);
    if (json.id) {
      const modalHeader = document.querySelector(".modal__header");
      modalHeader.style.display = "none";

      const modalForm = document.querySelector(".modal-form");
      modalForm.style.display = "none";
      const modalButtons = document.querySelector(".modal__btns");
      modalButtons.innerHTML = `<button class="btn btn-large back-to-admin" >Back to admin panel</button>`;
      const backToAdminBtn = document.querySelector(".back-to-admin");
      backToAdminBtn.addEventListener("click", () => {
        location.href = "/admin.html";
      });
      displayMessage("alert-success", `<div><p>Deletion of this product was succesfull:</p><h2>"${title}"</h2><p>Click the button to go back</p></div>`, ".modal-form__message");
      // location.reload();

      // legg inn blank form med succemessage og back button.
    }
    if (json.error) {
      displayMessage("alert-danger", "Something went wrong during deletion", ".modal-form__message");
    }
  } catch (error) {
    console.log(error);
    displayMessage("alert-danger", "An error occured when trying to delete", ".modal-form__message");
  }
}
