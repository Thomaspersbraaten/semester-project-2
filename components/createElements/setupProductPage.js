import { cartButton } from "./cartButton.js";
export function setupProductPage(product) {
  const detailsContainer = document.querySelector(".details");
  const { title, description, image_url, price, id } = product;

  //   add meta desc
  // https://www.w3schools.com/tags/tag_meta.asp
  document.title = `${title}`;
  // detailsContainer.innerHTML = productCard;
  detailsContainer.innerHTML = `
  <div class="details">
    <h1 class="details__header">${title}</h1>
    <div class="img-price-btn">
        <div class="image-container">
          <img src="${image_url}" class="details-image" alt="${title}">
        </div>
        <div class="price-and-button">
          <div class="card-stock details-stock"><i class="fa-solid fa-check"></i> 50+ in storage.</div>
          <p class="details-price"> ${price}</p>
          <div class="btn-container"></div>
        </div>
    </div>
    <div class="description"> 
      <h2 class="description__header">product description</h2>
      <p class="description__text">${description}</p> 
    </div>
  </div>
  `;

  cartButton(id, product);

  // meta
  // shorten the product description to the first 125 characters
  const shortDescription = description.substring(0, 125);

  const metaDescription = document.querySelector("#meta-description");

  metaDescription.content = `${shortDescription}`;
}
