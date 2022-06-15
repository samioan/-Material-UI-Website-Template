import React from "react";
import { compose } from "redux";

import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import withScrollbars from "theme/withScrollbars";
import { Footer, ScrollToTopButton } from "components";

import styles from "./styles";
import { PageText, PageButtons } from "./components";

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
