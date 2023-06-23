import React from "react";

import "./Update.css";
import UpdateData from "./UpdateData";
import GlassContainer from "../../UI/GlassContainer/GlassContainer";
import Heading from "../../UI/Heading/Heading";
import ButtonAnimate from "../../UI/Button_animated/ButtonAnimate";
import Loader from "../../UI/Loader/Loader";

export default function Updates() {
  return (
    <div className="UpdateContainer" id="Updates">
      <GlassContainer>
        <Heading name="Updates" />
        <div className="Update_card_container">
          {UpdateData.map((obj, idx) => {
            return (
              <div key={idx} className="Update_card">
                <div className="Update_image_Container">
                  <Loader />
                  <img src={obj.img} alt="" className="Update_card_img" />
                </div>
                <div className="Update_card_content">
                  <div className="Update_content_text">
                    <div className="Update_heading">{obj.header}</div>
                    <div className="Update_descp">
                      {obj.description.substring(0, 220)}
                    </div>
                  </div>
                  <ButtonAnimate
                    link={obj.link}
                    text="Know More"
                    className="Update_button"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </GlassContainer>
    </div>
  );
}
