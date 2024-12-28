import React, { useState } from "react";
import * as logFunc from "./LoginFunction.jsx";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LogOrsign() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const getToSignUp = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleChangeEvent = (e, title) => {
    setUserData({ ...userData, [title]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    logFunc
      .logUserIn(userData)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        
        const { token } = data;
        // sessionStorage.setItem("authToken", token);
        navigate("/routes");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <section className="bg-white shadow-xl rounded-lg overflow-hidden flex w-full max-w-4xl">
        {/* Left Content */}
        <div className="w-1/2 bg-purple-700 p-8 flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="mb-8">You chose the right option</p>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/#"
                className="p-2 transition"
              >
                <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="p-2 transition"
              >
                <FaTwitterSquare size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Enter Credentials
          </h2>
          <form onSubmit={submitData} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                onChange={(e) => handleChangeEvent(e, "email")}
                className="w-full border-b-2 border-gray-300 py-3 px-4 outline-none focus:border-purple-600 text-gray-700"
              />
              <label className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all transform -translate-y-1/2 text-sm">
                Email-Id
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                required
                onChange={(e) => handleChangeEvent(e, "password")}
                className="w-full border-b-2 border-gray-300 py-3 px-4 outline-none focus:border-purple-600 text-gray-700"
              />
              <label className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all transform -translate-y-1/2 text-sm">
                Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-500">Already a User?</p>
            <a
              href="/#"
              onClick={getToSignUp}
              className="text-green-500 font-semibold hover:text-green-700 transition"
            >
              Sign-Up
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
