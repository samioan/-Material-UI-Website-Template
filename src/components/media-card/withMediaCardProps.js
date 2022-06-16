import React, { useState } from "react";

import styles from "./styles";

const withMediaCardProps = (Component) => (props) => {
  const classes = styles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newProps = {
    ...props,
    open,
    handleOpen,
    handleClose,
    classes,
  };

  return <Component {...newProps} />;
};

export { withMediaCardProps };
export default withMediaCardProps;
