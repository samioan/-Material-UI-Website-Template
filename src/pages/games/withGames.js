import React, { useEffect, useCallback } from "react";
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
  setGamesError,
  gamesError,
  setGamesLoading,
  gamesLoading,
} from "models/games";
import { db } from "backend";
import { ref, child, get } from "firebase/database";

const withGames = (Component) => (props) => {
  const {
    loadInitialGames,
    loadMoreGames,
    allGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    setGamesError,
    gamesError,
    setGamesLoading,
    gamesLoading,
  } = props;

  const loadGames = useCallback(() => {
    if (allGames.length === 0) {
      setGamesLoading();
      get(child(ref(db), `games`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            loadInitialGames(
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
          } else setGamesError();
        })
        .catch((error) => {
          setGamesError();
        });
    }
  }, [allGames.length, loadInitialGames, setGamesError, setGamesLoading]);

  useEffect(() => {
    loadGames();
    document.title = "Games";
  }, [loadGames]);

  const currentPage = useLocation().pathname.split("/")[1];

  const newProps = {
    ...props,
    loadMoreGames,
    gamesShown,
    gamesOnPage,
    gamesTotal,
    currentPage,
    gamesError,
    loadGames,
    gamesLoading,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamesShown: gamesShown(state),
  gamesOnPage: gamesOnPage(state),
  gamesTotal: gamesTotal(state),
  allGames: allGames(state),
  gamesError: gamesError(state),
  gamesLoading: gamesLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialGames: (data) => dispatch(loadInitialGames(data)),
  loadMoreGames: () => dispatch(loadMoreGames()),
  setGamesError: (data) => dispatch(setGamesError(data)),
  setGamesLoading: () => dispatch(setGamesLoading()),
});

export { withGames };
export default compose(connect(mapStateToProps, mapDispatchToProps), withGames);
