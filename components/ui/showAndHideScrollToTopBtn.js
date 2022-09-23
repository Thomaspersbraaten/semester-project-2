const scrollToTopBtn = document.querySelector(".fa-angle-up");
export function showAndHideScrollToTopBtn() {
  if (document.body.scrollTop > 500) {
    scrollToTopBtn.style.visibility = "visible";
    scrollToTopBtn.style.opacity = "1";
  }
  if (document.body.scrollTop < 400) {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
  }
}
