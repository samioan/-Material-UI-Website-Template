import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import linkDetails from "./constants/linkDetails";

import styles from "./styles";

const Footer = () => {
  const classes = styles();
  return (
    <Grid container justify="center" className={classes.footerContainer}>
      {linkDetails.map((item) => (
        <IconButton key={item.label} href={item.site} target="_blank">
          <img src={item.image} alt={item.label} className={classes.icon}></img>
        </IconButton>
      ))}
    </Grid>
  );
};

export { Footer };
export default Footer;
