import React from "react";
import { Country } from "./content";

const Countries = () => {

  return (
    <div id="country" className="w-full md:p-10 p-5 bg-white">
      <div className="flex justify-center">
        <h1 className="text-md font-semibold text-slate-400">Countries</h1>
      </div>
      <div className="flex justify-center mt-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-500">
          Top Countries
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {Country.map((item, index) => {
          return (
            <div data-aos="zoom-in" className="flex flex-col w-full rounded-xl shadow-xl pb-4">
              <img src={item.imageUrl} alt="" className="h-50 w-full rounded-t-xl"/>
              <div className="px-4 text-center mt-4">
                <h1 className="text-2xl font-semibold text-slate-600">{item.name}</h1>
                <p className="text-md text-slate-500">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
