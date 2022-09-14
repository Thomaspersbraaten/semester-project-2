import { getCart, saveCart } from "../storage/storage.js";
import { cartInfo } from "./cartInfo.js";

export function cartPage() {
  const items = getCart();

  const detailsContainer = document.querySelector(".details-container");
  const summaryContainer = document.querySelector(".summary-container");
  detailsContainer.innerHTML = "";
  summaryContainer.innerHTML = "";
  let sum = 0;

  if (items.length >= 1) {
    items.forEach((item) => {
      const { title, description, price, image_url, id } = item;
      //   detailsContainer.innerHTML += `
      // <div class="cart-item">
      //     <a href="details.html?id=${id}"><img src="${image_url}" class="cart-item__img">
      //     <a href="details.html?id=${id}" style="text-decoration:none"><h2 class="cart-item__title">${title}</h2></a>
      //     <p class="cart-item__price">${price},-</p>
      //     <div class="cart-action-remove">
      //     <i class="fa-regular fa-circle-xmark cart-action-remove__x" data-id="${id}"></i>
      //     <p class="cart-action-remove__text">Remove</p>
      //     </div>
      // </div>
      // `;
      detailsContainer.innerHTML += ` 
    <div class="cart-item">
        <a href="details.html?id=${id}"><img src="${image_url}" class="cart-item__img"></a>
        <div>
          <a href="details.html?id=${id}" style="text-decoration:none"><h2 class="cart-item__title">${title}</h2></a>
          <p class="cart-item__price">Price: ${price},-</p>
        </div>
        <div class="cart-action-remove">
        <i class="fa-regular fa-circle-xmark cart-action-remove__x" data-id="${id}"></i>
        <p class="cart-action-remove__text">Remove</p>
        </div>
    </div>
    `;
      sum += item.price;
      summaryContainer.innerHTML = `
      <p class="summary-container__sum"><b>Total sum:</b> ${sum},-</p>
      `;
    });
  } else {
    detailsContainer.innerHTML = `You have no items in your shopping cart, Please check out our <a href="/store.html" class="text-link">store page</a>.`;
    summaryContainer.innerHTML = "";
  }

  const removeBtn = document.querySelectorAll(".cart-action-remove__x");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const targetId = parseInt(event.target.dataset.id);
      const newArray = items.filter((item) => {
        return item.id != targetId;
      });
      console.log(newArray);
      saveCart(newArray);
      cartPage();
      cartInfo();
    });
  });
}
