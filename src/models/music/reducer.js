import {
  loadInitialAlbums,
  loadMoreAlbums,
  loadMusicPageItems,
} from "./actions";

const initialState = {
  allAlbums: [],
  albumsShown: [],
  albumsOnPage: null,
  albumsTotal: null,
  musicPageItems: [],
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
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default musicReducer;
