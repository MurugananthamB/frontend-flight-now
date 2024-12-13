import axios from "axios";

export async function getRoutesFromApi(startCity, destination) {
  const baseURL =
    "https://flight-booking-and-reservation.onrender.com/booking/";
  try {
    const response = await axios.post(baseURL, { startCity, destination });
    return response.data; // Returns data if request is successful
  } catch (error) {
    console.error("Error fetching routes:", error.message);
    return { error: error.response?.data || "Server error" }; // Provides error details
  }
}
