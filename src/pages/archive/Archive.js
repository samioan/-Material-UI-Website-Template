import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ArchiveList from "./components/archiveList/ArchiveList";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import styles from "./styles";
import withArchiveProps from "./withArchiveProps";

const Archive = ({
  showScrollToTopButton,
  scrollToTop,
  onLoadMoreArchivedGames,
  onLoadMoreArchivedMusic,
  onLoadMoreArchivedArt,
  archivedGamesShown,
  archivedMusicShown,
  archivedArtShown,
  archivedGamesOnPage,
  archivedGamesTotal,
  archivedMusicOnPage,
  archivedMusicTotal,
  archivedArtOnPage,
  archivedArtTotal,
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

        <ArchiveList
          label="Music"
          isInnerList
          archiveDetailsArray={archivedMusicShown}
          itemsOnPage={archivedMusicOnPage}
          itemsTotal={archivedMusicTotal}
          loadMoreItems={onLoadMoreArchivedMusic}
        />

        <div className={classes.bottomContainer}>
          <ArchiveList
            label="Art"
            isInnerList
            archiveDetailsArray={archivedArtShown}
            itemsOnPage={archivedArtOnPage}
            itemsTotal={archivedArtTotal}
            loadMoreItems={onLoadMoreArchivedArt}
          />
        </div>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};
export { Archive };
export default compose(withArchiveProps, withScrollbars)(Archive);
