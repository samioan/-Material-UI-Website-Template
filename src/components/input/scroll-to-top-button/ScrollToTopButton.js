import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import styles from "./styles";

const ScrollToTopButton = ({ onClick }) => {
  const classes = styles();

  return (
    <IconButton onClick={onClick} className={classes.button}>
      <ExpandLessIcon className={classes.icon} />
    </IconButton>
  );
};

export { ScrollToTopButton };
export default ScrollToTopButton;
