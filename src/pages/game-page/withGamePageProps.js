import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { gamePageItems, loadGamePageItems } from "models/games";

import gameData from "data/gameData.json";

const withGamePageProps = (Component) => (props) => {
  const { gamePageItems, loadGamePageItems } = props;

  const paramsTitle = useParams().title;
  const currentPage = useLocation().pathname.split("/")[1];

  useEffect(() => {
    loadGamePageItems(
      Object.values(gameData).find(({ links }) => links[0] === paramsTitle)
    );
  }, [paramsTitle, loadGamePageItems]);

  const newProps = {
    ...props,
    gamePageItems,
    currentPage,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  gamePageItems: gamePageItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadGamePageItems: (data) => dispatch(loadGamePageItems(data)),
});

export { withGamePageProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGamePageProps
);
