import { cartInfo } from "../components/createElements/cartInfo.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { cartPage } from "../components/createElements/cartPage.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
createNavMenu();
cartInfo();

cartPage();
