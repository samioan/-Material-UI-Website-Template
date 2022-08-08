import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import {
  musicPageItems,
  loadMusicPageItems,
  setMusicPageLoading,
  setMusicPageError,
  musicPageError,
  musicPageLoading,
} from "models/music";

import { db } from "backend";
import { ref, child, get } from "firebase/database";

const withMusicPage = (Component) => (props) => {
  const {
    musicPageItems,
    loadMusicPageItems,
    setMusicPageLoading,
    setMusicPageError,
    musicPageError,
    musicPageLoading,
  } = props;

  const paramsTitle = useParams().title;
  const currentPage = useLocation().pathname.split("/")[1];

  const loadMusicItems = useCallback(() => {
    if (musicPageItems?.links?.[0] !== paramsTitle) {
      setMusicPageLoading();
      get(child(ref(db), `music`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            loadMusicPageItems(
              Object.values(snapshot.val()).find(
                ({ links }) => links[0] === paramsTitle
              )
            );
          } else setMusicPageError();
        })
        .catch((error) => {
          setMusicPageError();
        });
    }
  }, [
    setMusicPageError,
    setMusicPageLoading,
    loadMusicPageItems,
    paramsTitle,
    musicPageItems.links,
  ]);

  useEffect(() => {
    loadMusicItems();
    document.title = musicPageItems.title;
  }, [loadMusicItems, musicPageItems.title]);

  const newProps = {
    ...props,
    musicPageItems,
    currentPage,
    loadMusicItems,
    musicPageError,
    musicPageLoading,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  musicPageItems: musicPageItems(state),
  musicPageError: musicPageError(state),
  musicPageLoading: musicPageLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMusicPageItems: (data) => dispatch(loadMusicPageItems(data)),
  setMusicPageLoading: () => dispatch(setMusicPageLoading()),
  setMusicPageError: (data) => dispatch(setMusicPageError(data)),
});

export { withMusicPage };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withMusicPage
);
