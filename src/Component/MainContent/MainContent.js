import React, { Component } from "react";
import { Grid } from "@mui/material";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../Suggestions/Suggestions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MainContent.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Container className="justify-content-md-center">
          <Row>
            <Col md={1} lg={2} className="justify-content-md-center"></Col>
            <Col
              xs={12}
              lg={6}
              className="justify-content-md-center main-page-padding"
            >
              <StatusBar />
              <MainPage data = {this.props.data}/>
            </Col>
            <Col md={0} lg={4}>
              <InfoSection />
              <Suggestions />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainContent;
