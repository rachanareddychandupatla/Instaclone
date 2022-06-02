import React, { Component } from "react";
import { Grid } from "@mui/material";
import instaImage from "../../images/instaImage.svg";
import instaLogo from "../../images/logoinsta.png";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            hi
          </Grid>
          <Grid item xs={6}>
            <div className="mainPage">
              <div>
                <img src={instaImage} alt="instagram image" width="450px" />
              </div>
              <div className="loginPage">
                <img
                  src={instaLogo}
                  className="instaLogo"
                  alt="insta logo"
                  width="150px"
                />
                <div>
                  <input
                    type="text"
                    className="loginInput"
                    placeholder="Phone number, username, or email"
                  />
                  <input
                    type="password"
                    className="loginInput"
                    placeholder="Password"
                  />
                  <button className="loginButton">Sign in</button>
                  <div className="loginOrDiv">
                      <div className="loginDivider"></div>
                      <div className="loginOr">OR</div>
                      <div className="loginDivider"></div>
                  </div>

                  <div className="loginFb">Log in with Facebook</div>
                  <div classname="loginForgot">Forgot password?</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            world
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
