import { checkLength } from "./checkLength.js";

export function validateTitle() {
  const titleInput = document.querySelector("#title");
  const titleError = document.querySelector(".title-error");
  const titleValue = titleInput.value;
  if (checkLength(titleValue, 4)) {
    titleError.style.display = "none";
    titleInput.classList.add("validated--ok");
    titleInput.classList.remove("validated--error");
    return true;
  } else {
    titleError.style.display = "flex";
    titleInput.classList.remove("validated--ok");
    titleInput.classList.add("validated--error");
    return false;
  }
}
