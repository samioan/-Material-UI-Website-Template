import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  heading1: {
    color: "#fff",
  },
  heading2: {
    color: "#606060",
  },
  heading3: {
    color: "#858585",
  },
  text: {
    color: "#c3c3c3",
  },
  root: {
    backgroundColor: "#111",
  },
  media: {
    height: 400,
  },
});

export default function ArtItem({ image, title, linkPrimary }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography
          className={classes.heading1}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          className={classes.heading2}
          gutterBottom
          variant="h6"
          component="p"
        >
          ________________________
        </Typography>
      </CardContent>

      <CardActions>
        <Button target="_blank" href={linkPrimary} size="small" color="primary">
          Full Image
        </Button>
      </CardActions>
    </Card>
  );
}
