import React from "react";
import {
  IoHomeOutline,
  IoHome,
  IoCarSportOutline,
  IoCarSport,
  IoBriefcaseOutline,
  IoBriefcase,
  IoChatbubbles,
  IoChatbubblesOutline,
  IoSettingsOutline,
  IoSettings,
} from "react-icons/io5";

import Profile from "../../image/person.png";
import classes from "./NavBar.module.css";
import ReactIcon from "../IconButton/IconButton";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.iconContainer}>
        <ReactIcon Regular={IoHomeOutline} Solid={IoHomeOutline} />
        <ReactIcon Regular={IoCarSportOutline} Solid={IoCarSport} />
        <ReactIcon Regular={IoBriefcaseOutline} Solid={IoBriefcase} />
        <ReactIcon Regular={IoChatbubblesOutline} Solid={IoChatbubbles} />
        <ReactIcon Regular={IoSettingsOutline} Solid={IoSettings} />
      </div>
      <div>
        <button className={classes.profileButton}>
          <img src={Profile} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
