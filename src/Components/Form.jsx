import React, { useContext, useState } from "react";
import { Country } from "./content";
import bg from "../assets/bg-7.jpg";
import { User, Mail, Phone, MapPin } from "lucide-react";
import {Context} from "../context/AppContext";

const Form = () => {
  const{isSubmit,setSubmit} = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmit(true);
    console.log(isSubmit)
    setTimeout(() => {
      setSubmit(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section
        id="form"
        className="p-5 md:px-10 md:py-10 w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex justify-center w-full ">
          <h1 className="text-md font-semibold text-slate-400">Form</h1>
        </div>
        <div className="w-full mx-auto flex flex-col lg:flex-row bg-transparent  rounded-lg  md overflow-hidden">
          <div className="w-full p-4 md:p-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-white">
              Apply Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 lg:px-20">
              <div>
                <label className="flex items-center space-x-2 text-white mb-1">
                  <User className="w-6 h-6" />
                  <span className="text-lg">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-white rounded-md focus:outline-none focus:ring-3 focus:ring-green-500 outline-none border border-white"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-white mb-1">
                  <Mail className="h-6 w-6" />
                  <span className="text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-white rounded-md focus:outline-none focus:ring-3 focus:ring-green-500 border border-white"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-white mb-1">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-white rounded-md focus:outline-none focus:ring-3 focus:ring-green-500 border border-white"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-white mb-1">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Preferred Country</span>
                </label>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-3 focus:ring-green-500 border-white text-black"
                >
                  <option value="" className="">
                    Select a country
                  </option>
                  {Country.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white text-lg py-2 rounded-md font-semibold hover:bg-green-600 cursor-pointer transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
