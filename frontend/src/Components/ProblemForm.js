import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router";
import plasma from "../assets/blood-donation.png";

import { isAuthenticated } from "./auth";
const ProblemsForm = () => (
  <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
    <h1 className="text-center bg-light py-3">
      <img
        src={plasma}
        alt="Blood drop"
        width="60"
        height="60"
        className="mr-2"
      />
      Send Us Your Problem
    </h1>
    <Form className="px-3 py-3">
      <Form.Row>
        <Form.Group as={Col} sm={12} md={6}>
          <h5>
            <Form.Label>Name</Form.Label>
          </h5>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} sm={12} md={6}>
          <h5>
            <Form.Label>Age</Form.Label>
          </h5>
          <Form.Control type="number" placeholder="Enter Age" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={12}>
          <h5>
            <Form.Label>Phone Number</Form.Label>
          </h5>
          <Form.Control type="phone" placeholder="Enter Phone Number" />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <h5>
          <Form.Label>Address</Form.Label>
        </h5>
        <Form.Control
          as="textarea"
          rows="4"
          placeholder="Enter Address"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <h5>
          <Form.Label>Problem</Form.Label>
        </h5>
        <Form.Control
          as="textarea"
          rows="4"
          placeholder="Tell us your problem"
        ></Form.Control>
      </Form.Group>
      <Button className="m-auto d-block px-5" variant="primary" type="sumbit">
        Submit
      </Button>
    </Form>
  </Container>
);
const showproblemForm = () => <div>{ProblemsForm()}</div>;
const ProblemForm = () => <div>{showproblemForm()}</div>;

export default ProblemForm;
