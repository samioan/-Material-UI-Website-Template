import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import withMusicPageLink from "./withMusicPageLink";
import { MusicSongs } from "./components";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import { PageText, PageButtons } from "components/interactive";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

const MusicPage = ({
  websiteLink,
  classes,
  showScrollToTopButton,
  scrollToTop,
}) => (
  <>
    <Container maxWidth="md" className={classes.page}>
      <PageText link={websiteLink} />
      <MusicSongs link={websiteLink} />
      <PageButtons link={websiteLink} />
    </Container>
    {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    <Footer />
  </>
);

export { MusicPage };

export default compose(
  withStyles(styles),
  withScrollbars,
  withMusicPageLink
)(MusicPage);
