import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bloodReq from "../assets/blood-transfusion.png";
import bloodDonate from "../assets/blood-donation (1).png";
import Donate from "./Donation";
import JoinUs from "./JoinUs";
import Header from "./Header";
const Blood = () => {
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
            <Link to="/donate-blood">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={bloodDonate}
                  alt="Blood drop"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Donate Blood</h4>
            </Link>
          </Col>
          <Col>
            <Link to="/request-blood">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img src={bloodReq} alt="Blood drop" width="150" height="150" />
              </Button>
              <h4>Request Blood</h4>
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
export default Blood;
