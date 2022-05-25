import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

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
    loadInitialGameVideos(Object.values(videoData.games));
    loadInitialMusicVideos(Object.values(videoData.music));
  }, [loadInitialGameVideos, loadInitialMusicVideos]);

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
