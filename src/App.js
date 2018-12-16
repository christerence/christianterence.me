import React, { Component } from "react";
import "./App.scss";

import Home from "./pages/home/screen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
