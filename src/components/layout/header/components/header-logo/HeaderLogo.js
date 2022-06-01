import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const HeaderLogo = ({ headerButtons }) => {
  const classes = styles();

  return (
    <Link
      {...{
        component: RouterLink,
        to: headerButtons[0].href,
        color: "inherit",
        style: { textDecoration: "none" },
      }}
    >
      <Typography variant="h6" component="h1" className={classes.logo}>
        SD
      </Typography>
    </Link>
  );
};

export { HeaderLogo };
export default HeaderLogo;
