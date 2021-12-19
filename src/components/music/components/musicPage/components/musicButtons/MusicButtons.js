import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const MusicButtons = ({ link, classes }) => (
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
      href="/music"
      variant="outlined"
      size="large"
      color="primary"
    >
      Return
    </Button>
  </Grid>
);

export { MusicButtons };
export default withStyles(styles)(MusicButtons);
