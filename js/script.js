import { getFeatured } from "../components/apicalls/getFeatured.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";

import { baseUrl } from "../components/consts/baseUrl.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
createNavMenu();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

getFeatured(baseUrl);
cartInfo();
