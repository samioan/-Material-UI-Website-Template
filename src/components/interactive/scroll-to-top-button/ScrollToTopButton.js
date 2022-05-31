import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import styles from "./styles";

const ScrollToTopButton = ({ onClick, width }) => {
  const classes = styles();

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={onClick}
      className={classes.button}
    >
      {isWidthUp("lg", width) ? (
        <Typography variant="overline" className={classes.text}>
          Back To Top
        </Typography>
      ) : (
        <>&#129093;</>
      )}
    </Button>
  );
};

export { ScrollToTopButton };
export default withWidth()(ScrollToTopButton);
