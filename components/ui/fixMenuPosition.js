// Stops the animation of the nav menu if the menu is open during screen size adjusting
// the menu would show itself open and slide out of screen
export function fixMenuPosition() {
  const nav = document.querySelector(".nav-list");
  nav.style.transition = "none";
}
