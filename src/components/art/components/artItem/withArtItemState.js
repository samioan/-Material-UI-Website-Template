import React, { useState } from "react";

import styles from "./styles";

const withArtItemState = (Component) => (props) => {
  const classes = styles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Component
      {...props}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      classes={classes}
    />
  );
};

export { withArtItemState };
export default withArtItemState;
