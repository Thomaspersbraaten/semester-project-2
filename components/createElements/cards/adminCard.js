export function adminCard(product) {
  const { id, image_url, title, price } = product;
  // return `
  //       <div class="card col">
  //         <div class="img-container">
  //           <img class="card__img" src="${image_url}" alt="${title}">
  //         </div>
  //         <div class="card-body">
  //           <h3 class="card-title" >${title}</h3>
  //           <p class="card-price">${price},-</p>
  //           <div class="card-action">
  //             <div class="card-action__edit" data-id="${id}">
  //                 <i class="fa-solid fa-pen-to-square" data-id="${id}"></i>
  //                 <p data-id="${id}">Edit</p>
  //             </div>
  //             <div class="card-action__delete" data-id="${id}">
  //                 <i class="fa-solid fa-trash" data-id="${id}"></i>
  //                 <p data-id="${id}">Delete</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       `;
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

/* <button class="card-action__edit" data-id="${id}">
  <i class="fa-solid fa-pen-to-square" data-id="${id}"></i>
  <p data-id="${id}">Edit</p>
</button>
<button class="card-action__delete" data-id="${id}">
  <i class="fa-solid fa-trash" data-id="${id}"></i>
  <p data-id="${id}">Delete</p>
</button> */
