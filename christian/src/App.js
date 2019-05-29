import React from "react";
import { Router, Route } from "react-router-dom";
import { Home } from './pages';
import history from "./history";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route path="/" exact component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
