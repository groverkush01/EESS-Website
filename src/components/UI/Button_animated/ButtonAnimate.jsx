import React from "react";
import "./ButtonAnimate.css";
export default function ButtonAnimate(props) {
  return (
    <a href={props.link} className="ButtonAnimated">
      <span>{props.text}</span>
    </a>
  );
}
