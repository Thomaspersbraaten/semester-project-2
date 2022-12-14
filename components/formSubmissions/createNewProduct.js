import { displayMessage } from "../feedback/displayMessage.js";
import { getToken } from "../storage/storage.js";
import { herokuUrl } from "../consts/herokuUrl.js";

export async function createNewProduct(titleValue, descriptionValue, priceValue, isFeatured, imageUrl) {
  const token = getToken();

  const newProductUrl = herokuUrl + "products";
  const data = JSON.stringify({ title: titleValue, description: descriptionValue, price: priceValue, image_url: imageUrl, featured: isFeatured });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  try {
    const response = await fetch(newProductUrl, options);
    const json = await response.json();
    if (json.created_at) {
      displayMessage("alert-success", "Product was succesfully created!", ".modal-form-message");
      const form = document.querySelector(".modal-form");
      form.style.display = "none";
      const modal = document.querySelector(".modal");
      modal.innerHTML += `<a href="admin.html" class="btn btn-large btn-warning cancel back-to-admin">Back to admin page</a>`;
    }
    if (json.error) {
      displayMessage("alert-warning", "Product creation has failed", ".modal-form-message");
    }
  } catch (error) {
    displayMessage("alert-warning", "There was an error during creation", ".modal-form-message");
  }
}
