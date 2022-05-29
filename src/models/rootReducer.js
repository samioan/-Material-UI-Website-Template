const { combineReducers } = require("redux");
const { default: pageReducer } = require("./page/reducer");
const { default: archiveReducer } = require("./archive/reducer");
const { default: artReducer } = require("./art/reducer");
const { default: gamesReducer } = require("./games/reducer");
const { default: musicReducer } = require("./music/reducer");
const { default: videosReducer } = require("./videos/reducer");

const rootReducer = combineReducers({
  page: pageReducer,
  archive: archiveReducer,
  art: artReducer,
  games: gamesReducer,
  music: musicReducer,
  videos: videosReducer,
});

export default rootReducer;
