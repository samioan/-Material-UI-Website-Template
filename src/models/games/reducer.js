import { loadInitialGames, loadMoreGames, loadGamePageItems } from "./actions";

const initialState = {
  gamesShown: [],
  gamesOnPage: null,
  gamesTotal: null,
  gamePageItems: [],
  allGames: [],
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
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default gamesReducer;
