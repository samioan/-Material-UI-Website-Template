import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import linkDetails from "./constants/linkDetails";

import styles from "./styles";

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.container}>
      {linkDetails.map(({ label, site, image }) => (
        <Tooltip key={label} arrow title={label}>
          <IconButton href={site} target="_blank">
            <img src={image} alt={label} className={classes.icon}></img>
          </IconButton>
        </Tooltip>
      ))}
    </footer>
  );
};

export { Footer };
export default Footer;
