import React from 'react'
import "./Update.css";
import UpdateData from './UpdateData';
import GlassContainer from '../../UI/GlassContainer/GlassContainer'
import Heading from '../../UI/Heading/Heading';
import ButtonAnimate from '../../UI/Button_animated/ButtonAnimate';

export default function Updates() {
  return (
    <div className="UpdateContainer">
        <GlassContainer>
            <Heading name="Updates"/>
            <div className="Update_card_container">
                {UpdateData.map((obj,indx)=>{
                    return(
                        <div key={indx} className='Update_card'>
                            <img src={obj.image} alt=""/>
                            <div className="Update_card_content">
                                <div className="Update_heading">{obj.header}</div>
                                <div className="Update_descp">{obj.description}</div>
                                <ButtonAnimate link={obj.link} text="Know More"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </GlassContainer>
    </div>
  )
}
