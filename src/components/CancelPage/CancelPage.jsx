import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./parzi.gif";
import bgimg from "./mainbg.png";

export default function TicketPage() {
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    localStorage.clear();
    navigate("/");
  };

  const handleBookAgain = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/routes");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col items-center text-gray-800"
    >
      <nav className="w-full py-4 px-6 flex justify-between bg-blue-800 text-white shadow-lg">
        <a href="/" className="text-2xl font-bold">
          SA
        </a>
        <div className="flex space-x-4">
          <button onClick={handleBookAgain} className="hover:text-gray-300">
            Book Again
          </button>
          <button onClick={handleSignOut} className="hover:text-gray-300">
            Sign-Out
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center mt-10">
        <img
          src={logo}
          alt="Loading..."
          className="w-3/4 h-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
}
