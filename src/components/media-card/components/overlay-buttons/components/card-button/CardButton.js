import React from "react";
import { Link } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import styles from "./styles";

const CardButton = ({ title, link, target, icon }) => {
  const classes = styles();

  return (
    <Tooltip
      title={title}
      arrow
      placement="top"
      TransitionComponent={({ children }) => children}
    >
      <IconButton
        component={Link}
        to={link}
        target={target}
        className={classes.iconButton}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export { CardButton };
export default CardButton;
