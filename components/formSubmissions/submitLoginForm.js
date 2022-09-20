import { herokuUrl } from "../consts/herokuUrl.js";
import { saveToken, saveUser } from "../storage/storage.js";
import { displayMessage } from "../feedback/displayMessage.js";

// Submits the login details
export async function submitLoginForm(username, password) {
  const loginUrl = herokuUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(loginUrl, options);
    const json = await response.json();
    // if login credentials are correct, save the token and user info in localstorage, Then redirect to home page as logged in.
    if (json.user) {
      saveUser(json.user);
      saveToken(json.jwt);
      location.href = "./index.html";
    }
    // show that the
    if (json.error) {
      displayMessage("alert-danger", "Login attempt failed: " + json.message[0].messages[0].message, ".login-form__message-container");
    }
  } catch (error) {
    displayMessage("alert-danger", "There was an error during login", ".login-form__message-container");
  }
}

// Username: admin@admin.com
// Password: Pass1234
