import React from "react";
import Card from "@material-ui/core/Card";
import Modal from "@material-ui/core/Modal";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import withArtViewProps from "./withArtViewProps";

const ArtView = ({ image, title, classes, open, handleOpen, handleClose }) => (
  <div>
    <Card className={classes.card} onClick={handleOpen}>
      <div className={classes.mediaContainer}>
        <CardMedia className={classes.media} image={image} title={title} />
      </div>
      <CardContent className={classes.cardContent}>
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
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <div className={classes.paper} onClick={handleClose}>
        <img src={image} alt={title} />
      </div>
    </Modal>
  </div>
);

export { ArtView };
export default withArtViewProps(ArtView);
