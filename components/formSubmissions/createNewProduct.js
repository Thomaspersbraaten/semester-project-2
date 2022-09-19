// import { baseUrl } from "../consts/baseUrl.js";

import { displayMessage } from "../feedback/displayMessage.js";
import { getToken } from "../storage/storage.js";
import { createAdminItems } from "../createElements/createAdminItems.js";
import { getAllProducts } from "../apicalls/getAllProducts.js";
import { herokuUrl } from "../consts/herokuUrl.js";
export async function createNewProduct(titleValue, descriptionValue, priceValue, isFeatured, imageUrl) {
  const token = getToken();
  console.log(isFeatured);
  console.log(token);
  const modalForm = document.querySelector(".modal-form");

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
    console.log(json);
    if (json.created_at) {
      displayMessage("alert-success", "Product was succesfully created!", ".modal-form-message");
      // Repopulates the container with updated items.
      const products = await getAllProducts(herokuUrl);
      createAdminItems(products);
    }
    if (json.error) {
      displayMessage("alert-warning", "Product creation has failed", ".modal-form-message");
    }
  } catch (error) {
    console.log(error);
    displayMessage("alert-warning", "There was an error during creation", ".modal-form-message");
  }
}
