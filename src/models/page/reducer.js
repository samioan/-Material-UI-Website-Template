import { setCurrentPage } from "./actions";

const initialState = {
  currentPage: null,
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentPage.type: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default videosReducer;
