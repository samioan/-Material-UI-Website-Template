import React, { useEffect } from "react";
import { ArtItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Theme from "../theme";
import artDetails from "./util/artDetails";

const Art = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box className={classes.page}>
        <Box pt={10}>
          <Typography className={classes.title} variant="h2" align="center">
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
