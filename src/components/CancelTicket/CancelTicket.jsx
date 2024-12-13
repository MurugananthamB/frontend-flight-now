import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from React Router v6
import { jwtDecode } from "jwt-decode"; // Import jwt-decode

const CancelTicket = () => {
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const tok = sessionStorage.getItem("authToken");
    if (tok) {
      const decoded = jwtDecode(tok); // Decode the token
      setToken(decoded.user);
    }
  }, []);

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setFormData(formData);
    e.target.reset();
  };

  const moveToCancelPage = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentData", JSON.stringify(token));
    navigate("/cancelPage"); // Use navigate to move to the cancelPage
  };

  const renderNamesOfPassenger = () => {
    const passArray = localStorage.getItem("nameData");
    if (passArray) {
      const nameArray = JSON.parse(passArray);
      return nameArray.map((name, idx) => (
        <p key={idx} className="capitalize font-semibold">
          {name}
        </p>
      ));
    }
  };

  const renderSeatNumbers = () => {
    const seatArray = localStorage.getItem("reservedSeats");
    if (seatArray) {
      const seaArr = JSON.parse(seatArray);
      return seaArr.map((seat, idx) => (
        <p key={idx} className="capitalize font-semibold">
          {seat}
        </p>
      ));
    }
  };

  const getSumTotal = () => {
    const tax = 150;
    const seatArray = localStorage.getItem("reservedSeats");
    if (seatArray) {
      const seaArr = JSON.parse(seatArray);
      const count = seaArr.length;
      return (
        <div className="flex flex-col gap-1 mt-2">
          <hr className="bg-gray-400 h-px" />
          <p>{1000 * count}</p>
          <p>+{tax}</p>
          <p>{1000 * count + tax}</p>
        </div>
      );
    }
  };

  return (
    <div className="bg-red-500 bg-opacity-70 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">PASSENGERS AIRLINES</h3>
        <p className="text-center font-bold uppercase">Booked Ticket Details</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-left">
            <hr className="bg-gray-400 h-px mb-2" />
            <p className="font-bold">Date</p>
            <p className="font-bold">From</p>
            <p className="font-bold">To</p>
            <hr className="bg-gray-400 h-px mb-2" />
            <p className="font-bold">Passengers</p>
            {renderNamesOfPassenger()}
            <hr className="bg-gray-400 h-px mb-2" />
            <p className="font-bold">Ticket Price</p>
            <p className="font-bold">Tax</p>
            <p className="font-bold">Total Sum</p>
          </div>

          <div className="text-left">
            <hr className="bg-gray-400 h-px mb-2" />
            <p className="capitalize font-semibold">
              {localStorage.getItem("date")}
            </p>
            <p className="capitalize font-semibold">
              {localStorage.getItem("start")}
            </p>
            <p className="capitalize font-semibold">
              {localStorage.getItem("destination")}
            </p>
            <hr className="bg-gray-400 h-px mb-2" />
            <p className="font-bold">Seat No</p>
            {renderSeatNumbers()}
            {getSumTotal()}
          </div>
        </div>

        <button
          onClick={moveToCancelPage}
          className="mt-6 w-1/2 mx-auto py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300"
        >
          Cancel Ticket
        </button>
      </div>
    </div>
  );
};

export default CancelTicket;

// import React from "react";
// import * as jwt_decode from "jwt-decode";
// import { useHistory } from "react-router-dom";

// export default class CancelTicket extends React.Component {
//   state = {
//     number: "",
//     name: "",
//     expiry: "",
//     cvc: "",
//     issuer: "",
//     focused: "",
//     formData: "",
//     token: "",
//   };

//   componentDidMount() {
//     const tok = sessionStorage.getItem("authToken");
//     if (tok) {
//       const decoded = jwt_decode.decode(tok); // Decoding the token
//       this.setState({ token: decoded.user });
//     }
//   }

//   handleCallback = ({ issuer }, isValid) => {
//     if (isValid) {
//       this.setState({ issuer });
//     }
//   };

//   handleInputFocus = ({ target }) => {
//     this.setState({
//       focused: target.name,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { issuer } = this.state;
//     const formData = [...e.target.elements]
//       .filter((d) => d.name)
//       .reduce((acc, d) => {
//         acc[d.name] = d.value;
//         return acc;
//       }, {});

//     this.setState({ formData });
//     this.form.reset();
//   };

//   moveToCancelPage = (e) => {
//     e.preventDefault();
//     localStorage.setItem("paymentData", JSON.stringify(this.state.token));
//     this.props.history.push("/cancelPage"); // Using React Router for navigation
//   };

//   renderNamesOfPassenger = () => {
//     const passArray = localStorage.getItem("nameData");
//     if (passArray) {
//       const nameArray = JSON.parse(passArray);
//       return nameArray.map((name, idx) => (
//         <p key={idx} className="capitalize font-semibold">
//           {name}
//         </p>
//       ));
//     }
//   };

//   renderSeatNumbers = () => {
//     const seatArray = localStorage.getItem("reservedSeats");
//     if (seatArray) {
//       const seaArr = JSON.parse(seatArray);
//       return seaArr.map((seat, idx) => (
//         <p key={idx} className="capitalize font-semibold">
//           {seat}
//         </p>
//       ));
//     }
//   };

//   getSumTotal = () => {
//     const tax = 150;
//     const seatArray = localStorage.getItem("reservedSeats");
//     if (seatArray) {
//       const seaArr = JSON.parse(seatArray);
//       const count = seaArr.length;
//       return (
//         <div className="flex flex-col gap-1 mt-2">
//           <hr className="bg-gray-400 h-px" />
//           <p>{1000 * count}</p>
//           <p>+{tax}</p>
//           <p>{1000 * count + tax}</p>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div className="bg-red-500 bg-opacity-70 min-h-screen flex items-center justify-center">
//         <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-md w-full max-w-md">
//           <h3 className="text-lg font-bold mb-4">PASSENGERS AIRLINES</h3>
//           <p className="text-center font-bold uppercase">
//             Booked Ticket Details
//           </p>

//           <div className="grid grid-cols-2 gap-4 mt-4">
//             <div className="text-left">
//               <hr className="bg-gray-400 h-px mb-2" />
//               <p className="font-bold">Date</p>
//               <p className="font-bold">From</p>
//               <p className="font-bold">To</p>
//               <hr className="bg-gray-400 h-px mb-2" />
//               <p className="font-bold">Passengers</p>
//               {this.renderNamesOfPassenger()}
//               <hr className="bg-gray-400 h-px mb-2" />
//               <p className="font-bold">Ticket Price</p>
//               <p className="font-bold">Tax</p>
//               <p className="font-bold">Total Sum</p>
//             </div>

//             <div className="text-left">
//               <hr className="bg-gray-400 h-px mb-2" />
//               <p className="capitalize font-semibold">
//                 {localStorage.getItem("date")}
//               </p>
//               <p className="capitalize font-semibold">
//                 {localStorage.getItem("start")}
//               </p>
//               <p className="capitalize font-semibold">
//                 {localStorage.getItem("destination")}
//               </p>
//               <hr className="bg-gray-400 h-px mb-2" />
//               <p className="font-bold">Seat No</p>
//               {this.renderSeatNumbers()}
//               {this.getSumTotal()}
//             </div>
//           </div>

//           <button
//             onClick={this.moveToCancelPage}
//             className="mt-6 w-1/2 mx-auto py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300"
//           >
//             Cancel Ticket
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
