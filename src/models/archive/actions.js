const Action = (type) => {
  const actionCreator = (payload) => ({
    type,
    payload,
  });
  actionCreator.type = type;
  return actionCreator;
};

export const loadInitialArchivedGames = Action("LOAD_INITIAL_ARCHIVED_GAMES");
export const loadMoreArchivedGames = Action("LOAD_MORE_ARCHIVED_GAMES");
export const loadInitialArchivedMusic = Action("LOAD_INITIAL_ARCHIVED_MUSIC");
export const loadMoreArchivedMusic = Action("LOAD_MORE_ARCHIVED_MUSIC");
export const loadInitialArchivedArt = Action("LOAD_INITIAL_ARCHIVED_ART");
export const loadMoreArchivedArt = Action("LOAD_MORE_ARCHIVED_ART");
