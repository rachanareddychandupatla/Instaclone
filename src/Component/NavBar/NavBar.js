import React, { Component } from "react";
import "./NavBar.css";
import { Grid, Avatar } from "@mui/material";
import instaLogo from '../../images/instaLogo.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import pp1  from "../../images/pp1.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="navbarContent">
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <img src={instaLogo} width="105px" className="navbarLogo" />
                </Grid>
                <Grid item xs={3}>
                    <input type={"text"} placeholder="Search" className="navbarSearch" />
                </Grid>
                <Grid item xs={3} style={{"display": "flex"}}>
                <img src={home} width="25px" className="navbarImage" />
                <img src={message} width="25px" className="navbarImage" />
                <img src={find} width="25px" className="navbarImage" />
                <img src={react} width="25px" className="navbarImage" />
                <Avatar src={pp1} style={{"maxWidth": "25px", "maxHeight": "25px"}} className="navbarImage" />
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
