export function setupProductPage({ title, description, image_url, price }) {
  const detailsContainer = document.querySelector(".details-container");
  console.log(image_url);
  //   add meta desc
  // https://www.w3schools.com/tags/tag_meta.asp
  document.title = `${title}`;
  detailsContainer.innerHTML = `
    <div class="details">
        <h1 class="details__header">${title}</h1>
        <div class="image-price-button">
            <img src="${image_url}" class="details-image">
            <div class="price-and-button">
            <p class="details-price"> ${price}</p>
            <button class="btn btn-large btn-cart">Add to cart</button>
            </div>
        </div>
        <p class="details__description">${description}</p>
    </div>
    `;
}
