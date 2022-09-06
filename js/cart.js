import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { cartPage } from "../components/createElements/cartPage.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { cartQuantityInfo } from "../components/createElements/cartQuantityInfo.js";
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
createNavMenu();
cartQuantityInfo();

cartPage();
