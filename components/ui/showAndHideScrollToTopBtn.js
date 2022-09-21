const scrollToTopBtn = document.querySelector(".fa-angle-up");
export function showAndHideScrollToTopBtn() {
  if (document.documentElement.scrollTop > 500) {
    setTimeout(() => {
      scrollToTopBtn.style.visibility = "visible";
      scrollToTopBtn.style.opacity = "1";
    }, 500);
  }

  if (document.documentElement.scrollTop < 400) {
    scrollToTopBtn.style.opacity = "0";
    setTimeout(() => {
      scrollToTopBtn.style.visibility = "hidden";
    }, 500);
  }
}
