import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Guns from "./Guns";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
          <Carousel></Carousel>
          <About></About>
          <Guns></Guns>
    </div>
  );
};

export default Home;
