import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router";
import Home from "./Home";
import WhatsNew from "./WhatsNew";
import "./App.css";
import SocialMediaIcons from "./SocialMediaIcons";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App background" />
        <NavBar />
        <SocialMediaIcons />
        <Route exact path="/" component={Home} />
        <Route exact path="/whats-new" component={WhatsNew} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
