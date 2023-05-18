import React, { useEffect } from "react";
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
} from "models/music";

import { useFetch } from "hooks";

const withMusic = (Component) => (props) => {
  const {
    loadInitialAlbums,
    loadMoreAlbums,
    albumsShown,
    albumsOnPage,
    albumsTotal,
    allAlbums,
  } = props;

  const { isLoading, hasError, fetchData } = useFetch();

  useEffect(() => {
    if (!allAlbums.length) {
      fetchData("music", (data) => loadInitialAlbums(data));
    }
    document.title = "Music";
  }, [allAlbums.length, fetchData, loadInitialAlbums]);

  const currentPage = useLocation().pathname.split("/")[1];

  const newProps = {
    ...props,
    albumsShown,
    albumsOnPage,
    albumsTotal,
    currentPage,
    loadMoreAlbums,
    isLoading,
    hasError,
    fetchData,
    loadInitialAlbums,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  albumsShown: albumsShown(state),
  albumsOnPage: albumsOnPage(state),
  albumsTotal: albumsTotal(state),
  allAlbums: allAlbums(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialAlbums: (data) => dispatch(loadInitialAlbums(data)),
  loadMoreAlbums: () => dispatch(loadMoreAlbums()),
});

export { withMusic };
export default compose(connect(mapStateToProps, mapDispatchToProps), withMusic);
