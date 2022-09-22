import { hamburgerMenu, fixMenuPosition, scrollToTop, showAndHideScrollToTopBtn } from "../components/ui/index.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { getHeroImage } from "../components/apicalls/getHeroImage.js";
// import { getHomeProducts } from "../components/apicalls/getHomeProducts.js";
import { setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";
import { getAllProducts } from "../components/apicalls/getAllProducts.js";
// import { homeProducts } from "../components/createElements/homeProducts.js";
import { populateContainerWithCards } from "../components/createElements/populateContainerWithCards.js";

setupCartInfo();
setupNavMenu();

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);

// gets hero image and products for the site. Populates the containers, displays content and hides spinner.
getHeroImage(herokuUrl);
// getHomeProducts(herokuUrl);

const products = await getAllProducts(herokuUrl);

products.forEach((product) => {
  if (product.featured === true) {
    populateContainerWithCards(product, ".featured");
  }
});
products.forEach((product) => {
  if (!product.featured) {
    populateContainerWithCards(product, ".un-featured");
  }
});

// function test() {
//   main.addEventListener("scroll", (e) => {
//     showAndHideScrollToTopBtn();
//   });
//   const scrollToTopBtn = document.querySelector(".fa-angle-up");
//   scrollToTopBtn.addEventListener("click", scrollToTop);
// }

// test();
