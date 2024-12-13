import axios from "axios";

export function logUserIn(userCredentials) {
  const apiUrl = `${import.meta.env.VITE_API_URL}/login`;
  return axios.post(apiUrl, userCredentials, {
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
