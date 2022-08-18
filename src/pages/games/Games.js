import React, { useCallback } from "react";

import { GeneralPage } from "components";

import withGames from "./withGames";

const Games = ({
  gamesShown,
  gamesOnPage,
  gamesTotal,
  currentPage,
  loadMoreGames,
  isLoading,
  hasError,
  fetchData,
  loadInitialGames,
}) => (
  <GeneralPage
    title="Games"
    itemsShown={gamesShown}
    itemsOnPage={gamesOnPage}
    itemsTotal={gamesTotal}
    currentPage={currentPage}
    loadMoreItems={loadMoreGames}
    error={hasError}
    loading={isLoading}
    loadInitialItems={useCallback(
      () => fetchData("games", (data) => loadInitialGames(data)),
      [fetchData, loadInitialGames]
    )}
  />
);

export { Games };
export default withGames(Games);
