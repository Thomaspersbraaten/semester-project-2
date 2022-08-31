import { baseUrl } from "../consts/baseUrl.js";
import { displayMessage } from "../displayMessage.js";
import { getToken } from "../storage/storage.js";
export async function createNewProduct(titleValue, descriptionValue, priceValue, isFeatured, imageUrl) {
  const token = getToken();
  console.log(isFeatured);
  console.log(token);
  const modalForm = document.querySelector(".modal-form");

  const newProductUrl = baseUrl + "products";

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
    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("alert-warning", "There was an error during creation", ".modal-form__message");
  }
}
