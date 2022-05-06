import React from "react";
import Button from "@material-ui/core/Button";

import styles from "./styles";

const ShowMoreButton = ({ onClick }) => {
  const classes = styles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      size="large"
      color="primary"
      onClick={onClick}
    >
      Show More
    </Button>
  );
};

export { ShowMoreButton };
export default ShowMoreButton;
