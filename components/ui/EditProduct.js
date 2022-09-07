import { baseUrl } from "../consts/baseUrl.js";
import { getToken } from "../storage/storage.js";
import { displayMessage } from "../displayMessage.js";
import { createAdminItems } from "../createElements/createAdminItems.js";
import { getAllProducts } from "../apicalls/getAllProducts.js";
// import { createProductModal } from "../createElements/createProductModal.js";
// import { startEdit } from "../ui/startEdit.js";

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
    if (json.updated_at) {
      displayMessage("alert-success", "Product was succesfully edited!", ".modal-form__message");
      // Repopulates the container with updated items.
      const products = await getAllProducts(baseUrl);
      createAdminItems(products);
    }
    if (json.error) {
      displayMessage("alert-warning", "Product edit has failed", ".modal-form__message");
    }
  } catch (error) {
    console.log(error);
    displayMessage("alert-warning", "There was an error during creation", ".modal-form__message");
  }
}
