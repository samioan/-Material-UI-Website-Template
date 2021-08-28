import React, { useEffect } from "react";
import { ArtItem } from "./components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Theme from "../theme";
import artDetails from "./util/artDetails";

const Art = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Art
      </Typography>

      <Grid className={classes.content} container justify="center">
        {artDetails.map((artItem) => (
          <Grid
            key={artItem.title}
            className={classes.content}
            item
            xs={12}
            lg={6}
            xl={4}
          >
            <ArtItem
              image={artItem.image}
              title={artItem.title}
              link={artItem.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Art };
export default Art;
