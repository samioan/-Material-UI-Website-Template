import React from "react";

import { Link } from "react-router-dom";

import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import { CardButton } from "./components";
import styles from "./styles";

const OverlayButtons = ({ width, pageLink, currentPage, overlayButtons }) => {
  const classes = styles();

  return (
    <div className={classes.overlay}>
      {isWidthUp("md", width) && (
        <>
          {overlayButtons
            .filter(({ show }) => show)
            .map(({ title, link, target, icon }) => (
              <CardButton
                key={title}
                title={title}
                link={link}
                target={target}
                icon={icon}
              />
            ))}
        </>
      )}

      {!isWidthUp("md", width) && (
        <Link
          to={{
            pathname: `/${currentPage}/${pageLink}`,
          }}
          className={classes.fullLink}
        />
      )}
    </div>
  );
};

export { OverlayButtons };
export default withWidth()(OverlayButtons);
