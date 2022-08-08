import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { MediaCard, ShowMoreButton, ErrorMessage } from "components";

import styles from "./styles";
import withVideos from "./withVideos";

const Videos = ({
  loadMoreGameVideos,
  loadMoreMusicVideos,
  gameVideosShown,
  gameVideosOnPage,
  gameVideosTotal,
  musicVideosShown,
  musicVideosOnPage,
  musicVideosTotal,
  currentPage,
  videosError,
  videosLoading,
  loadVideos,
}) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Videos
        </Typography>
        {!!videosLoading && (
          <div className={classes.loading}>
            <CircularProgress className={classes.loadingIcon} />
          </div>
        )}
        {!videosLoading && !!videosError && (
          <ErrorMessage onClick={loadVideos} />
        )}
        {!videosLoading && !videosError && (
          <>
            <Typography
              className={classes.subtitle}
              variant="h5"
              align="center"
            >
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
                  <MediaCard
                    currentPage={currentPage}
                    link={videoItem.link}
                    title={videoItem.title}
                  />
                </Grid>
              ))}
              {gameVideosOnPage < gameVideosTotal && (
                <ShowMoreButton onClick={loadMoreGameVideos} />
              )}
            </Grid>

            <Typography
              className={classes.subtitle}
              variant="h5"
              align="center"
            >
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
                  <MediaCard
                    currentPage={currentPage}
                    link={videoItem.link}
                    title={videoItem.title}
                  />
                </Grid>
              ))}
              {musicVideosOnPage < musicVideosTotal && (
                <ShowMoreButton onClick={loadMoreMusicVideos} />
              )}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export { Videos };
export default withVideos(Videos);
