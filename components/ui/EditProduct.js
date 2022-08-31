import { baseUrl } from "../consts/baseUrl.js";
import { getToken } from "../storage/storage.js";
import { displayMessage } from "../displayMessage.js";

export async function editProduct(titleValue, descriptionValue, priceValue, imageUrlValue, isFeatured, targetId) {
  const token = getToken();
  const editUrl = baseUrl + "products/" + targetId;

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
    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("alert-warning", "There was an error during creation", ".modal-form__message");
  }
}
