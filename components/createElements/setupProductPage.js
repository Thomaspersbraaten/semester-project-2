import { productCard } from "../consts/productCard.js";
import { getCart } from "../storage/storage.js";
import { cartButton } from "./cartButton.js";
export function setupProductPage(product) {
  const spinner = document.querySelector(".spinner-container");
  spinner.innerHTML = "";

  // export function setupProductPage({ title, description, image_url, price, id }) {
  const detailsContainer = document.querySelector(".details");
  const { title, description, image_url, price, id } = product;

  //   console.log(image_url);
  //   add meta desc
  // https://www.w3schools.com/tags/tag_meta.asp
  document.title = `${title}`;
  detailsContainer.innerHTML = productCard;

  cartButton(id, product);

  // meta
  const metaDescription = document.querySelector("#meta-description");

  metaDescription.content = `${description}`;
}
