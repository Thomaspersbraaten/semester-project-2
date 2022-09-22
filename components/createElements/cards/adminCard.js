export function adminCard(product) {
  const { id, image_url, title, price } = product;
  return `
        <div class="card col">
            <img class="card__img img-fluid" src="${image_url}" alt="${title}">
            <div class="card-body">
              <h3 class="card-title" >${title}</h3>
              <p class="card-price">${price}</p>
              <div class="card-action">
                <div class="card-action__edit" data-id="${id}">
                    <i class="fa-solid fa-pen-to-square" data-id="${id}"></i>
                    <p data-id="${id}">Edit</p>
                </div>
                <div class="card-action__delete" data-id="${id}">
                    <i class="fa-solid fa-trash" data-id="${id}"></i>
                    <p data-id="${id}">Delete</p>
                </div>
             </div>
        </div>
        `;
}
