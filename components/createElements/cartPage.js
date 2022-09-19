import { getCart, saveCart } from "../storage/storage.js";
// import { cartInfo } from "./cartInfo.js";
import { setupCartInfo } from "./pageSetup/index.js";

export function cartPage() {
  const items = getCart();

  const detailsContainer = document.querySelector(".details-container");
  const summaryContainer = document.querySelector(".summary-container");
  detailsContainer.innerHTML = "";
  summaryContainer.innerHTML = "";
  let sum = 0;
  // console.log(items);

  if (items.length >= 1) {
    items.forEach((item) => {
      const { title, description, price, image_url, id, amount } = item;

      detailsContainer.innerHTML += ` 
    <div class="cart-item">
        <a href="details.html?id=${id}"><img src="${image_url}" class="cart-item__img"></a>
        <div>
          <a href="details.html?id=${id}" style="text-decoration:none"><h2 class="cart-item__title">${title}</h2></a>
          <p class="cart-item__price">Price: ${price},-</p>
          <div class="amount-container">
            <label for="amount-control__input">Amount</label>
            <div class="amount-control">
              <i class="fa-regular fa-square-minus amount-control__minus" data-id="${id}"></i>
              <input type="number" class="amount-control__input" id="amount-control__input" value="${amount}" data-id="${id}">
              <i class="fa-regular fa-square-plus amount-control__plus" data-id="${id}"></i>
            </div>
          </div>
        </div>
        <div class="product-total">
        <p class="product-total__text">Total: ${price * amount},-</p> 
        </div>
        <div class="cart-action-remove">
        <i class="fa-regular fa-circle-xmark cart-action-remove__x" data-id="${id}"></i>
        <p class="cart-action-remove__text">Remove</p>
        </div>
    </div>
    `;
      // const qtyMinus = document.querySelectorAll(".qty-control__minus");
      // const qtyInput = document.querySelectorAll(".qty-control__input");
      // qtyMinus.forEach((minus) => {
      //   minus.addEventListener("click", (event) => {
      //     // updateValue(event);
      //     console.log(qtyInput);
      //   });
      // });

      // function updateValue(event) {
      //   console.log(event);
      //   let amountInput = document.querySelector(".amount-control__input");
      //   console.log(amountInput.value);
      // }
      sum += price * amount;
      summaryContainer.innerHTML = `
      <p class="summary-container__sum"><b>Total sum:</b> ${sum},-</p>
      `;
    });
  } else {
    detailsContainer.innerHTML = `You have no items in your shopping cart, Please check out our <a href="/store.html" class="text-link">store page</a>.`;
    summaryContainer.innerHTML = "";
  }
  const amountMinus = document.querySelectorAll(".amount-control__minus");
  const inputNodes = document.querySelectorAll(".amount-control__input");
  const inputArray = Array.from(inputNodes);
  // legge til funksjon ved input keyup?

  amountMinus.forEach((minus) => {
    minus.addEventListener("click", (event) => {
      // updateValue(event);
      // const targetId = parseInt(event.target.dataset.id);
      const targetId = event.target.dataset.id;

      // console.log(inputGroup);
      const targetInput = inputArray.find((input) => {
        return input.dataset.id === targetId;
      });
      let inputValue = parseInt(targetInput.value);

      if (inputValue === 1) {
        console.log("return");
        return;
      }

      inputValue = inputValue - 1;
      targetInput.value = inputValue;

      const clickedProduct = items.find((item) => {
        return item.id === parseInt(targetId);
      });
      clickedProduct.amount = inputValue;

      // const cart = getCart();
      // const filteredProducts = cart.filter((product) => {
      //   return clickedProduct.id != product.id;
      // });

      // setTimer(filteredProducts, inputValue, clickedProduct);
      setTimer(items);
    });
  });
  const amountPlus = document.querySelectorAll(".amount-control__plus");
  amountPlus.forEach((plus) => {
    plus.addEventListener("click", (event) => {
      // updateValue(event);
      // const targetId = parseInt(event.target.dataset.id);
      const targetId = event.target.dataset.id;

      // console.log(inputGroup);
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
      console.log(clickedProduct);
      console.log(items);

      // const cart = getCart();
      // const filteredProducts = cart.filter((product) => {
      //   return clickedProduct.id != product.id;
      // });

      // setTimer(items, inputValue, clickedProduct);
      setTimer(items);
    });
  });

  let timerID;

  function setTimer(newArray, newValue, targetProduct) {
    console.log("starting/restarting timer");
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      console.log("finished");
      // console.log(newArray, newValue, targetProduct);
      // targetProduct.amount = newValue;
      // newArray.push(targetProduct);
      // console.log(newArray);
      saveCart(newArray);
      cartPage();
      setupCartInfo();
    }, 1000);
  }

  // console.log(qtyInput);
  // const qtyMinus = document.querySelectorAll(".qty-control__minus");
  // qtyMinus.forEach((minus) => {
  //   minus.addEventListener("click", (event) => {
  //     console.log(event);

  //     const targetId = parseInt(event.target.dataset.id);
  //     const qtyInput = document.querySelector(`.${title}`);
  //     console.log(qtyInput);

  //     let inputValue = parseInt(qtyInput.value);
  //     const inputValue = qtyInput.value;
  //     inputValue = inputValue - 1;
  //     qtyInput.value = inputValue;
  //     const clickedProduct = items.find((item) => {
  //       return item.id === targetId;
  //     });
  //     console.log(clickedProduct);
  //     const cart = getCart();
  //     const filteredProducts = cart.filter((product) => {
  //       return clickedProduct.id != product.id;
  //     });
  //     console.log(filteredProducts);
  //     setTimer(clickedProduct);
  //   });
  // });

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
      setupCartInfo();
    });
  });
}

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
// <h3 class="quantity-header">quantity</h3>
//   <i class="fa-regular fa-square-minus"></i>
//   <input type="number" class="qty-control__input" id="qty-control__input">
//   <i class="fa-regular fa-square-plus"></i>
//   detailsContainer.innerHTML += `
// <div class="cart-item">
//     <a href="details.html?id=${id}"><img src="${image_url}" class="cart-item__img"></a>
//     <div>
//       <a href="details.html?id=${id}" style="text-decoration:none"><h2 class="cart-item__title">${title}</h2></a>
//       <p class="cart-item__price">Price: ${price},-</p>
//       <div class="qty-container">
//         <label for="qty-control__input">Quantity</label>
//        <div class="qty-control">
//         <div class="qty-control__minus">-</div>
//         <input type="number" class="qty-control__input" id="qty-control__input">
//         <div class="qty-control__plus">+</div>

//        </div>
//       </div>
//     </div>
//     <div class="cart-action-remove">
//     <i class="fa-regular fa-circle-xmark cart-action-remove__x" data-id="${id}"></i>
//     <p class="cart-action-remove__text">Remove</p>
//     </div>
// </div>
// `;
// const qtyInput = document.querySelectorAll(".qty-control__input");
// // qtyInput.value = quantity;
// console.log(qtyInput);
// // console.log(quantity);
// qtyInput.forEach((qty) => {
//   qty.value = quantity;
// });

// qtyInput.forEach(() => {
//   qtyInput.value =
// })
// const qtyInput = document.querySelectorAll(".qty-control__input");
// // qtyInput.value = quantity;
// console.log(qtyInput);
// // console.log(quantity);
// qtyInput.forEach((qty) => {
//   qty.value = quantity;
// });
