import { getCart, saveCart } from "../storage/storage.js";
import { cartInfo } from "./cartInfo.js";

export function cartButton(id, product) {
  //   console.log(cartContents);
  let cartContents = getCart();
  cartInfo();

  //   const isProductInCart = cartContents.find((item) => {
  //     return item.id === id;
  //   });    const btnContainer = document.querySelector(".btn-container");
  const btnContainer = document.querySelector(".btn-container");
  const isProductInCart = cartContents.some((item) => {
    return item.id === id;
  });

  if (!isProductInCart) {
    btnContainer.innerHTML = `
    <button class="btn btn-large btn-cart--add">Add to Cart </button>`;
    const AddToCartBtn = document.querySelector(".btn-cart--add");
    AddToCartBtn.addEventListener("click", () => {
      cartContents.push(product);
      console.log(cartContents);
      saveCart(cartContents);
      cartButton(id, product);
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
      console.log(newArray);
      saveCart(newArray);
      cartButton(id, product);
    });
  }
}
