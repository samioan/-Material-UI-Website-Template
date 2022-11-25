import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ArchiveList from "./components/archiveList/ArchiveList";

import styles from "./styles";
import withArchiveProps from "./withArchiveProps";

const Archive = ({
  onLoadMoreArchivedGames,
  onLoadMoreArchivedMusic,
  archivedGamesShown,
  archivedMusicShown,
  archivedGamesOnPage,
  archivedGamesTotal,
  archivedMusicOnPage,
  archivedMusicTotal,
}) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Archive
        </Typography>

        <ArchiveList
          label="Games"
          archiveDetailsArray={archivedGamesShown}
          itemsOnPage={archivedGamesOnPage}
          itemsTotal={archivedGamesTotal}
          loadMoreItems={onLoadMoreArchivedGames}
        />

        <div className={classes.bottomContainer}>
          <ArchiveList
            label="Music"
            isInnerList
            archiveDetailsArray={archivedMusicShown}
            itemsOnPage={archivedMusicOnPage}
            itemsTotal={archivedMusicTotal}
            loadMoreItems={onLoadMoreArchivedMusic}
          />
        </div>
      </Container>
    </>
  );
};
export { Archive };
export default withArchiveProps(Archive);
