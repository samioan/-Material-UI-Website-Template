import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import withScrollbars from "theme/withScrollbars";
import ScrollToTop from "theme/scrollToTop";
import store from "models/store";
import { Header, Footer, ScrollToTopButton } from "components";
import {
  Home,
  Games,
  GamePage,
  Music,
  MusicPage,
  Art,
  Videos,
  Archive,
} from "pages";

const App = ({ showScrollToTopButton, scrollToTop }) => {
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
    <Provider store={store}>
      <Router>
        <Header />
        {pages.map((page) => (
          <ScrollToTop key={page.link}>
            <Switch>
              <Route exact path={page.link}>
                {page.component}
              </Route>
            </Switch>
          </ScrollToTop>
        ))}
        {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
        <Footer />
      </Router>
    </Provider>
  );
};

export default withScrollbars(App);
