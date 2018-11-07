import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import Home from "./Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App" />
        <Route exact path="" component={Home} />
      </React.Fragment>
    );
  }
}

export default App;
