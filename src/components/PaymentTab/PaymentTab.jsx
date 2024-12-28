import React, { useState, useEffect } from "react";
import { usePaymentInputs } from "react-payment-inputs";
// import images from "react-payment-inputs/images";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

const PaymentTab = () => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    token: "",
  });

  const {
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  useEffect(() => {
    const tok = sessionStorage.getItem("authToken");
    if (tok) {
      const decoded = JSON.parse(atob(tok.split('.')[1])); // Decoding the token manually
      setFormData((prev) => ({ ...prev, token: decoded.user }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpirationDate(value);
    } else if (name === "cvc") {
      formattedValue = formatCVC(value);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => ({ ...acc, [d.name]: d.value }), {});
    setFormData({ ...formData, formData: newFormData });
  };

  const moveToTicketPage = (e) => {
    e.preventDefault();
    // Use formData.token here, instead of 'token'
    localStorage.setItem("paymentData", JSON.stringify(formData.token));
    window.location.href = "/getTicket";
  };

  const renderNamesOfPassenger = () => {
    const passArray = JSON.parse(localStorage.getItem("nameData") || "[]");
    return passArray.map((name, idx) => <p key={idx}>{name}</p>);
  };

  const renderSeatNumbers = () => {
    const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
    return seatArray.map((seat, idx) => <p key={idx}>{seat}</p>);
  };

  const getSumTotal = () => {
    const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
    const count = seatArray.length;
    const tax = 150;
    return (
      <div className="flex flex-col gap-1 mt-4">
        <hr className="border-gray-400" />
        <p>₹{1000 * count}</p>
        <p>+ ₹{tax}</p>
        <p>Total: ₹{1000 * count + tax}</p>
      </div>
    );
  };

 return (
    <div className="p-6 bg-blue-200 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Payment Form */}
        <div className="flex-1 p-6 bg-white rounded shadow-md">
          <h3 className="text-lg font-bold mb-4 text-center uppercase">
            Enter Credit Card Details
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              {/* <img
                {...getCardImageProps({ images })}
                alt="Credit Card Logo"
                className="mb-2"
              /> */}
              <input
                {...getCardNumberProps({ onChange: handleInputChange })}
                name="number"
                className="p-2 border rounded w-3/4"
                placeholder="Card Number"
                required
              />
            </div>
            <input
              name="name"
              className="p-2 border rounded w-full"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <div className="flex gap-4">
              <input
                {...getExpiryDateProps({ onChange: handleInputChange })}
                name="expiry"
                className="p-2 border rounded w-full"
                placeholder="Valid Thru (MM/YY)"
                required
              />
              <input
                {...getCVCProps({ onChange: handleInputChange })}
                name="cvc"
                className="p-2 border rounded w-1/2"
                placeholder="CVC"
                required
              />
            </div>
            <button
              onClick={moveToTicketPage} // Using correct function here
              className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            >
              Pay
            </button>
          </form>
        </div>

        {/* Booking Details */}
        <div className="flex-1 p-6 bg-white rounded shadow-md">
          <h3 className="text-lg font-bold text-center">Passengers Airlines</h3>
          <p className="text-center mt-2 mb-4">Booking Details</p>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Username</p>
              <hr className="border-gray-400 my-1" />
              <p>{localStorage.getItem("date")}</p>
              <p>{localStorage.getItem("start")}</p>
              <p>{localStorage.getItem("destination")}</p>
              <hr className="border-gray-400 my-1" />
            </div>
            <div>
              <p className="font-semibold">Passengers</p>
              {renderNamesOfPassenger()}
              <hr className="border-gray-400 my-1" />
            </div>
            <div>
              <p className="font-semibold">Seat Numbers</p>
              {renderSeatNumbers()}
            </div>
            {getSumTotal()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTab;





// import React, { useState, useEffect } from "react";
// import { usePaymentInputs } from "react-payment-inputs";
// import images from "react-payment-inputs/images";
// import * as jwt_decode from "jwt-decode";
// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
// } from "./utils";

// const PaymentTab = () => {
//   const [formData, setFormData] = useState({
//     number: "",
//     name: "",
//     expiry: "",
//     cvc: "",
//     issuer: "",
//     focused: "",
//     token: "",
//   });

//   const {
//     getCardImageProps,
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//   } = usePaymentInputs();

//   useEffect(() => {
//     const tok = sessionStorage.getItem("authToken");
//     if (tok) {
//       const decoded = jwt_decode(tok); // Using the decoded token directly
//       setFormData((prev) => ({ ...prev, token: decoded.user }));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let formattedValue = value;

//     if (name === "number") {
//       formattedValue = formatCreditCardNumber(value);
//     } else if (name === "expiry") {
//       formattedValue = formatExpirationDate(value);
//     } else if (name === "cvc") {
//       formattedValue = formatCVC(value);
//     }

//     setFormData((prev) => ({ ...prev, [name]: formattedValue }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFormData = [...e.target.elements]
//       .filter((d) => d.name)
//       .reduce((acc, d) => ({ ...acc, [d.name]: d.value }), {});
//     setFormData({ ...formData, formData: newFormData });
//   };

//   const moveToTicketPage = (e) => {
//     e.preventDefault();
//     // Use formData.token here, instead of 'token'
//     localStorage.setItem("paymentData", JSON.stringify(formData.token));
//     window.location.href = "/getTicket";
//   };

//   const renderNamesOfPassenger = () => {
//     const passArray = JSON.parse(localStorage.getItem("nameData") || "[]");
//     return passArray.map((name, idx) => <p key={idx}>{name}</p>);
//   };

//   const renderSeatNumbers = () => {
//     const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
//     return seatArray.map((seat, idx) => <p key={idx}>{seat}</p>);
//   };

//   const getSumTotal = () => {
//     const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
//     const count = seatArray.length;
//     const tax = 150;
//     return (
//       <div className="flex flex-col gap-1 mt-4">
//         <hr className="border-gray-400" />
//         <p>₹{1000 * count}</p>
//         <p>+ ₹{tax}</p>
//         <p>Total: ₹{1000 * count + tax}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 bg-blue-200 rounded-lg">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Payment Form */}
//         <div className="flex-1 p-6 bg-white rounded shadow-md">
//           <h3 className="text-lg font-bold mb-4 text-center uppercase">
//             Enter Credit Card Details
//           </h3>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="flex flex-col items-center">
//               <img
//                 {...getCardImageProps({ images })}
//                 alt="Credit Card Logo"
//                 className="mb-2"
//               />
//               <input
//                 {...getCardNumberProps({ onChange: handleInputChange })}
//                 name="number"
//                 className="p-2 border rounded w-3/4"
//                 placeholder="Card Number"
//                 required
//               />
//             </div>
//             <input
//               name="name"
//               className="p-2 border rounded w-full"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <div className="flex gap-4">
//               <input
//                 {...getExpiryDateProps({ onChange: handleInputChange })}
//                 name="expiry"
//                 className="p-2 border rounded w-full"
//                 placeholder="Valid Thru (MM/YY)"
//                 required
//               />
//               <input
//                 {...getCVCProps({ onChange: handleInputChange })}
//                 name="cvc"
//                 className="p-2 border rounded w-1/2"
//                 placeholder="CVC"
//                 required
//               />
//             </div>
//             <button
//               onClick={moveToTicketPage} // Using correct function here
//               className="w-full bg-blue-500 text-white py-2 rounded mt-4"
//             >
//               Pay
//             </button>
//           </form>
//         </div>

//         {/* Booking Details */}
//         <div className="flex-1 p-6 bg-white rounded shadow-md">
//           <h3 className="text-lg font-bold text-center">Passengers Airlines</h3>
//           <p className="text-center mt-2 mb-4">Booking Details</p>
//           <div className="space-y-2">
//             <div>
//               <p className="font-semibold">Username</p>
//               <hr className="border-gray-400 my-1" />
//               <p>{localStorage.getItem("date")}</p>
//               <p>{localStorage.getItem("start")}</p>
//               <p>{localStorage.getItem("destination")}</p>
//               <hr className="border-gray-400 my-1" />
//             </div>
//             <div>
//               <p className="font-semibold">Passengers</p>
//               {renderNamesOfPassenger()}
//               <hr className="border-gray-400 my-1" />
//             </div>
//             <div>
//               <p className="font-semibold">Seat Numbers</p>
//               {renderSeatNumbers()}
//             </div>
//             {getSumTotal()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentTab;







// import React, { useState, useEffect } from "react";
// import { usePaymentInputs } from "react-payment-inputs";
// import images from "react-payment-inputs/images";
// import * as jwt_decode from "jwt-decode";
// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
// } from "./utils";

// const PaymentTab = () => {
//   const [formData, setFormData] = useState({
//     number: "",
//     name: "",
//     expiry: "",
//     cvc: "",
//     issuer: "",
//     focused: "",
//     token: "",
//   });
//   const decodedToken = jwt_decode.default(token);

//   const {
//     getCardImageProps,
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//   } = usePaymentInputs();

//   useEffect(() => {
//     const tok = sessionStorage.getItem("authToken");
//     if (tok) {
//       const decoded = jwt_decode(tok);
//       setFormData((prev) => ({ ...prev, token: decoded.user }));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let formattedValue = value;

//     if (name === "number") {
//       formattedValue = formatCreditCardNumber(value);
//     } else if (name === "expiry") {
//       formattedValue = formatExpirationDate(value);
//     } else if (name === "cvc") {
//       formattedValue = formatCVC(value);
//     }

//     setFormData((prev) => ({ ...prev, [name]: formattedValue }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFormData = [...e.target.elements]
//       .filter((d) => d.name)
//       .reduce((acc, d) => ({ ...acc, [d.name]: d.value }), {});
//     setFormData({ ...formData, formData: newFormData });
//   };

//   const moveToTicketPage = (e) => {
//     e.preventDefault();
//     localStorage.setItem("paymentData", JSON.stringify(formData.token));
//     window.location.href = "/getTicket";
//   };

//   const renderNamesOfPassenger = () => {
//     const passArray = JSON.parse(localStorage.getItem("nameData") || "[]");
//     return passArray.map((name, idx) => <p key={idx}>{name}</p>);
//   };

//   const renderSeatNumbers = () => {
//     const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
//     return seatArray.map((seat, idx) => <p key={idx}>{seat}</p>);
//   };

//   const getSumTotal = () => {
//     const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
//     const count = seatArray.length;
//       const tax = 150;

// import React, { useState, useEffect } from "react";
// import { usePaymentInputs } from "react-payment-inputs";
// import images from "react-payment-inputs/images";
// import jwt_decode from "jwt-decode"; // Correct import for jwt_decode

// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
// } from "./utils";

// const PaymentTab = () => {
//   const [formData, setFormData] = useState({
//     number: "",
//     name: "",
//     expiry: "",
//     cvc: "",
//     issuer: "",
//     focused: "",
//     token: "", // Initially token is empty
//   });

//   // Use the sessionStorage token to decode the JWT
//   useEffect(() => {
//     const tok = sessionStorage.getItem("authToken");
//     if (tok) {
//       const decoded = jwt_decode(tok); // Decoding the token
//       setFormData((prev) => ({ ...prev, token: decoded.user })); // Setting token data in formData
//     }
//   }, []);

//   const {
//     getCardImageProps,
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//   } = usePaymentInputs();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let formattedValue = value;

//     if (name === "number") {
//       formattedValue = formatCreditCardNumber(value);
//     } else if (name === "expiry") {
//       formattedValue = formatExpirationDate(value);
//     } else if (name === "cvc") {
//       formattedValue = formatCVC(value);
//     }

//     setFormData((prev) => ({ ...prev, [name]: formattedValue }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFormData = [...e.target.elements]
//       .filter((d) => d.name)
//       .reduce((acc, d) => ({ ...acc, [d.name]: d.value }), {});
//     setFormData({ ...formData, formData: newFormData });
//   };

//   const moveToTicketPage = (e) => {
//     e.preventDefault();
//     // Storing the token data to localStorage for the next page
//     localStorage.setItem("paymentData", JSON.stringify(formData.token));
//     window.location.href = "/getTicket";
//   };

//   const renderNamesOfPassenger = () => {
//     const passArray = JSON.parse(localStorage.getItem("nameData") || "[]");
//     return passArray.map((name, idx) => <p key={idx}>{name}</p>);
//   };

//   const renderSeatNumbers = () => {
//     const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
//     return seatArray.map((seat, idx) => <p key={idx}>{seat}</p>);
//   };

//   const getSumTotal = () => {
//     const seatArray = JSON.parse(localStorage.getItem("reservedSeats") || "[]");
//     const count = seatArray.length;
//     const tax = 150;
//     return (
//       <div className="flex flex-col gap-1 mt-4">
//         <hr className="border-gray-400" />
//         <p>₹{1000 * count}</p>
//         <p>+ ₹{tax}</p>
//         <p>Total: ₹{1000 * count + tax}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 bg-blue-200 rounded-lg">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Payment Form */}
//         <div className="flex-1 p-6 bg-white rounded shadow-md">
//           <h3 className="text-lg font-bold mb-4 text-center uppercase">
//             Enter Credit Card Details
//           </h3>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="flex flex-col items-center">
//               <img
//                 {...getCardImageProps({ images })}
//                 alt="Credit Card Logo"
//                 className="mb-2"
//               />
//               <input
//                 {...getCardNumberProps({ onChange: handleInputChange })}
//                 name="number"
//                 className="p-2 border rounded w-3/4"
//                 placeholder="Card Number"
//                 required
//               />
//             </div>
//             <input
//               name="name"
//               className="p-2 border rounded w-full"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <div className="flex gap-4">
//               <input
//                 {...getExpiryDateProps({ onChange: handleInputChange })}
//                 name="expiry"
//                 className="p-2 border rounded w-full"
//                 placeholder="Valid Thru (MM/YY)"
//                 required
//               />
//               <input
//                 {...getCVCProps({ onChange: handleInputChange })}
//                 name="cvc"
//                 className="p-2 border rounded w-1/2"
//                 placeholder="CVC"
//                 required
//               />
//             </div>
//             <button
//               onClick={moveToTicketPage}
//               className="w-full bg-blue-500 text-white py-2 rounded mt-4"
//             >
//               Pay
//             </button>
//           </form>
//         </div>

//         {/* Booking Details */}
//         <div className="flex-1 p-6 bg-white rounded shadow-md">
//           <h3 className="text-lg font-bold text-center">Swadeshi Airlines</h3>
//           <p className="text-center mt-2 mb-4">Booking Details</p>
//           <div className="space-y-2">
//             <div>
//               <p className="font-semibold">Username</p>
//               <hr className="border-gray-400 my-1" />
//               <p>{localStorage.getItem("date")}</p>
//               <p>{localStorage.getItem("start")}</p>
//               <p>{localStorage.getItem("destination")}</p>
//               <hr className="border-gray-400 my-1" />
//             </div>
//             <div>
//               <p className="font-semibold">Passengers</p>
//               {renderNamesOfPassenger()}
//               <hr className="border-gray-400 my-1" />
//             </div>
//             <div>
//               <p className="font-semibold">Seat Numbers</p>
//               {renderSeatNumbers()}
//             </div>
//             {getSumTotal()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentTab;
