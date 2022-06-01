import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import StorefrontIcon from "@material-ui/icons/Storefront";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import styles from "./styles";

const GameView = ({
  image,
  title,
  tagline,
  genre,
  pageLink,
  downloadLink,
  itchioLink,
  currentPage,
  width,
}) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <div className={classes.mediaContainer}>
        <CardMedia className={classes.media} image={image} />
        <div className={classes.overlay}>
          {isWidthUp("md", width) ? (
            <>
              <Tooltip title="Download" arrow placement="top">
                <IconButton
                  className={classes.iconButton}
                  href={downloadLink}
                  target="_blank"
                >
                  <GetAppIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Itch.io Page" arrow placement="top">
                <IconButton
                  className={classes.iconButton}
                  href={itchioLink}
                  target="_blank"
                >
                  <StorefrontIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="More Info" arrow placement="top">
                <IconButton
                  component={Link}
                  to={`/${currentPage}/${pageLink}`}
                  className={classes.iconButton}
                >
                  <InfoIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <Link
              to={{
                pathname: `/${currentPage}/${pageLink}`,
              }}
              className={classes.fullLink}
            />
          )}
        </div>
      </div>
      <Link
        to={{
          pathname: `/${currentPage}/${pageLink}`,
        }}
        className={classes.link}
      >
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography className={classes.tagline} gutterBottom variant="h6">
            {tagline}
          </Typography>
          <Chip label={genre} variant="outlined" className={classes.genre} />
        </CardContent>
      </Link>
    </Card>
  );
};

GameView.defaultProps = {
  image: "",
  title: null,
  tagline: null,
  genre: null,
  pageLink: null,
  downloadLink: null,
  itchioLink: null,
};

export { GameView };
export default withWidth()(GameView);
