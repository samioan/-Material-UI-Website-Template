import Grid from "@material-ui/core/Grid";
import React, { useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { GameItem } from "./components";

import styles from "components/theme/styles";
import Footer from "components/layout/footer";
import gameData from "components/data/gameData";
import withScrollbars from "components/theme/withScrollbars";
// import ScrollToTopButton from "components/input/scroll-to-top-button";

const Games = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef();

  return (
    <>
      <Container maxWidth="lg" className={classes.page} ref={ref}>
        <Typography className={classes.title} variant="h3" align="center">
          Games
        </Typography>
        <Grid className={classes.content} container justify="center">
          {Object.values(gameData).map((gameItem) => (
            <Grid
              key={gameItem.title}
              className={classes.content}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <GameItem
                image={gameItem.splashImage}
                title={gameItem.title}
                tagline={gameItem.subtitle}
                genre={gameItem.genre}
                pageLink={gameItem.links[2]}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <ScrollToTopButton
        onClick={() =>
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
        }
      /> */}
      <Footer />
    </>
  );
};

export { Games };
export default withScrollbars(Games);
