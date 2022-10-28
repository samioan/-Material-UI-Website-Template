import React, { useState } from "react";

import InfoIcon from "@material-ui/icons/Info";
import GetAppIcon from "@material-ui/icons/GetApp";
import StorefrontIcon from "@material-ui/icons/Storefront";

const withMediaCardProps = (Component) => (props) => {
  const { downloadLink, itchioLink, currentPage, pageLink } = props;

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
      link: downloadLink,
      icon: <GetAppIcon />,
      show: true,
      internal: false,
    },
    {
      title: "Itch.io Page",
      link: itchioLink,
      icon: <StorefrontIcon />,
      show: currentPage === "games",
      internal: false,
    },
    {
      title: "More Info",
      link: `/${currentPage}/${pageLink}`,
      icon: <InfoIcon />,
      show: true,
      internal: true,
    },
  ];

  const isCurrentPageGamesOrMusic =
    currentPage === "games" || currentPage === "music";
  const isCurrentPageArt = currentPage === "art";
  const isCurrentPageVideos = currentPage === "videos";

  const newProps = {
    ...props,
    open,
    handleOpen,
    handleClose,
    overlayButtons,
    isCurrentPageGamesOrMusic,
    isCurrentPageArt,
    isCurrentPageVideos,
  };

  return <Component {...newProps} />;
};

export { withMediaCardProps };
export default withMediaCardProps;
