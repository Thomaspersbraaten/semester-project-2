export function homeProducts(product, container) {
  const targetContainer = document.querySelector(container);

  const { id, image_url, title, description, price } = product;
  targetContainer.innerHTML += `
    <a href="details.html?id=${id}" style="text-decoration:none" class="card col scale">
      <img class="card__img " src="${image_url}" alt="${title}">
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
    
        <p class="card-price">${price}</p>
        <button href="#" class="btn btn-primary">View Product</button>
      </div>
    </a>
           `;
}
