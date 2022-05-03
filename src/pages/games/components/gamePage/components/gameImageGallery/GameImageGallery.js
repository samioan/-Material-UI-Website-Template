import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProgressiveImage from "react-progressive-graceful-image";

import styles from "./styles";

const GameImageGallery = ({ link, classes }) => (
  <Grid className={classes.gallery} container justify="center">
    {link.screenshots.map((item) => (
      <Grid
        item
        xs={12}
        sm={6}
        className={classes.imageContainer}
        key={item.toString()}
      >
        <ProgressiveImage src={item} placeholder="">
          {(src, loading) => {
            return loading ? (
              <div className={classes.loading}>
                <CircularProgress />
              </div>
            ) : (
              <img className={classes.image} src={src} alt={src.toString()} />
            );
          }}
        </ProgressiveImage>
      </Grid>
    ))}
  </Grid>
);

export { GameImageGallery };
export default withStyles(styles)(GameImageGallery);
