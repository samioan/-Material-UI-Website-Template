import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  loadInitialGames,
  loadMoreGames,
  allGames,
  gamesShown,
  gamesOnPage,
  gamesTotal,
} from "models/games";

import { useFetch } from "hooks";

const withGames = (Component) => (props) => {
  const {
    loadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    loadInitialGames,
    allGames,
  } = props;

  const { isLoading, hasError, fetchData } = useFetch();

  useEffect(() => {
    if (allGames.length === 0) {
      fetchData("games", (data) => loadInitialGames(data));
    }
    document.title = "Games";
  }, [fetchData, loadInitialGames, allGames.length]);

  const currentPage = useLocation().pathname.split("/")[1];

  const newProps = {
    ...props,
    loadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    currentPage,
    isLoading,
    hasError,
    fetchData,
    loadInitialGames,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamesShown: gamesShown(state),
  gamesOnPage: gamesOnPage(state),
  gamesTotal: gamesTotal(state),
  allGames: allGames(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGames: (data) => dispatch(loadInitialGames(data)),
  loadMoreGames: () => dispatch(loadMoreGames()),
});

export { withGames };
export default compose(connect(mapStateToProps, mapDispatchToProps), withGames);
