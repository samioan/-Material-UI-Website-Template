import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MusicItem } from "./components";
import albumDetails from "./util/albumDetails";

const useStyles = makeStyles({
  root: {
    color: "#fff",
  },
});

export default function Music() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Box mt={10}>
        <Typography
          className={classes.root}
          variant="h1"
          align="center"
          color="#fff"
          component="h1"
        >
          Music
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        p={1}
        m={1}
      >
        {albumDetails.map((musicItem) => (
          <Box key={musicItem.title} p={1} m={1}>
            <MusicItem
              image={musicItem.image}
              title={musicItem.title}
              tagline={musicItem.tagline}
              genre={musicItem.genre}
              description={musicItem.description.map((item) => (
                <div key={item}>{item}</div>
              ))}
              linkPrimary={musicItem.linkPrimary}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
}
