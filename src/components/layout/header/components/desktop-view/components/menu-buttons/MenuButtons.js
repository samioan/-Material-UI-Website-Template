import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "./styles";

const MenuButtons = ({ headerButtons, onClick }) => {
  const classes = styles();

  return (
    <div>
      {headerButtons.map(({ label, href }) =>
        href ? (
          <Button
            key={label}
            to={href}
            component={RouterLink}
            className={classes.menuButton}
          >
            {label}
          </Button>
        ) : (
          <Button key={label} onClick={onClick} className={classes.menuButton}>
            {label}
          </Button>
        )
      )}
    </div>
  );
};

export { MenuButtons };
export default MenuButtons;
