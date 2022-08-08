import React, { useEffect, useCallback } from "react";
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
  videosError,
  videosLoading,
  setVideosError,
  setVideosLoading,
} from "models/videos";
import { db } from "backend";
import { ref, child, get } from "firebase/database";

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
    videosError,
    videosLoading,
    setVideosError,
    setVideosLoading,
  } = props;

  const loadVideos = useCallback(() => {
    if (allGameVideos.length === 0) {
      setVideosLoading();
      get(child(ref(db), `videos`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            loadInitialGameVideos(
              Object.values(snapshot.val().games).sort((a, b) => {
                const dateA = new Date(
                  a?.released?.split("-").reverse().join("-")
                );
                const dateB = new Date(
                  b?.released?.split("-").reverse().join("-")
                );
                return dateB - dateA;
              })
            );
            loadInitialMusicVideos(
              Object.values(snapshot.val().music).sort((a, b) => {
                const dateA = new Date(
                  a?.released?.split("-").reverse().join("-")
                );
                const dateB = new Date(
                  b?.released?.split("-").reverse().join("-")
                );
                return dateB - dateA;
              })
            );
          } else setVideosError();
        })
        .catch((error) => {
          setVideosError();
        });
    }
  }, [
    allGameVideos.length,
    loadInitialGameVideos,
    loadInitialMusicVideos,
    setVideosError,
    setVideosLoading,
  ]);

  useEffect(() => {
    loadVideos();
    document.title = "Videos";
  }, [loadVideos]);

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
    loadVideos,
    videosError,
    videosLoading,
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
  videosError: videosError(state),
  videosLoading: videosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGameVideos: (data) => dispatch(loadInitialGameVideos(data)),
  loadMoreGameVideos: (data) => dispatch(loadMoreGameVideos(data)),
  loadInitialMusicVideos: (data) => dispatch(loadInitialMusicVideos(data)),
  loadMoreMusicVideos: (data) => dispatch(loadMoreMusicVideos(data)),
  setVideosError: (data) => dispatch(setVideosError(data)),
  setVideosLoading: (data) => dispatch(setVideosLoading(data)),
});

export { withVideos };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withVideos
);
