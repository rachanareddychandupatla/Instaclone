import React, { Component } from "react";
import "../LoginPage/LoginPage.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <input
          type="text"
          className="loginInput"
          placeholder="Phone number, username, or email"
        />
        <input type="password" className="loginInput" placeholder="Password" />
        <button className="loginButton">Sign in</button>
      </div>
    );
  }
}

export default SignIn;
