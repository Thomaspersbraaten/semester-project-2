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
            <div class="btn-container"> </div>
        
            </div>
        </div>
        <p class="details__description">${description}</p>
    </div>
    `;
  // <button class="btn btn-large btn-cart"></button>
  //   const cartBtn = document.querySelector(".btn-cart");
  cartButton(id, product);
  //   cartBtn.addEventListener("click", () => {
  //     const isProductInCart = cartContents.find((item) => {
  //       return item.id === id;
  //     });

  //     console.log(isProductInCart);
  //     if (!isProductInCart) {
  //       cartBtn.classList.toggle("btn-cart--add");
  //       cartBtn.innerHTML = "Add to cart";
  //     }
  //     if (isProductInCart) {
  //       cartBtn.classList.toggle = "cart-btn--remove";
  //       cartBtn.innerHTML = "Remove from cart";
  //     }
  //   });
  //   cartBtn.addEventListener("click", () => {
  //     cartButton(id);
  //   });
}
