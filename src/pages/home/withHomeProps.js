import React, { useEffect } from "react";

const withHomeProps = (Component) => (props) => {
  useEffect(() => {
    document.title = "Selfish Dream";
  }, []);

  const newProps = {
    ...props,
  };

  return <Component {...newProps} />;
};

export { withHomeProps };
export default withHomeProps;
