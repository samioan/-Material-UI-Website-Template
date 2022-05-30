import React from "react";

import AppBar from "@material-ui/core/AppBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import styles from "./styles";
import { headerButtons } from "./constants";
import { DesktopView, MobileView } from "./components";

const Header = ({ width }) => {
  const classes = styles();

  return (
    <AppBar className={classes.header}>
      {isWidthUp("lg", width) ? (
        <DesktopView
          headerButtons={headerButtons}
          onClick={() => console.log("testDesktop")}
        />
      ) : (
        <MobileView
          headerButtons={headerButtons}
          onClick={() => console.log("testMobile")}
        />
      )}
    </AppBar>
  );
};

export { Header };
export default withWidth()(Header);
