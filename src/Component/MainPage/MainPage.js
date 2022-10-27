import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";
import uploadImage from "../../images/upload.png";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    postArray: [],
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const thisContext = this;
    // let data = [
    //   {
    //     postId: "123456",
    //     userName: "rachana",
    //     postImageURL: "https://source.unsplash.com/random/200x200?sig=1",
    //     timeStamp: "12345",
    //     likes: "7634",
    //   },
    //   {
    //     postId: "123456",
    //     userName: "rachana",
    //     postImageURL: "https://source.unsplash.com/random/200x200?sig=2",
    //     timeStamp: "12345",
    //     likes: "7634",
    //   },
    //   {
    //     postId: "123456",
    //     userName: "rachana",
    //     postImageURL: "https://source.unsplash.com/random/200x200?sig=3",
    //     timeStamp: "12345",
    //     likes: "7634",
    //   },
    //   {
    //     postId: "123456",
    //     userName: "rachana",
    //     postImageURL: "https://source.unsplash.com/random/200x200?sig=4",
    //     timeStamp: "12345",
    //     likes: "7634",
    //   },
    // ];

    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({postArray: data});
      })
      .catch((error) => {});
  };

  render() {
    console.log(this.state.postArray);
    return (
      <div>
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postId}
            key={index}
            userName={item.username}
            postImage={item.postPath}
            likes={item.likes}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;
