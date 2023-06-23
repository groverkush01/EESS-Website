import React, { useState, useCallback } from "react";

import LeftArrow from "../../../Assets/Icons/LeftArrow.svg";
import RightArrow from "../../../Assets/Icons/RightArrow.svg";
import EventDescription from "../EventDescription/EventDescription";
import Loader from "../../UI/Loader/Loader";
import "./EventCarousel.css";
import Events from "./EventData";

const EventCarousel = () => {
  const length = 3;
  const contentLength = Events.length;

  //current represent the center card of the carousel.
  const [current, setCurrent] = useState(0);
  const [toshow, setToShow] = useState([0, 1, contentLength - 1]);
  const helperArray = [0, 1, 2];

  //Next Slide Handler
  const nextSlide = useCallback(() => {
    //Change the toshow array to change content of carousel
    let newToShow = [...toshow];
    newToShow[(current - 1 + length) % length] =
      (newToShow[(current + 1) % length] + 1) % contentLength;
    setToShow(newToShow);

    //setCurrent to next slide
    setCurrent((prevState) => (prevState + 1) % length);
  }, [length, toshow, contentLength, current]);

  const prevSlide = useCallback(() => {
    //Change the toshow array to change content of carousel
    let newToShow = [...toshow];
    newToShow[(current + 1) % length] =
      (newToShow[(current - 1 + length) % length] - 1 + contentLength) %
      contentLength;
    setToShow(newToShow);

    //setCurrent to next slide
    setCurrent((prevState) => (prevState - 1 + length) % length);
  }, [length, toshow, contentLength, current]);

  //Slide Button ClickHandler
  const SlideBtnClickHandler = (idx) => {
    var temp = [];
    temp.push((idx - 1 + contentLength) % contentLength);
    temp.push(idx);
    temp.push((idx + 1) % contentLength);

    setToShow(temp);
    setCurrent(1);
  };

  return (
    <>
      <div className="EventCarousel_mainContainer">
        <h3 className="Event_Heading">
          “Creativity involves breaking out of established patterns in order to
          look at things in a different way.”
        </h3>
        <div className="EventCarousel_container">
          <button className="carousel_control_button" onClick={prevSlide}>
            <img src={LeftArrow} alt="Prev Slide" />
          </button>
          <div className="CardCarousel_container">
            {helperArray.map((element, idx) => {
              return (
                <div
                  key={idx}
                  className={`EventCarousel_card
                    ${
                      (idx < current && `prevImg${current - idx}`) ||
                      (idx > current && `nextImg${idx - current}`) ||
                      (idx === current && "active")
                    }`}
                >
                  <Loader />
                  <img src={Events[toshow[idx]].description.image} alt="" />
                </div>
              );
            })}
          </div>
          <button className="carousel_control_button" onClick={nextSlide}>
            <img src={RightArrow} alt="Next Slide" />
          </button>
        </div>
        <div className="EventCarousel_SlideButton">
          {Events.map((ele, idx) => {
            return (
              <div
                key={idx}
                className={`SlideBtn${
                  toshow[current] === idx ? " active" : ""
                }`}
                onClick={() => SlideBtnClickHandler(idx)}
              />
            );
          })}
          <div className="Events_ReadMore">
            <a href="#EventDescription">
              <img src={RightArrow} alt="Read More" />
            </a>
            Read More
          </div>
        </div>
      </div>
      <EventDescription event={Events[toshow[current]].description} />
    </>
  );
};

export default EventCarousel;
