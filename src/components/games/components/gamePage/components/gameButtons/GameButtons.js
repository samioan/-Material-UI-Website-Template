import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";

const GameButtons = ({ link }) => {
  const classes = styles();

  return (
    <Grid className={classes.buttonsContainer} container justify="center">
      <Button
        className={classes.button}
        target="_blank"
        href={link.linkPrimary}
        variant="outlined"
        size="large"
        color="primary"
      >
        Download
      </Button>

      <Button
        className={classes.button}
        target="_blank"
        href={link.linkSecondary}
        variant="outlined"
        size="large"
        color="primary"
      >
        Itch.io Page
      </Button>

      <Button
        className={classes.button}
        href="/games"
        variant="outlined"
        size="large"
        color="primary"
      >
        Return
      </Button>
    </Grid>
  );
};

export { GameButtons };
export default GameButtons;
