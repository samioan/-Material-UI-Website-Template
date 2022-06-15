import React from "react";

import GeneralPage from "components/layout/general-page";

import withArtProps from "./withArtProps";
import artDetails from "./util/artDetails";

const Art = ({ currentPage }) => (
  <GeneralPage title="Art" itemsShown={artDetails} currentPage={currentPage} />
);

export { Art };
export default withArtProps(Art);
