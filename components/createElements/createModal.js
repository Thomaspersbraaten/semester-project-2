export const modal = `
<div class="modal">
  <h2 class="modal__header"></h2>
  <form class="modal-form">
    <div class="modal-form__message alert"></div>
    <input id="title" placeholder="Title" type="text">
    <input id="description" placeholder="Description" type="text">
    <input id="price" placeholder="Price" type="number">
    <input id="image-url" type="text">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">Is Featured</label>
    </div>

  </form>
  <div class="modal__btns">
  <button class="btn btn-large btn-warning cancel"></button>
  <button class="btn  btn-large btn-success confirm"></button>
</div>
</div>
`;

// flytt button in i form og bruk submit
