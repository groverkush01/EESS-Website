import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselContainer from "./Carousel_Home/CarouselContainer";
import Updates from "./Updates/Updates";
import Home_Carousel from "./Carousel_Home/Home_Carousel";

export default function Home() {
  return (
    <div className="home_body">
      {/* <CarouselContainer /> */}
      <Updates/>
      <Home_Carousel/>
    </div>
  );
}
