import React from "react";
import classNames from "classnames";

import CardMedia from "@material-ui/core/CardMedia";

import styles from "./styles";

const CardMediaContainer = ({ image, isCurrentPageArt }) => {
  const classes = styles();

  return (
    <CardMedia
      className={classNames({
        [classes.artMedia]: isCurrentPageArt,
        [classes.media]: !isCurrentPageArt,
      })}
      image={image}
    />
  );
};

export { CardMediaContainer };
export default CardMediaContainer;
