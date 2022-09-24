import { productCartFeedback } from "../feedback/productCartFeedback.js";
import { getCart, saveCart } from "../storage/storage.js";
import { setupCartInfo } from "../createElements/pageSetup/setupCartInfo.js";

// Add's and removes the product from the shopping cart.
// Shows feedback when item is removed or added and the cart info is updated(The number over the cart icon)
export function cartButton(id, product) {
  let cartContents = getCart();
  setupCartInfo();

  const btnContainer = document.querySelector(".btn-container");
  const isProductInCart = cartContents.some((item) => {
    return item.id === id;
  });

  if (!isProductInCart) {
    btnContainer.innerHTML = `
    <button class="btn btn-large btn-cart--add">Add to Cart</button>`;
    const AddToCartBtn = document.querySelector(".btn-cart--add");
    AddToCartBtn.addEventListener("click", () => {
      // Add the "amount" property to the product, so the user can order more than one item. This is handled inside the shopping cart.
      product.amount = 1;

      cartContents.push(product);
      saveCart(cartContents);
      cartButton(id, product);
      productCartFeedback(isProductInCart);
    });
  }
  if (isProductInCart) {
    btnContainer.innerHTML = `
    <button class="btn btn-large btn-cart--remove">Remove from cart</button>`;
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
