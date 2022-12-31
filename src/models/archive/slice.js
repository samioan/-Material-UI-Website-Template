import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  archivedGamesShown: [],
  archivedGamesOnPage: null,
  archivedGamesTotal: null,
};

const reducers = {
  loadInitialArchivedGames: (state, { payload }) => {
    state.archivedGamesShown = payload.slice(0, 12);
    state.archivedGamesOnPage = payload.slice(0, 12).length;
    state.archivedGamesTotal = payload.length;
  },
  loadMoreArchivedGames: (state, { payload }) => {
    state.archivedGamesShown = [
      ...state.archivedGamesShown,
      ...payload.slice(
        state.archivedGamesOnPage,
        state.archivedGamesOnPage + 6
      ),
    ];
    state.archivedGamesOnPage = payload.slice(
      0,
      state.archivedGamesOnPage + 6
    ).length;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});
