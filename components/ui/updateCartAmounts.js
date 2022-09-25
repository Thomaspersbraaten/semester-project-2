import { cartPage } from "../createElements/cartPage.js";
import { setupCartInfo } from "../createElements/pageSetup/index.js";
import { saveCart } from "../storage/storage.js";
let timerID;

// Updates the amount of items in the cart.
// If the function is called again before the timeout is finished it is
// cleared and restarted so the user can keep clicking or change the input.
// When timer is done, update cart and repopulate the page.
export function updateCartAmounts(newArray) {
  clearTimeout(timerID);

  timerID = setTimeout(() => {
    saveCart(newArray);
    cartPage();
    setupCartInfo();
  }, 1350);
}
