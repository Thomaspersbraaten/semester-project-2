import { getCart, saveCart } from "../storage/storage.js";
import { updateCartAmounts } from "../ui/updateCartAmounts.js";
import { setupCartInfo } from "./pageSetup/index.js";

export function cartPage() {
  const items = getCart();

  const detailsContainer = document.querySelector(".details-container");
  const summaryContainer = document.querySelector(".summary-container");
  detailsContainer.innerHTML = "";
  summaryContainer.innerHTML = "";
  let sum = 0;

  if (items.length >= 1) {
    items.forEach((item) => {
      const { title, price, image_url, id, amount } = item;
      detailsContainer.innerHTML += ` 
    <div class="cart-item">
      <a href="details.html?id=${id}"><img src="${image_url}" class="cart-item__img"></a>
      <div>
        <a href="details.html?id=${id}" style="text-decoration:none"><h2 class="cart-item__title">${title}</h2></a>
        <p class="cart-item__price">Price: ${price},-</p>
      </div>
      <div class="product-total">
        <div class="amount-container">
          <label for="amount-control__input">Amount</label>
          <div class="amount-control">
            <i class="fa-regular fa-square-minus amount-control__minus" data-id="${id}"></i>
            <input type="number" class="amount-control__input" id="amount-control__input" value="${amount}" data-id="${id}" min="1">
            <i class="fa-regular fa-square-plus amount-control__plus" data-id="${id}"></i>
          </div>
        </div>
        <p class="product-total__text">Total: ${price * amount},-</p> 
      </div>
      <div class="cart-action-remove">
        <i class="fa-regular fa-circle-xmark cart-action-remove__x" data-id="${id}"></i>
        <p class="cart-action-remove__text">Remove</p>
      </div>
    </div>
    `;

      sum += price * amount;
      summaryContainer.innerHTML = `
      <p class="summary-container__sum"><b>Total sum:</b> ${sum},-</p>
      `;
    });
  } else {
    detailsContainer.innerHTML = `You have no items in your shopping cart, Please check out our <a href="/store.html" class="text-link">store page</a>.`;
    summaryContainer.innerHTML = "";
  }

  // This section controls the amount of each item the user wants to order.

  const amountMinus = document.querySelectorAll(".amount-control__minus");
  const amountPlus = document.querySelectorAll(".amount-control__plus");
  const inputNodes = document.querySelectorAll(".amount-control__input");
  const inputArray = Array.from(inputNodes);

  // lets the user input the amount they want manually.

  inputArray.forEach((input) => {
    input.addEventListener("keyup", (event) => {
      const targetId = event.target.dataset.id;
      const targetInput = inputArray.find((input) => {
        return input.dataset.id === targetId;
      });
      let inputValue = parseInt(targetInput.value);
      const clickedProduct = items.find((item) => {
        return item.id === parseInt(targetId);
      });
      clickedProduct.amount = inputValue;
      if (!targetInput.value || targetInput.value < 1) {
        clickedProduct.amount = 1;
      }
      updateCartAmounts(items);
    });
  });

  // decreases the amount of the selected item in the cart. triggers on a settimeout so the user can keep decreases.
  amountMinus.forEach((minus) => {
    minus.addEventListener("click", (event) => {
      const targetId = event.target.dataset.id;
      const targetInput = inputArray.find((input) => {
        return input.dataset.id === targetId;
      });
      let inputValue = parseInt(targetInput.value);
      if (inputValue === 1) {
        return;
      }
      inputValue = inputValue - 1;
      targetInput.value = inputValue;
      const clickedProduct = items.find((item) => {
        return item.id === parseInt(targetId);
      });
      clickedProduct.amount = inputValue;
      updateCartAmounts(items);
    });
  });

  // increases the amount of the selected item in the cart. triggers on a settimeout so the user can keep increasing.
  amountPlus.forEach((plus) => {
    plus.addEventListener("click", (event) => {
      const targetId = event.target.dataset.id;
      const targetInput = inputArray.find((input) => {
        return input.dataset.id === targetId;
      });
      let inputValue = parseInt(targetInput.value);
      inputValue = inputValue + 1;
      targetInput.value = inputValue;
      const clickedProduct = items.find((item) => {
        return item.id === parseInt(targetId);
      });
      clickedProduct.amount = inputValue;
      updateCartAmounts(items);
    });
  });

  // Removes selected item from the cart and repopulates the page.
  const removeBtn = document.querySelectorAll(".cart-action-remove__x");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const targetId = parseInt(event.target.dataset.id);
      const newArray = items.filter((item) => {
        return item.id != targetId;
      });
      saveCart(newArray);
      cartPage();
      setupCartInfo();
    });
  });
}
