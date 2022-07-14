import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import withStyles from "@material-ui/styles/withStyles";

import { VideoContent } from "./components";
import styles from "./styles";

const CardContentContainer = ({
  classes,
  title,
  tagline,
  genre,
  pageLink,
  currentPage,
  link,
  isCurrentPageGamesOrMusic,
  isCurrentPageArt,
  isCurrentPageVideos,
}) => (
  <CardContent
    component={isCurrentPageGamesOrMusic ? Link : "div"}
    to={isCurrentPageGamesOrMusic ? `/${currentPage}/${pageLink}` : ""}
    className={classNames({
      [classes.cardContent]: isCurrentPageGamesOrMusic,
      [classes.artCardContent]: isCurrentPageArt,
      [classes.videoCardContent]: isCurrentPageVideos,
    })}
  >
    {isCurrentPageVideos && <VideoContent link={link} />}

    <Typography
      className={classNames({
        [classes.videoTitle]: isCurrentPageVideos,
        [classes.title]: !isCurrentPageVideos,
      })}
      variant="h5"
    >
      {title}
    </Typography>

    {isCurrentPageGamesOrMusic && (
      <>
        <Typography className={classes.tagline} variant="h6">
          {tagline}
        </Typography>
        <Chip label={genre} variant="outlined" className={classes.genre} />
      </>
    )}
  </CardContent>
);

export { CardContentContainer };
export default withStyles(styles)(CardContentContainer);
