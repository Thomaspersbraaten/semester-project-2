export const userKey = "user";
export const tokenKey = "token";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUser() {
  const user = getFromStorage(userKey);
  if (user) {
    return user;
  }
  return null;
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);
  if (!value) {
    return [];
  } else {
    return JSON.parse(value);
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
