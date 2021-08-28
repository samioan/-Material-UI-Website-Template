import React, { useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressiveImage from "react-progressive-graceful-image";

import linkDetails from "./constants/linkDetails";
import imageCarousel from "./constants/imageCarousel";

import placeholderGif from "./images";

import styles from "./styles";

const Home = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
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

      <Grid container justify="center">
        {linkDetails.map((item) => (
          <Button
            key={item.title}
            className={classes.button}
            href={item.site}
            target="_blank"
            variant="outlined"
            size="large"
            color="primary"
          >
            {item.title}
          </Button>
        ))}
      </Grid>
    </div>
  );
};

export { Home };
export default Home;
