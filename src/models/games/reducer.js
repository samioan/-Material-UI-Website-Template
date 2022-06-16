import { loadInitialGames, loadMoreGames, loadGamePageItems } from "./actions";

const initialState = {
  gamesShown: [],
  gamesOnPage: null,
  gamesTotal: null,
  gamePageItems: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadInitialGames.type: {
      return {
        ...state,
        gamesShown: action.payload.slice(0, 12),
        gamesOnPage: 12,
        gamesTotal: action.payload.length,
      };
    }
    case loadMoreGames.type: {
      return {
        ...state,
        gamesShown: [
          ...state.gamesShown,
          ...action.payload.slice(state.gamesOnPage, state.gamesOnPage + 6),
        ],
        gamesOnPage: action.payload.slice(0, state.gamesOnPage + 6).length,
      };
    }
    case loadGamePageItems.type: {
      return {
        ...state,
        gamePageItems: action.payload,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default gamesReducer;
