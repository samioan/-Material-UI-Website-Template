import "./App.css";
import { Games, Music, Header, Art, Videos, Archive } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
      <Switch>
        <Route path="/games">
          <Games />
        </Route>
      </Switch>
      <Switch>
        <Route path="/music">
          <Music />
        </Route>
      </Switch>
      <Switch>
        <Route path="/art">
          <Art />
        </Route>
      </Switch>
      <Switch>
        <Route path="/videos">
          <Videos />
        </Route>
      </Switch>
      <Switch>
        <Route path="/archive">
          <Archive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
