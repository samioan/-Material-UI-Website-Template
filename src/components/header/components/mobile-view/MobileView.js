import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import { HeaderLogo } from "components/header/components";

import styles from "./styles";
import { DrawerButtons } from "./components";

const MobileView = ({ headerButtons, onClick }) => {
  const classes = styles();

  const [drawerOpen, setdrawerOpen] = useState(false);

  return (
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.iconButton}
        onClick={() => setdrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        className={classes.drawer}
        anchor="left"
        open={drawerOpen}
        onClose={() => setdrawerOpen(false)}
      >
        <div className={classes.drawerContainer}>
          <DrawerButtons
            headerButtons={headerButtons}
            onRouteLink={() => setdrawerOpen(false)}
            onClick={() => {
              setdrawerOpen(false);
              onClick();
            }}
          />
        </div>
      </Drawer>

      <HeaderLogo />
    </Toolbar>
  );
};

export { MobileView };
export default MobileView;
