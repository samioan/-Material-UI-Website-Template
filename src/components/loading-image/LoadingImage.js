import React, { useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";

const LoadingImage = ({
  classes,
  image,
  customLoaderClass,
  customImageClass,
  alt,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      {!isImageLoaded && (
        <div className={customLoaderClass}>
          <CircularProgress className={classes.loadingIcon} />
        </div>
      )}

      <img
        className={customImageClass}
        style={isImageLoaded ? {} : { display: "none" }}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 0)}
        src={image}
        alt={alt}
        width="100%"
        height="100%"
      />
    </>
  );
};

LoadingImage.defaultProps = {
  image: null,
  customLoaderClass: null,
  customImageClass: null,
  alt: null,
};

export { LoadingImage };
export default withStyles(styles)(LoadingImage);
