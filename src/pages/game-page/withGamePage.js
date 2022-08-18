import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { gamePageItems, loadGamePageItems } from "models/games";

import { useFetch } from "hooks";

const withGamePage = (Component) => (props) => {
  const { gamePageItems, loadGamePageItems } = props;

  const paramsTitle = useParams().title;
  const currentPage = useLocation().pathname.split("/")[1];
  const { isLoading, hasError, fetchData } = useFetch();

  useEffect(() => {
    fetchData("games", (data) =>
      loadGamePageItems(data.find(({ links }) => links[0] === paramsTitle))
    );
    document.title = gamePageItems.title;
  }, [fetchData, loadGamePageItems, paramsTitle, gamePageItems.title]);

  const newProps = {
    ...props,
    gamePageItems,
    currentPage,
    isLoading,
    hasError,
    fetchData,
    loadGamePageItems,
    paramsTitle,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamePageItems: gamePageItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadGamePageItems: (data) => dispatch(loadGamePageItems(data)),
});

export { withGamePage };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGamePage
);
