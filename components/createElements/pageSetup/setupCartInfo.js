import { getCart } from "../../storage/storage.js";

// Shows how many items are in the shopping cart in the upper right of the cart icon across all pages

export function setupCartInfo() {
  const cartInfoContainer = document.querySelector(".cart-info");
  cartInfoContainer.innerHTML = "";
  const cart = getCart();
  let cartAmount = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   cartAmount += cart[i].amount;
  // }
  cart.forEach((item) => {
    cartAmount += item.amount;
  });

  if (cart.length >= 1) {
    cartInfoContainer.innerHTML = cartAmount;
    cartInfoContainer.style.opacity = "1";
  } else {
    cartInfoContainer.innerHTML = "";
    cartInfoContainer.style.opacity = "0";
  }
}
