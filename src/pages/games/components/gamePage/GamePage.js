import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import withGamePageLink from "./withGamePageLink";
import { GameImageGallery } from "./components";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import { PageText, PageButtons } from "components/interactive";
import ScrollToTopButton from "components/input/scroll-to-top-button";

const GamePage = ({
  websiteLink,
  classes,
  showScrollToTopButton,
  scrollToTop,
}) => (
  <>
    <Container maxWidth="md" className={classes.page}>
      <PageText link={websiteLink} />
      <GameImageGallery link={websiteLink} />
      <PageButtons link={websiteLink} />
    </Container>
    {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    <Footer />
  </>
);

export { GamePage };
export default compose(
  withStyles(styles),
  withScrollbars,
  withGamePageLink
)(GamePage);
