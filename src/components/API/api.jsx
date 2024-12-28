import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? https://flight-booking-and-reservation.onrender.com
    : "http://localhost:3000"; // Localhost URL for development

export default axios.create({
  baseURL: baseURL,
});
