import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { VideoItem } from "./components";

import styles from "theme/styles";
import Footer from "components/layout/footer";
import videoData from "data/videoData";
import withScrollbars from "theme/withScrollbars";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

const Videos = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Videos
        </Typography>

        <Typography className={classes.subtitle} variant="h5" align="center">
          My Games
        </Typography>

        <Grid className={classes.content} container justify="center">
          {Object.values(videoData.games).map((videoItem) => (
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
          {Object.values(videoData.music).map((videoItem) => (
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
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Videos };
export default withScrollbars(Videos);
