import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const GameButtons = ({ link, classes }) => (
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

export { GameButtons };
export default withStyles(styles)(GameButtons);
