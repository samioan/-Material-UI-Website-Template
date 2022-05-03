import React from "react";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link, useRouteMatch } from "react-router-dom";

import styles from "./styles";

const MediaCard = ({ image, title, tagline, genre, pageLink }) => {
  const classes = styles();
  let match = useRouteMatch();

  return (
    <Link
      to={{
        pathname: `${match.url}/${pageLink}`,
      }}
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.card}>
        <div className={classes.mediaContainer}>
          <CardMedia className={classes.media} image={image} title={title} />
        </div>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography className={classes.tagline} gutterBottom variant="h6">
            {tagline}
          </Typography>
          <Chip label={genre} variant="outlined" className={classes.genre} />
        </CardContent>
      </Card>
    </Link>
  );
};

export { MediaCard };
export default MediaCard;
