import React from "react";
import { compose } from "redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { VideoItem } from "./components";

import styles from "theme/styles";
import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import ShowMoreButton from "components/interactive/show-more-button";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import withVideosProps from "./withVideosProps";

const Videos = ({
  showScrollToTopButton,
  scrollToTop,
  onLoadMoreGameVideos,
  onLoadMoreMusicVideos,
  gameVideosShown,
  gameVideosOnPage,
  gameVideosTotal,
  musicVideosShown,
  musicVideosOnPage,
  musicVideosTotal,
}) => {
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
          {gameVideosShown.map((videoItem) => (
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
          {gameVideosOnPage < gameVideosTotal && (
            <ShowMoreButton onClick={onLoadMoreGameVideos} />
          )}
        </Grid>

        <Typography className={classes.subtitle} variant="h5" align="center">
          My Music
        </Typography>

        <Grid className={classes.content} container justify="center">
          {musicVideosShown.map((videoItem) => (
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
          {musicVideosOnPage < musicVideosTotal && (
            <ShowMoreButton onClick={onLoadMoreMusicVideos} />
          )}
        </Grid>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Videos };
export default compose(withVideosProps, withScrollbars)(Videos);
