import React, { Component } from "react";
import "./App.scss";
import { Router, Route } from "react-router-dom";
import Home from "./pages/home/screen";
import About from "./pages/about/screen";
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
