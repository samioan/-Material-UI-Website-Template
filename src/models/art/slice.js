import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artShown: [],
  artOnPage: null,
  artTotal: null,
};

const reducers = {
  loadInitialArt: (state, { payload }) => {
    state.artShown = payload.slice(0, 12);
    state.artOnPage = 12;
    state.artTotal = payload.length;
  },
  loadMoreArt: (state, { payload }) => {
    state.artShown = [
      ...state.artShown,
      ...payload.slice(state.artOnPage, state.artOnPage + 6),
    ];
    state.artOnPage = payload.slice(0, state.artOnPage + 6).length;
  },
};

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers,
});
