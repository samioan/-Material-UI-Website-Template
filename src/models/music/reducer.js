import {
  loadInitialAlbums,
  loadMoreAlbums,
  loadMusicPageItems,
  setMusicLoading,
  setMusicError,
  setMusicPageLoading,
  setMusicPageError,
} from "./actions";

const initialState = {
  allAlbums: [],
  albumsShown: [],
  albumsOnPage: null,
  albumsTotal: null,
  musicPageItems: [],
  musicError: false,
  musicLoading: false,
  musicPageError: false,
  musicPageLoading: false,
};

const musicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loadInitialAlbums.type: {
      return {
        ...state,
        allAlbums: payload,
        albumsShown: payload.slice(0, 12),
        albumsOnPage: 12,
        albumsTotal: payload.length,
        musicError: false,
        musicLoading: false,
      };
    }
    case loadMoreAlbums.type: {
      return {
        ...state,
        albumsShown: [
          ...state.albumsShown,
          ...state.allAlbums.slice(state.albumsOnPage, state.albumsOnPage + 6),
        ],
        albumsOnPage: state.allAlbums.slice(0, state.albumsOnPage + 6).length,
      };
    }
    case loadMusicPageItems.type: {
      return {
        ...state,
        musicPageItems: payload,
        musicPageError: false,
        musicPageLoading: false,
      };
    }
    case setMusicLoading.type: {
      return {
        ...state,
        musicError: false,
        musicLoading: true,
      };
    }
    case setMusicError.type: {
      return {
        ...state,
        musicError: true,
        musicLoading: false,
      };
    }
    case setMusicPageLoading.type: {
      return {
        ...state,
        musicPageError: false,
        musicPageLoading: true,
      };
    }
    case setMusicPageError.type: {
      return {
        ...state,
        musicPageError: true,
        musicPageLoading: false,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default musicReducer;
