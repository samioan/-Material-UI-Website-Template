import React from "react";
import { compose } from "redux";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/styles/withStyles";

import {
  ArtModal,
  OverlayButtons,
  CardMediaContainer,
  CardContentContainer,
} from "./components";
import styles from "./styles";
import withMediaCardProps from "./withMediaCardProps";

const MediaCard = ({
  classes,
  image,
  title,
  tagline,
  genre,
  pageLink,
  currentPage,
  link,
  handleOpen,
  open,
  handleClose,
  overlayButtons,
  isCurrentPageGamesOrMusic,
  isCurrentPageArt,
  isCurrentPageVideos,
}) => (
  <>
    <Card className={classes.card}>
      <Grid
        onClick={isCurrentPageArt ? handleOpen : () => {}}
        className={classNames({
          [classes.artMediaContainer]: isCurrentPageArt,
          [classes.mediaContainer]: !isCurrentPageArt,
        })}
      >
        {!isCurrentPageVideos && (
          <CardMediaContainer
            image={image}
            isCurrentPageArt={isCurrentPageArt}
          />
        )}

        {isCurrentPageGamesOrMusic && (
          <OverlayButtons
            overlayButtons={overlayButtons}
            pageLink={pageLink}
            currentPage={currentPage}
          />
        )}
      </Grid>

      <CardContentContainer
        title={title}
        tagline={tagline}
        genre={genre}
        pageLink={pageLink}
        currentPage={currentPage}
        link={link}
        isCurrentPageGamesOrMusic={isCurrentPageGamesOrMusic}
        isCurrentPageArt={isCurrentPageArt}
        isCurrentPageVideos={isCurrentPageVideos}
      />
    </Card>

    <ArtModal
      image={image}
      title={title}
      open={open}
      handleClose={handleClose}
    />
  </>
);

export { MediaCard };
export default compose(withStyles(styles), withMediaCardProps)(MediaCard);
