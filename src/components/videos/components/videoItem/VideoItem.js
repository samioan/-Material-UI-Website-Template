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
  root: {
    backgroundColor: "#111",
  },
  cardContent: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
});

export default function VideoItem({ link, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ maxWidth: 300 }}>
      <CardActionArea>
        <YouTube className={classes.media} video={link} />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.heading1}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
