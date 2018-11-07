import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import Home from "./Home";
import "./App.css";
import logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App background" />
        <div className="App-header">
          <img src={logo} className="logo" />
        </div>
        <div id="icon_wrapper">
          <a
            target="_blank"
            class="fuse_social_icons_links"
            href="https://www.facebook.com/natalie.avakian.1"
          >
            <i class="fa fa-facebook fb-awesome-social awesome-social" />
          </a>
          <br />
          <a
            target="_blank"
            class="fuse_social_icons_links"
            href="https://twitter.com/NatalieAvakian"
          >
            <i class="fa fa-twitter tw-awesome-social awesome-social" />
          </a>
          <br />
          <a
            target="_blank"
            class="fuse_social_icons_links"
            href="https://www.youtube.com/user/Dancelessonsinla"
          >
            <i class="fa fa-youtube youtube-awesome-social awesome-social" />
          </a>
          <br />
          <a
            target="_blank"
            class="fuse_social_icons_links"
            href="https://www.instagram.com/natalieavakian/"
          >
            <i class="fa fa-instagram instagram-awesome-social awesome-social" />
          </a>
          <br />
          <a
            target="_blank"
            class="fuse_social_icons_links"
            href="http://www.yelp.com/biz/natalie-avakian-dance-glendale"
          >
            <i class="fa fa-yelp yelp-awesome-social awesome-social" />
          </a>
          <br />
        </div>
        <Route exact path="" component={Home} />
      </React.Fragment>
    );
  }
}

export default App;
