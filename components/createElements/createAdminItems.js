const itemContainer = document.querySelector(".admin-item-container");

export function createAdminItems(products) {
  products.forEach((product) => {
    itemContainer.innerHTML += `
        <div class="card col">
            <img class="card__img img-fluid" src="${product.image_url}" alt="${product.title}">
            <div class="card-body">
              <h3 class="card-title" >${product.title}</h3>
              <p class="card-text">${product.description}</p>
              <p class="card-price">${product.price}</p>
              <div class="card-action">
                <div class="card-action__edit" data-id="${product.id}">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <p> Edit product</p>
                </div>
                <div class="card-action__delete" data-id="${product.id}">
                <i class="fa-solid fa-trash"></i>
                    <p> Delete product</p>
                </div>
             </div>
        </div>
        `;
  });
}
