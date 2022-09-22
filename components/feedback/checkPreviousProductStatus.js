export function checkPreviousProductStatus() {
  const detailsContainer = document.querySelector(".details-container");
  console.log(detailsContainer.lastChild.className);
  if (detailsContainer.lastChild.className === "added alert alert-danger") {
    const removed = document.querySelector(".removed");
    removed.remove();
  }
  if (detailsContainer.lastChild.className === "removed alert alert-danger") {
    const added = document.querySelector(".added");
    added.remove();
  } else {
    return;
  }
}
