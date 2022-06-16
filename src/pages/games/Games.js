import React from "react";

import { GeneralPage } from "components";

import withGamesProps from "./withGamesProps";

const Games = ({
  onLoadMoreGames,
  gamesShown,
  gamesOnPage,
  gamesTotal,
  currentPage,
}) => (
  <GeneralPage
    title="Games"
    itemsShown={gamesShown}
    itemsOnPage={gamesOnPage}
    itemsTotal={gamesTotal}
    loadMoreItems={onLoadMoreGames}
    currentPage={currentPage}
  />
);

export { Games };
export default withGamesProps(Games);
