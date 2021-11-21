import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { MusicItem } from "./components";

import albumDetails from "./constants/albumDetails";

import { Scrollbars } from "react-custom-scrollbars";

import Theme from "../theme";

const Music = () => {
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
          Music
        </Typography>

        <Grid className={classes.content} container justify="center">
          {albumDetails.map((musicItem) => (
            <Grid
              key={musicItem.title}
              className={classes.content}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <MusicItem
                image={musicItem.image}
                title={musicItem.title}
                tagline={musicItem.tagline}
                genre={musicItem.genre}
                pageLink={musicItem.pageLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Scrollbars>
  );
};

export { Music };
export default Music;
