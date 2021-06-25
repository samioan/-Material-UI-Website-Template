import React from "react";
import styles from "./styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoItem = ({ link, title }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <LiteYouTubeEmbed
          activeClass="lyt-activated"
          iframeClass=""
          playerClass="lty-playbtn"
          wrapperClass="yt-lite"
          poster="hqdefault"
          noCookie={true}
          id={link}
          title={title}
        />
        <Box mt={2}>
          <Typography className={classes.title} gutterBottom variant="h5">
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export { VideoItem };
export default VideoItem;
