import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./pages/Home";
import MovieView from "./pages/MovieView";
import TvView from './pages/TvView'
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieView} exact />
          <Route path="/tv/:id" component={TvView} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
