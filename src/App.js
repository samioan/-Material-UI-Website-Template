import React from "react";
import { Home, Header, Games, Music, Art, Videos, Archive } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GamePage } from "./components/games/components/";
import { MusicPage } from "./components/music/components";
import gameDetails from "./components/games/constants/gameDetails";
import albumDetails from "./components/music/util/albumDetails";
import styles from "./styles";

const App = () => {
  const classes = styles();

  const pages = [
    { link: "/", component: <Home /> },
    { link: "/games", component: <Games /> },
    ...gameDetails.map((item) => ({
      link: `/games/${item.pageLink}`,
      component: <GamePage />,
    })),
    { link: "/music", component: <Music /> },
    ...albumDetails.map((item) => ({
      link: `/music/${item.pageLink}`,
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
