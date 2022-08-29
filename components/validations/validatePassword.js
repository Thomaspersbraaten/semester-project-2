import { checkLength } from "./index.js";

const passwordError = document.querySelector(".password-error");
const passwordInput = document.querySelector("#password");
let passwordValid = false;
export function validatePassword(password) {
  if (checkLength(password, 0)) {
    passwordError.style.visibility = "hidden";
    passwordInput.classList.remove("error");
    passwordValid = true;
  } else {
    passwordError.style.visibility = "visible";
    passwordInput.classList.add("error");
    passwordValid = false;
  }
  return passwordValid;
}
