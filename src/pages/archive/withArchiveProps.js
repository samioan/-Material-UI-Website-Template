import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { archiveGameDetails } from "./constants";
import {
  loadInitialArchivedGames,
  loadMoreArchivedGames,
  archivedGamesShown,
  archivedGamesOnPage,
  archivedGamesTotal,
} from "models/archive";

const withArchiveProps = (Component) => (props) => {
  const {
    loadInitialArchivedGames,
    loadMoreArchivedGames,
    archivedGamesShown,
    archivedGamesOnPage,
    archivedGamesTotal,
  } = props;

  useEffect(() => {
    if (!archivedGamesShown.length) {
      loadInitialArchivedGames(archiveGameDetails);
    }
    document.title = "Archive";
  }, [loadInitialArchivedGames, archivedGamesShown.length]);

  const onLoadMoreArchivedGames = () =>
    loadMoreArchivedGames(archiveGameDetails);

  const newProps = {
    ...props,
    onLoadMoreArchivedGames,
    archivedGamesShown,
    archivedGamesOnPage,
    archivedGamesTotal,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  archivedGamesShown: archivedGamesShown(state),
  archivedGamesOnPage: archivedGamesOnPage(state),
  archivedGamesTotal: archivedGamesTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialArchivedGames: (data) => dispatch(loadInitialArchivedGames(data)),
  loadMoreArchivedGames: (data) => dispatch(loadMoreArchivedGames(data)),
});

export { withArchiveProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withArchiveProps
);
