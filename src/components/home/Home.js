import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";

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

      <Typography className={classes.subtitle} variant="h5" align="center">
        Someone. Anyone.
      </Typography>

      <Carousel
        className={classes.carousel}
        autoPlay="true"
        infiniteLoop="true"
        showThumbs={false}
        interval={5000}
        showStatus={false}
      >
        {imageCarousel.map((item) => (
          <ProgressiveImage
            key={item.key}
            src={item.img}
            placeholder={placeholderGif}
          >
            {(src) => <img src={src} alt={item.name} />}
          </ProgressiveImage>
        ))}
      </Carousel>
    </Container>
  );
};

export { Home };
export default withScrollbars(Home);
