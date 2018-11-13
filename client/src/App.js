import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router";
import Home from "./Home";
import WhatsNew from "./WhatsNew";
import "./App.css";
import SocialMediaIcons from "./SocialMediaIcons";
import NavBar from "./NavBar";
import Store from "./Store";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App background" />
        <NavBar />
        <SocialMediaIcons />
        <Route exact path="/" component={Home} />
        <Route exact path="/whats-new" component={WhatsNew} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
