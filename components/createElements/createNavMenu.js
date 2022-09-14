import { getUser } from "../storage/storage.js";

export function createNavMenu() {
  const { pathname } = window.location;
  const navMenu = document.querySelector(".nav-list");
  const userContainer = document.querySelector(".user-container");
  const user = getUser();

  // let authLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login</a>`;
  let authLink = `
<a href="login.html" class="login-link"><i class="fa-solid fa-user"></i></a>
<p class="login-text">Login</p>
`;

  if (user.id) {
    // authLink = `<a class="nav-link ${pathname === "/admin.html" ? "active" : ""}" href="admin.html">Admin</a>`;
    authLink = `<a href="admin.html" class="login-link ${pathname === "/login.html" ? "active" : ""}"><i class="fa-solid fa-user"></i></a>
    <p class="login-text">${user.username}</p>`;
  }
  userContainer.innerHTML = authLink;

  //   navMenu.innerHTML = `
  // <li class="nav-item">
  //     <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a>
  // </li>
  // <li class="nav-item">
  // <a class="nav-link ${pathname === "/store.html" || pathname === "/details.html" || pathname === "/cart.html" ? "active" : ""}" href="store.html">Store</a>
  // </li>
  // <li class="nav-item">
  //     ${authLink}
  // </li>`;
  // }

  navMenu.innerHTML = `
<li class="nav-item">
    <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a>
</li>
<li class="nav-item">
<a class="nav-link ${pathname === "/store.html" || pathname === "/details.html" || pathname === "/cart.html" ? "active" : ""}" href="store.html">Store</a>
</li>
<li class="nav-item">
<a class="nav-link ${pathname === "/contact.html" ? "active" : ""}" href="contact.html">Contact</a>
</li>
`;
}
