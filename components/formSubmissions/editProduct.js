import { getToken } from "../storage/storage.js";
import { displayMessage } from "../feedback/displayMessage.js";
import { herokuUrl } from "../consts/herokuUrl.js";

export async function editProduct(titleValue, descriptionValue, priceValue, imageUrlValue, isFeatured, targetId) {
  const token = getToken();
  const editUrl = herokuUrl + "products/" + targetId;
  const data = JSON.stringify({ title: titleValue, description: descriptionValue, price: priceValue, image_url: imageUrlValue, featured: isFeatured });
  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  try {
    const response = await fetch(editUrl, options);
    const json = await response.json();
    if (json.updated_at) {
      displayMessage("alert-success", "Product was succesfully edited!", ".modal-form-message");
      const form = document.querySelector(".modal-form");
      form.style.display = "none";
      const modal = document.querySelector(".modal");
      modal.innerHTML += `<a href="admin.html" class="btn btn-large btn-warning cancel back-to-admin">Back to admin page</a>`;
    }
    if (json.error) {
      displayMessage("alert-warning", "Product edit has failed", ".modal-form-message");
    }
  } catch (error) {
    displayMessage("alert-warning", "There was an error during creation", ".modal-form-message");
  }
}
