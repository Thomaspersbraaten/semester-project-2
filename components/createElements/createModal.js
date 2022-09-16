export const modal = `
<div class="modal">
  <h2 class="modal__header"></h2>
  <div class="modal-form-message alert"></div>
  <form class="modal-form">

  <div>
  <label for="title">Title</label>
    <input id="title" placeholder="Title" type="text">
   
    </div>
    <div>
    <label for="description">Description</label>
    <textarea id="description" placeholder="Description" type="text"></textarea>
    </div>

    <div>
    <label for="price">Price</label>
    <input id="price" placeholder="Price" type="number">
    </div>
    <div>
    <label for="title">Image link</label>
    <input id="image-url" type="text">
    </div>
    <div class="form-check">
        <input class="form-check__input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check__label" for="flexCheckDefault">Is Featured</label>
    </div>
  </form>
  <div class="modal__btns">
  <button class="btn btn-large btn-warning cancel"></button>
  <button class="btn btn-large btn-success confirm"></button>
</div>
</div>
`;

// flytt button in i form og bruk submit
