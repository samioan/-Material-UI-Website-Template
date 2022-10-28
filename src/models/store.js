import { configureStore } from "@reduxjs/toolkit";

import archiveReducer from "./archive/reducer";
import artReducer from "./art/reducer";
import gamesReducer from "./games/reducer";
import musicReducer from "./music/reducer";
import videosReducer from "./videos/reducer";

const store = configureStore({
  reducer: {
    archive: archiveReducer,
    art: artReducer,
    games: gamesReducer,
    music: musicReducer,
    videos: videosReducer,
  },
});

export default store;
