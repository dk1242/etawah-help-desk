import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Donate from "../Donation";
import Header from "../Header";
import JoinUs from "../JoinUs";

const AdminDashboard = () => {
  const userInfo = () => {
    const {
      user: { _id, name, phoneNo, role },
    } = isAuthenticated();

    return (
      <Container>
        <div className="card mb-5">
          <h3 className="card-header">User Information</h3>
          <ul className="list-group">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Phone Number: {phoneNo}</li>
            <li className="list-group-item">
              Role: {role === 1 ? "Admin" : "User"}
            </li>
          </ul>
        </div>
      </Container>
    );
  };
  const showRequests = () => {
    return (
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Link to="/uploadimage">
              <h2>Upload New Image</h2>
            </Link>
          </Col>{" "}
          <Col>
            <Link to="/addevent">
              <h2>Add New Event</h2>
            </Link>
          </Col>
        </Row>
        <h1 style={{ textAlign: "center" }}>Requests</h1>

        <Row style={{ textAlign: "center" }}>
          <Col style={{ border: "2px solid" }}>
            <Link to="/soxygenreq">
              <h2>Oxygen Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/shosbedreqs">
              <h2>Hospital Beds Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/sblooddonreqs">
              <h2>Blood Donation Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/sbloodreqs">
              <h2>Blood Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="#">
              <h2>Plasma Donation Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="#">
              <h2>Plasma Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/smedreqs">
              <h2>Medicine Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/sdocreqs">
              <h2>Doctor assistance Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/sanimalreqs">
              <h2>Animal Help Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/sfoodreqs">
              <h2>Food Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/svolunteerreqs">
              <h2>Volunteer Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/slegalreqs">
              <h2>Legal Requests</h2>
            </Link>
          </Col>
          <Col style={{ border: "2px solid" }}>
            <Link to="/sedureqs">
              <h2>Education Requests</h2>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  };
  const showUser = () =>
    isAuthenticated() && isAuthenticated().user.role === 1 ? (
      <div>
        {userInfo()}
        {showRequests()}
      </div>
    ) : (
      <Redirect to="/signin" />
    );
  return (
    <div>
      <Header />
      <br />
      <br />
      {showUser()}
      <br />
      <br />
      <Donate />
    </div>
  );
};

export default AdminDashboard;
