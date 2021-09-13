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
        <ProgressiveImage
          key={item.toString()}
          src={item}
          placeholder={placeholderGif}
        >
          {(src) => (
            <img className={classes.images} src={src} alt={src.toString()} />
          )}
        </ProgressiveImage>
      ))}
    </Grid>
  );
};

export { GameImageGallery };
export default GameImageGallery;
