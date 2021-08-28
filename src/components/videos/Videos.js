import React, { useEffect } from "react";
import { VideoItem } from "./components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Theme from "../theme";
import videoDetails from "./constants/videoDetails";

const Videos = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
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
              lg={6}
              xl={4}
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
              lg={6}
              xl={4}
            >
              <VideoItem link={videoItem.link} title={videoItem.title} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export { Videos };
export default Videos;
