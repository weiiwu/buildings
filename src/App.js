import React from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Buildings from "./pages/Buildings";
import SingleBuilding from "./pages/SingleBuilding";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/buildings/" component={Buildings} />
        <Route exact path="/buildings/:slug" component={SingleBuilding} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
