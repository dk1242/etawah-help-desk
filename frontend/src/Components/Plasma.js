import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import donatePlasma from "../assets/platelet.png";
import ReqPlasma from "../assets/blood-bag.png";
import Donate from "./Donation";
import JoinUs from "./JoinUs";
import Header from "./Header";
const Plasma = () => {
  return (
    <div>
      <Header />
      <br />
      <JoinUs />
      <Container
        style={{ marginTop: "25px", textAlign: "center", alignItems: "center" }}
        className="shadow-sm p-3 mb-5 bg-white rounded"
      >
        <h1>Select from below</h1>
        <Row>
          <Col>
            <Link to="/donate-plasma">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={donatePlasma}
                  alt="Blood drop"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Donate Plasma</h4>
            </Link>
          </Col>
          <Col>
            <Link to="/request-plasma">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={ReqPlasma}
                  alt="Blood drop"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Request Plasma</h4>
            </Link>
          </Col>
        </Row>
      </Container>
      <br />
      <Donate />
      <br />
    </div>
  );
};
export default Plasma;
