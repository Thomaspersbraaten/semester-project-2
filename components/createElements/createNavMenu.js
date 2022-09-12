import { getUser } from "../storage/storage.js";

export function createNavMenu() {
  const { pathname } = window.location;

  // const navMenu = document.querySelector(".navbar-nav");
  const navMenu = document.querySelector(".nav-list");
  const userName = getUser();
  let authLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login</a>`;

  if (userName.id) {
    authLink = `<a class="nav-link ${pathname === "/admin.html" ? "active" : ""}" href="admin.html">Admin</a>`;
  }
  navMenu.innerHTML = `
<li class="nav-item">
    <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a>
</li>
<li class="nav-item">
<a class="nav-link ${pathname === "/store.html" || pathname === "/details.html" || pathname === "/cart.html" ? "active" : ""}" href="store.html">Store</a>
</li>
<li class="nav-item">
    ${authLink}
</li>`;
}
