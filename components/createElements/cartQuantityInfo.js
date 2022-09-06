import { getCart } from "../storage/storage.js";

export function cartQuantityInfo() {
  const cartInfoContainer = document.querySelector(".cart-info");
  cartInfoContainer.innerHTML = "";
  let cart = getCart();
  // console.log(cart);
  if (cart.length >= 1) {
    cartInfoContainer.innerHTML = `${cart.length}`;
    cartInfoContainer.style.opacity = "1";
  } else {
    cartInfoContainer.innerHTML = "";
    cartInfoContainer.style.opacity = "0";
  }
}
