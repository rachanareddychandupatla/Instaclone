import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
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
          placeholder="Mobile Number or Email"
        />
        <input type="text" className="loginInput" placeholder="Full Name" />
        <input type="text" className="loginInput" placeholder="Username" />
        <input type="password" className="loginInput" placeholder="Password" />
        <button className="loginButton">Sign up</button>
      </div>
    );
  }
}

export default SignUp;
