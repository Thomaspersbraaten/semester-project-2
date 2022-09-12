import { homeProducts } from "../createElements/homeProducts.js";

export async function getHomeProducts(url) {
  console.log(url);
  const response = await fetch(url + "products");
  const data = await response.json();

  data.forEach((product) => {
    if (product.featured === true) {
      homeProducts(product, ".featured");
    }
  });
  data.forEach((product) => {
    if (!product.featured) {
      console.log(product.featured);
      homeProducts(product, ".un-featured");
    }
  });
}
