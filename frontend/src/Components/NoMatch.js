import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import Header from "./Header";
import Error404 from "../assets/404 Error Page not Found with people connecting a plug-bro.svg";

const NoMatch = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={12} style={{ textAlign: "center" }}>
            <img src={Error404} alt="Error: 404" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default NoMatch;
