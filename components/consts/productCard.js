import { getCart } from "../storage/storage.js";

// Returns the product card for customer facing pages
export function productCard(product) {
  const { id, image_url, title, price } = product;
  const cartContents = getCart();
  const isProductInCart = cartContents.some((item) => {
    return item.id === id;
  });

  if (!isProductInCart) {
    return `
    <a href="details.html?id=${id}" style="text-decoration:none" class="card col scale">
      <div class="img-container">
        <img class="card__img" src="${image_url}" alt="${title}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <div class="card-stock"><i class="fa-solid fa-check"></i> 50+ in storage.</div>
        <p class="card-price">${price}</p>
        <button class="btn btn-primary">View Product</button>
      </div>
    </a>
    `;
  }
  // If product is in the cart, Add a small ribbon on the card letting the user know that the product is in the cart.
  else {
    return `
    <a href="details.html?id=${id}" style="text-decoration:none" class="card col scale">
      <div class="img-container">
        <img class="card__img" src="${image_url}" alt="${title}">
        <p class="card-cart-status">In cart</p>
      </div>
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <div class="card-stock"><i class="fa-solid fa-check"></i> 50+ in storage.</div>
        <p class="card-price">${price}</p>
        <button class="btn btn-primary">View Product</button>
      </div>
    </a>
    `;
  }
}

// return `
// <a href="details.html?id=${id}" style="text-decoration:none" class="card col scale">
//   <img class="card__img" src="${image_url}" alt="${title}">
//   <div class="card-body">
//     <h3 class="card-title">${title}</h3>
//     <div class="card-stock"><i class="fa-solid fa-check"></i> 50+ in storage.</div>
//     <p class="card-price">${price}</p>
//     <button class="btn btn-primary">View Product</button>
//   </div>
// </a>
// `;
