import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const ErrorMessage = ({ onClick }) => {
  const classes = styles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.errorContainer}
    >
      <Typography variant="h6" align="center" className={classes.errorText}>
        Something went wrong.
      </Typography>
      <Button
        className={classes.errorButton}
        variant="outlined"
        size="large"
        color="primary"
        onClick={onClick}
      >
        RETRY
      </Button>
    </Grid>
  );
};

export { ErrorMessage };
export default ErrorMessage;
