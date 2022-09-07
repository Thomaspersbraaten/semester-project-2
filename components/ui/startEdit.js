import { editPanel } from "../createElements/editPanel.js";

export function startEdit(products, targetId) {
  const clickedProduct = products.find((item) => {
    return item.id === targetId;
  });
  editPanel(clickedProduct);
}
