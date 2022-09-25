import { checkLength } from "./checkLength.js";

export function validateDescription() {
  const descriptionInput = document.querySelector("#description");
  const descriptionError = document.querySelector(".description-error");

  const descriptionValue = descriptionInput.value;
  if (checkLength(descriptionValue, 19)) {
    descriptionError.style.display = "none";
    descriptionInput.classList.add("validated--ok");
    descriptionInput.classList.remove("validated--error");
    return true;
  } else {
    descriptionError.style.display = "flex";
    descriptionInput.classList.remove("validated--ok");
    descriptionInput.classList.add("validated--error");
    return false;
  }
}
