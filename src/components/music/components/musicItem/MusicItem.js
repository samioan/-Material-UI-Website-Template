import React from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function MusicItem({
  image,
  title,
  tagline,
  genre,
  description,
  linkPrimary,
}) {
  const classes = styles();

  return (
    <Link
      to={{
        pathname: linkPrimary,
      }}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.heading1} gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography className={classes.heading2} gutterBottom variant="h6">
            {tagline}
          </Typography>
          <Typography className={classes.heading3} gutterBottom variant="body1">
            {genre}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            target="_blank"
            href={linkPrimary}
            size="small"
            color="primary"
          >
            Album Page
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
