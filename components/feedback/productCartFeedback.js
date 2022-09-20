let timerID;
export function productCartFeedback(productStatus) {
  const feedbackElement = document.querySelector(".feedback");
  feedbackElement.style.transition = "none";
  feedbackElement.style.left = "-50%";
  setTimeout(() => {
    if (productStatus) {
      feedbackElement.style.transition = "left 0.4s";
      feedbackElement.classList.remove("alert-success");
      feedbackElement.classList.add("alert-danger");
      feedbackElement.innerHTML = `
          <div>
          <i class="fa-regular fa-circle-xmark"></i>
          <p>Product has been removed from the shopping cart</p>
          </div>
          `;
      const cross = document.querySelector(".fa-circle-xmark");
      feedbackElement.style.transition = "left 0.4s";
      cross.addEventListener("click", () => {
        feedbackElement.style.left = "-50%";
      });
    } else {
      feedbackElement.style.transition = "left 0.4s";
      feedbackElement.classList.remove("alert-danger");
      feedbackElement.classList.add("alert-success");
      feedbackElement.innerHTML = `
          <div>
          <i class="fa-regular fa-circle-xmark"></i>
          <p>Product has been added to the shopping cart</p>
          </div>
          `;
      const cross = document.querySelector(".fa-circle-xmark");
      feedbackElement.style.transition = "left 0.4s";
      cross.addEventListener("click", () => {
        feedbackElement.style.left = "-50%";
      });
    }
  }, 50);

  function moveFeedbackToLeft() {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      feedbackElement.style.left = "-50%";
    }, 3000);
  }
  moveFeedbackToLeft();

  setTimeout(() => {
    feedbackElement.style.left = "50%";
  }, 200);
}
