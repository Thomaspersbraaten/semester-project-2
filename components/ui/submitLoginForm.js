import { baseUrl } from "../consts/baseUrl.js";
import { saveToken, saveUser } from "../storage/storage.js";
import { displayMessage } from "../displayMessage.js";
export async function submitLoginForm(username, password) {
  const loginUrl = baseUrl + "auth/local";
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
      //   location.href = "./index.html";
    }
    if (json.error) {
      displayMessage("alert-danger", "Login attempt failed: " + json.message[0].messages[0].message, ".login-form__message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
