import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>;
  }
}

export default MainPage;
