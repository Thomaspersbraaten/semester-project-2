// import { homeProducts } from "../createElements/homeProducts.js";
// import { displayMessage } from "../feedback/displayMessage.js";
// const contentContainer = document.querySelector(".main-content");

// // Gets all the products for the home page
// export async function getHomeProducts(url) {
//   try {
//     const response = await fetch(url + "products");
//     const data = await response.json();

//     // splits featured and not featured into separate sections on the home page
//     data.forEach((product) => {
//       if (product.featured === true) {
//         homeProducts(product, ".featured");
//       }
//     });
//     data.forEach((product) => {
//       if (!product.featured) {
//         homeProducts(product, ".un-featured");
//       }
//     });
//   } catch (error) {
//     displayMessage("catch-error", "there was an error fetching the products", ".main-content");
//   } finally {
//     // hides spinner and shows the main content for the home page
//     const spinner = document.querySelector(".spinner-container");
//     spinner.style.display = "none";
//     contentContainer.style.display = "block";
//   }
// }
