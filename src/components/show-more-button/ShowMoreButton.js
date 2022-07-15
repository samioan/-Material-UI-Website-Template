import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const ShowMoreButton = ({ classes, onClick }) => (
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

export { ShowMoreButton };
export default withStyles(styles)(ShowMoreButton);
