import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { submitLoginForm } from "../components/formSubmissions/submitLoginForm.js";
import { validateEmail, validatePassword } from "../components/validations/index.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";

import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();
window.addEventListener("resize", fixMenuPosition);
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.toLowerCase();
  const passwordValue = passwordInput.value;

  let emailValid = validateEmail(emailValue);
  let passwordValid = validatePassword(passwordValue);
  if (emailValid && passwordValid) {
    submitLoginForm(emailValue, passwordValue);
  } else {
  }
});
