import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressiveImage from "react-progressive-graceful-image";

import imageCarousel from "./constants/imageCarousel";

import placeholderGif from "./images";

import withScrollbars from "../theme/withScrollbars";

import styles from "./styles";

const Home = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Selfish Dream
      </Typography>
      <Grid container justify="space-between" className={classes.content}>
        {imageCarousel.map((section) => (
          <Grid key={imageCarousel.indexOf(section)} item xs={12} md={4}>
            <Carousel
              className={classes.carousel}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              autoFocus={false}
              autoPlay={false}
            >
              {section.map((item) => (
                <a
                  key={item.key}
                  href={item.link && `${item.name.split("-")[0]}/${item.link}`}
                >
                  <p>
                    <ProgressiveImage
                      src={item.img}
                      placeholder={placeholderGif}
                    >
                      {(src) => <img src={src} alt={item.name} />}
                    </ProgressiveImage>
                  </p>
                </a>
              ))}
            </Carousel>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Home };
export default withScrollbars(Home);
