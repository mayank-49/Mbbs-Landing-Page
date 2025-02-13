import React, { useContext } from "react";
import flight from "../assets/flight2.svg";
import { Context } from "../context/AppContext";
import Alert from "./Alert";

const Header = () => {
  const { isSubmit} = useContext(Context);
  return (
    <>
      <header className="w-full flex justify-between px-4 py-4 shadow-md shadow-slate-300 bg-white sticky top-0 left-0 z-20">
        <div className="flex justify-center items-center gap-1">
          <img src={flight} alt="" className="h-7 w-7  md:h-10 md:w-10" />
          <h1 className="bg-gradient-to-r from-green-700 to-green-400 text-transparent bg-clip-text text-xl md:text-2xl lg:text-3xl font-semibold">
            StudyAbroad
          </h1>
        </div>
        <div className="lg:flex hidden p-2">
          <ul className="flex lg:text-xl gap-10 cursor-pointer font-semibold text-black/[0.7]">
            <a href="#hero" className=" hover:text-green-500">
              Home
            </a>
            <a href="#about" className=" hover:text-green-500">
              About
            </a>
            <a href="#benifits" className=" hover:text-green-500">
              Benifits
            </a>
            <a href="#country" className=" hover:text-green-500">
              Top Countries
            </a>
            <a href="#steps" className=" hover:text-green-500">
              Admission Process
            </a>
          </ul>
        </div>
        <div className="flex bg-green-500 rounded-xl px-3 py-2 md:py-2 md:px-4 cursor-pointer hover:bg-green-600 transition duration-300">
          <a href="#form" className="text-md md:text-lg font-semibold text-white">Apply Now</a>
        </div>
      </header>
      {isSubmit && <Alert />}
    </>
  );
};

export default Header;
