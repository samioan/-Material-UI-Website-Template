import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  archiveGameDetails,
  archiveMusicDetails,
  archiveArtDetails,
} from "./constants";
import {
  loadInitialArchivedGames,
  loadMoreArchivedGames,
  loadInitialArchivedMusic,
  loadMoreArchivedMusic,
  loadInitialArchivedArt,
  loadMoreArchivedArt,
  archivedGamesShown,
  archivedMusicShown,
  archivedArtShown,
  archivedGamesOnPage,
  archivedGamesTotal,
  archivedMusicOnPage,
  archivedMusicTotal,
  archivedArtOnPage,
  archivedArtTotal,
} from "models/archive";
import { setCurrentPage, currentPage } from "models/page";

const withArchiveProps = (Component) => (props) => {
  const {
    loadInitialArchivedGames,
    loadMoreArchivedGames,
    loadInitialArchivedMusic,
    loadMoreArchivedMusic,
    loadInitialArchivedArt,
    loadMoreArchivedArt,
    archivedGamesShown,
    archivedMusicShown,
    archivedArtShown,
    archivedGamesOnPage,
    archivedGamesTotal,
    archivedMusicOnPage,
    archivedMusicTotal,
    archivedArtOnPage,
    archivedArtTotal,
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    if (currentPage !== "archive") {
      setCurrentPage("archive");
    }
    if (archivedGamesShown.length === 0) {
      loadInitialArchivedGames(archiveGameDetails);
    }
    if (archivedMusicShown.length === 0) {
      loadInitialArchivedMusic(archiveMusicDetails);
    }
    if (archivedArtShown.length === 0) {
      loadInitialArchivedArt(archiveArtDetails);
    }
  }, [
    currentPage,
    setCurrentPage,
    loadInitialArchivedGames,
    loadInitialArchivedMusic,
    loadInitialArchivedArt,
    archivedGamesShown.length,
    archivedMusicShown.length,
    archivedArtShown.length,
  ]);

  const onLoadMoreArchivedGames = () =>
    loadMoreArchivedGames(archiveGameDetails);
  const onLoadMoreArchivedMusic = () =>
    loadMoreArchivedMusic(archiveMusicDetails);
  const onLoadMoreArchivedArt = () => loadMoreArchivedArt(archiveArtDetails);

  const newProps = {
    ...props,
    onLoadMoreArchivedGames,
    onLoadMoreArchivedMusic,
    onLoadMoreArchivedArt,
    archivedGamesShown,
    archivedMusicShown,
    archivedArtShown,
    archivedGamesOnPage,
    archivedGamesTotal,
    archivedMusicOnPage,
    archivedMusicTotal,
    archivedArtOnPage,
    archivedArtTotal,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  archivedGamesShown: archivedGamesShown(state),
  archivedMusicShown: archivedMusicShown(state),
  archivedArtShown: archivedArtShown(state),
  archivedGamesOnPage: archivedGamesOnPage(state),
  archivedGamesTotal: archivedGamesTotal(state),
  archivedMusicOnPage: archivedMusicOnPage(state),
  archivedMusicTotal: archivedMusicTotal(state),
  archivedArtOnPage: archivedArtOnPage(state),
  archivedArtTotal: archivedArtTotal(state),
  currentPage: currentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialArchivedGames: (data) => dispatch(loadInitialArchivedGames(data)),
  loadMoreArchivedGames: (data) => dispatch(loadMoreArchivedGames(data)),
  loadInitialArchivedMusic: (data) => dispatch(loadInitialArchivedMusic(data)),
  loadMoreArchivedMusic: (data) => dispatch(loadMoreArchivedMusic(data)),
  loadInitialArchivedArt: (data) => dispatch(loadInitialArchivedArt(data)),
  loadMoreArchivedArt: (data) => dispatch(loadMoreArchivedArt(data)),
  setCurrentPage: (data) => dispatch(setCurrentPage(data)),
});

export { withArchiveProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withArchiveProps
);
