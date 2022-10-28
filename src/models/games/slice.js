import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gamesShown: [],
  gamesOnPage: null,
  gamesTotal: null,
  gamePageItems: [],
  allGames: [],
};

const reducers = {
  loadInitialGames: (state, { payload }) => {
    state.allGames = payload;
    state.gamesShown = payload.slice(0, 12);
    state.gamesOnPage = 12;
    state.gamesTotal = payload.length;
  },
  loadMoreGames: (state) => {
    state.gamesShown = [
      ...state.gamesShown,
      ...state.allGames.slice(state.gamesOnPage, state.gamesOnPage + 6),
    ];
    state.gamesOnPage = state.allGames.slice(0, state.gamesOnPage + 6).length;
  },
  loadGamePageItems: (state, { payload }) => {
    state.gamePageItems = payload;
  },
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers,
});
