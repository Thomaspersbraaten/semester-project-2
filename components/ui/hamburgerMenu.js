const hamburgerLineOne = document.querySelector(".hamburger__line--one");
const hamburgerLineTwo = document.querySelector(".hamburger__line--two");
const hamburgerLineThree = document.querySelector(".hamburger__line--three");
const hamburgerLineFour = document.querySelector(".hamburger__line--four");
const nav = document.querySelector(".nav-list");
let navHidden = true;

export function hamburgerMenu() {
  hamburgerLineOne.classList.toggle("opacity");
  hamburgerLineFour.classList.toggle("opacity");
  hamburgerLineThree.classList.toggle("rotate-three");
  hamburgerLineTwo.classList.toggle("rotate-two");

  if (navHidden) {
    nav.style.right = "0px";
    navHidden = false;
  } else {
    navHidden = true;
    // nav.style.display = "none";
    nav.style.right = "-100px";
  }
}
