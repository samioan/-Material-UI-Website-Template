import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { setCurrentPage, currentPage } from "models/page";

const withArtProps = (Component) => (props) => {
  const { setCurrentPage, currentPage } = props;

  useEffect(() => {
    if (currentPage !== "art") {
      setCurrentPage("art");
    }
  }, [currentPage, setCurrentPage]);

  const newProps = {
    ...props,
    currentPage,
  };

  return <Component {...newProps} />;
};

const mapStateToProps = (state) => ({
  currentPage: currentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (data) => dispatch(setCurrentPage(data)),
});

export { withArtProps };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withArtProps
);
