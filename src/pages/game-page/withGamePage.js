import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import {
  gamePageItems,
  loadGamePageItems,
  setGamePageLoading,
  setGamePageError,
  gamePageError,
  gamePageLoading,
} from "models/games";

import { db } from "backend";
import { ref, child, get } from "firebase/database";

const withGamePage = (Component) => (props) => {
  const {
    gamePageItems,
    loadGamePageItems,
    setGamePageLoading,
    setGamePageError,
    gamePageError,
    gamePageLoading,
  } = props;

  const paramsTitle = useParams().title;
  const currentPage = useLocation().pathname.split("/")[1];

  const loadGameItems = useCallback(() => {
    if (gamePageItems?.links?.[0] !== paramsTitle) {
      setGamePageLoading();
      get(child(ref(db), `games`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            loadGamePageItems(
              Object.values(snapshot.val()).find(
                ({ links }) => links[0] === paramsTitle
              )
            );
          } else setGamePageError();
        })
        .catch((error) => {
          setGamePageError();
        });
    }
  }, [
    setGamePageError,
    setGamePageLoading,
    loadGamePageItems,
    paramsTitle,
    gamePageItems.links,
  ]);

  useEffect(() => {
    loadGameItems();
    document.title = gamePageItems.title;
  }, [loadGameItems, gamePageItems.title]);

  const newProps = {
    ...props,
    gamePageItems,
    currentPage,
    loadGameItems,
    gamePageError,
    gamePageLoading,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamePageItems: gamePageItems(state),
  gamePageError: gamePageError(state),
  gamePageLoading: gamePageLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadGamePageItems: (data) => dispatch(loadGamePageItems(data)),
  setGamePageError: (data) => dispatch(setGamePageError(data)),
  setGamePageLoading: () => dispatch(setGamePageLoading()),
});

export { withGamePage };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGamePage
);
