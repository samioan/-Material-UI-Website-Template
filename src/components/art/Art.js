import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { ArtItem } from "./components";

import artDetails from "./util/artDetails";

import { Scrollbars } from "react-custom-scrollbars";

import Theme from "../theme";

const Art = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Scrollbars
      style={{ height: "100vh" }}
      autoHide
      autoHideTimeout={1000}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
      )}
    >
      <Container maxWidth="lg" className={classes.page}>
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
              md={6}
              lg={4}
            >
              <ArtItem
                image={artItem.image}
                title={artItem.title}
                link={artItem.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Scrollbars>
  );
};

export { Art };
export default Art;
