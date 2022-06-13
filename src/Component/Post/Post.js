import React, { Component } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import postImage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="post">
        <div className="postHeader">
          <Avatar src={""} className="postImage" />
          <div className="postUserName">Username</div>
        </div>
        <div>
          <img src={postImage} width="615px" />
        </div>
        <div>
          <div style={{"marginLeft": "10px"}}>
            <img src={love} className="postReactImage" />
            <img src={comment} className="postReactImage" />
            <img src={share} className="postReactImage" />
          </div>
          <div style={{"fontWeight": "bold", "marginLeft":"20px"}}>7799 likes</div>
        </div>

        <div>
            <div className="postComment">Hello Comment 1</div>
            <div className="postComment">Hello Comment 1</div>
            <div className="postComment">Hello Comment 1</div>
            <div className="postComment">Hello Comment 1</div>
            <div className="postComment">Hello Comment 1</div>
        </div>
      </div>
    );
  }
}

export default Post;
