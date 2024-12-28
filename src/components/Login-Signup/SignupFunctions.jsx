import axios from "axios";
import apiUrl from "../../config";
export function registerUser(newUserDetails) {
  const api = `${apiUrl}/api/users/register`;
  return axios.post(api, newUserDetails, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
