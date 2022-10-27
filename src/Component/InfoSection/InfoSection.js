import React, { Component } from "react";
import {Avatar} from "@mui/material";
import imageSrc from "../../images/pp1.png";
import "./InfoSection.css";

class InfoSection extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="infoContainer">
            <Avatar src={imageSrc} className="imageInfo" />
            <div className="infoContent">
                <div className="infoUsername">rachana___reddy</div>
                <div className="infoDescription">Description</div>
            </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;
