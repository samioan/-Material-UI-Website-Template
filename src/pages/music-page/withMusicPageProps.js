import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { musicPageItems, loadMusicPageItems } from "models/music";

import musicData from "data/musicData.json";

const withGamePageProps = (Component) => (props) => {
  const { musicPageItems, loadMusicPageItems } = props;

  const paramsTitle = useParams().title;
  const currentPage = useLocation().pathname.split("/")[1];

  useEffect(() => {
    loadMusicPageItems(
      Object.values(musicData).find(({ links }) => links[0] === paramsTitle)
    );
    document.title = musicPageItems.title;
  }, [paramsTitle, loadMusicPageItems, musicPageItems.title]);

  const newProps = {
    ...props,
    musicPageItems,
    currentPage,
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
