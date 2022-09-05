import { getCart } from "../storage/storage.js";

export function cartInfo() {
  const cartInfoContainer = document.querySelector(".cart-info");
  cartInfoContainer.innerHTML = "";
  let cart = getCart();
  console.log(cart);

  cartInfoContainer.innerHTML = `${cart.length}`;
  cartInfoContainer.style.opacity = "1";
}
