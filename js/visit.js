import { hamburgerMenu, fixMenuPosition } from "../components/ui/index.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
SetupBreadcrumbs();
setupCartInfo();
setupNavMenu();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);
