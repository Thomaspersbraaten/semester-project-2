const featuredContainer = document.querySelector(".featured");

export function createFeaturedProduct(product) {
  featuredContainer.innerHTML += `
       <div class="card col">
           <img class="card__img img-fluid" src="${product.image_url}" alt="${product.title}">
           <div class="card-body">
             <h3 class="card-title">${product.title}</h3>
             <p class="card-text">${product.description}</p>
             <p class="card-price">${product.price}</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
       </div>
       `;
}
