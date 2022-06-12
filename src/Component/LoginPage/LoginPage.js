import React, { Component } from "react";
import { Grid } from "@mui/material";
import instaImage from "../../images/instaImage.svg";
import instaLogo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appStore from "../../images/app.png";
import playStore from "../../images/play.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="fill-window">
        <Grid container>
          <Grid item xs={3} md={3}>
            hi
          </Grid>
          <Grid item xs={6} md={6}>
            <div className="mainPage">
              <div>
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
                    <SignIn />
                    {/* <SignUp /> */}
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
                  <div className="signUp">Don't have an account?<span className="signUpText"> Sign up</span></div>
                  <div v-if='' className="signIn">Have an account?<span className="signInText"> Sign in</span></div>
                </div>

                <div className="downloadSection">
                  <div>Get the app.</div>
                  <img className="imageSection" src={appStore} alt="appstore" width="136px" />
                  <img className="imageSection" src={playStore} alt="playstore" width="136px" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} md={3}>
            world
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
