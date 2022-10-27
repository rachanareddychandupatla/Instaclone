import React, { Component } from "react";
import "./NavBar.css";
import { Avatar } from "@mui/material";
import instaLogo from "../../images/instaLogo.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import post from "../../images/post.svg";
import react from "../../images/love.svg";
import pp1 from "../../images/pp1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  upload = (event) => {
    let image = event.target.files[0];
    if (image == null || image == undefined) return;
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + image.name);
    const metadata = {
      ContentType: "image/jpeg",
    };
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    console.log(localStorage.getItem("users"));

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let val = localStorage.getItem("users");
          console.group(val);
          let payload = {
            postId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")),
            postPath: downloadURL,
            timeStamp: new Date().getTime(),
            likeCount: 0,
          };

          const requestOptions = {
            method: "POST",
            headers: { ContentType: "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8080/post", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              // () => dispatch(updateData(data));
              this.props.data(data);
            })
            .catch((error) => {});
        });
      }
    );
  };

  render() {

    return (
      <div>
        <div className="navbarContent">
          <Container>
            <Row>
              <Col xs={2}></Col>
              <Col xs={3}>
                <img src={instaLogo} width="105px" className="navbarLogo" />
              </Col>
              <Col xs={1} md={3}>
                {" "}
                <input
                  type={"text"}
                  placeholder="Search"
                  className="navbarSearch"
                />
              </Col>
              <Col xs={3} style={{ display: "flex" }}>
                <img src={home} width="25px" className="navbarImage" />
                <img src={message} width="25px" className="navbarImage" />

                <div className="fileupload">
                  <label htmlFor="file-upload">
                    <img src={post} width="25px" className="navbarImage" />
                  </label>

                  <input type="file" id="file-upload" onChange={this.upload} />
                </div>
                <img src={find} width="25px" className="navbarImage" />
                <img src={react} width="25px" className="navbarImage" />
                <Avatar
                  src={pp1}
                  style={{ maxWidth: "25px", maxHeight: "25px" }}
                  className="navbarImage"
                />
              </Col>
              <Col xs={1}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default NavBar;
