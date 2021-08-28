import React from "react";
import Box from "@material-ui/core/Box";
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
        {link.tagline}
      </Typography>

      <Box
        pt={1}
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
      >
        <Box p={1} className={classes.content}>
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
        </Box>
        <Box p={1}>
          <YouTube className={classes.video} video={link.video} />
        </Box>
      </Box>
    </div>
  );
};

export { GameText };
export default GameText;
