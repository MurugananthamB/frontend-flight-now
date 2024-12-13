import React, { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function SeatSelection() {
  const [name, setName] = useState([]);
  const [arrowDown, setArrowDown] = useState(false);
  const [gender, setGender] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([
    "1A",
    "2A",
    "2B",
    "3B",
    "4A",
    "5C",
    "6A",
    "7B",
    "7C",
    "8B",
    "9B",
    "9C",
  ]);
  const [seatNumber, setSeatNumber] = useState([]);

  const getSeatNumber = (e) => {
    let newSeat = e.target.value;
    if (reservedSeat.includes(newSeat)) {
      e.target.checked = false;
      if (seatNumber.includes(newSeat)) {
        setSeatNumber(seatNumber.filter((seat) => seat !== newSeat));
      }
    } else {
      setSeatNumber([...seatNumber, newSeat]);
      setReservedSeat([...reservedSeat, newSeat]);
    }
  };

  const handleGender = (e, seatNo) => {
    const { value } = e.target;
    setGender([...gender, value]);
  };

  const handlePassengerName = (e, seatNo) => {
    e.preventDefault();
    const value = e.target.value;
    if (value) {
      setName([...name, value]);
    }
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    setArrowDown(true);
    localStorage.setItem("reservedSeats", JSON.stringify(seatNumber));
    localStorage.setItem("nameData", JSON.stringify(name));
  };

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => (
      <form key={idx} className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
        <p className="text-center text-lg font-semibold mb-2">
          Seat No: {seat}
        </p>
        <input
          className="w-full p-2 border rounded mb-2"
          onBlur={(e) => handlePassengerName(e, seat)}
          type="text"
          name="passenger-name"
          placeholder="Enter Name"
        />
        <div className="flex justify-center gap-4">
          <label className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              name={`gender-${seat}`}
              value="Male"
              onClick={(e) => handleGender(e, seat)}
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              name={`gender-${seat}`}
              value="Female"
              onClick={(e) => handleGender(e, seat)}
            />
            Female
          </label>
        </div>
      </form>
    ));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Seat Layout */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <form
            onChange={(e) => getSeatNumber(e)}
            className="flex flex-col gap-2"
          >
            {[...Array(10)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex justify-around mb-2">
                {["A", "B", "C"].map((seatLetter) => {
                  const seatID = `${rowIndex + 1}${seatLetter}`;
                  return (
                    <label key={seatID} className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        value={seatID}
                        id={seatID}
                        disabled={reservedSeat.includes(seatID)}
                        className="mr-2"
                      />
                      <span
                        className={`p-2 rounded ${
                          reservedSeat.includes(seatID)
                            ? "bg-red-300 text-white cursor-not-allowed"
                            : "bg-green-300 text-gray-800"
                        }`}
                      >
                        {seatID}
                      </span>
                    </label>
                  );
                })}
              </div>
            ))}
          </form>
        </div>

        {/* Passenger Details */}
        <div className="w-full md:w-1/2">
          <div className="space-y-4">{renderPassengerData(seatNumber)}</div>
          <button
            onClick={handleSubmitDetails}
            className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600 transition"
          >
            Confirm Details
          </button>
          <div
            className={`flex justify-center mt-4 ${
              arrowDown ? "block" : "hidden"
            }`}
          >
            <FaAngleDoubleDown className="text-3xl text-blue-500 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
