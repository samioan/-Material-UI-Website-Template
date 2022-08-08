import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  loadInitialAlbums,
  loadMoreAlbums,
  albumsShown,
  albumsOnPage,
  albumsTotal,
  allAlbums,
  setMusicLoading,
  setMusicError,
  musicError,
  musicLoading,
} from "models/music";
import { db } from "backend";
import { ref, child, get } from "firebase/database";

const withMusic = (Component) => (props) => {
  const {
    loadInitialAlbums,
    loadMoreAlbums,
    albumsShown,
    albumsOnPage,
    albumsTotal,
    allAlbums,
    setMusicLoading,
    setMusicError,
    musicError,
    musicLoading,
  } = props;

  const loadAlbums = useCallback(() => {
    if (allAlbums.length === 0) {
      setMusicLoading();
      get(child(ref(db), `music`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            loadInitialAlbums(
              Object.values(snapshot.val()).sort((a, b) => {
                const dateA = new Date(
                  a?.released?.split("-").reverse().join("-")
                );
                const dateB = new Date(
                  b?.released?.split("-").reverse().join("-")
                );
                return dateB - dateA;
              })
            );
          } else setMusicError();
        })
        .catch((error) => {
          setMusicError();
        });
    }
  }, [allAlbums.length, loadInitialAlbums, setMusicError, setMusicLoading]);

  useEffect(() => {
    loadAlbums();
    document.title = "Music";
  }, [loadAlbums]);

  const currentPage = useLocation().pathname.split("/")[1];

  const newProps = {
    ...props,
    albumsShown,
    albumsOnPage,
    albumsTotal,
    currentPage,
    musicError,
    musicLoading,
    loadMoreAlbums,
    loadAlbums,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  albumsShown: albumsShown(state),
  albumsOnPage: albumsOnPage(state),
  albumsTotal: albumsTotal(state),
  allAlbums: allAlbums(state),
  musicError: musicError(state),
  musicLoading: musicLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialAlbums: (data) => dispatch(loadInitialAlbums(data)),
  loadMoreAlbums: () => dispatch(loadMoreAlbums()),
  setMusicError: (data) => dispatch(setMusicError(data)),
  setMusicLoading: () => dispatch(setMusicLoading()),
});

export { withMusic };
export default compose(connect(mapStateToProps, mapDispatchToProps), withMusic);
