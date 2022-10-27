import React, { Component } from "react";
import { Avatar } from "@mui/material";
import imageSrc from "../../images/pp1.png";
import "./Suggestions.css";

class Suggestions extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="suggestionsContainer">
          <div className="suggestionsHeader">
            <div>Suggestions For You</div>
          </div>
          <div className="suggestionsBody">
            <div className="suggestionsFriend">
              <Avatar src={imageSrc} className="suggestionsImage" />
              <div className="suggestionsUsername">Friend 1</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
