import { baseUrl } from "../consts/baseUrl.js";
import { displayMessage } from "../displayMessage.js";
import { getToken } from "../storage/storage.js";

export async function deleteProduct({ id }) {
  console.log("yes");
  console.log(id);
  const token = getToken();
  const deleteUrl = baseUrl + "products/" + id;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  try {
    const response = await fetch(deleteUrl, options);
    const json = await response.json();
    console.log(json);
    if (json.id) {
      location.reload();
      // legg inn blank form med succemessage og back button.
    }
    if (json.error) {
      displayMessage("alert-danger", "Something went wrong during deletion", ".modal-form__message");
    }
  } catch (error) {
    console.log(error);
  }
}
