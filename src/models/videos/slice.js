import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameVideosShown: [],
  gameVideosOnPage: null,
  gameVideosTotal: null,
  musicVideosShown: [],
  musicVideosOnPage: null,
  musicVideosTotal: null,
  allGameVideos: [],
  allMusicVideos: [],
};

const reducers = {
  loadInitialGameVideos: (state, { payload }) => {
    state.allGameVideos = payload;
    state.gameVideosShown = payload.slice(0, 12);
    state.gameVideosOnPage = 12;
    state.gameVideosTotal = payload.length;
  },
  loadMoreGameVideos: (state) => {
    state.gameVideosShown = [
      ...state.gameVideosShown,
      ...state.allGameVideos.slice(
        state.gameVideosOnPage,
        state.gameVideosOnPage + 6
      ),
    ];
    state.gameVideosOnPage = state.allGameVideos.slice(
      0,
      state.gameVideosOnPage + 6
    ).length;
  },
  loadInitialMusicVideos: (state, { payload }) => {
    state.allMusicVideos = payload;
    state.musicVideosShown = payload.slice(0, 12);
    state.musicVideosOnPage = 12;
    state.musicVideosTotal = payload.length;
  },
  loadMoreMusicVideos: (state) => {
    state.musicVideosShown = [
      ...state.musicVideosShown,
      ...state.allMusicVideos.slice(
        state.musicVideosOnPage,
        state.musicVideosOnPage + 6
      ),
    ];
    state.musicVideosOnPage = state.allMusicVideos.slice(
      0,
      state.musicVideosOnPage + 6
    ).length;
  },
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers,
});
