import React, { useEffect } from "react";
import { ArtItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import artDetails from "./util/artDetails";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#000",
    maxWidth: 800,
    minWidth: "60%",
    margin: "auto",
    minHeight: "100vh",
  },
  title: {
    color: "#fff",
  },
});

const Art = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box className={classes.page}>
        <Box pt={10}>
          <Typography
            className={classes.title}
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
          p={2}
        >
          {artDetails.map((artItem) => (
            <Box key={artItem.title} p={2}>
              <ArtItem
                image={artItem.image}
                title={artItem.title}
                link={artItem.link}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export { Art };
export default Art;
