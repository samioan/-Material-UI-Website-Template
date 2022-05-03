import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import styles from "./styles";

const PageButtons = ({ link }) => {
  const classes = styles();

  return (
    <Grid className={classes.buttonsContainer} container justify="center">
      <Button
        className={classes.button}
        target="_blank"
        href={link.links[0]}
        variant="outlined"
        size="large"
        color="primary"
      >
        Download
      </Button>

      {link.type === "games" && (
        <Button
          className={classes.button}
          target="_blank"
          href={link.links[1]}
          variant="outlined"
          size="large"
          color="primary"
        >
          Itch.io Page
        </Button>
      )}

      <Button
        className={classes.button}
        href={`/${link.type}`}
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
