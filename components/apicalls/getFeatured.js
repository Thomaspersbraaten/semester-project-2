import { createFeaturedProduct } from "../createElements/createFeaturedProduct.js";
export async function getFeatured(url) {
  console.log(url);
  const response = await fetch(url + "products");
  const data = await response.json();

  data.forEach((product) => {
    if (product.featured === true) {
      createFeaturedProduct(product);
    }
  });
  data.forEach((product) => {
    if (product.featured === false) {
      createFeaturedProduct(product);
    }
  });
}
