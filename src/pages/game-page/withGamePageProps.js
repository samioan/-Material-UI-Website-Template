import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { gamePageItems, loadGamePageItems } from "models/games";

import gameData from "data/gameData.json";

const withGamePageProps = (Component) => (props) => {
  const { gamePageItems, loadGamePageItems } = props;

  const params = useParams();

  useEffect(() => {
    loadGamePageItems(
      Object.values(gameData).find(({ links }) => links[2] === params.title)
    );
  }, [params.title, loadGamePageItems]);

  const newProps = {
    ...props,
    gamePageItems,
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
