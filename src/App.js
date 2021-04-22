import "./App.css";
import React from "react";
import { Home, Header, Games, Music, Art, Videos, Archive } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GamePage } from "./components/games/components";
import gameDetails from "./components/games/util/gameDetails";

const App = () => {
  const pages = [
    { link: "/", component: <Home /> },
    { link: "/games", component: <Games /> },
    ...gameDetails.map((item) => ({
      link: `/games/${item.pageLink}`,
      component: <GamePage />,
    })),
    { link: "/music", component: <Music /> },
    { link: "/art", component: <Art /> },
    { link: "/videos", component: <Videos /> },
    { link: "/archive", component: <Archive /> },
  ];

  return (
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
  );
};

export default App;
