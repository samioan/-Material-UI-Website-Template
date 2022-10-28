import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAlbums: [],
  albumsShown: [],
  albumsOnPage: null,
  albumsTotal: null,
  musicPageItems: [],
};

const reducers = {
  loadInitialAlbums: (state, { payload }) => {
    state.allAlbums = payload;
    state.albumsShown = payload.slice(0, 12);
    state.albumsOnPage = 12;
    state.albumsTotal = payload.length;
  },
  loadMoreAlbums: (state) => {
    state.albumsShown = [
      ...state.albumsShown,
      ...state.allAlbums.slice(state.albumsOnPage, state.albumsOnPage + 6),
    ];
    state.albumsOnPage = state.allAlbums.slice(
      0,
      state.albumsOnPage + 6
    ).length;
  },
  loadMusicPageItems: (state, { payload }) => {
    state.musicPageItems = payload;
  },
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers,
});
