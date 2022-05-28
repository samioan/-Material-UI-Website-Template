import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import { PageText, PageButtons } from "components/interactive";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import styles from "./styles";
import { GameImageGallery } from "./components";
import withGamePageProps from "./withGamePageProps";

const GamePage = ({
  classes,
  showScrollToTopButton,
  scrollToTop,
  gamePageItems,
}) => (
  <>
    <Container maxWidth="md" className={classes.page}>
      {gamePageItems.links !== undefined && (
        <>
          <PageText pageItem={gamePageItems} />
          <GameImageGallery pageItem={gamePageItems} />
          <PageButtons pageItem={gamePageItems} />
        </>
      )}
    </Container>
    {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    <Footer />
  </>
);

export { GamePage };
export default compose(
  withGamePageProps,
  withStyles(styles),
  withScrollbars
)(GamePage);
