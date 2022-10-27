import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { withScrollbars } from "theme/hocs";

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

const App = ({ showScrollToTopButton, scrollToTop }) => (
  <Provider store={store}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/:title" element={<GamePage />} />
      <Route path="/music" element={<Music />} />
      <Route path="/music/:title" element={<MusicPage />} />
      <Route path="/art" element={<Art />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
    <Footer />
  </Provider>
);

export default withScrollbars(App);
