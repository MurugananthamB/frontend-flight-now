import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import RouteSelection from "./components/RouteSelection/RouteSelection";
import LogOrsign from "./components/Login-Signup/LogOrsign";
import Signup from "./components/Login-Signup/Signup";
import CompletedTrip from "./components/CompletedTrip/CompletedTrip";
import Profile from "./components/Profile/Profile";
import TicketPage from "./components/TicketPage/TicketPage";
import CancelPage from "./components/CancelPage/CancelPage";
import CompletedPage from "./components/CompletedTrip/CompletedTrip";
import UpcomingPage from "./components/TicketPage/TicketPage";
import CancelledPage from "./components/CancelledTicket/CancelledTicket";
import FeaturesPage from "./components/ChangingFeatures/FeaturesPage";
import ServicePage from "./components/ServicePage/ServicePage";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogOrsign />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/routes" element={<RouteSelection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/getTicket" element={<TicketPage />} />
          <Route path="/cancelPage" element={<CancelPage />} />
          <Route path="/completedPage" element={<CompletedPage />} />
          <Route path="/upcomingPage" element={<UpcomingPage />} />
          <Route path="/cancelledPage" element={<CancelledPage />} />
          <Route path="/featuresPage" element={<FeaturesPage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Homepage from "./components/Homepage/Homepage";
// import RouteSelection from "./components/RouteSelection/RouteSelection";
// import LogOrsign from "./components/Login-Signup/LogOrsign";
// import Signup from "./components/Login-Signup/Signup";
// import CompletedTrip from "./components/CompletedTrip/CompletedTrip";

// import Profile from "./components/Profile/Profile";
// import TicketPage from './components/TicketPage/TicketPage';
// import CancelPage from "./components/CancelPage/CancelPage"
// import CompletedPage from "./components/CompletedTrip/CompletedTrip";
// import UpcomingPage from "./components/TicketPage/TicketPage"
// import CancelledPage from "./components/CancelledTicket/CancelledTicket";
// import FeaturesPage from "./components/ChangingFeatures/FeaturesPage";
// import ServicePage from './components/ServicePage/ServicePage';
// import "./index.css";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//          <Routes>
//           <Route path="/" exact render={(props) => <Homepage {...props} />} />
//           <Route path="/login" render={(props) => <LogOrsign {...props} />} />
//           <Route path="/register" render={(props) => <Signup {...props} />} />
//           <Route
//             path="/routes"
//             exact
//             render={(props) => <RouteSelection {...props} />}
//           />
//           <Route
//             path="/profile"
//             exact
//             render={(props) => <Profile {...props} />}
//           />
//           <Route
//             path="/getTicket"
//             exact
//             render={(props) => <TicketPage {...props} />}
//           />
//           <Route
//             path="/cancelPage"
//             exact
//             render={(props) => <CancelPage {...props} />}
//           />
//           <Route
//             path="/completedPage"
//             exact
//             render={(props) => <CompletedPage {...props} />}
//           />
//           <Route
//             path="/upcomingPage"
//             exact
//             render={(props) => <UpcomingPage {...props} />}
//           />
//           <Route
//             path="/cancelledPage"
//             exact
//             render={(props) => <CancelledPage {...props} />}
//           />
//           <Route
//             path="/featuresPage"
//             exact
//             render={(props) => <FeaturesPage {...props} />}
//           />
//           <Route
//             path="/ServicePage"
//             exact
//             render={(props) => <ServicePage {...props} />}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
