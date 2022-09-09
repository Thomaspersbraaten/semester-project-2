import { createAdminItems } from "../createElements/createAdminItems.js";
import { createAllStoreProducts } from "../createElements/createAllStoreProducts.js";

const searchInput = document.querySelector("#search");

export function searchForProduct(products) {
  const { pathname } = window.location;
  console.log(searchInput.value.trim().toLowerCase());
  console.log(pathname);
  const searchValue = searchInput.value.trim().toLowerCase();

  if (searchInput.value.length >= 1) {
    console.log(searchValue);
    // let productsToRender = products;
    const filteredProducts = products.filter((product) => {
      // if (product.title.toLowerCase().startsWith(searchValue) || product.description.toLowerCase().startsWith(searchValue)) {
      //   return true;
      // }
      if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    if (pathname === "/admin.html") {
      const adminItemHeader = document.querySelector(".admin-item-header");
      console.log(filteredProducts);
      adminItemHeader.innerHTML = `Showing search results for "${searchValue}"`;
      createAdminItems(filteredProducts);
    }
    if (pathname === "/store.html") {
      createAllStoreProducts(filteredProducts);
    }

    // // // const searchTarget = product.title.value + product.description.value;
    // // searchForProduct();
    // const deleteBtn = document.querySelectorAll(".card-action__delete");
    // deleteBtn.forEach((button) => {
    //   button.addEventListener("click", startDeletion);
    // });
    // const editBtn = document.querySelectorAll(".card-action__edit");
    // editBtn.forEach((button) => {
    //   button.addEventListener("click", startEdit);
    // });
  }
}
