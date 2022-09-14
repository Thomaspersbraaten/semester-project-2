// import { getFeatured } from "../components/apicalls/getFeatured.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";

import { baseUrl } from "../components/consts/baseUrl.js";

import { getHeroImage } from "../components/apicalls/getHeroImage.js";
import { getHomeProducts } from "../components/apicalls/getHomeProducts.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
window.addEventListener("resize", fixMenuPosition);
createNavMenu();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

// getFeatured(baseUrl);
cartInfo();
getHomeProducts(baseUrl);

const getImage = await getHeroImage(baseUrl);

console.log(getImage);

console.log(getImage.hero_banner);
const theheroImage = baseUrl + "uploads/hero_a52ba3f4d8.jpg";

const heroContainer = document.querySelector(".hero-image-container");
heroContainer.innerHTML = `
<img src="${theheroImage}" class="hero-image-container__image">
`;
