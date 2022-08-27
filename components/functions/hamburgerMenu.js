const hamburgerLineOne = document.querySelector(".hamburger__line--one");
const hamburgerLineTwo = document.querySelector(".hamburger__line--two");
const hamburgerLineThree = document.querySelector(".hamburger__line--three");
const hamburgerLineFour = document.querySelector(".hamburger__line--four");

export function hamburgerMenu() {
  hamburgerLineOne.classList.toggle("opacity");
  hamburgerLineFour.classList.toggle("opacity");
  hamburgerLineThree.classList.toggle("rotate-three");
  hamburgerLineTwo.classList.toggle("rotate-two");
}
