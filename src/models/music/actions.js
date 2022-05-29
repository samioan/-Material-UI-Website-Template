const Action = (type) => {
  const actionCreator = (payload) => ({
    type,
    payload,
  });
  actionCreator.type = type;
  return actionCreator;
};

export const loadInitialAlbums = Action("LOAD_INITIAL_ALBUMS");
export const loadMoreAlbums = Action("LOAD_MORE_ALBUMS");
export const loadMusicPageItems = Action("LOAD_MUSIC_PAGE_ITEMS");
