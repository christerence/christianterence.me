import React, { useState } from "react";
import "./App.css";
import { Home, About } from "./pages";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </BrowserRouter>
  );
}

export default App;
