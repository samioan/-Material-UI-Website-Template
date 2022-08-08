const gamesShown = (state) => state.games.gamesShown;
const gamesOnPage = (state) => state.games.gamesOnPage;
const gamesTotal = (state) => state.games.gamesTotal;
const gamePageItems = (state) => state.games.gamePageItems;
const allGames = (state) => state.games.allGames;
const gamesError = (state) => state.games.gamesError;
const gamesLoading = (state) => state.games.gamesLoading;
const gamePageError = (state) => state.games.gamePageError;
const gamePageLoading = (state) => state.games.gamePageLoading;

export {
  gamesShown,
  gamesOnPage,
  gamesTotal,
  gamePageItems,
  allGames,
  gamesError,
  gamesLoading,
  gamePageError,
  gamePageLoading,
};
