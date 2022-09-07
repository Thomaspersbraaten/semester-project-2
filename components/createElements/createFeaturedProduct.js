const featuredContainer = document.querySelector(".featured");

// export function createFeaturedProduct(product) {
export function createFeaturedProduct({ id, image_url, title, description, price }) {
  featuredContainer.innerHTML += `
  <a href="details.html?id=${id}" style="text-decoration:none" class="card col">
    <img class="card__img " src="${image_url}" alt="${title}">
    <div class="card-body">
      <h3 class="card-title">${title}</h3>
      <p class="card-text">${description}</p>
      <p class="card-price">${price}</p>
      <button href="#" class="btn btn-primary">View Product</button>
    </div>
  </a>
         `;
}
