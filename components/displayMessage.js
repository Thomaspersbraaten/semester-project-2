export function displayMessage(type, message, targetContainer) {
  const container = document.querySelector(targetContainer);
  container.classList.add(type);
  container.innerHTML = message;
}
