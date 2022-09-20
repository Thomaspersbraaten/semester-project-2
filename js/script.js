import { hamburgerMenu } from "../components/ui/hamburgerMenu.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { getHeroImage } from "../components/apicalls/getHeroImage.js";
import { getHomeProducts } from "../components/apicalls/getHomeProducts.js";
import { fixMenuPosition } from "../components/ui/fixMenuPosition.js";
import { setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";

setupCartInfo();
setupNavMenu();

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);

getHomeProducts(herokuUrl);

// Sets up the hero image for the home page
const heroContainer = document.querySelector(".hero-image-container");
const getImage = await getHeroImage(herokuUrl);
const theheroImage = getImage.hero_banner.url;

heroContainer.innerHTML = `
<img src="${theheroImage}" class="hero-image-container__image">
<div class="hero-image-container__filter"></div>
`;
