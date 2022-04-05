import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import YouTube from "@u-wave/react-youtube";
import styles from "./styles";

const GameText = ({ link }) => {
  const classes = styles();

  return (
    <div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        align="center"
      >
        {link.title}
      </Typography>

      <Typography
        className={classes.tagline}
        gutterBottom
        variant="h6"
        align="center"
      >
        {link.subtitle}
      </Typography>

      <Grid
        className={classes.contentContainer}
        container
        justify="space-between"
      >
        <Grid item xs={12} sm={5} className={classes.textContainer}>
          {link.description.map((item) => (
            <Typography
              className={classes.description}
              variant="body2"
              gutterBottom
              key={item}
            >
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={5}>
          {link.video && (
            <YouTube className={classes.video} video={link.video} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export { GameText };
export default GameText;
