import {
  loadInitialGameVideos,
  loadMoreGameVideos,
  loadInitialMusicVideos,
  loadMoreMusicVideos,
  setVideosLoading,
  setVideosError,
} from "./actions";

const initialState = {
  gameVideosShown: [],
  gameVideosOnPage: null,
  gameVideosTotal: null,
  musicVideosShown: [],
  musicVideosOnPage: null,
  musicVideosTotal: null,
  allGameVideos: [],
  allMusicVideos: [],
  videosError: false,
  videosLoading: false,
};

const videosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loadInitialGameVideos.type: {
      return {
        ...state,
        allGameVideos: payload,
        gameVideosShown: payload.slice(0, 12),
        gameVideosOnPage: 12,
        gameVideosTotal: payload.length,
        videosError: false,
        videosLoading: false,
      };
    }
    case loadMoreGameVideos.type: {
      return {
        ...state,
        gameVideosShown: [
          ...state.gameVideosShown,
          ...state.allGameVideos.slice(
            state.gameVideosOnPage,
            state.gameVideosOnPage + 6
          ),
        ],
        gameVideosOnPage: state.allGameVideos.slice(
          0,
          state.gameVideosOnPage + 6
        ).length,
      };
    }
    case loadInitialMusicVideos.type: {
      return {
        ...state,
        allMusicVideos: payload,
        musicVideosShown: payload.slice(0, 12),
        musicVideosOnPage: 12,
        musicVideosTotal: payload.length,
        videosError: false,
        videosLoading: false,
      };
    }
    case loadMoreMusicVideos.type: {
      return {
        ...state,
        musicVideosShown: [
          ...state.musicVideosShown,
          ...state.allMusicVideos.slice(
            state.musicVideosOnPage,
            state.musicVideosOnPage + 6
          ),
        ],
        musicVideosOnPage: state.allMusicVideos.slice(
          0,
          state.musicVideosOnPage + 6
        ).length,
      };
    }
    case setVideosLoading.type: {
      return {
        ...state,
        videosError: false,
        videosLoading: true,
      };
    }
    case setVideosError.type: {
      return {
        ...state,
        videosError: true,
        videosLoading: false,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default videosReducer;
