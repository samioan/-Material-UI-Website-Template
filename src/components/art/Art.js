import React from "react";
import { ArtItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import artDetails from "./util/artDetails";

const useStyles = makeStyles({
  root: {
    color: "#fff",
  },
});

export default function Art() {
  const classes = useStyles();

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
          Art
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        m={2}
      >
        {artDetails
          .filter((artItem) => artItem.visible)
          .map((artItem) => (
            <Box p={2} minWidth="30%">
              <ArtItem
                image={artItem.image}
                title={artItem.title}
                tagline={artItem.tagline}
                linkPrimary={artItem.linkPrimary}
              />
            </Box>
          ))}
      </Box>
    </div>
  );
}
