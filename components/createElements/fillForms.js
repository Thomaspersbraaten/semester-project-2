export function fillForms(product, action) {
  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const imageUrlInput = document.querySelector("#image");
  const isFeatured = document.querySelector(".form-check__input");
  const form = document.querySelector(".modal-form");
  const { id, image_url, title, price, featured, description } = product;
  titleInput.value = title;
  descInput.value = description;
  priceInput.value = price;
  imageUrlInput.value = image_url;
  isFeatured.checked = featured;
  form.dataset.id = id;

  if (action === "delete") {
    titleInput.disabled = true;
    descInput.disabled = true;
    priceInput.disabled = true;
    imageUrlInput.disabled = true;
    isFeatured.disabled = true;
  }
}
