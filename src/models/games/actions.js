const Action = (type) => {
  const actionCreator = (payload) => ({
    type,
    payload,
  });
  actionCreator.type = type;
  return actionCreator;
};

export const loadInitialGames = Action("LOAD_INITIAL_GAMES");
export const loadMoreGames = Action("LOAD_MORE_GAMES");
export const loadGamePageItems = Action("LOAD_GAME_PAGE_ITEMS");
export const setGamesError = Action("SET_GAMES_ERROR");
export const setGamesLoading = Action("SET_GAMES_LOADING");
export const setGamePageLoading = Action("SET_GAME_PAGE_LOADING");
export const setGamePageError = Action("SET_GAME_PAGE_ERROR");
