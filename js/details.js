const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
import { getProductPage } from "../components/apicalls/getProductPage.js";
import { setupProductPage } from "../components/createElements/setupProductPage.js";
import { fixMenuPosition, hamburgerMenu } from "../components/ui/index.js";
import { herokuUrl } from "../components/consts/herokuUrl.js";
import { SetupBreadcrumbs, setupCartInfo, setupNavMenu } from "../components/createElements/pageSetup/index.js";

// Initial page setup
const detailsUrl = herokuUrl + "products/" + id;
const theProduct = await getProductPage(detailsUrl);

setupCartInfo();
setupNavMenu();
SetupBreadcrumbs(theProduct);

const hamburgerButton = document.querySelector(".hamburger");
hamburgerButton.addEventListener("click", hamburgerMenu);
window.addEventListener("resize", fixMenuPosition);
//

setupProductPage(theProduct);
