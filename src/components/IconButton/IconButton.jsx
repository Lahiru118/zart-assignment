import React from "react";

import classes from "./IconButton.module.css";

const ReactIcon = ({ Regular, Solid }) => {
  return (
    <div className={classes.iconButton}>
      <Regular className={classes.iconOutline} />
      <Solid className={classes.iconSolid} />
    </div>
  );
};

export default ReactIcon;
