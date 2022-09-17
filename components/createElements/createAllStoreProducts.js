import { productCard } from "../consts/productCard.js";

// export function createAllStoreProducts({ id, image_url, title, description, price }) {
export function createAllStoreProducts(products) {
  const storeContainer = document.querySelector(".store-item-container");
  storeContainer.innerHTML = "";
  const spinner = document.querySelector(".spinner-container");
  spinner.style.display = "none";
  // export function createAllStoreProducts(products) {
  //   const { id, image_url, title, description, price } = products;
  // storeContainer.innerHTML += `
  //   <a href="details.html?id=${id}" style="text-decoration:none" class="card col">
  //     <img class="card__img " src="${image_url}" alt="${title}">
  //     <div class="card-body">
  //       <h3 class="card-title">${title}</h3>
  //       <p class="card-text">${description}</p>
  //       <p class="card-price">${price}</p>
  //       <button href="#" class="btn btn-primary">View Product</button>
  //     </div>
  //   </a>
  //          `;
  // products.forEach((product) => {
  //   const { id, image_url, title, description, price } = product;
  //   storeContainer.innerHTML += `
  //   <a href="details.html?id=${id}" style="text-decoration:none" class="card col scale">
  //     <img class="card__img " src="${image_url}" alt="${title}">
  //     <div class="card-body">
  //       <h3 class="card-title">${title}</h3>
  //       <div class="card-stock"><i class="fa-solid fa-check"></i> 50+ in storage.</div>
  //       <p class="card-price">${price}</p>
  //       <button href="#" class="btn btn-primary">View Product</button>
  //     </div>
  //   </a>
  //   `;
  // });
  products.forEach((product) => {
    // const { id, image_url, title, description, price } = product;
    storeContainer.innerHTML += productCard(product);
  });
}
/* <p class="card-text">${description}</p> */
