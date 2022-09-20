import { cartPage } from "../createElements/cartPage.js";
import { setupCartInfo } from "../createElements/pageSetup/index.js";
import { saveCart } from "../storage/storage.js";
let timerID;
export function updateCartAmounts(newArray) {
  clearTimeout(timerID);

  timerID = setTimeout(() => {
    saveCart(newArray);
    cartPage();
    setupCartInfo();
  }, 1300);
}
