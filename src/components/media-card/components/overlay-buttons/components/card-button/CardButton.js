import React from "react";
import { Link } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const CardButton = ({ classes, title, link, icon, internal }) => (
  <Tooltip
    title={title}
    arrow
    placement="top"
    TransitionComponent={({ children }) => children}
    classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
  >
    <IconButton
      component={internal ? Link : "a"}
      href={link}
      to={link}
      target={internal ? "" : "_blank"}
      className={classes.iconButton}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

export { CardButton };
export default withStyles(styles)(CardButton);
