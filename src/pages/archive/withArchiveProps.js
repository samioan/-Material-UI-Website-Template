import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { archiveGameDetails, archiveMusicDetails } from "./constants";
import {
  loadInitialArchivedGames,
  loadMoreArchivedGames,
  loadInitialArchivedMusic,
  loadMoreArchivedMusic,
  archivedGamesShown,
  archivedMusicShown,
  archivedGamesOnPage,
  archivedGamesTotal,
  archivedMusicOnPage,
  archivedMusicTotal,
} from "models/archive";

const withArchiveProps = (Component) => (props) => {
  const {
    loadInitialArchivedGames,
    loadMoreArchivedGames,
    loadInitialArchivedMusic,
    loadMoreArchivedMusic,
    archivedGamesShown,
    archivedMusicShown,
    archivedGamesOnPage,
    archivedGamesTotal,
    archivedMusicOnPage,
    archivedMusicTotal,
  } = props;

  useEffect(() => {
    if (archivedGamesShown.length === 0) {
      loadInitialArchivedGames(archiveGameDetails);
    }
    if (archivedMusicShown.length === 0) {
      loadInitialArchivedMusic(archiveMusicDetails);
    }
    document.title = "Archive";
  }, [
    loadInitialArchivedGames,
    loadInitialArchivedMusic,
    archivedGamesShown.length,
    archivedMusicShown.length,
  ]);

  const onLoadMoreArchivedGames = () =>
    loadMoreArchivedGames(archiveGameDetails);
  const onLoadMoreArchivedMusic = () =>
    loadMoreArchivedMusic(archiveMusicDetails);

  const newProps = {
    ...props,
    onLoadMoreArchivedGames,
    onLoadMoreArchivedMusic,
    archivedGamesShown,
    archivedMusicShown,
    archivedGamesOnPage,
    archivedGamesTotal,
    archivedMusicOnPage,
    archivedMusicTotal,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  archivedGamesShown: archivedGamesShown(state),
  archivedMusicShown: archivedMusicShown(state),
  archivedGamesOnPage: archivedGamesOnPage(state),
  archivedGamesTotal: archivedGamesTotal(state),
  archivedMusicOnPage: archivedMusicOnPage(state),
  archivedMusicTotal: archivedMusicTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialArchivedGames: (data) => dispatch(loadInitialArchivedGames(data)),
  loadMoreArchivedGames: (data) => dispatch(loadMoreArchivedGames(data)),
  loadInitialArchivedMusic: (data) => dispatch(loadInitialArchivedMusic(data)),
  loadMoreArchivedMusic: (data) => dispatch(loadMoreArchivedMusic(data)),
});

export { withArchiveProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withArchiveProps
);
