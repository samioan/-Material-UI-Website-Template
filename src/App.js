import "./App.css";
import { Home, Header, Games, Music, Art, Videos, Archive } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const pages = [
    { link: "/", component: <Home /> },
    { link: "/games", component: <Games /> },
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
}

export default App;
