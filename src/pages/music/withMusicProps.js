import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import musicData from "data/musicData";
import {
  loadInitialAlbums,
  loadMoreAlbums,
  albumsShown,
  albumsOnPage,
  albumsTotal,
} from "models/music";
import { setCurrentPage, currentPage } from "models/page";

const withMusicProps = (Component) => (props) => {
  const {
    loadInitialAlbums,
    loadMoreAlbums,
    albumsShown,
    albumsOnPage,
    albumsTotal,
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    loadInitialAlbums(Object.values(musicData));
    setCurrentPage("music");
  }, [loadInitialAlbums, setCurrentPage]);

  const onLoadMoreAlbums = () => loadMoreAlbums(Object.values(musicData));

  const newProps = {
    ...props,
    onLoadMoreAlbums,
    albumsShown,
    albumsOnPage,
    albumsTotal,
    currentPage,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  albumsShown: albumsShown(state),
  albumsOnPage: albumsOnPage(state),
  albumsTotal: albumsTotal(state),
  currentPage: currentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialAlbums: (data) => dispatch(loadInitialAlbums(data)),
  loadMoreAlbums: (data) => dispatch(loadMoreAlbums(data)),
  setCurrentPage: (data) => dispatch(setCurrentPage(data)),
});

export { withMusicProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withMusicProps
);
