const breadCrumbsContainer = document.querySelector(".breadcrumbs");

export function SetupBreadcrumbs(item) {
  // Sets up initial home and first angle
  breadCrumbsContainer.innerHTML = `
  <a href="index.html" class="breadcrumbs__link"><i class="fas fa-home"></i> Home</a>
  <div class="breadcrumbs__angle"><i class="fa-solid fa-angle-right"></i></div>`;

  const { pathname } = window.location;

  // Populates rest of the breadcrumbs depending on which page the user is on
  if (pathname === "/store.html") {
    breadCrumbsContainer.innerHTML += `<p class="active-page breadcrumbs__active">Store</p>`;
  }
  if (pathname === "/details.html") {
    const { title } = item;
    breadCrumbsContainer.innerHTML += `
    <a href="store.html" class="breadcrumbs__link">Store</a>
    <div class="breadcrumbs__angle"><i class="fa-solid fa-angle-right"></i></div>
    <p class="active-page breadcrumbs__active">${title}</p>
    `;
  }
  if (pathname === "/login.html") {
    breadCrumbsContainer.innerHTML += `<p class="active-page breadcrumbs__active">Login</p>`;
  }

  if (pathname === "/admin.html") {
    breadCrumbsContainer.innerHTML += `<p class="active-page breadcrumbs__active">Admin page</p>`;
  }
  if (pathname === "/cart.html") {
    breadCrumbsContainer.innerHTML += `
    <a href="store.html" class="breadcrumbs__link">Store</a>
    <div class="breadcrumbs__angle"><i class="fa-solid fa-angle-right"></i></div>
    <p class="active-page breadcrumbs__active">Shopping cart</p>
    `;
  }
  if (pathname === "/contact.html") {
    breadCrumbsContainer.innerHTML += `<p class="active-page breadcrumbs__active">Contact us</p>`;
  }
}
