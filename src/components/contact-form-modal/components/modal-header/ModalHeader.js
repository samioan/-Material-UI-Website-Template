import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const ModalHeader = ({ classes, title, onClose }) => (
  <>
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.headerContainer}
    >
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <IconButton onClick={onClose} className={classes.iconButton}>
        <CloseIcon />
      </IconButton>
    </Grid>
    <Divider className={classes.divider} />
  </>
);

export { ModalHeader };
export default withStyles(styles)(ModalHeader);
