import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const withArtProps = (Component) => (props) => {
  const currentPage = useLocation().pathname.split("/")[1];

  useEffect(() => {
    document.title = "Art";
  }, []);

  const newProps = {
    ...props,
    currentPage,
  };

  return <Component {...newProps} />;
};

export { withArtProps };
export default withArtProps;
