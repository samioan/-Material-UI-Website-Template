import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import withMusicPageLink from "./withMusicPageLink";
import { MusicText, MusicSongs, MusicButtons } from "./components";

import Footer from "components/layout/footer";
import withScrollbars from "components/theme/withScrollbars";
import ScrollToTopButton from "components/input/scroll-to-top-button";

const MusicPage = ({
  websiteLink,
  classes,
  showScrollToTopButton,
  scrollToTop,
}) => (
  <>
    <Container maxWidth="md" className={classes.page}>
      <MusicText link={websiteLink} />
      <MusicSongs link={websiteLink} />
      <MusicButtons link={websiteLink} />
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
