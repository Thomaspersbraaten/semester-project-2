// import { getFeatured } from "../components/apicalls/getFeatured.js";
import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { createNavMenu } from "../components/createElements/createNavMenu.js";

import { herokuUrl } from "../components/consts/herokuUrl.js";
import { getHeroImage } from "../components/apicalls/getHeroImage.js";
import { getHomeProducts } from "../components/apicalls/getHomeProducts.js";
import { cartInfo } from "../components/createElements/cartInfo.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
window.addEventListener("resize", fixMenuPosition);
createNavMenu();
const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);

cartInfo();
getHomeProducts(herokuUrl);

const getImage = await getHeroImage(herokuUrl);

console.log(getImage.hero_banner.url);

// console.log(getImage.hero_banner);
const theheroImage = getImage.hero_banner.url;

const heroContainer = document.querySelector(".hero-image-container");
heroContainer.innerHTML = `
<img src="${theheroImage}" class="hero-image-container__image">
`;
