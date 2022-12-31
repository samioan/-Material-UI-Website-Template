import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ArchiveList from "./components/archiveList/ArchiveList";

import styles from "./styles";
import withArchiveProps from "./withArchiveProps";

const Archive = ({
  onLoadMoreArchivedGames,
  archivedGamesShown,
  archivedGamesOnPage,
  archivedGamesTotal,
}) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Archive
        </Typography>

        <div className={classes.bottomContainer}>
          <ArchiveList
            archiveDetailsArray={archivedGamesShown}
            itemsOnPage={archivedGamesOnPage}
            itemsTotal={archivedGamesTotal}
            loadMoreItems={onLoadMoreArchivedGames}
          />
        </div>
      </Container>
    </>
  );
};
export { Archive };
export default withArchiveProps(Archive);
