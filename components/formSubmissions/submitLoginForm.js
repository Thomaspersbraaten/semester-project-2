// import { baseUrl } from "../consts/baseUrl.js";
import { herokuUrl } from "../consts/herokuUrl.js";
import { saveToken, saveUser } from "../storage/storage.js";
import { displayMessage } from "../feedback/displayMessage.js";

export async function submitLoginForm(username, password) {
  const loginUrl = herokuUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });
  console.log(data);
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
    console.log(json);
    if (json.user) {
      saveUser(json.user);
      saveToken(json.jwt);
      location.href = "./index.html";
    }
    if (json.error) {
      displayMessage("alert-danger", "Login attempt failed: " + json.message[0].messages[0].message, ".login-form__message-container");
    }
  } catch (error) {
    console.log(error);
    displayMessage("alert-danger", "There was an error during loin", ".login-form__message-container");
  }
}

// Username: admin@admin.com
// Password: Pass1234
