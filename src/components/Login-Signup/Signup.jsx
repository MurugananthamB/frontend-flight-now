import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate(); 
  const [newUser, setnewUser] = useState({});

  const handleChangeEvent = (e, field) => {
    let fieldValue = e.target.value;
    setnewUser({ ...newUser, [field]: fieldValue });
  };

  const getToSignIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const submitData = (e) => {
    e.preventDefault();
    signupFunc.registerUser(newUser).then((response) => response.data);
    console.log(newUser);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cover bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-11/12 max-w-4xl p-8 md:flex">
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-purple-700 text-white p-8">
          <h3 className="text-2xl font-semibold mb-6">Join Us with Social</h3>
          <div className="flex space-x-4">
            <div className="p-2 bg-blue-600 rounded-full text-white">
              <FaFacebookF size={24} />
            </div>
            <div className="p-2 bg-blue-400 rounded-full text-white">
              <FaTwitterSquare size={24} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <form onSubmit={(e) => submitData(e)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-purple-600"
                onChange={(e) => handleChangeEvent(e, "name")}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email - ID:
              </label>
              <input
                id="email"
                type="email"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-purple-600"
                onChange={(e) => handleChangeEvent(e, "email")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 font-semibold"
              >
                Mobile - No.:
              </label>
              <input
                id="mobile"
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-purple-600"
                onChange={(e) => handleChangeEvent(e, "mobile")}
                required
              />
            </div>
            <div className="mb-4">
              <span className="text-gray-700 font-semibold">Gender:</span>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => handleChangeEvent(e, "gender")}
                    className="mr-2"
                    required
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => handleChangeEvent(e, "gender")}
                    className="mr-2"
                    required
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold"
              >
                Password:
              </label>
              <input
                id="password"
                type="password"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-purple-600"
                onChange={(e) => handleChangeEvent(e, "password")}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
              >
                Submit
              </button>
            </div>
            <div className="text-center text-sm text-gray-600">
              Already a User?{" "}
              <a
                href="/#"
                onClick={getToSignIn}
                className="text-purple-700 hover:underline"
              >
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
