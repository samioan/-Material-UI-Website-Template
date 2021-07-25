import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import linkDetails from "./constants/linkDetails";
import Button from "@material-ui/core/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageCarousel from "./constants/imageCarousel";
import ProgressiveImage from "react-progressive-graceful-image";

import placeholderGif from "./images";

const Home = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <Box pt={10} pb={5}>
        <Typography className={classes.title} variant="h2" align="center">
          Selfish Dream
        </Typography>
      </Box>
      <Box pb={5}>
        <Typography className={classes.title} variant="h5" align="center">
          Someone. Anyone.
        </Typography>
      </Box>
      <Grid className={classes.gridList}>
        <Carousel
          className={classes.carousel}
          autoPlay="true"
          infiniteLoop="true"
          showThumbs={false}
          interval={5000}
          showStatus={false}
        >
          {imageCarousel.map((item) => (
            <div key={item.name}>
              <ProgressiveImage src={item.img} placeholder={placeholderGif}>
                {(src) => <img src={src} alt={item.name} />}
              </ProgressiveImage>
            </div>
          ))}
        </Carousel>
      </Grid>
      <Grid className={classes.gridList}>
        {linkDetails.map((item) => (
          <Box key={item.title} p={1}>
            <Button
              className={classes.button}
              href={item.site}
              target="_blank"
              variant="outlined"
              size="large"
              color="primary"
            >
              {item.title}
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export { Home };
export default Home;
