import { productCartFeedback } from "../feedback/productCartFeedback.js";
import { getCart, saveCart } from "../storage/storage.js";
import { cartInfo } from "./cartInfo.js";

export function cartButton(id, product) {
  let cartContents = getCart();
  cartInfo();

  const btnContainer = document.querySelector(".btn-container");
  const isProductInCart = cartContents.some((item) => {
    return item.id === id;
  });

  if (!isProductInCart) {
    btnContainer.innerHTML = `
    <button class="btn btn-large btn-cart--add">Add to Cart </button>`;
    const AddToCartBtn = document.querySelector(".btn-cart--add");
    AddToCartBtn.addEventListener("click", () => {
      product.amount = 1;
      // console.log(product.quantity);
      cartContents.push(product);

      saveCart(cartContents);
      cartButton(id, product);
      productCartFeedback(isProductInCart);
    });
  }
  if (isProductInCart) {
    btnContainer.innerHTML = `
    <button class="btn btn-large btn-cart--remove">Remove from cart </button>`;

    const removeFromCartBtn = document.querySelector(".btn-cart--remove");

    removeFromCartBtn.addEventListener("click", () => {
      const newArray = cartContents.filter((item) => {
        return item.id != id;
      });

      saveCart(newArray);
      cartButton(id, product);
      productCartFeedback(isProductInCart);
    });
  }
}
