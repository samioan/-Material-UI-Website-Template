import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProgressiveImage from "react-progressive-graceful-image";

import styles from "./styles";

const LoadingImage = ({
  classes,
  image,
  customLoaderClass,
  customImageClass,
  alt,
}) => (
  <ProgressiveImage src={image} placeholder="">
    {(src, loading) => {
      return loading ? (
        <div className={customLoaderClass}>
          <CircularProgress className={classes.loadingIcon} />
        </div>
      ) : (
        <img className={customImageClass} src={src} alt={alt} />
      );
    }}
  </ProgressiveImage>
);

LoadingImage.defaultProps = {
  image: null,
  customLoaderClass: null,
  customImageClass: null,
  alt: null,
};

export { LoadingImage };
export default withStyles(styles)(LoadingImage);
