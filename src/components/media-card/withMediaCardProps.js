import React, { useState } from "react";

import InfoIcon from "@material-ui/icons/Info";
import GetAppIcon from "@material-ui/icons/GetApp";
import StorefrontIcon from "@material-ui/icons/Storefront";

import styles from "./styles";

const withMediaCardProps = (Component) => (props) => {
  const { downloadLink, itchioLink, currentPage, pageLink } = props;

  const classes = styles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const overlayButtons = [
    {
      title: "Download",
      link: {
        pathname: downloadLink,
      },
      target: "_blank",
      icon: <GetAppIcon />,
      show: true,
    },
    {
      title: "Itch.io Page",
      link: {
        pathname: itchioLink,
      },
      target: "_blank",
      icon: <StorefrontIcon />,
      show: currentPage === "games",
    },
    {
      title: "More Info",
      link: `/${currentPage}/${pageLink}`,
      target: "",
      icon: <InfoIcon />,
      show: true,
    },
  ];

  const newProps = {
    ...props,
    classes,
    open,
    handleOpen,
    handleClose,
    overlayButtons,
  };

  return <Component {...newProps} />;
};

export { withMediaCardProps };
export default withMediaCardProps;
