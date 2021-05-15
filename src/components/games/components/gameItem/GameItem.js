import React from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link, useRouteMatch } from "react-router-dom";

export default function GameItem({ image, title, tagline, genre, pageLink }) {
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
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography className={classes.tagline} gutterBottom variant="h6">
            {tagline}
          </Typography>
          <Typography className={classes.genre} gutterBottom variant="body1">
            {genre}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
