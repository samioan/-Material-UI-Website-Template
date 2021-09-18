import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { VideoItem } from "./components";

import videoDetails from "./constants/videoDetails";

import Theme from "../theme";

const Videos = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Videos
      </Typography>

      <Typography className={classes.subtitle} variant="h5" align="center">
        My Games
      </Typography>

      <Grid className={classes.content} container justify="center">
        {videoDetails
          .filter((videoItem) => videoItem.genre === "My Games")
          .map((videoItem) => (
            <Grid
              key={videoItem.title}
              className={classes.content}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <VideoItem link={videoItem.link} title={videoItem.title} />
            </Grid>
          ))}
      </Grid>

      <Typography className={classes.subtitle} variant="h5" align="center">
        My Music
      </Typography>

      <Grid className={classes.content} container justify="center">
        {videoDetails
          .filter((videoItem) => videoItem.genre === "My Music")
          .map((videoItem) => (
            <Grid
              key={videoItem.title}
              className={classes.content}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <VideoItem link={videoItem.link} title={videoItem.title} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export { Videos };
export default Videos;
