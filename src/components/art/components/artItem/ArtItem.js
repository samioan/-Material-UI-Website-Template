import React from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const ArtItem = ({ image, title, link }) => {
  const classes = styles();

  return (
    <Link
      to={{
        pathname: link,
      }}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export { ArtItem };
export default ArtItem;
