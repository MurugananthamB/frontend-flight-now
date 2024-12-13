import axios from "axios";

export function registerUser(newUserDetails) {
  const apiUrl = `${import.meta.env.VITE_API_URL}/register`;
  return axios.post(apiUrl, newUserDetails, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
