import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import { PageText, PageButtons } from "components/interactive";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import styles from "./styles";
import { MusicSongs } from "./components";
import withMusicPageProps from "./withMusicPageProps";

const MusicPage = ({
  classes,
  showScrollToTopButton,
  scrollToTop,
  musicPageItems,
}) => (
  <>
    <Container maxWidth="md" className={classes.page}>
      {musicPageItems.links !== undefined && (
        <>
          <PageText pageItem={musicPageItems} />
          <MusicSongs pageItem={musicPageItems} />
          <PageButtons pageItem={musicPageItems} />
        </>
      )}
    </Container>
    {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    <Footer />
  </>
);

export { MusicPage };

export default compose(
  withMusicPageProps,
  withStyles(styles),
  withScrollbars
)(MusicPage);
