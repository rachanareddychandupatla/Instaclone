import React, { Component } from "react";
import { Avatar } from "@mui/material";
import statusImg from "../../images/pp1.png";
import "./StatusBar.css";

class StatusBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    statusList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let data = [
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
      { username: "rachana___reddy", imageURL: "../../images/pp1.png" },
    ];

    this.setState({ statusList: data });
  };

  render() {
    return (
      <div>
        <div className="statusBar">
          {this.state.statusList.map((item, index) => (
            <div className="status" key={index}>
              <Avatar src={statusImg} className="statusImage" />
              <div className="userId">{item.username}</div>
            </div>
          ))}

          {/* <div className="status">
            <Avatar src={statusImg} className="statusImage" />
            <div class="userId">rachana___reddy</div>
          </div>

          <div className="status">
            <Avatar src={statusImg} className="statusImage" />
            <div class="userId">rachana___reddy</div>
          </div>

          <div className="status">
            <Avatar src={statusImg} className="statusImage" />
            <div class="userId">rachana___reddy</div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default StatusBar;
