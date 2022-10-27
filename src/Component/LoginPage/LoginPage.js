import React, { Component } from "react";
import instaImage from "../../images/instaImage.svg";
import instaLogo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appStore from "../../images/app.png";
import playStore from "../../images/play.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./LoginPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isSignIn: true,
  };

  changeSignIn = () => {
    this.setState({ isSignIn: !this.state.isSignIn });
  };

  render() {
    return (
      <div className="fill-window">
        <Container className="justify-content-md-center">
          <Row>
            <Col md={1} lg={2}></Col>
            <Col xs={12} lg={8}>
              <div className="mainPage">
                <div className="loginImage">
                  <img src={instaImage} alt="instagram image" width="450px" />
                </div>
                <div>
                  <div className="loginPage">
                    <img
                      src={instaLogo}
                      className="instaLogo"
                      alt="insta logo"
                      width="150px"
                    />
                    <div>
                      {this.state.isSignIn ? <SignIn /> : <SignUp />}

                      <div className="loginOrDiv">
                        <div className="loginDivider"></div>
                        <div className="loginOr">OR</div>
                        <div className="loginDivider"></div>
                      </div>

                      <div className="loginFb">
                        <img src={fb} width="15px" className="fbLogo" />
                        Log in with Facebook
                      </div>
                      <div className="loginForgot">Forgot password?</div>
                    </div>
                  </div>
                  <div className="signUpPage">
                    {this.state.isSignIn ? (
                      <div className="signUp">
                        Don't have an account?
                        <span
                          className="signUpText"
                          onClick={this.changeSignIn}
                        >
                          {" "}
                          Sign up
                        </span>
                      </div>
                    ) : (
                      <div className="signIn">
                        Have an account?
                        <span
                          className="signInText"
                          onClick={this.changeSignIn}
                        >
                          {" "}
                          Sign in
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="downloadSection">
                    <div>Get the app.</div>
                    <img
                      className="imageSection"
                      src={appStore}
                      alt="appstore"
                      width="136px"
                    />
                    <img
                      className="imageSection"
                      src={playStore}
                      alt="playstore"
                      width="136px"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} lg={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
