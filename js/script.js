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

// document.addEventListener("scroll", () => {
//   console.log("yes");
// });

// window.onscroll = () => {
//   console.log("yes");
// };
// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
const header = document.querySelector("header");

const truck = document.querySelector(".fa-truck");

// window.onscroll = function () {
//   scrollFunction();
// };
window.addEventListener("scroll", (e) => {
  scrollFunction();
});
const scrollToTopBtn = document.querySelector(".fa-angle-up");

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    setTimeout(() => {
      scrollToTopBtn.style.visibility = "visible";
      scrollToTopBtn.style.opacity = "1";
    }, 500);
  }

  if (document.documentElement.scrollTop < 400) {
    scrollToTopBtn.style.opacity = "0";
    setTimeout(() => {
      scrollToTopBtn.style.visibility = "hidden";
    }, 500);
  }
}
scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
