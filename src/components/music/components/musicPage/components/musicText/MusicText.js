import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import YouTube from "@u-wave/react-youtube";
import styles from "./styles";

const MusicText = ({ link }) => {
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
        {link.tagline}
      </Typography>

      <Grid className={classes.contentContainer} container justify="center">
        <div className={classes.content}>
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
        </div>

        <YouTube className={classes.video} video={link.video} />
      </Grid>
    </div>
  );
};

export { MusicText };
export default MusicText;
