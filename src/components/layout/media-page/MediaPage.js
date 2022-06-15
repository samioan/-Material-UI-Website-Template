import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import { PageText, PageButtons } from "./components";
import styles from "./styles";

const MediaPage = ({
  classes,
  showScrollToTopButton,
  scrollToTop,
  mediaPageItems,
  currentPage,
  mainComponent,
}) => (
  <>
    <Container maxWidth="md" className={classes.page}>
      {mediaPageItems.links !== undefined && (
        <>
          <PageText pageItem={mediaPageItems} type={currentPage} />
          {mainComponent}
          <PageButtons pageItem={mediaPageItems} type={currentPage} />
        </>
      )}
    </Container>
    {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    <Footer />
  </>
);

export { MediaPage };
export default compose(withStyles(styles), withScrollbars)(MediaPage);
