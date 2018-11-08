import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import Home from "./Home";
import "./App.css";
import logo from "./images/logo.png";
import SocialMediaIcons from "./SocialMediaIcons";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App background" />
        <div className="App-header">
          <img src={logo} className="logo" />
        </div>

        <SocialMediaIcons />

        <Route exact path="" component={Home} />
      </React.Fragment>
    );
  }
}

export default App;
