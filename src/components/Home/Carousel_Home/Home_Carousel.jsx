import { React, useState } from "react";

import "./Home_Carousel.css";

import LeftArrow from "../../../Assets/img_home/Carousel/CarouselIcon/LeftArrow.svg";
import RightArrow from "../../../Assets/img_home/Carousel/CarouselIcon/RightArrow.svg";
import ButtonAnimate from "../../UI/Button_animated/ButtonAnimate";

import HomeCarouselContent from "./Carousel_data.js";

export default function Home_Carousel() {
  const n = HomeCarouselContent.length;

  const [SlideNo, setSlideNo] = useState(0);

  const prevSlide = () => {
    setSlideNo(SlideNo === 0 ? n - 1 : SlideNo - 1);
  };
  const nextSlide = () => {
    setSlideNo(SlideNo === n - 1 ? 0 : SlideNo + 1);
  };
  return (
    <div className="Carousel_body">
      <img src={LeftArrow} alt="" onClick={prevSlide}/>
      <div className="AllSlides_container">
        {HomeCarouselContent.map((obj, indx) => {
          return (
            <div key={indx} className="Carousel_AllSlides">
              {indx === SlideNo && (
                <div
                  className="Carousel_CurrSlide"
                  style={{ backgroundImage: `url(${obj.img})` }}
                >
                  <div className="CurrSlide_content">
                    <div className="Carousel_heading">{obj.heading}</div>
                    <div className="Carousel_descp">{obj.description}</div>
                    <ButtonAnimate text="Watch Live" link={obj.ytlink} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <img src={RightArrow} alt="" onClick={nextSlide}/>
    </div>
  );
}
