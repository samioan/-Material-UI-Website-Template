import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressiveImage from "react-progressive-graceful-image";

import styles from "./styles";
import imageCarousel from "./constants/imageCarousel";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import ScrollToTopButton from "components/input/scroll-to-top-button";

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
                      <ProgressiveImage src={item.img} placeholder="">
                        {(src, loading) => {
                          return loading ? (
                            <div className={classes.loading}>
                              <CircularProgress />
                            </div>
                          ) : (
                            <img src={src} alt={item.name} />
                          );
                        }}
                      </ProgressiveImage>
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
