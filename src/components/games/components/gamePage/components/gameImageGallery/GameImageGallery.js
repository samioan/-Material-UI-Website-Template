import React from "react";
import Grid from "@material-ui/core/Grid";
import ProgressiveImage from "react-progressive-graceful-image";

import placeholderGif from "./images";
import styles from "./styles";

const GameImageGallery = ({ link }) => {
  const classes = styles();

  return (
    <Grid className={classes.gallery} container justify="center">
      {link.screenshots.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          className={classes.imageContainer}
          key={item.toString()}
        >
          <ProgressiveImage src={item} placeholder={placeholderGif}>
            {(src) => (
              <img className={classes.image} src={src} alt={src.toString()} />
            )}
          </ProgressiveImage>
        </Grid>
      ))}
    </Grid>
  );
};

export { GameImageGallery };
export default GameImageGallery;
