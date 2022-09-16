// export function itemAddedToCart() {
//   const detailsContainer = document.querySelector(".details-container");
//   const added = document.createElement("div");
//   added.classList.add("added", "alert", "alert-success");
//   added.innerHTML = `
//   <div>
//   <i class="fa-regular fa-circle-xmark"></i>
//   <p>Item has been added to cart</p>
//   </div>
//   `;
//   detailsContainer.appendChild(added);
//   setTimeout(() => {
//     added.style.left = "50%";
//   }, 200);
//   setTimeout(() => {
//     added.style.left = "-50%";
//     setTimeout(() => {
//       added.remove();
//     }, 500);
//   }, 3000);
//   const cross = document.querySelector(".fa-circle-xmark");
//   cross.addEventListener("click", () => {
//     added.style.left = "-50%";
//     setTimeout(() => {
//       added.remove();
//     }, 500);
//   });
// }
