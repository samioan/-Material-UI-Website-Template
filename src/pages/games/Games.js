import React from "react";

import { GeneralPage } from "components";

import withGames from "./withGames";

const Games = ({
  gamesShown,
  gamesOnPage,
  gamesTotal,
  currentPage,
  loadMoreGames,
  gamesError,
  loadGames,
  gamesLoading,
}) => (
  <GeneralPage
    title="Games"
    itemsShown={gamesShown}
    itemsOnPage={gamesOnPage}
    itemsTotal={gamesTotal}
    currentPage={currentPage}
    loadMoreItems={loadMoreGames}
    error={gamesError}
    loadInitialItems={loadGames}
    loading={gamesLoading}
  />
);

export { Games };
export default withGames(Games);
