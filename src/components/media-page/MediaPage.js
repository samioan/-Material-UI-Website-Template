import React from "react";

import withStyles from "@material-ui/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";
import { ErrorMessage } from "components";
import { PageText, PageButtons } from "./components";

const MediaPage = ({
  classes,
  mediaPageItems,
  currentPage,
  mainComponent,
  loading,
  error,
  loadPageItems,
}) => (
  <main className={classes.page}>
    {!!loading && (
      <div className={classes.loading}>
        <CircularProgress className={classes.loadingIcon} />
      </div>
    )}
    {!loading && !!error && <ErrorMessage onClick={loadPageItems} />}
    {!loading && !error && (
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
