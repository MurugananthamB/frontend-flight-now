import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

import RouteSelector from "../routeSelector/Routeselector";
import SeatSelection from "../SeatSelection/SeatSelection";
import PaymentTab from "../PaymentTab/PaymentTab";
import CancelTicket from "../CancelTicket/CancelTicket";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import TravelHistory from "../TravelHistory/TravelHistory";
import Gallery from "../../portfolio-gallery/Gallery";
import ChangingFeatures from "../ChangingFeatures/ChangingFeatures";
import CustomerService from "../CustomerService/CustomerService";

export default function RouteSelection() {
  const navigate = useNavigate(); // useNavigate hook

  const handleUserIcon = (e) => {
    e.preventDefault();
    navigate("/profile"); // Use navigate instead of history.push
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("reservedSeats");
    localStorage.removeItem("nameData");
    localStorage.clear();
    navigate("/"); // Use navigate instead of history.push
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/routes"); // Use navigate instead of history.push
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-lg">
        <a href="/#" className="text-2xl font-bold" onClick={handleLogoClick}>
          Madurai Airlines
        </a>
        <div className="flex items-center space-x-4">
          <button onClick={handleUserIcon} className="hover:text-gray-300">
            <i className="fa fa-user text-xl"></i>
          </button>
          <button onClick={handleSignOut} className="hover:text-gray-300">
            Sign-Out
          </button>
        </div>
      </nav>

      <div className="my-6">
        <ul className="flex flex-wrap space-x-4 text-sm font-medium text-center text-gray-700 dark:text-gray-400">
          <li>
            <a href="#home" className="nav-link" data-toggle="pill">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ticket Booking
            </a>
          </li>
          <li>
            <a href="#menu1" className="nav-link" data-toggle="pill">
              Seat Selection
            </a>
          </li>
          <li>
            <a href="#menu2" className="nav-link" data-toggle="pill">
              Payment
            </a>
          </li>
          <li>
            <a href="#menu3" className="nav-link" data-toggle="pill">
              Ticket Cancellation
            </a>
          </li>
          <li>
            <a href="#menu4" className="nav-link" data-toggle="pill">
              Travel History
            </a>
          </li>
          <li>
            <a href="#menu5" className="nav-link" data-toggle="pill">
              Flight Status
            </a>
          </li>
          <li>
            <a href="#menu6" className="nav-link" data-toggle="pill">
              Additional Services
            </a>
          </li>
          <li>
            <a href="#menu7" className="nav-link" data-toggle="pill">
              Changing Features
            </a>
          </li>
          <li>
            <a href="#menu8" className="nav-link" data-toggle="pill">
              Customer Service
            </a>
          </li>
        </ul>

        <div className="tab-content mt-4">
          <div className="tab-pane container active" id="home">
            <RouteSelector />
          </div>
          <div className="tab-pane container fade" id="menu1">
            <SeatSelection />
          </div>
          <div className="tab-pane container fade" id="menu2">
            <PaymentTab />
          </div>
          <div className="tab-pane container fade" id="menu3">
            <CancelTicket />
          </div>
          <div className="tab-pane container fade" id="menu4">
            <TravelHistory />
          </div>
          <div className="tab-pane container fade" id="menu5">
            <Gallery />
          </div>
          <div className="tab-pane container fade" id="menu6">
            <AdditionalServices />
          </div>
          <div className="tab-pane container fade" id="menu7">
            <ChangingFeatures />
          </div>
          <div className="tab-pane container fade" id="menu8">
            <CustomerService />
          </div>
        </div>
      </div>
    </div>
  );
}

// // frontend/src/components/RouteSelection/RouteSelection.js

// import React from "react";
// import RouteSelector from "../routeSelector/Routeselector";
// import SeatSelection from "../SeatSelection/SeatSelection";
// import PaymentTab from "../PaymentTab/PaymentTab";
// import CancelTicket from "../CancelTicket/CancelTicket";
// import AdditionalServices from "../AdditionalServices/AdditionalServices";
// import TravelHistory from "../TravelHistory/TravelHistory";
// import Gallery from "../../portfolio-gallery/Gallery";
// import ChangingFeatures from "../ChangingFeatures/ChangingFeatures";
// import CustomerService from "../CustomerService/CustomerService";

// export default function RouteSelection({ history }) {
//   const handleUserIcon = (e) => {
//     e.preventDefault();
//     history.push("/profile");
//   };

//   const handleSignOut = (e) => {
//     e.preventDefault();
//     sessionStorage.removeItem("authToken");
//     localStorage.removeItem("reservedSeats");
//     localStorage.removeItem("nameData");
//     localStorage.clear();
//     history.push("/");
//   };

//   const handleLogoClick = (e) => {
//     e.preventDefault();
//     history.push("/routes");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-lg">
//         <a href="/#" className="text-2xl font-bold" onClick={handleLogoClick}>
//           SA
//         </a>
//         <div className="flex items-center space-x-4">
//           <button onClick={handleUserIcon} className="hover:text-gray-300">
//             <i className="fa fa-user text-xl"></i>
//           </button>
//           <button onClick={handleSignOut} className="hover:text-gray-300">
//             Sign-Out
//           </button>
//         </div>
//       </nav>

//       <div className="my-6">
//         <ul className="flex flex-wrap space-x-4 text-sm font-medium text-center text-gray-700 dark:text-gray-400">
//           <li>
//             <a href="#home" className="nav-link-active" data-toggle="pill">
//               Ticket Booking
//             </a>
//           </li>
//           <li>
//             <a href="#menu1" className="nav-link" data-toggle="pill">
//               Seat Selection
//             </a>
//           </li>
//           <li>
//             <a href="#menu2" className="nav-link" data-toggle="pill">
//               Payment
//             </a>
//           </li>
//           <li>
//             <a href="#menu3" className="nav-link" data-toggle="pill">
//               Ticket Cancellation
//             </a>
//           </li>
//           <li>
//             <a href="#menu4" className="nav-link" data-toggle="pill">
//               Travel History
//             </a>
//           </li>
//           <li>
//             <a href="#menu5" className="nav-link" data-toggle="pill">
//               Flight Status
//             </a>
//           </li>
//           <li>
//             <a href="#menu6" className="nav-link" data-toggle="pill">
//               Additional Services
//             </a>
//           </li>
//           <li>
//             <a href="#menu7" className="nav-link" data-toggle="pill">
//               Changing Features
//             </a>
//           </li>
//           <li>
//             <a href="#menu8" className="nav-link" data-toggle="pill">
//               Customer Service
//             </a>
//           </li>
//         </ul>

//         <div className="tab-content mt-4">
//           <div className="tab-pane container active" id="home">
//             <RouteSelector />
//           </div>
//           <div className="tab-pane container fade" id="menu1">
//             <SeatSelection />
//           </div>
//           <div className="tab-pane container fade" id="menu2">
//             <PaymentTab />
//           </div>
//           <div className="tab-pane container fade" id="menu3">
//             <CancelTicket />
//           </div>
//           <div className="tab-pane container fade" id="menu4">
//             <TravelHistory />
//           </div>
//           <div className="tab-pane container fade" id="menu5">
//             <Gallery />
//           </div>
//           <div className="tab-pane container fade" id="menu6">
//             <AdditionalServices />
//           </div>
//           <div className="tab-pane container fade" id="menu7">
//             <ChangingFeatures />
//           </div>
//           <div className="tab-pane container fade" id="menu8">
//             <CustomerService />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
