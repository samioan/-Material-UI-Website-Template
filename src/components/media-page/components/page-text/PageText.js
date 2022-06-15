import React from "react";
import Grid from "@material-ui/core/Grid";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import styles from "./styles";

const PageText = ({ pageItem, type }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link
          to={{
            pathname: "/",
          }}
          className={classes.link}
        >
          Selfish Dream
        </Link>
        <Link
          to={{
            pathname: `/${type}`,
          }}
          className={classes.link}
        >
          {`${type?.charAt(0).toUpperCase()}${type?.slice(1)}`}
        </Link>
        <Typography className={classes.link}>{pageItem?.title}</Typography>
      </Breadcrumbs>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        align="center"
      >
        {pageItem?.title}
      </Typography>

      <Typography
        className={classes.tagline}
        gutterBottom
        variant="h6"
        align="center"
      >
        {pageItem?.subtitle}
      </Typography>

      <Grid
        className={classes.contentContainer}
        container
        justify="space-between"
      >
        <Grid item xs={12} sm={5} className={classes.textContainer}>
          {pageItem?.description?.map((item) => (
            <Typography
              className={classes.description}
              variant="body2"
              gutterBottom
              key={item}
            >
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={5}>
          {pageItem?.video && (
            <YouTube className={classes.video} video={pageItem?.video} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export { PageText };
export default PageText;
