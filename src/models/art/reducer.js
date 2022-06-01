import { loadInitialArt, loadMoreArt } from "./actions";

const initialState = {
  artShown: [],
  artOnPage: null,
  artTotal: null,
};

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadInitialArt.type: {
      return {
        ...state,
        artShown: action.payload.slice(0, 12),
        artOnPage: action.payload.slice(0, 12).length,
        artTotal: action.payload.length,
      };
    }
    case loadMoreArt.type: {
      return {
        ...state,
        artShown: [
          ...state.artShown,
          ...action.payload.slice(state.artOnPage, state.artOnPage + 6),
        ],
        artOnPage: action.payload.slice(0, state.artOnPage + 6).length,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default artReducer;
