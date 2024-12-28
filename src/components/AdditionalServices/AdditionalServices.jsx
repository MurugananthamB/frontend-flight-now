import React from "react";
import idli from "./idli.jpg";
import naan from "./naan.jpg";
import poori from "./poori.jpg";
import vada from "./vada.jpg";
import pulav from "./pulav.jpg";
import curd from "./curd.jpg";
import aparts from "./aparts.jpg";
import cocktail from "./cocktail.jpg";
import cola from "./cola.jpg";
import lime from "./lime.jpg";
import luxury from "./luxury.jpg";
import mocktail from "./mocktail.jpg";
import modern from "./modern.jpg";
import resort from "./resort.jpg";
import suite from "./suite.jpg";

export default class AdditionalServices extends React.Component {
  render() {
    return (
      <>
        <br />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Hotels</h1>

          <div className="flex flex-wrap justify-center gap-8">
            <ServiceCard imgSrc={aparts} label="Apartments" />
            <ServiceCard imgSrc={luxury} label="Luxury Hotels" />
            <ServiceCard imgSrc={modern} label="Modern House" />
            <ServiceCard imgSrc={resort} label="Resort" />
            <ServiceCard imgSrc={suite} label="Suite" />
          </div>

          <h1 className="text-3xl font-bold mt-12 mb-6">Food Items</h1>
          <div className="flex flex-wrap justify-center gap-8">
            <ServiceCard imgSrc={idli} label="IDLI" />
            <ServiceCard imgSrc={naan} label="TANDOORI NAAN" />
            <ServiceCard imgSrc={poori} label="POORI" />
            <ServiceCard imgSrc={pulav} label="PULAV" />
            <ServiceCard imgSrc={vada} label="VADA" />
            <ServiceCard imgSrc={curd} label="CURD" />
          </div>

          <h1 className="text-3xl font-bold mt-12 mb-6">Beverages</h1>
          <div className="flex flex-wrap justify-center gap-8">
            <ServiceCard imgSrc={cola} label="Cola" />
            <ServiceCard imgSrc={lime} label="Lime" />
            <ServiceCard imgSrc={mocktail} label="Mocktail" />
            <ServiceCard imgSrc={cocktail} label="Cocktail" />
          </div>
        </div>
      </>
    );
  }
}

const ServiceCard = ({ imgSrc, label }) => (
  <div className="max-w-xs bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden text-center">
    <a href="/cancelPage">
      <img src={imgSrc} alt={label} className="h-64 w-full object-cover" />
    </a>
    <div className="p-4 font-bold text-xl text-gray-800">{label}</div>
  </div>
);
