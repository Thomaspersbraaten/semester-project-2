import { getCart } from "../storage/storage.js";

export function cartPage() {
  const items = getCart();

  const detailsContainer = document.querySelector(".details-container");
  const summaryContainer = document.querySelector(".summary-container");
  let sum = 0;

  if (items.length >= 1) {
    items.forEach((item) => {
      const { title, description, price, image_url, id } = item;
      detailsContainer.innerHTML += ` 
    <div class="cart-item">
        <a href="details.html?id=${id}"><img src="${image_url}" class="cart-item__img">
        <a href="details.html?id=${id}" style="text-decoration:none"><h2 class="cart-item__title">${title}</h2></a>
        <p class="cart-item__price">${price},-</p>
    </div>
    `;
      sum += item.price;
      summaryContainer.innerHTML = `
      <p class="summary-container__sum"><b>Total sum:</b> ${sum},-</p>
      `;
    });
  } else {
    detailsContainer.innerHTML = "You have no items in your shopping cart";
    summaryContainer.innerHTML = "";
  }
  const spinner = document.querySelector(".spinner-container");
  spinner.style.display = "none";
}
