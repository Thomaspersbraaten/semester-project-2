import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { submitLoginForm } from "../components/formSubmissions/submitLoginForm.js";
import { baseUrl } from "../components/consts/baseUrl.js";
import { checkEmail, validateEmail, validatePassword } from "../components/validations/index.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";

import { cartInfo } from "../components/createElements/cartInfo.js";
import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";

createNavMenu();
cartInfo();
createBreadcrumbs();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
const loginForm = document.querySelector(".login-form");
const btn = document.querySelector(".btn");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();

//   const emailValue = emailInput.value.toLowerCase();
//   const passwordValue = passwordInput.value;
//   console.log(emailValue, passwordValue);
//   //   validateEmail(emailValue, emailValid);
//   //   if (validateEmail) {
//   //     console.log("success");
//   //   }
//   let emailValid = validateEmail(emailValue);
//   let passwordValid = validatePassword(passwordValue);
//   if (emailValid && passwordValid) {
//     submitLoginForm(emailValue, passwordValue);
//   } else {
//   }
// });

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.toLowerCase();
  const passwordValue = passwordInput.value;
  console.log(emailValue, passwordValue);
  //   validateEmail(emailValue, emailValid);
  //   if (validateEmail) {
  //     console.log("success");
  //   }
  let emailValid = validateEmail(emailValue);
  let passwordValid = validatePassword(passwordValue);
  if (emailValid && passwordValid) {
    submitLoginForm(emailValue, passwordValue);
  } else {
  }
});
