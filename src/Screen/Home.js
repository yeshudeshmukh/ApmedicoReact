import React from "react";
import Newarrival from "../Component/Newarrival";
import Store from "../Component/Store";
import Client from "../Component/Client";
import Testimonial from "../Component/Carousel/Testimonial";
import Order from "../Component/Order";
import Main from "../Component/Carousel/Main";
// import Testimonial from "../Carousel/Testimonial";
const Home = () => {
  return (
    <div className="">
      <Main/>
      <Order/>
      <Newarrival/>
      <Store/>
      <Client/>
      <Testimonial/>
    </div>
  );
};
export default Home;
