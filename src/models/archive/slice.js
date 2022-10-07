import { createSlice } from "@reduxjs/toolkit";

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
  loadInitialArchivedMusic: (state, { payload }) => {
    state.archivedMusicShown = payload.slice(0, 12);
    state.archivedMusicOnPage = payload.slice(0, 12).length;
    state.archivedMusicTotal = payload.length;
  },

  loadMoreArchivedMusic: (state, { payload }) => {
    state.archivedMusicShown = [
      ...state.archivedMusicShown,
      ...payload.slice(
        state.archivedMusicOnPage,
        state.archivedMusicOnPage + 6
      ),
    ];
    state.archivedMusicOnPage = payload.slice(
      0,
      state.archivedMusicOnPage + 6
    ).length;
  },
  loadInitialArchivedArt: (state, { payload }) => {
    state.archivedArtShown = payload.slice(0, 12);
    state.archivedArtOnPage = payload.slice(0, 12).length;
    state.archivedArtTotal = payload.length;
  },
  loadMoreArchivedArt: (state, { payload }) => {
    state.archivedArtShown = [
      ...state.archivedArtShown,
      ...payload.slice(state.archivedArtOnPage, state.archivedArtOnPage + 6),
    ];
    state.archivedArtOnPage = payload.slice(
      0,
      state.archivedArtOnPage + 6
    ).length;
  },
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers,
});
