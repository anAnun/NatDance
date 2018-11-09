import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router";
import Home from "./Home";
import WhatsNew from "./WhatsNew";
import "./App.css";
import logo from "./images/logo.png";
import SocialMediaIcons from "./SocialMediaIcons";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App background" />
        <div className="App-header-wrapper">
          <div className="App-header">
            <img
              alt=""
              src={logo}
              className="logo"
              onClick={() => this.props.history.push("/")}
            />
            <button onClick={() => this.props.history.push("/whats-new")}>
              whatsnew
            </button>
          </div>
        </div>

        <SocialMediaIcons />
        <Route exact path="/" component={Home} />
        <Route exact path="/whats-new" component={WhatsNew} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
