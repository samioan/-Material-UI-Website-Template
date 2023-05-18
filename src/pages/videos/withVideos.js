import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  loadInitialGameVideos,
  loadInitialMusicVideos,
  loadMoreGameVideos,
  loadMoreMusicVideos,
  gameVideosShown,
  gameVideosOnPage,
  gameVideosTotal,
  musicVideosShown,
  musicVideosOnPage,
  musicVideosTotal,
  allGameVideos,
} from "models/videos";

import { useFetch } from "hooks";

const withVideos = (Component) => (props) => {
  const {
    loadInitialGameVideos,
    loadInitialMusicVideos,
    loadMoreGameVideos,
    loadMoreMusicVideos,
    gameVideosShown,
    gameVideosOnPage,
    gameVideosTotal,
    musicVideosShown,
    musicVideosOnPage,
    musicVideosTotal,
    allGameVideos,
  } = props;

  const { isLoading, hasError, fetchData } = useFetch();

  useEffect(() => {
    if (!allGameVideos.length) {
      fetchData("videos/games", (data) => loadInitialGameVideos(data));
      fetchData("videos/music", (data) => loadInitialMusicVideos(data));
    }
    document.title = "Videos";
  }, [
    allGameVideos.length,
    fetchData,
    loadInitialGameVideos,
    loadInitialMusicVideos,
  ]);

  const currentPage = useLocation().pathname.split("/")[1];

  const newProps = {
    ...props,
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
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gameVideosShown: gameVideosShown(state),
  gameVideosOnPage: gameVideosOnPage(state),
  gameVideosTotal: gameVideosTotal(state),
  musicVideosShown: musicVideosShown(state),
  musicVideosOnPage: musicVideosOnPage(state),
  musicVideosTotal: musicVideosTotal(state),
  allGameVideos: allGameVideos(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGameVideos: (data) => dispatch(loadInitialGameVideos(data)),
  loadMoreGameVideos: (data) => dispatch(loadMoreGameVideos(data)),
  loadInitialMusicVideos: (data) => dispatch(loadInitialMusicVideos(data)),
  loadMoreMusicVideos: (data) => dispatch(loadMoreMusicVideos(data)),
});

export { withVideos };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withVideos
);
