import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import withScrollbars from "theme/withScrollbars";
import { Footer, LoadingImage, ScrollToTopButton } from "components";

import styles from "./styles";
import imageCarousel from "./constants/imageCarousel";

const Home = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
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
                swipeable={false}
                infiniteLoop
              >
                {section.map((item) => (
                  <a
                    key={item.key}
                    href={
                      item.link && `${item.name.split("-")[0]}/${item.link}`
                    }
                  >
                    <div>
                      <LoadingImage
                        image={item.img}
                        customLoaderClass={classes.loading}
                        alt={item.name}
                      />
                    </div>
                  </a>
                ))}
              </Carousel>
            </Grid>
          ))}
        </Grid>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Home };
export default withScrollbars(Home);
