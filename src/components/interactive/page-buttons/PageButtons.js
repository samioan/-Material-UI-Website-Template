import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import styles from "./styles";

const PageButtons = ({ pageItem }) => {
  const classes = styles();

  return (
    <Grid className={classes.buttonsContainer} container justify="center">
      <Button
        className={classes.button}
        target="_blank"
        href={pageItem.links[0]}
        variant="outlined"
        size="large"
        color="primary"
      >
        Download
      </Button>

      {pageItem?.type === "games" && (
        <Button
          className={classes.button}
          target="_blank"
          href={pageItem?.links[1]}
          variant="outlined"
          size="large"
          color="primary"
        >
          Itch.io Page
        </Button>
      )}

      <Button
        className={classes.button}
        component={Link}
        to={`/${pageItem?.type}`}
        variant="outlined"
        size="large"
        color="primary"
      >
        Return
      </Button>
    </Grid>
  );
};

export { PageButtons };
export default PageButtons;
