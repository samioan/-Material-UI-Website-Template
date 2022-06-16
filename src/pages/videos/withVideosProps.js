import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import videoData from "data/videoData";
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
} from "models/videos";

const withVideosProps = (Component) => (props) => {
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
  } = props;

  useEffect(() => {
    if (gameVideosShown.length === 0) {
      loadInitialGameVideos(Object.values(videoData.games));
    }
    if (musicVideosShown.length === 0) {
      loadInitialMusicVideos(Object.values(videoData.music));
    }
  }, [
    loadInitialGameVideos,
    loadInitialMusicVideos,
    gameVideosShown.length,
    musicVideosShown.length,
  ]);

  const currentPage = useLocation().pathname.split("/")[1];

  const onLoadMoreGameVideos = () =>
    loadMoreGameVideos(Object.values(videoData.games));

  const onLoadMoreMusicVideos = () =>
    loadMoreMusicVideos(Object.values(videoData.music));

  const newProps = {
    ...props,
    onLoadMoreGameVideos,
    onLoadMoreMusicVideos,
    gameVideosShown,
    gameVideosOnPage,
    gameVideosTotal,
    musicVideosShown,
    musicVideosOnPage,
    musicVideosTotal,
    currentPage,
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
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGameVideos: (data) => dispatch(loadInitialGameVideos(data)),
  loadMoreGameVideos: (data) => dispatch(loadMoreGameVideos(data)),
  loadInitialMusicVideos: (data) => dispatch(loadInitialMusicVideos(data)),
  loadMoreMusicVideos: (data) => dispatch(loadMoreMusicVideos(data)),
});

export { withVideosProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withVideosProps
);
