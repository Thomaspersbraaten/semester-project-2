import { hamburgerMenu, fixMenuPosition, scrollToTop, showAndHideScrollToTopBtn } from "../components/ui/index.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { getHeroImage } from "../components/apicalls/getHeroImage.js";
import { getHomeProducts } from "../components/apicalls/getHomeProducts.js";
import { setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";

setupCartInfo();
setupNavMenu();

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);

getHomeProducts(herokuUrl);

// Sets up the hero image for the home page
getHeroImage(herokuUrl);
// const heroContainer = document.querySelector(".hero-image-container");
// const getImage = await getHeroImage(herokuUrl);

window.addEventListener("scroll", (e) => {
  showAndHideScrollToTopBtn();
});
const scrollToTopBtn = document.querySelector(".fa-angle-up");
scrollToTopBtn.addEventListener("click", scrollToTop);
// async function kekw() {
//   return getHeroImage(herokuUrl);
// }
// const image = await kekw();
// console.log(image);
