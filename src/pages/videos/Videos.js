import React, { useCallback } from "react";

import Typography from "@material-ui/core/Typography";

import { GeneralPage } from "components";

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
  isLoading,
  hasError,
  fetchData,
  loadInitialGameVideos,
  loadInitialMusicVideos,
}) => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.title} variant="h3" align="center">
        Videos
      </Typography>
      <GeneralPage
        title="My Games"
        itemsShown={gameVideosShown}
        itemsOnPage={gameVideosOnPage}
        itemsTotal={gameVideosTotal}
        currentPage={currentPage}
        loadMoreItems={loadMoreGameVideos}
        error={hasError}
        loading={isLoading}
        loadInitialItems={useCallback(() => {
          fetchData("videos/games", (data) => loadInitialGameVideos(data));
          fetchData("videos/music", (data) => loadInitialMusicVideos(data));
        }, [fetchData, loadInitialGameVideos, loadInitialMusicVideos])}
      />
      <GeneralPage
        title="My Music"
        itemsShown={musicVideosShown}
        itemsOnPage={musicVideosOnPage}
        itemsTotal={musicVideosTotal}
        currentPage={currentPage}
        loadMoreItems={loadMoreMusicVideos}
        error={hasError}
        loading={isLoading}
        loadInitialItems={useCallback(() => {
          fetchData("videos/games", (data) => loadInitialGameVideos(data));
          fetchData("videos/music", (data) => loadInitialMusicVideos(data));
        }, [fetchData, loadInitialGameVideos, loadInitialMusicVideos])}
      />
    </>
  );
};

export { Videos };
export default withVideos(Videos);
