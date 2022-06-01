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
