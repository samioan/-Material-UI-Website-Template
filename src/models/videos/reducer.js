import {
  loadInitialGameVideos,
  loadMoreGameVideos,
  loadInitialMusicVideos,
  loadMoreMusicVideos,
} from "./actions";

const initialState = {
  gameVideosShown: [],
  gameVideosOnPage: null,
  gameVideosTotal: null,
  musicVideosShown: [],
  musicVideosOnPage: null,
  musicVideosTotal: null,
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadInitialGameVideos.type: {
      return {
        ...state,
        gameVideosShown: action.payload.slice(0, 12),
        gameVideosOnPage: 12,
        gameVideosTotal: action.payload.length,
      };
    }
    case loadMoreGameVideos.type: {
      return {
        ...state,
        gameVideosShown: [
          ...state.gameVideosShown,
          ...action.payload.slice(
            state.gameVideosOnPage,
            state.gameVideosOnPage + 6
          ),
        ],
        gameVideosOnPage: action.payload.slice(0, state.gameVideosOnPage + 6)
          .length,
      };
    }
    case loadInitialMusicVideos.type: {
      return {
        ...state,
        musicVideosShown: action.payload.slice(0, 12),
        musicVideosOnPage: 12,
        musicVideosTotal: action.payload.length,
      };
    }
    case loadMoreMusicVideos.type: {
      return {
        ...state,
        musicVideosShown: [
          ...state.musicVideosShown,
          ...action.payload.slice(
            state.musicVideosOnPage,
            state.musicVideosOnPage + 6
          ),
        ],
        musicVideosOnPage: action.payload.slice(0, state.musicVideosOnPage + 6)
          .length,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default videosReducer;
