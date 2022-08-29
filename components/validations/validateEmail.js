import { checkEmail } from "./index.js";
const emailError = document.querySelector(".email-error");
const emailInput = document.querySelector("#email");
let emailValid = false;
export function validateEmail(email) {
  if (checkEmail(email)) {
    emailValid = true;
    emailError.style.visibility = "hidden";
    emailInput.classList.remove("error");
  } else {
    emailValid = false;
    emailError.style.visibility = "visible";
    emailInput.classList.add("error");
  }
  return emailValid;
}
