// export function itemRemovedFromCart() {
//   const detailsContainer = document.querySelector(".details-container");
//   const removed = document.createElement("div");
//   removed.classList.add("removed", "alert", "alert-danger");
//   removed.innerHTML = `
//     <div>
//     <i class="fa-regular fa-circle-xmark"></i>
//     <p>Item has been removed from the cart</p>
//     </div>
//     `;
//   detailsContainer.appendChild(removed);
//   setTimeout(() => {
//     removed.style.left = "50%";
//   }, 200);
//   setTimeout(() => {
//     removed.style.left = "-50%";
//     setTimeout(() => {
//       removed.remove();
//     }, 500);
//   }, 3000);
//   const cross = document.querySelector(".fa-circle-xmark");
//   cross.addEventListener("click", () => {
//     removed.style.left = "-50%";
//     setTimeout(() => {
//       removed.remove();
//     }, 500);
//   });
// }
