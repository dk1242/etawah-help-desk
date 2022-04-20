import React from "react";
import { Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Donate from "../Donation";
import Header from "../Header";
import JoinUs from "../JoinUs";

const UserDashboard = () => {
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
  const showUser = () =>
    isAuthenticated() ? <div>{userInfo()}</div> : <Redirect to="/signin" />;
  return (
    <div>
      <Header />
      <br />
      <br />
      {showUser()}
      <Donate />
    </div>
  );
};

export default UserDashboard;
