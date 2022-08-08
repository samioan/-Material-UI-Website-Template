import {
  loadInitialGames,
  loadMoreGames,
  loadGamePageItems,
  setGamesError,
  setGamesLoading,
  setGamePageLoading,
  setGamePageError,
} from "./actions";

const initialState = {
  gamesShown: [],
  gamesOnPage: null,
  gamesTotal: null,
  gamePageItems: [],
  allGames: [],
  gamesError: false,
  gamesLoading: false,
  gamePageError: false,
  gamePageLoading: false,
};

const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loadInitialGames.type: {
      return {
        ...state,
        allGames: payload,
        gamesShown: payload.slice(0, 12),
        gamesOnPage: 12,
        gamesTotal: payload.length,
        gamesError: false,
        gamesLoading: false,
      };
    }
    case loadMoreGames.type: {
      return {
        ...state,
        gamesShown: [
          ...state.gamesShown,
          ...state.allGames.slice(state.gamesOnPage, state.gamesOnPage + 6),
        ],
        gamesOnPage: state.allGames.slice(0, state.gamesOnPage + 6).length,
      };
    }
    case loadGamePageItems.type: {
      return {
        ...state,
        gamePageItems: payload,
        gamePageError: false,
        gamePageLoading: false,
      };
    }
    case setGamesLoading.type: {
      return {
        ...state,
        gamesError: false,
        gamesLoading: true,
      };
    }
    case setGamesError.type: {
      return {
        ...state,
        gamesError: true,
        gamesLoading: false,
      };
    }
    case setGamePageLoading.type: {
      return {
        ...state,
        gamePageError: false,
        gamePageLoading: true,
      };
    }
    case setGamePageError.type: {
      return {
        ...state,
        gamePageError: true,
        gamePageLoading: false,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default gamesReducer;
