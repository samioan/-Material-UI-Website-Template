import React from "react";

import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import { PageText, PageButtons } from "./components";

const MediaPage = ({ classes, mediaPageItems, currentPage, mainComponent }) => (
  <main className={classes.page}>
    {mediaPageItems.links !== undefined && (
      <>
        <PageText pageItem={mediaPageItems} type={currentPage} />
        {mainComponent}
        <PageButtons pageItem={mediaPageItems} type={currentPage} />
      </>
    )}
  </main>
);

export { MediaPage };
export default withStyles(styles)(MediaPage);
