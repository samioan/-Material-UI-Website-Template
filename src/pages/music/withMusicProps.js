import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import musicData from "data/musicData";
import {
  loadInitialAlbums,
  loadMoreAlbums,
  albumsShown,
  albumsOnPage,
  albumsTotal,
} from "models/music";

const withMusicProps = (Component) => (props) => {
  const {
    loadInitialAlbums,
    loadMoreAlbums,
    albumsShown,
    albumsOnPage,
    albumsTotal,
  } = props;

  useEffect(() => {
    if (albumsShown.length === 0) {
      loadInitialAlbums(Object.values(musicData));
    }
  }, [loadInitialAlbums, albumsShown.length]);

  const currentPage = useLocation().pathname.split("/")[1];

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
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialAlbums: (data) => dispatch(loadInitialAlbums(data)),
  loadMoreAlbums: (data) => dispatch(loadMoreAlbums(data)),
});

export { withMusicProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withMusicProps
);
