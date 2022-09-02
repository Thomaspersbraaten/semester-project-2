import { userKey, tokenKey } from "../storage/storage.js";

export function confirmLogout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
  location.href = "/";
}
