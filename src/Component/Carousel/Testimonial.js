import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonial = () => {
  return (
    <>
      <div class="row wavebg3">
        <h1 class="text-center">Testimonial</h1>
      </div>
      <Carousel>
        <div class="bg6">
          <div class="text-test">
            <h4 class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              egestas luctus morbi convallis non tincidunt. Integer tempor, enim
              diam pharetra nunc ornare et feugiat. Proin vestibulum
              ullamcorper.
            </h4>
            <h6 class="text-center text-success">Stay Healthy and Safe !</h6>
          </div>
        </div>
        <div class="bg6">
          <div class="text-test">
            <h4 class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              egestas luctus morbi convallis non tincidunt. Integer tempor, enim
              diam pharetra nunc ornare et feugiat. Proin vestibulum
              ullamcorper.
            </h4>
            <h6 class="text-center text-success">Stay Healthy and Safe !</h6>
          </div>
        </div>
        <div class="bg6">
          <div class="text-test">
            <h4 class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              egestas luctus morbi convallis non tincidunt. Integer tempor, enim
              diam pharetra nunc ornare et feugiat. Proin vestibulum
              ullamcorper.
            </h4>
            <h6 class="text-center text-success">Stay Healthy and Safe !</h6>
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default Testimonial;

