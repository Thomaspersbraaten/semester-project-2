export function adminCard(product) {
  const { id, image_url, title, price, featured } = product;
  // If product is featured, add a ribbon so the admins can easily see which products are featured
  return `
  <div class="card col">
    <div class="img-container">
      <img class="card__img" src="${image_url}" alt="${title}">
      <div class="${featured ? "card-featured-status" : ""}">${featured ? "Featured" : ""}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title" >${title}</h3>
      <p class="card-price">${price},-</p>
      <div class="card-action">
        <button class="card-action__edit" data-id="${id}">Edit</button>
        <button class="card-action__delete" data-id="${id}">Delete</button>
      </div>
    </div>
  </div>
  `;
}
