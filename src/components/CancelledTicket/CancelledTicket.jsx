import React from "react";
import * as jwt_decode from "jwt-decode";


export default class CancelledTicket extends React.Component {
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
    window.location.href = "/cancelPage";
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
        <div className="flex justify-center">
          <div className="w-11/12 md:w-9/12 lg:w-7/12 bg-opacity-60 bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">PASSENGER AIRLINES</h3>
            <p className="text-lg font-semibold mb-4">
              Cancelled TICKET DETAILS
            </p>
            <div className="flex justify-between">
              <div className="w-1/2">
                <hr className="border-gray-500" />
                <p className="font-bold">Date</p>
                <p className="font-bold">From</p>
                <p className="font-bold">To</p>
                <hr className="border-gray-500" />
                <p className="font-bold">Passengers</p>
                {this.renderNamesOfPassenger()}
                <hr className="border-gray-500" />
                <p className="font-bold">Ticket price</p>
                <p className="font-bold">Tax</p>
                <p className="font-bold">Amount Refunded</p>
              </div>
              <div className="w-1/2">
                <hr className="border-gray-500" />
                <p>{localStorage.getItem("date")}</p>
                <p>{localStorage.getItem("start")}</p>
                <p>{localStorage.getItem("destination")}</p>
                <hr className="border-gray-500" />
                <p className="font-bold">Seat No</p>
                {this.renderSeatNumbers()}
                {this.getSumTotal()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
