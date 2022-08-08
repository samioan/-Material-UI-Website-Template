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
export const setMusicLoading = Action("SET_MUSIC_LOADING");
export const setMusicError = Action("SET_MUSIC_ERROR");
export const setMusicPageLoading = Action("SET_MUSIC_PAGE_LOADING");
export const setMusicPageError = Action("SET_MUSIC_PAGE_ERROR");
