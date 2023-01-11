import React from "react";
import { Link } from "react-router-dom";
import heroBanner from "../../img/img-5.jpg";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
       

      <div className="grid   lg:grid-cols-2 grid-cols-1 text-start   lg:mr-80">
        <div>
          <h2 className="text-white text-6xl font-bold">ONTDEK VOLVO SELECKT</h2>
          <br />
          <p className="text-white font-bold">TWEEDEHANDS, NIET TWEEDE KEUZE.</p>
          <br />
          <div className="md:flex gap-10 mt-8">
            <div className="border bg-white rounded-lg border-blue-900 px-20 py-12 flex justify-center mt-1 items-center w-24 h-16">
              <h1 className="text-3xl   font-bold text-green-600">$40000</h1>
            </div>
            <h1 className=" font-bold text-green-500 text-lg">
              Only 8 Month Used, <br />
              <span className="font-medium text-3xl text-white">
                REFRESHED STYLE, <br />
                HIGH PERFORMANCE
              </span>
            </h1>
          </div>
          <br />
          <div className="flex gap-5 mt-9">
            <Link to="/allcar/63808e0859c9ffedc93299f9">
              <button className="text-white bg-blue-900 px-10 py-3 rounded-md hover:text-white hover:bg-transparent font-bold hover:border hover:border-white duration-300 transition transform ease-in-out">
                Buy Now
              </button>
            </Link>
            <Link to="/login">
              <button className="text-red bg-transparent duration-300 transition text-white px-16 py-3 rounded-md hover:text-white hover:bg-blue-900 font-bold border border-white-600">
                Log In
              </button>
            </Link>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default HeroSection;
