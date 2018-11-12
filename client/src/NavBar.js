import React from "react";
import logo from "./images/logo.png";

class NavBar extends React.Component {
  render() {
    return (
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
    );
  }
}

export default NavBar;
