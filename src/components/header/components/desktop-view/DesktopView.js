import React from "react";

import Toolbar from "@material-ui/core/Toolbar";

import { HeaderLogo } from "components/header/components";

import styles from "./styles";
import { MenuButtons } from "./components";

const DesktopView = ({ headerButtons, onClick }) => {
  const classes = styles();

  return (
    <Toolbar className={classes.toolbar}>
      <HeaderLogo headerButtons={headerButtons} />
      <MenuButtons headerButtons={headerButtons} onClick={onClick} />
    </Toolbar>
  );
};

export { DesktopView };
export default DesktopView;
