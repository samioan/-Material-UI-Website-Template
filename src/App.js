import React from "react";
import { Home, Header, Games, Music, Art, Videos, Archive } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GamePage } from "./components/games/components/";
import { MusicPage } from "./components/music/components";
import gameData from "./components/data/gameData.json";
import musicData from "./components/data/musicData.json";

import styles from "./styles";

const App = () => {
  const classes = styles();

  const pages = [
    { link: "/", component: <Home /> },
    { link: "/games", component: <Games /> },
    ...Object.values(gameData).map((game) => ({
      link: `/games/${game.links[2]}`,
      component: <GamePage />,
    })),
    { link: "/music", component: <Music /> },
    ...Object.values(musicData).map((album) => ({
      link: `/music/${album.links[1]}`,
      component: <MusicPage />,
    })),
    { link: "/art", component: <Art /> },
    { link: "/videos", component: <Videos /> },
    { link: "/archive", component: <Archive /> },
  ];

  return (
    <div className={classes.pageBackground}>
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
    </div>
  );
};

export default App;
