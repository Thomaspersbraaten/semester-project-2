// export const modal = `
// <div class="modal">
//   <h2 class="modal__header"></h2>
//   <div class="modal-form-message alert"></div>
//   <form class="modal-form">
//     <div>
//       <label for="title">Title</label>
//       <input id="title" placeholder="Title" type="text">
//     </div>
//     <div>
//       <label for="description">Description</label>
//       <textarea id="description" placeholder="Description" type="text"></textarea>
//     </div>
//     <div>
//       <label for="price">Price</label>
//       <input id="price" placeholder="Price" type="number">
//     </div>
//     <div>
//       <label for="image">Image link</label>
//       <div class="form-image">
//         <input class="form-image__input" id="image" type="text">
//         <img  class="form-image__img">
//       </div>
//     </div>
//     <div class="form-check">
//       <input class="form-check__input" type="checkbox" value="" id="flexCheckDefault">
//       <label class="form-check__label" for="flexCheckDefault">Is Featured</label>
//     </div>
//   </form>
//   <div class="modal__btns">
//     <button class="btn btn-large btn-warning cancel"></button>
//     <button class="btn btn-large btn-success confirm"></button>
//   </div>
// </div>
// `;
export const modal = `
<div class="modal">
  <h2 class="modal__header"></h2>
  <div class="modal-form-message alert"></div>
  <form class="modal-form">
    <div>
      <label for="title">Title</label>
      <input id="title" placeholder="Title" type="text">
      <p class="error-message title-error">Title must be atleast 5 characters</p>
    </div>
    <div>
      <label for="description">Description</label>
      <textarea id="description" placeholder="Description" type="text"></textarea>
      <p class="error-message description-error">Description must be atleast 20 characters</p>
    </div>
    <div>
      <label for="price">Price</label>
      <input id="price" placeholder="Price" type="number">
      <p class="error-message price-error">Price must have atleast 1 number</p>
    </div>
    <div>
      <label for="image">Image link</label>
      <div class="form-image">
        <input class="form-image__input" id="image" type="text">
        <img  class="form-image__img">
      </div>
    
    </div>
    <div class="form-check">
      <input class="form-check__input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check__label" for="flexCheckDefault">Is Featured</label>
    </div>
    <div class="modal__btns">
      <button class="btn btn-large btn-warning cancel"></button>
      <button class="btn btn-large btn-success confirm"></button>
    </div>
  </form>

</div>
`;

// flytt button in i form og bruk submit
{
  /* <p class="error-message image-error">Product needs a valid image</p> */
}
