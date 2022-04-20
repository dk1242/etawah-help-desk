import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { isAuthenticated } from "../auth";
import Header from "../Header";
import {
  DeleteVolunteerReqs,
  getOxygenReqs,
  getVolunteersReqs,
} from "./ApiAdmin";

const VolunteersReq = () => {
  const [reqs, setReqs] = useState({});
  const [error, setError] = useState("");
  const [mdata, setMdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadOxygenReqs();
  }, []);
  const { user, token } = isAuthenticated();
  const DeleteRequest = (reqId) => () => {
    console.log(reqId);
    DeleteVolunteerReqs(user._id, token, { id: reqId })
      .then((data) => {
        if (data.err) {
          console.log(data.err);
        } else {
          alert(data.message);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  const loadOxygenReqs = async () => {
    await getVolunteersReqs(user._id, token)
      .then((data) => {
        console.log(data);
        if (data.err) {
          setError(data.err);
        } else {
          setReqs(data);
          setLoading(true);
        }
      })
      .catch((err) => console.log(err));
  };
  const showReq = () => {
    return (
      <Container>
        {" "}
        <br />
        <br />
        <Row>
          {loading ? (
            reqs.length > 0 ? (
              reqs.map((req) => (
                <Col lg={4} style={{ border: "1px solid" }}>
                  <br />
                  <h2>Volunteer Request</h2>
                  <hr />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>Name</span>:{" "}
                    {req.name}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>Age</span>:{" "}
                    {req.age}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Whatsapp Number
                    </span>
                    : {req.whatsappNo}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Phone Number
                    </span>
                    : {req.phoneNo}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Blood Help
                    </span>
                    : {req.BloodHelp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Food Help
                    </span>
                    : {req.foodHelp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Medicine Help
                    </span>
                    : {req.medicineHelp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Money Help
                    </span>
                    : {req.moneyHelp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Oxygen Help
                    </span>
                    : {req.oxygenHelp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Ration Help
                    </span>
                    : {req.rationHelp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Other Helps
                    </span>
                    : {req.otherHelps}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Covid In Family
                    </span>
                    : {req.covidInFamily}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>Address</span>
                    : {req.address}
                  </h4>
                  <Button variant="danger" onClick={DeleteRequest(req._id)}>
                    Delete Request
                  </Button>{" "}
                  <br />
                  <br />
                </Col>
              ))
            ) : (
              <div>
                <br />
                <br />
                <h1>No Data Found</h1>
                <br />
                <br />
              </div>
            )
          ) : (
            <h3>Loading</h3>
          )}
        </Row>{" "}
        <br />
        <br />
      </Container>
    );
  };
  const showAll = () =>
    isAuthenticated() && isAuthenticated().user.role === 1 ? (
      <div>{showReq()}</div>
    ) : (
      <Redirect to="/signin" />
    );
  return (
    <div>
      <Header />
      {/* {console.log(reqs, typeof mdata)} */}
      {/* {console.log(typeof reqs.data.OxygenReqs, reqs.data.OxygenReqs[0])} */}
      {/* {JSON.stringify(reqs.data.OxygenReqs)} */}
      {/* {typeof reqs.data.OxygenReqs} */}
      {showAll()}
    </div>
  );
};

export default VolunteersReq;
