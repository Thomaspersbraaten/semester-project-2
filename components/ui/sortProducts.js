import { createAllStoreProducts } from "../createElements/createAllStoreProducts.js";

export function sortProducts(value, products) {
  if (!value) {
    return;
  }
  if (value === 1) {
    products.sort(function (a, b) {
      return a.price - b.price;
    });
    return products;
  }
  if (value === 2) {
    products.sort(function (a, b) {
      return b.price - a.price;
    });
    return products;
  }
  if (value === 3) {
    const sortedByTitle = products.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    return sortedByTitle;
  }
}

// if (!value) {
//   return;
// }
// if (value === 1) {
//   products.sort(function (a, b) {
//     return a.price - b.price;
//   });

//   createAllStoreProducts(products);
// }
// if (value === 2) {
//   products.sort(function (a, b) {
//     return b.price - a.price;
//   });
//   createAllStoreProducts(products);
// }
// if (value === 3) {
//   const sortedByTitle = products.sort((a, b) => {
//     if (a.title > b.title) {
//       return 1;
//     }
//     if (a.title < b.title) {
//       return -1;
//     }
//     return 0;
//   });
//   createAllStoreProducts(sortedByTitle);
// }
// }
