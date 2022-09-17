import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";

createBreadcrumbs();
createNavMenu();
cartInfo();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
