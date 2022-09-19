const hamburgerLineOne = document.querySelector(".hamburger__line--one");
const hamburgerLineTwo = document.querySelector(".hamburger__line--two");
const hamburgerLineThree = document.querySelector(".hamburger__line--three");
const hamburgerLineFour = document.querySelector(".hamburger__line--four");
const nav = document.querySelector(".nav-list");
let navHidden = true;

// toggles the visibility of the navigation menu on smaller screens
// Also animates the hamburger menu

export function hamburgerMenu() {
  hamburgerLineOne.classList.toggle("opacity");
  hamburgerLineFour.classList.toggle("opacity");
  hamburgerLineThree.classList.toggle("rotate-three");
  hamburgerLineTwo.classList.toggle("rotate-two");

  nav.style.transition = "right 0.3s";

  if (navHidden) {
    nav.style.right = "0px";
    navHidden = false;
  } else {
    navHidden = true;
    nav.style.right = "-140px";
  }
}
