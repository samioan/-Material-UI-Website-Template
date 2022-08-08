import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { LoadingImage } from "components";

import styles from "./styles";
import withHome from "./withHome";

const Home = ({ imagesCarousel }) => {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        Selfish Dream
      </Typography>
      <Grid container justify="space-between" className={classes.content}>
        {imagesCarousel?.map((section, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Carousel
              className={classes.carousel}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              autoFocus={false}
              autoPlay={false}
              swipeable={false}
              infiniteLoop
            >
              {section?.map((item, index) => (
                <Link key={item?.name || index} to={item?.link}>
                  <div>
                    <LoadingImage
                      image={item?.img}
                      customLoaderClass={classes.loading}
                      alt={item?.name}
                    />
                  </div>
                </Link>
              ))}
            </Carousel>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Home };
export default withHome(Home);
