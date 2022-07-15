import React from "react";

import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/styles/withStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import styles from "./styles";

const ScrollToTopButton = ({ classes, onClick }) => (
  <IconButton onClick={onClick} className={classes.button}>
    <ArrowUpwardIcon />
  </IconButton>
);

export { ScrollToTopButton };
export default withStyles(styles)(ScrollToTopButton);
