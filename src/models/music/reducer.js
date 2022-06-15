import {
  loadInitialAlbums,
  loadMoreAlbums,
  loadMusicPageItems,
} from "./actions";

const initialState = {
  albumsShown: [],
  albumsOnPage: null,
  albumsTotal: null,
  musicPageItems: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadInitialAlbums.type: {
      return {
        ...state,
        albumsShown: action.payload.slice(0, 12),
        albumsOnPage: 12,
        albumsTotal: action.payload.length,
      };
    }
    case loadMoreAlbums.type: {
      return {
        ...state,
        albumsShown: [
          ...state.albumsShown,
          ...action.payload.slice(state.albumsOnPage, state.albumsOnPage + 6),
        ],
        albumsOnPage: action.payload.slice(0, state.albumsOnPage + 6).length,
      };
    }
    case loadMusicPageItems.type: {
      return {
        ...state,
        musicPageItems: action.payload,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default musicReducer;
