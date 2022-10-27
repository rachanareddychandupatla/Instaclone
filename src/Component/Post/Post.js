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
  state = {
    commentList: [],
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    // let data = [
    //   {
    //     "username": "Revanth",
    //     "commentId": "1234",
    //     "timeStamp": "123456",
    //     "description": "Comment",
    //   },
    //   {
    //     "username": "Revanth",
    //     "commentId": "1234",
    //     "timeStamp": "123456",
    //     "description": "Comment",
    //   },
    //   {
    //     "username": "Revanth",
    //     "commentId": "1234",
    //     "timeStamp": "123456",
    //     "description": "Comment",
    //   },
    //   {
    //     "username": "Revanth",
    //     "commentId": "1234",
    //     "timeStamp": "123456",
    //     "description": "Comment",
    //   },
    // ];

    fetch("http://localhost:8080/comments"+this.props.id )
          .then((response) => response.json())
          .then((data) => {
            this.setState({commentList: data});
          })
          .catch((error) => {});
  };

  submitComments=(event) => {
    if(event.key == "Enter") {
      let comment = event.currentTarget.value;
      if(comment!=null || comment!=undefined) {
        let payload = {
          "commentId": Math.floor(Math.random()*1000000).toString(),
          "userId": JSON.parse(localStorage.getTime("users")).uid,
          "postId": this.props.id,
          "timeStamp": new Date().getTime(),
          "comment": comment,
        };

        const requestOptions = {
          method: "POST",
          headers: { ContentType: "application/json" },
          body: JSON.stringify(payload),
        };
        

        fetch("http://localhost:8080/comments", requestOptions)
          .then((response) => response.json())
          .then((data) => {
          })
          .catch((error) => {});
      }
    }
  }

  render() {
    return (
      <div className="post">
        <div className="postHeader">
          <Avatar src={this.props.profileImage} className="postImage" />
          <div className="postUserName">{this.props.userName}</div>
        </div>
        <div>
          <img src={this.props.postImage} className="instaPost" />
        </div>
        <div>
          <div style={{ marginLeft: "10px" }}>
            <img src={love} className="postReactImage" />
            <img src={comment} className="postReactImage" />
            <img src={share} className="postReactImage" />
          </div>
          <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
            {this.props.likes}
          </div>
        </div>

        <div>
          {this.state.commentList.map((item, index) => (
            <div className="postComment" key={index}>
              {item.username}: {item.description}
            </div>
          ))}

          <input
            text="text"
            onKeyPress={this.submitComments}
            placeholder="Add a comment..."
            className="commentBox"
          />
        </div>
      </div>
    );
  }
}

export default Post;
