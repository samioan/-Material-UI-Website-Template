import React from "react";
import Box from "@material-ui/core/Box";
import ProgressiveImage from "react-progressive-graceful-image";

import placeholderGif from "./images";
import styles from "./styles";

const GameImageGallery = ({ link }) => {
  const classes = styles();

  return (
    <Box
      pt={1}
      display="flex"
      flexWrap="wrap"
      alignItems="stretch"
      justifyContent="center"
    >
      {link.screenshots.map((item) => (
        <Box p={1} key={item.toString()}>
          <ProgressiveImage src={item} placeholder={placeholderGif}>
            {(src) => (
              <img className={classes.images} src={src} alt={src.toString()} />
            )}
          </ProgressiveImage>
        </Box>
      ))}
    </Box>
  );
};

export { GameImageGallery };
export default GameImageGallery;
