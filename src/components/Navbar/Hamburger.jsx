//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./Hamburger.css";

//Image Imports

const Hamburger = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`hamburger__ham ${props.isOpen ? "ham_active" : ""}`}
    >
      <div className="hamburger__burger hamburger__burger1"></div>
      <div className="hamburger__burger hamburger__burger2"></div>
      <div className="hamburger__burger hamburger__burger3"></div>
    </div>
  );
};

export default Hamburger;
