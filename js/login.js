import { hamburgerMenu, fixMenuPosition } from "../components/ui/index.js";
import { submitLoginForm } from "../components/formSubmissions/submitLoginForm.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
import { displayMessage } from "../components/feedback/displayMessage.js";
// Initial page setup
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();
window.addEventListener("resize", fixMenuPosition);
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

//

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.toLowerCase();
  const passwordValue = passwordInput.value;

  // Validation check on email is handled by bootstrap.
  // No validation on password (except when its empty), because we do not want to give any feedback on password structure due to site security.
  if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
    return displayMessage("alert-warning", "Please input at least one character in each field", ".login-form__message-container");
  } else {
    submitLoginForm(emailValue, passwordValue);
  }
});
