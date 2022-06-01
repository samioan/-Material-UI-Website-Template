import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import ContactFormModal from "components/interactive/contact-form-modal";

import styles from "./styles";
import { headerButtons } from "./constants";
import { DesktopView, MobileView } from "./components";

const Header = ({ width }) => {
  const classes = styles();

  const [isContactModalopen, setContactModalOpen] = useState(false);

  return (
    <>
      <AppBar className={classes.header}>
        {isWidthUp("lg", width) ? (
          <DesktopView
            headerButtons={headerButtons}
            onClick={() => setContactModalOpen(true)}
          />
        ) : (
          <MobileView
            headerButtons={headerButtons}
            onClick={() => setContactModalOpen(true)}
          />
        )}
      </AppBar>
      <ContactFormModal
        open={isContactModalopen}
        handleClose={() => setContactModalOpen(false)}
      />
    </>
  );
};

export { Header };
export default withWidth()(Header);
