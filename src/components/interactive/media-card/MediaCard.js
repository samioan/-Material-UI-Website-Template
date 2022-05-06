import React from "react";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link, useRouteMatch } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import styles from "./styles";

const MediaCard = ({
  image,
  title,
  tagline,
  genre,
  pageLink,
  downloadLink,
  itchioLink,
  width,
}) => {
  const classes = styles();
  let match = useRouteMatch();

  // const getGridListCols = () => {
  //   if (isWidthUp("md", width)) {
  //     return 6;
  //   }

  //   return 12;
  // };

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
                  <GetAppIcon />
                </IconButton>
              </Tooltip>
              {match.url === "/games" && (
                <Tooltip title="Itch.io Page" arrow placement="top">
                  <IconButton
                    className={classes.iconButton}
                    href={itchioLink}
                    target="_blank"
                  >
                    <LinkIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="More Info" arrow placement="top">
                <IconButton
                  className={classes.iconButton}
                  href={`${match.url}/${pageLink}`}
                >
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <Link
              to={{
                pathname: `${match.url}/${pageLink}`,
              }}
              style={{ textDecoration: "none", width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
      <Link
        to={{
          pathname: `${match.url}/${pageLink}`,
        }}
        style={{ textDecoration: "none" }}
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

MediaCard.defaultProps = {
  image: "",
  title: null,
  tagline: null,
  genre: null,
  pageLink: null,
  downloadLink: null,
  itchioLink: null,
};

export { MediaCard };
export default withWidth()(MediaCard);
