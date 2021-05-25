import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import albumDetails from "../../util/albumDetails";
import { useRouteMatch } from "react-router-dom";
import YouTube from "@u-wave/react-youtube";
import Button from "@material-ui/core/Button";

const musicPageDetails = (album) => {
  const link = album.split("/")[2];

  for (var i = 0; i < albumDetails.length; i++) {
    if (albumDetails[i].pageLink === link) {
      return albumDetails[i];
    }
  }
};

const MusicPage = () => {
  const classes = styles();
  let match = useRouteMatch();
  const websiteLink = musicPageDetails(match.url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <Box pt={10} align="center">
        <Typography className={classes.title} gutterBottom variant="h5">
          {websiteLink.title}
        </Typography>
      </Box>
      <Box align="center">
        <Typography className={classes.tagline} gutterBottom variant="h6">
          {websiteLink.tagline}
        </Typography>
      </Box>

      <Box
        pt={1}
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
      >
        <Box p={1} className={classes.content}>
          {websiteLink.description.map((item) => (
            <Typography
              className={classes.description}
              variant="body2"
              gutterBottom
              key={item}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box p={1}>
          <YouTube className={classes.video} video={websiteLink.video} />
        </Box>
      </Box>
      <Box
        pt={3}
        pb={3}
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
      >
        {websiteLink.albumCodes.trackCodes.map((item) => (
          <iframe
            className={classes.song}
            title={item}
            src={`https://bandcamp.com/EmbeddedPlayer/album=${websiteLink.albumCodes.albumCode}/size=small/bgcol=333333/linkcol=0f91ff/artwork=none/track=${item}/transparent=true/`}
            seamless
          ></iframe>
        ))}
      </Box>
      <Box
        pt={2}
        pb={3}
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
      >
        <Box p={1}>
          <Button
            className={classes.button}
            target="_blank"
            href={websiteLink.linkPrimary}
            variant="outlined"
            size="large"
            color="primary"
          >
            Download
          </Button>
        </Box>
        <Box p={1}>
          <Button
            className={classes.button}
            href="/music"
            variant="outlined"
            size="large"
            color="primary"
          >
            Return
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export { MusicPage };
export default MusicPage;
