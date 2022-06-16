import { initialState as archiveInitialState } from "./archive/reducer";
import { initialState as artInitialState } from "./art/reducer";
import { initialState as gamesInitialState } from "./games/reducer";
import { initialState as musicInitialState } from "./music/reducer";
import { initialState as videosInitialState } from "./videos/reducer";

import rootReducer from "./rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

const enhancers = [];

const { __REDUX_DEVTOOLS_EXTENSION__: devToolsExtension } = global;
const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware];

if (devToolsExtension && typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const store = createStore(
  rootReducer,
  {
    archive: archiveInitialState,
    art: artInitialState,
    games: gamesInitialState,
    music: musicInitialState,
    videos: videosInitialState,
  },
  compose(applyMiddleware(...middleware), ...enhancers)
);

export default store;
