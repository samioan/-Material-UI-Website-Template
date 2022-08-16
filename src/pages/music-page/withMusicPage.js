import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { musicPageItems, loadMusicPageItems } from "models/music";

import { useFetch } from "hooks";

const withMusicPage = (Component) => (props) => {
  const { musicPageItems, loadMusicPageItems } = props;

  const paramsTitle = useParams().title;
  const currentPage = useLocation().pathname.split("/")[1];
  const { isLoading, hasError, fetchData } = useFetch();

  useEffect(() => {
    fetchData("music", (data) =>
      loadMusicPageItems(data.find(({ links }) => links[0] === paramsTitle))
    );
    document.title = musicPageItems.title;
  }, [fetchData, loadMusicPageItems, paramsTitle, musicPageItems.title]);

  const newProps = {
    ...props,
    musicPageItems,
    currentPage,
    isLoading,
    hasError,
    fetchData,
    loadMusicPageItems,
    paramsTitle,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  musicPageItems: musicPageItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMusicPageItems: (data) => dispatch(loadMusicPageItems(data)),
});

export { withMusicPage };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withMusicPage
);
