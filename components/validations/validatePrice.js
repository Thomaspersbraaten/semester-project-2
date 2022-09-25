import { checkLength } from "./checkLength.js";

export function validatePrice() {
  const priceInput = document.querySelector("#price");
  const priceError = document.querySelector(".price-error");

  const priceValue = priceInput.value;

  if (checkLength(priceValue, 0)) {
    priceError.style.display = "none";
    priceInput.classList.add("validated--ok");
    priceInput.classList.remove("validated--error");
    return true;
  } else {
    priceError.style.display = "flex";
    priceInput.classList.remove("validated--ok");
    priceInput.classList.add("validated--error");
    return false;
  }
}
