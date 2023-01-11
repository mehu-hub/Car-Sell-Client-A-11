import React from "react";

import HeroSection from "./HeroSection/HeroSection";
import Slider from "./HeroSection/Slider";
import ExtraSections from "./ExtraSection/ExtraSections";
import AllCategories from "./AllCategories/AllCategories";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/Hooks";
 

const Home = () => {
  const allCars = useLoaderData();

  useTitle("Home"); 

  return (
    <div>
      <HeroSection></HeroSection>
      <AllCategories allCars={allCars}></AllCategories>
      <Slider></Slider>
      <ExtraSections></ExtraSections>
    </div>
  );
};

export default Home;
