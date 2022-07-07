import React from "react";
import { compose } from "redux";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { ArtModal, CardButton } from "./components";
import withMediaCardProps from "./withMediaCardProps";

const MediaCard = ({
  classes,
  width,
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
}) => (
  <>
    <Card className={classes.card}>
      <Grid
        onClick={currentPage === "art" ? handleOpen : () => {}}
        className={classNames({
          [classes.artMediaContainer]: currentPage === "art",
          [classes.mediaContainer]: currentPage !== "art",
        })}
      >
        {currentPage !== "videos" && (
          <CardMedia
            className={currentPage === "art" ? classes.artMedia : classes.media}
            image={image}
          />
        )}

        {(currentPage === "games" || currentPage === "music") && (
          <div className={classes.overlay}>
            {isWidthUp("md", width) && (
              <>
                {overlayButtons
                  .filter(({ show }) => show)
                  .map(({ title, link, target, icon }) => (
                    <CardButton
                      key={title}
                      title={title}
                      link={link}
                      target={target}
                      icon={icon}
                    />
                  ))}
              </>
            )}

            {!isWidthUp("md", width) && (
              <Link
                to={{
                  pathname: `/${currentPage}/${pageLink}`,
                }}
                className={classes.fullLink}
              />
            )}
          </div>
        )}
      </Grid>

      <CardContent
        component={
          currentPage === "games" || currentPage === "music" ? Link : "div"
        }
        to={
          currentPage === "games" || currentPage === "music"
            ? `/${currentPage}/${pageLink}`
            : ""
        }
        className={classNames({
          [classes.cardContent]:
            currentPage === "games" || currentPage === "music",
          [classes.artCardContent]: currentPage === "art",
          [classes.videoCardContent]: currentPage === "videos",
        })}
      >
        <div>
          {currentPage === "videos" && (
            <LiteYouTubeEmbed
              activeClass="lyt-activated"
              iframeClass=""
              playerClass="lty-playbtn"
              wrapperClass="yt-lite"
              poster="hqdefault"
              noCookie
              id={link}
              title={title}
            />
          )}

          <Typography
            className={classNames({
              [classes.videoTitle]: currentPage === "videos",
              [classes.title]: currentPage !== "videos",
            })}
            gutterBottom
            variant="h5"
          >
            {title}
          </Typography>

          {(currentPage === "games" || currentPage === "music") && (
            <>
              <Typography className={classes.tagline} gutterBottom variant="h6">
                {tagline}
              </Typography>
              <Chip
                label={genre}
                variant="outlined"
                className={classes.genre}
              />
            </>
          )}
        </div>
      </CardContent>
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
export default compose(withWidth(), withMediaCardProps)(MediaCard);
