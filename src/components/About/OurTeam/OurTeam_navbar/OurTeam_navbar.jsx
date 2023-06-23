import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import "./OurTeam_navbar.css";

//image imports
import SecretaryIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Secretary_icon";
import DesignIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Design_icon";
import MediaIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Media_icon";
import EditorialIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Editorial_icon";
import OperationsIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Operations_icon";
import FacultyIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Faculty_icon";

export default function OurTeam_navbar({ IsOnAbout }) {
  return (
    <div className="OurTeam_navbar_body">
      <nav className="OurTeam_navbar_nav">
        <ul className="OurTeam_navbar__navMenu">
          <NavLink
            to="/About/Secretaries"
            className={`Link ${IsOnAbout ? "active" : ""}`}
            activeclassname="active"
          >
            <SecretaryIcon />
            <li>Secretaries</li>
          </NavLink>
          <NavLink
            to="/About/Development"
            className="Link"
            activeclassname="active"
          >
            <MediaIcon />
            <li>Development</li>
          </NavLink>
          <NavLink to="/About/Design" className="Link" activeclassname="active">
            <DesignIcon />
            <li>Design</li>
          </NavLink>
          <NavLink
            to="/About/Editorial"
            className="Link"
            activeclassname="active"
          >
            <EditorialIcon />
            <li>Editorial</li>
          </NavLink>
          <NavLink
            to="/About/Operations"
            className="Link"
            activeclassname="active"
          >
            <OperationsIcon />
            <li>Operation</li>
          </NavLink>
          <NavLink
            to="/About/Faculty"
            className="Link"
            activeclassname="active"
          >
            <FacultyIcon />
            <li>Faculty</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
