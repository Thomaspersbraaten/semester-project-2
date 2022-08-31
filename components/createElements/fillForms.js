export function fillForms(product) {
  const title = document.querySelector("#title");
  const desc = document.querySelector("#description");
  const price = document.querySelector("#price");
  const imageUrl = document.querySelector("#image-url");
  const isFeatured = document.querySelector(".form-check-input");
  const form = document.querySelector(".modal-form");

  title.value = product.title;
  desc.value = product.description;
  price.value = product.price;
  imageUrl.value = product.image_url;
  isFeatured.checked = product.featured;
  form.dataset.id = product.id;
}
