import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const ScrollToTopButton = ({ onClick }) => {
  const classes = styles();

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={onClick}
      className={classes.button}
    >
      <Typography variant="overline" className={classes.text}>
        Back To Top
      </Typography>
    </Button>
  );
};

export { ScrollToTopButton };
export default ScrollToTopButton;
