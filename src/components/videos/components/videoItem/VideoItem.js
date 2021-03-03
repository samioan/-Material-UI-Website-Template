import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import YouTube from "@u-wave/react-youtube";

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
    height: 300,
    width: "100%",
  },
});

export default function VideoItem({ link, title, tagline, genre }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <YouTube className={classes.media} video={link} />
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
            {tagline}
          </Typography>
          <Typography
            className={classes.heading3}
            gutterBottom
            variant="body1"
            component="p"
          >
            {genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
