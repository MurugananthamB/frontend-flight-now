import axios from "axios";
import apiUrl from "../../config";

export function logUserIn(userCredentials) {
  const url = `${apiUrl}/api/users/login`;
  return axios.post(url, userCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function loadRoutes() {
  const authToken = sessionStorage.getItem("authToken") || "";
  const apiUrl = `${
    import.meta.env.VITE_API_URL
  }/user/profile?secret_token=${authToken}`;
 
  return axios.get(apiUrl);
}

export function getCurrentUserDetails(authToken) {
  const apiUrl = `${
    import.meta.env.VITE_API_URL
  }/user/profile?secret_token=${authToken}`;
  return axios.get(apiUrl);
}
