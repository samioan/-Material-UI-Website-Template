import React from "react";
import IconButton from "@material-ui/core/IconButton";

import linkDetails from "./constants/linkDetails";

import styles from "./styles";

const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.footerContainer}>
      {linkDetails.map((item) => (
        <IconButton key={item.label} href={item.site} target="_blank">
          <img src={item.image} alt={item.label} className={classes.icon}></img>
        </IconButton>
      ))}
    </div>
  );
};

export { Footer };
export default Footer;
