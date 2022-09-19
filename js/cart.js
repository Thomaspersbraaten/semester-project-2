// import { createNavMenu } from "../components/createElements/createNavMenu.js";
import { cartPage } from "../components/createElements/cartPage.js";
// import { cartInfo } from "../components/createElements/cartInfo.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";

// import { createBreadcrumbs } from "../components/createElements/breadcrumbs.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();
window.addEventListener("resize", fixMenuPosition);
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

// createNavMenu();
// cartInfo();
// createBreadcrumbs();

cartPage();
