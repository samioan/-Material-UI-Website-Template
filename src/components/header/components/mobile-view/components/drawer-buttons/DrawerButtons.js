import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./styles";

const DrawerButtons = ({ headerButtons, onRouteLink, onClick }) => {
  const classes = styles();

  return (
    <>
      {headerButtons.map(({ label, href }) =>
        href ? (
          <Link
            key={label}
            component={RouterLink}
            to={href}
            className={classes.link}
          >
            <MenuItem className={classes.menuItem} onClick={onRouteLink}>
              {label}
            </MenuItem>
          </Link>
        ) : (
          <MenuItem key={label} className={classes.menuItem} onClick={onClick}>
            {label}
          </MenuItem>
        )
      )}
    </>
  );
};

export { DrawerButtons };
export default DrawerButtons;
