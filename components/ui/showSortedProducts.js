import { sortProducts } from "./index.js";
const sortingSelector = document.querySelector(".form-select");
export function showSortedProducts(products, searching) {
  const selectorIndex = sortingSelector.selectedIndex;
  const selectorValue = parseInt(sortingSelector[selectorIndex].value);
  const sortedProducts = sortProducts(selectorValue, products);
  console.log(searching);
  if (searching === "searching") {
    // console.log("yes");
    console.log(sortedProducts);
  } else {
    console.log(sortedProducts);
  }
}
