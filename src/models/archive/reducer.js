import {
  loadInitialArchivedGames,
  loadMoreArchivedGames,
  loadInitialArchivedMusic,
  loadMoreArchivedMusic,
  loadInitialArchivedArt,
  loadMoreArchivedArt,
} from "./actions";

const initialState = {
  archivedGamesShown: [],
  archivedGamesOnPage: null,
  archivedGamesTotal: null,
  archivedMusicShown: [],
  archivedMusicOnPage: null,
  archivedMusicTotal: null,
  archivedArtShown: [],
  archivedArtOnPage: null,
  archivedArtTotal: null,
};

const archiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadInitialArchivedGames.type: {
      return {
        ...state,
        archivedGamesShown: action.payload.slice(0, 12),
        archivedGamesOnPage: action.payload.slice(0, 12).length,
        archivedGamesTotal: action.payload.length,
      };
    }
    case loadMoreArchivedGames.type: {
      return {
        ...state,
        archivedGamesShown: [
          ...state.archivedGamesShown,
          ...action.payload.slice(
            state.archivedGamesOnPage,
            state.archivedGamesOnPage + 6
          ),
        ],
        archivedGamesOnPage: action.payload.slice(
          0,
          state.archivedGamesOnPage + 6
        ).length,
      };
    }
    case loadInitialArchivedMusic.type: {
      return {
        ...state,
        archivedMusicShown: action.payload.slice(0, 12),
        archivedMusicOnPage: action.payload.slice(0, 12).length,
        archivedMusicTotal: action.payload.length,
      };
    }
    case loadMoreArchivedMusic.type: {
      return {
        ...state,
        archivedMusicShown: [
          ...state.archivedMusicShown,
          ...action.payload.slice(
            state.archivedMusicOnPage,
            state.archivedMusicOnPage + 6
          ),
        ],
        archivedMusicOnPage: action.payload.slice(
          0,
          state.archivedMusicOnPage + 6
        ).length,
      };
    }
    case loadInitialArchivedArt.type: {
      return {
        ...state,
        archivedArtShown: action.payload.slice(0, 12),
        archivedArtOnPage: action.payload.slice(0, 12).length,
        archivedArtTotal: action.payload.length,
      };
    }
    case loadMoreArchivedArt.type: {
      return {
        ...state,
        archivedArtShown: [
          ...state.archivedArtShown,
          ...action.payload.slice(
            state.archivedArtOnPage,
            state.archivedArtOnPage + 6
          ),
        ],
        archivedArtOnPage: action.payload.slice(0, state.archivedArtOnPage + 6)
          .length,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default archiveReducer;
