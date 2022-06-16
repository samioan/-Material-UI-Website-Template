import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import gameData from "data/gameData";
import {
  loadInitialGames,
  loadMoreGames,
  gamesShown,
  gamesOnPage,
  gamesTotal,
  loadGamePageItems,
} from "models/games";

const withGamesProps = (Component) => (props) => {
  const {
    loadInitialGames,
    loadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    loadGamePageItems,
  } = props;

  useEffect(() => {
    if (gamesShown.length === 0) {
      loadInitialGames(Object.values(gameData));
    }
  }, [gamesShown.length, loadInitialGames]);

  const currentPage = useLocation().pathname.split("/")[1];

  const onLoadMoreGames = () => loadMoreGames(Object.values(gameData));

  const newProps = {
    ...props,
    onLoadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    loadGamePageItems,
    currentPage,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamesShown: gamesShown(state),
  gamesOnPage: gamesOnPage(state),
  gamesTotal: gamesTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGames: (data) => dispatch(loadInitialGames(data)),
  loadMoreGames: (data) => dispatch(loadMoreGames(data)),
  loadGamePageItems: (data) => dispatch(loadGamePageItems(data)),
});

export { withGamesProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGamesProps
);
