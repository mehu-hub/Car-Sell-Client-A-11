import React from 'react';

const slider = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://scene7.toyota.eu/is/image/toyotaeurope/used-cars-asset-header?qlt=80&wid=1280&fit=fit,1&ts=1672959643772")` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-8 text-4xl font-bold">
            Buy & Sell Any Types Car
          </h1>
          <p className="mb-5">
            A phone number or email address is best. Also, make sure you include details about where the car can be viewed. Other important info – This includes the car's horsepower, the size of the engine, it's transmission type and it's fuel type, e.g. petrol, diesel, electric, hybrid.
          </p>
          <button className="btn bg-blue-900">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default slider;