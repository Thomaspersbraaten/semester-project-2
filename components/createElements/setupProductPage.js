import { getCart } from "../storage/storage.js";
import { cartButton } from "./cartButton.js";

export function setupProductPage(product) {
  // export function setupProductPage({ title, description, image_url, price, id }) {
  const detailsContainer = document.querySelector(".details-container");
  const { title, description, image_url, price, id } = product;

  //   console.log(image_url);
  //   add meta desc
  // https://www.w3schools.com/tags/tag_meta.asp
  document.title = `${title}`;
  detailsContainer.innerHTML = `
    <div class="details">
        <h1 class="details__header">${title}</h1>
        <div class="image-price-button">
            <img src="${image_url}" class="details-image">
            <div class="price-and-button">
              <p class="details-price">${price}</p>
              <div class="btn-container"></div>
            </div>
            <p class="details__description">${description}</p> 
        </div>
   
    </div>
    `;

  cartButton(id, product);
}
