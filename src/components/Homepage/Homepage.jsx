import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  
  const navigate = useNavigate();
  const enterSite = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <span className="text-white text-center">
          <span className="text-black text-center text-5xl font-light tracking-wide font-cursive animate-text align-center"></span>
          <b>MADURAI AIRLINES</b>
        </span>
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl font-bold text-white text-center">
            <span className="block text-5xl text-black">Always Travel</span>
            <div className="relative bg-white bg-opacity-10 rounded-lg text-xl font-medium animate-openclose w-max mx-auto">
              <div className="inline-block px-2">with our own</div>
              <div className="inline-block px-2">for our own</div>
            </div>
          </h1>
        </div>

        {/* Get Started Button */}
        <a
          href="/#"
          onClick={(e) => enterSite(e)}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inline-block w-72 h-12 text-lg font-bold text-center uppercase bg-transparent cursor-pointer text-white font-roboto z-10"
        >
          <svg width="277" height="62">
            <defs>
              <linearGradient id="grad1">
                <stop offset="50%" stopColor="#FF8282" />
                <stop offset="100%" stopColor="#E178ED" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="-5"
              rx="25"
              fill="none"
              stroke="url(#grad1)"
              width="266"
              height="50"
            ></rect>
          </svg>
          <span className="absolute inset-0 text-transparent bg-gradient-to-r from-[#82e6ff] to-[#82e6ff] bg-clip-text">
            Get Started!
          </span>
        </a>
      </div>
    </div>
  );
}
