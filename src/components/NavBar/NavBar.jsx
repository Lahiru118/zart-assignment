import React from "react";
import {
  IoCarSportOutline,
  IoBagHandleOutline ,
  IoChatboxOutline ,
  IoSettingsOutline
} from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

import Profile from "../../image/person.png";
import classes from "./NavBar.module.css";
import ReactIcon from "../IconButton/IconButton";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.iconContainer}>
        <ReactIcon Regular={AiOutlineHome} Solid={AiOutlineHome} />
        <ReactIcon Regular={IoCarSportOutline} Solid={IoCarSportOutline} />
        <ReactIcon Regular={IoBagHandleOutline} Solid={IoBagHandleOutline} />
        <ReactIcon Regular={IoChatboxOutline} Solid={IoChatboxOutline} />
        <ReactIcon Regular={IoSettingsOutline} Solid={IoSettingsOutline} />
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
