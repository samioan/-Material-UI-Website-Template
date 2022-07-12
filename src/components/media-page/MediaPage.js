import React from "react";

import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import { PageText, PageButtons } from "./components";

const MediaPage = ({ classes, mediaPageItems, currentPage, mainComponent }) => (
  <Container maxWidth="md" className={classes.page}>
    {mediaPageItems.links !== undefined && (
      <>
        <PageText pageItem={mediaPageItems} type={currentPage} />
        {mainComponent}
        <PageButtons pageItem={mediaPageItems} type={currentPage} />
      </>
    )}
  </Container>
);

export { MediaPage };
export default withStyles(styles)(MediaPage);
