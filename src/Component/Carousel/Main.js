import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Maincar = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src="/img/pharmacy2.jpg"  alt=" not fonud" />
        </div>
        <div>
          <img src="/img/pharmacy3.jpg" alt=" not fonud" />
        </div>
      </Carousel>
    </>
  );
};
export default Maincar;
