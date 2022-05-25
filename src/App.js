import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "models/store";
import Header from "components/layout/header";
import { GamePage } from "pages/games/components";
import { MusicPage } from "pages/music/components";
import { Home, Games, Music, Art, Videos, Archive } from "pages";

import styles from "./styles";

const App = () => {
  const classes = styles();

  const pages = [
    { link: "/", component: <Home /> },
    { link: "/games", component: <Games /> },
    { link: "/games/:title", component: <GamePage /> },
    { link: "/music", component: <Music /> },
    { link: "/music/:title", component: <MusicPage /> },
    { link: "/art", component: <Art /> },
    { link: "/videos", component: <Videos /> },
    { link: "/archive", component: <Archive /> },
  ];

  return (
    <div className={classes.appContainer}>
      <Provider store={store}>
        <Router>
          <Header />
          {pages.map((page) => (
            <Switch key={page.link}>
              <Route exact path={page.link}>
                {page.component}
              </Route>
            </Switch>
          ))}
        </Router>
      </Provider>
    </div>
  );
};

export default App;
