import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import gameData from "data/gameData";
import {
  loadInitialGames,
  loadMoreGames,
  gamesShown,
  gamesOnPage,
  gamesTotal,
  loadGamePageItems,
} from "models/games";
import { setCurrentPage, currentPage } from "models/page";

const withGamesProps = (Component) => (props) => {
  const {
    loadInitialGames,
    loadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    setCurrentPage,
    currentPage,
    loadGamePageItems,
  } = props;

  useEffect(() => {
    loadInitialGames(Object.values(gameData));
    setCurrentPage("games");
  }, [loadInitialGames, setCurrentPage]);

  const onLoadMoreGames = () => loadMoreGames(Object.values(gameData));

  const newProps = {
    ...props,
    onLoadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    currentPage,
    loadGamePageItems,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamesShown: gamesShown(state),
  gamesOnPage: gamesOnPage(state),
  gamesTotal: gamesTotal(state),
  currentPage: currentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGames: (data) => dispatch(loadInitialGames(data)),
  loadMoreGames: (data) => dispatch(loadMoreGames(data)),
  setCurrentPage: (data) => dispatch(setCurrentPage(data)),
  loadGamePageItems: (data) => dispatch(loadGamePageItems(data)),
});

export { withGamesProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGamesProps
);
