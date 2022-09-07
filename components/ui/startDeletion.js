import { deletePanel } from "../createElements/deletePanel.js";

export function startDeletion(products, targetId) {
  const clickedProduct = products.find((item) => {
    return item.id === targetId;
  });
  deletePanel(clickedProduct);
}
