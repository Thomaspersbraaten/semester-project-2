export function fillForms(product, action) {
  const title = document.querySelector("#title");
  const desc = document.querySelector("#description");
  const price = document.querySelector("#price");
  const imageUrl = document.querySelector("#image-url");
  const isFeatured = document.querySelector(".form-check__input");
  const form = document.querySelector(".modal-form");

  title.value = product.title;
  desc.value = product.description;
  price.value = product.price;
  imageUrl.value = product.image_url;
  isFeatured.checked = product.featured;
  form.dataset.id = product.id;

  if (action === "delete") {
    console.log("this is delete");
    title.disabled = true;
    desc.disabled = true;
    price.disabled = true;
    imageUrl.disabled = true;
    isFeatured.disabled = true;
  }
}
