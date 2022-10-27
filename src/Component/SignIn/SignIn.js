import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    emailId: null,
    password: null,
  };

  provideEmail = (event) => {
    this.setState({ ...this.state, emailId: event.currentTarget.value });
  };

  providePassword = (event) => {
    this.setState({ ...this.state, password: event.currentTarget.value });
  };

  login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user.uid));
        window.location.reload();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  render() {
    return (
      <div className="justify-content-md-center">
        <input
          type="text"
          className="loginInput"
          placeholder="Phone number, username, or email"
          onChange={this.provideEmail}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Password"
          onChange={this.providePassword}
        />
        <button className="loginButton" onClick={this.login}>
          Sign in
        </button>
      </div>
    );
  }
}

export default SignIn;
