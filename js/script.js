import { getFeatured } from "../components/apicalls/getFeatured.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";

import { baseUrl } from "../components/consts/baseUrl.js";

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

getFeatured(baseUrl);
