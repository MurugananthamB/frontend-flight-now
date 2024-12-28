import React from "react";
import { jwtDecode } from "jwt-decode"; // Named import

// import KommunicateChat from "../Chat";

export default class TravelHistory extends React.Component {
  state = {
    token: "",
  };

  componentDidMount() {
    const tok = sessionStorage.getItem("authToken");
    if (tok) {
      const decoded = jwtDecode(tok); // Use decode function here
      this.setState({ token: decoded.user });
    }
  }

  moveToPage = (e, page) => {
    e.preventDefault();
    localStorage.setItem("paymentData", JSON.stringify(this.state.token));
    window.location.href = `/${page}`;
  };

  renderNamesOfPassenger = () => {
    const passArray = localStorage.getItem("nameData");
    if (passArray) {
      const nameArray = JSON.parse(passArray);
      return nameArray.map((name, idx) => (
        <p key={idx} className="capitalize">
          {name}
        </p>
      ));
    }
  };

  renderSeatNumbers = () => {
    const seatArray = localStorage.getItem("reservedSeats");
    if (seatArray) {
      const seaArr = JSON.parse(seatArray);
      return seaArr.map((seat, idx) => <p key={idx}>{seat}</p>);
    }
  };

  getSumTotal = () => {
    const seatArray = localStorage.getItem("reservedSeats");
    const tax = 150;
    if (seatArray) {
      const count = JSON.parse(seatArray).length;
      const totalCost = 1000 * count + tax;
      return (
        <div className="text-center mt-2">
          <hr className="border-gray-500" />
          <p>
            {1000 * count} + {tax} = {totalCost}
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="bg-green-400 bg-opacity-75 min-h-screen flex justify-center items-center">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/2">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            PASSENGER AIRLINES
          </h3>
          <p className="text-xl font-semibold text-center mb-6">
            TRAVEL HISTORY DETAILS
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={(e) => this.moveToPage(e, "upcomingPage")}
              className="btn btn-light bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Upcoming Flights
            </button>
            <button
              onClick={(e) => this.moveToPage(e, "completedPage")}
              className="btn btn-light bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Completed Trips
            </button>
            <button
              onClick={(e) => this.moveToPage(e, "cancelledPage")}
              className="btn btn-light bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Cancelled Flights
            </button>
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-bold mb-2">Passenger Names:</h4>
            {this.renderNamesOfPassenger()}
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-bold mb-2">Seat Numbers:</h4>
            {this.renderSeatNumbers()}
          </div>
          {this.getSumTotal()}
        </div>
      </div>
    );
  }
}
