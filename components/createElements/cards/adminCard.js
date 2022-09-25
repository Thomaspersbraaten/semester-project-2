export function adminCard(product) {
  const { id, image_url, title, price } = product;

  return `
  <div class="card col">
    <div class="img-container">
      <img class="card__img" src="${image_url}" alt="${title}">
    </div>
    <div class="card-body">
      <h3 class="card-title" >${title}</h3>
      <p class="card-price">${price},-</p>
      <div class="card-action">
        <button class="card-action__edit" data-id="${id}">
        Edit
        </button>
        <button class="card-action__delete" data-id="${id}">
        Delete
        </button>
      </div>
    </div>
  </div>
  `;
}
