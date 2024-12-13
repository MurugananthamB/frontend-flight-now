import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function BusList({ value: dataInp }) {
  const [obj, setObj] = useState("");
  const [reset, setReset] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const [clas, setClas] = useState(true);

  useEffect(() => {
    setObj(dataInp);
  }, [dataInp]);

  const handleSubmit = (bId) => {
    localStorage.setItem("selectedBusId", bId);
    setClas(false);
    setArrowDown(true);
  };

  const handleReset = () => {
    if (!clas) {
      setReset(true);
      setClas(true);
      setArrowDown(false);
    }
    localStorage.removeItem("selectedBusId");
  };

  const renderFunction = () => {
    return dataInp.map((bus, idx) => (
      <div key={idx} className="bg-blue-50 rounded-lg shadow-lg p-4 my-5">
        <div className="flex flex-wrap items-center mb-4">
          <div className="w-1/4 font-semibold">Brand</div>
          <div className="w-1/4 font-semibold">From</div>
          <div className="w-1/4 font-semibold">To</div>
          <div className="w-1/4 font-semibold">Price</div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="w-1/4 mb-2">{bus.companyName}</div>
          <div className="w-1/4 mb-2">{bus.startCity}</div>
          <div className="w-1/4 mb-2">{bus.destination}</div>
          <div className="w-1/4 mb-2">{bus.pricePerSeat}</div>

          <div className="w-full sm:w-1/2 mb-2">
            <button
              className={`px-4 py-2 text-white rounded ${
                clas
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => handleSubmit(bus._id)}
              disabled={!clas}
            >
              Book Now
            </button>
          </div>

          <div className="w-full sm:w-1/2 mb-2">
            <span
              className={`inline-block px-4 py-2 text-white rounded cursor-pointer ${
                reset ? "bg-red-500" : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleReset}
            >
              Reset
            </span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {renderFunction()}
      <div
        className={`${
          arrowDown ? "text-green-700 mt-12 animate-bounce" : "hidden"
        } flex justify-center`}
      >
        <FaAngleDoubleDown size={24} />
      </div>
    </div>
  );
}
