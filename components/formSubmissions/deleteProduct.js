import { herokuUrl } from "../consts/herokuUrl.js";
import { displayMessage } from "../feedback/displayMessage.js";
import { getToken } from "../storage/storage.js";

export async function deleteProduct({ id, title }) {
  const token = getToken();
  const deleteUrl = herokuUrl + "products/" + id;
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

    if (json.id) {
      displayMessage("alert-success", `<div><p>Deletion of this product was succesfull:</p><h2>"${title}"</h2><p>Click the button to go back</p></div>`, ".modal-form-message");
      const modalHeader = document.querySelector(".modal__header");
      modalHeader.style.display = "none";
      const modalForm = document.querySelector(".modal-form");
      modalForm.style.display = "none";
      const modal = document.querySelector(".modal");
      modal.innerHTML += `<a href="admin.html" class="btn btn-large btn-warning cancel back-to-admin">Back to admin page</a>`;
    }
    if (json.error) {
      displayMessage("alert-danger", "Something went wrong during deletion", ".modal-form-message");
    }
  } catch (error) {
    displayMessage("alert-danger", "An error occured when trying to delete", ".modal-form-message");
  }
}
