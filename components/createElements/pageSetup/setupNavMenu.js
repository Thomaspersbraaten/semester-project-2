import { getUser } from "../../storage/storage.js";

// Sets up the links in the nav + the user icon

export function setupNavMenu() {
  const { pathname } = window.location;
  const navMenu = document.querySelector(".nav-list");
  const userContainer = document.querySelector(".user-container");
  const user = getUser();

  let authLink = `
  <a href="login.html" class="login-link">
    <i class="fa-solid fa-user"></i>
  </a>
  <p class="login-text">Login</p>
  `;

  if (user.id) {
    authLink = `<a href="admin.html" class="login-link ${pathname === "/login.html" ? "active" : ""}"><i class="fa-solid fa-user"></i></a>
    <p class="login-text">${user.username}</p>`;
  }
  userContainer.innerHTML = authLink;

  navMenu.innerHTML = `
  <li class="nav-item">
      <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ${pathname === "/store.html" || pathname === "/details.html" ? "active" : ""}" href="store.html">Store</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ${pathname === "/visit.html" ? "active" : ""}" href="visit.html">Visit us</a>
  </li>
  `;
}
