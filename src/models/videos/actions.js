const Action = (type) => {
  const actionCreator = (payload) => ({
    type,
    payload,
  });
  actionCreator.type = type;
  return actionCreator;
};

export const loadInitialGameVideos = Action("LOAD_INITIAL_GAME_VIDEOS");
export const loadInitialMusicVideos = Action("LOAD_INITIAL_MUSIC_VIDEOS");
export const loadMoreGameVideos = Action("LOAD_MORE_GAME_VIDEOS");
export const loadMoreMusicVideos = Action("LOAD_MORE_MUSIC_VIDEOS");
