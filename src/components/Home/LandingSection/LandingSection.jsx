import React from 'react';
import "./LandingSection.css"

export default function LandingSection() {
  return (
    <div className="LandingSection_container">
      <div className="LandingSection_content">
        <h1>EESS, IIT Roorkee</h1>
        <h3>BE ELECTRIFIED!</h3>
        <p>{`We are a group of students representing the Electrical family of IIT Roorkee who aim to promote interaction between all the students and faculty. We strive to provide any kind of assistance that enhances the quality of R students’ journey at IIT Roorkee…`}</p>
      </div>
      <div className='Strip1' />
      <div className='Strip2' />
      <div className='Strip3' />
      <div className='Strip4' />
      <div className='Strip5' />
    </div>
  )
}
