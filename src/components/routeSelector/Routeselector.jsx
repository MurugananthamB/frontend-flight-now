import React, { useState } from "react";
import * as apiCall from "./routeApifunc";
import BusList from "../BusList/BusList";

export default function RouteSelector() {
  const [dataInp, setData] = useState("");
  const [startCity, setStartCity] = useState("");
  const [destination, setDestination] = useState("");

  const handleToCity = (e) => {
    e.preventDefault();
    setDestination({ destination: e.target.value });
    localStorage.setItem("destination", e.target.value);
  };

  const renderBusList = (dataInp) => {
    if (Object.keys(dataInp).length > 0) {
      return <BusList value={dataInp} />;
    }
  };

  const handleFromCity = (e) => {
    e.preventDefault();
    setStartCity({ startCity: e.target.value });
    localStorage.setItem("start", e.target.value);
  };

  const getRoutes = (e) => {
    e.preventDefault();
    apiCall
      .getRoutesFromApi(startCity.startCity, destination.destination)
      .then((response) => response.data)
      .then((data) => {
        setData(data.bus);
      });
  };

  const handleDate = (e) => {
    e.preventDefault();
    localStorage.setItem("date", e.target.value);
  };

  return (
    <div className="p-5 bg-blue-300 border border-blue-500 rounded-md">
      <div className="max-w-md mx-auto">
        <form
          className="flex flex-col items-center space-y-4"
          onSubmit={getRoutes}
        >
          <select
            onChange={handleFromCity}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>From</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Coimbatore</option>
            <option>Goa</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Trivandrum</option>
            <option>Madurai</option>
            <option>Cochin</option>
            <option>Pune</option>
            <option>Hyderabad</option>
            <option>Dehradun</option>
            <option>Jaipur</option>
            <option>Varanasi</option>
            <option>Patna</option>
            <option>Agra</option>
            <option>Kanpur</option>
            <option>Lucknow</option>
            <option>Indore</option>
            <option>Nagpur</option>
            <option>Vadodara</option>
            <option>Thane</option>
            <option>Bhopal</option>
            <option>Surat</option>
            <option>Nashik</option>
          </select>

          <select
            onChange={handleToCity}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>To</option>
            <option>Hyderabad</option>
            <option>Coimbatore</option>
            <option>Vishakapatnam</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Trivandrum</option>
            <option>Madurai</option>
            <option>Cochin</option>
            <option>Pune</option>
            <option>Dehradun</option>
            <option>Jaipur</option>
            <option>Varanasi</option>
            <option>Patna</option>
            <option>Agra</option>
            <option>Kanpur</option>
            <option>Lucknow</option>
            <option>Indore</option>
            <option>Nagpur</option>
            <option>Vadodara</option>
            <option>Thane</option>
            <option>Bhopal</option>
            <option>Surat</option>
            <option>Nashik</option>
          </select>

          <input
            onChange={handleDate}
            type="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Get Routes
          </button>
        </form>

        <div className="mt-4">{renderBusList(dataInp)}</div>
      </div>
    </div>
  );
}
