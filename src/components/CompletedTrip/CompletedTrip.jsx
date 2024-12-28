import React from "react";
import * as jwt_decode from "jwt-decode";
// import KommunicateChat from "../Chat";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: "",
    token: "",
  };

  componentDidMount() {
    const tok = sessionStorage.getItem("authToken");
    const decoded = jwt_decode.default(tok);
    this.setState({ token: decoded.user });
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  moveToCancelPage = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentData", JSON.stringify(this.state.token));
    window.location.href = "/cancelledPage";
  };

  moveToCompletedpage = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentData", JSON.stringify(this.state.token));
    window.location.href = "/completedPage";
  };

  moveToupcomingpage = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentData", JSON.stringify(this.state.token));
    window.location.href = "/upcomingPage";
  };

  renderNamesOfPassenger = () => {
    let passArray = localStorage.getItem("nameData");
    if (passArray) {
      let nameArray = JSON.parse(passArray);
      return nameArray.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      });
    }
  };

  renderSeatNumbers = () => {
    let seatArray = localStorage.getItem("reservedSeats");
    if (seatArray) {
      let seaArr = JSON.parse(seatArray);
      return seaArr.map((seat, idx) => {
        return <p key={idx}>{seat}</p>;
      });
    }
  };

  getSumTotal = () => {
    let count = 0;
    let tax = 150;
    let seatArray = localStorage.getItem("reservedSeats");
    if (seatArray) {
      let seaArr = JSON.parse(seatArray);
      for (let i = 0; i < seaArr.length; i++) {
        count++;
      }
      return (
        <div>
          <hr className="border-gray-500" />
          <p>{1000 * count}</p>
          <p>+{tax}</p>
          <p>{1000 * count + tax}</p>
        </div>
      );
    }
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData, token } =
      this.state;

    return (
      <div>
        <p className="flex justify-center items-center text-4xl">
          Completed Trips
        </p>
        <div className="flex space-x-4 justify-center">
          <div className="bg-red-500 text-white p-4 rounded-md">
            <hr className="border-gray-500" />
            <p className="font-bold">Date</p>
            <p className="font-bold">From</p>
            <p className="font-bold">To</p>
            <hr className="border-gray-500" />
            <p className="font-bold">Ticket price</p>
            <p className="font-bold">Total Sum</p>
            <hr className="border-gray-500" />
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold">10-01-2022</p>
              <p>Coimbatore</p>
              <p>Lucknow</p>
              <p className="font-bold">Seat No: 32E</p>
              <p>17800</p>
            </div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-md">
            <hr className="border-gray-500" />
            <p className="font-bold">Date</p>
            <p className="font-bold">From</p>
            <p className="font-bold">To</p>
            <hr className="border-gray-500" />
            <p className="font-bold">Ticket price</p>
            <p className="font-bold">Total Sum</p>
            <hr className="border-gray-500" />
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold">19-02-2022</p>
              <p>Delhi</p>
              <p>Madurai</p>
              <p className="font-bold">Seat No: 21D</p>
              <p>17800</p>
            </div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-md">
            <hr className="border-gray-500" />
            <p className="font-bold">Date</p>
            <p className="font-bold">From</p>
            <p className="font-bold">To</p>
            <hr className="border-gray-500" />
            <p className="font-bold">Ticket price</p>
            <p className="font-bold">Total Sum</p>
            <hr className="border-gray-500" />
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold">21-03-2022</p>
              <p>Manali</p>
              <p>Sikkhim</p>
              <p className="font-bold">Seat No: 11A</p>
              <p>17800</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
