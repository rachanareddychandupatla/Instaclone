import React, { Component } from "react";
import "./SignUp.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    emailId: null,
    name: null,
    username: null,
    password: null,
  };

  provideEmail = (event) => {
    this.setState({ ...this.state, emailId: event.currentTarget.value });
  };

  provideUserName = (event) => {
    this.setState({ ...this.state, username: event.currentTarget.value });
  };

  provideFullName = (event) => {
    this.setState({ ...this.state, name: event.currentTarget.value });
  };

  providePasword = (event) => {
    this.setState({ ...this.state, password: event.currentTarget.value });
  };

  newSignUp = () => {
    const auth = getAuth();
    console.log(auth);

    createUserWithEmailAndPassword(
      auth,
      this.state.emailId,
      this.state.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        let payload = {
          userId: user.uid,
          userName: this.state.username,
          name: this.state.name,
          profileImage: "www.google.com",
        };

        const requestOptions = {
          method: "POST",
          headers: { ContentType: "application/json" },
          body: JSON.stringify(payload),
        };
        

        fetch("http://localhost:8080/users", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(payload.userId));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="loginInput"
          placeholder="Mobile Number or Email"
          onChange={this.provideEmail}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Full Name"
          onChange={this.provideFullName}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Username"
          onChange={this.provideUserName}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Password"
          onChange={this.providePasword}
        />
        <button className="loginButton" onClick={this.newSignUp}>
          Sign up
        </button>
      </div>
    );
  }
}

export default SignUp;
