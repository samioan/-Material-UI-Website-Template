import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { musicPageItems, loadMusicPageItems } from "models/music";

import musicData from "data/musicData.json";

const withGamePageProps = (Component) => (props) => {
  const { musicPageItems, loadMusicPageItems } = props;

  const params = useParams();

  useEffect(() => {
    loadMusicPageItems(
      Object.values(musicData).find(({ links }) => links[1] === params.title)
    );
  }, [params.title, loadMusicPageItems]);

  const newProps = {
    ...props,
    musicPageItems,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  musicPageItems: musicPageItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMusicPageItems: (data) => dispatch(loadMusicPageItems(data)),
});

export { withGamePageProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGamePageProps
);
