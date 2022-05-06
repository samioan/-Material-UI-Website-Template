import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProgressiveImage from "react-progressive-graceful-image";

const LoadingImage = ({ image, customLoaderClass, customImageClass, alt }) => {
  return (
    <ProgressiveImage src={image} placeholder="">
      {(src, loading) => {
        return loading ? (
          <div className={customLoaderClass}>
            <CircularProgress />
          </div>
        ) : (
          <img className={customImageClass} src={src} alt={alt} />
        );
      }}
    </ProgressiveImage>
  );
};

LoadingImage.defaultProps = {
  image: null,
  customLoaderClass: null,
  customImageClass: null,
  alt: null,
};

export { LoadingImage };
export default LoadingImage;
