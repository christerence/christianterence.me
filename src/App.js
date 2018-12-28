import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/screen";
import About from "./pages/about/screen";
import history from './history';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
