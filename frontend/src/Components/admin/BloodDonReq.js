import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { isAuthenticated } from "../auth";
import Header from "../Header";
import {
  DeleteBloodDonReqs,
  DeleteBloodReqs,
  getBloodDonReqs,
  getHosBedsReqs,
  getOxygenReqs,
} from "./ApiAdmin";

const BlloDonReqs = () => {
  const [reqs, setReqs] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadOxygenReqs();
  }, []);
  const { user, token } = isAuthenticated();
  const DeleteRequest = (reqId) => () => {
    console.log(reqId);
    DeleteBloodDonReqs(user._id, token, { id: reqId })
      .then((data) => {
        console.log(data);
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
    await getBloodDonReqs(user._id, token)
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
        <br />
        <br />
        <Row>
          {loading ? (
            reqs.length > 0 ? (
              reqs.map((req) => (
                <Col lg={4} style={{ border: "1px solid" }}>
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Request Name
                    </span>
                    : {req.reqName}
                  </h4>
                  <br />
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
                      Phone Number
                    </span>
                    : {req.phoneNo}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>
                      Blood Group
                    </span>
                    : {req.bloodGrp}
                  </h4>
                  <br />
                  <h4>
                    <span style={{ textDecoration: "underline" }}>Address</span>
                    : {req.address}
                  </h4>
                  <Button variant="danger" onClick={DeleteRequest(req._id)}>
                    Delete Request
                  </Button>
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
        </Row>
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

export default BlloDonReqs;
