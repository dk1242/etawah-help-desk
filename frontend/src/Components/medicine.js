import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import medicine from "../assets/vitamin.png";
import Donate from "./Donation";
import Header from "./Header";

import { isAuthenticated } from "./auth";
import { Redirect } from "react-router";
import { CreateMedReq } from "./ApiCore";
const Medicine = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    phoneNo: "",
    address: "",
    healthIssue: "",
    medicines: "",
    error: "",
    loading: false,
    success: false,
  });
  const {
    name,
    age,
    phoneNo,
    healthIssue,
    medicines,
    address,
    error,
    success,
  } = values;

  //const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    setValues({
      ...values,
      error: false,
      [event.target.name]: event.target.value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    // setValues({
    //   ...values,
    //   name: "",
    //   age: "",
    //   phoneNo: "",
    //   healthIssue: "",
    //   medicines: "",
    //   address: "",
    //   error: "",
    //   success: true,
    //   loading: false,
    // });
    // console.log(user._id);
    setValues({ ...values, error: false, success: false, loading: true });
    CreateMedReq({
      name,
      age,
      phoneNo,
      healthIssue,
      medicines,
      address,
    })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
            loading: false,
          });
        } else {
          setValues({
            ...values,
            name: "",
            age: "",
            phoneNo: "",
            healthIssue: "",
            medicines: "",
            address: "",
            error: "",
            success: true,
            loading: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const showSuccess = () => {
    if (success) {
      return (
        <h2 className="text-success" style={{ textAlign: "center" }}>
          Your Request is created. We will respond to your request soon.
        </h2>
      );
    }
  };
  const showError = () => {
    if (error) {
      return (
        <h2 className="text-danger" style={{ textAlign: "center" }}>
          Error occured.
        </h2>
      );
    }
  };

  const MedForm = () => (
    <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
      <h1 className="text-center bg-light py-3">
        <img
          src={medicine}
          alt="Medicine"
          width="60"
          height="60"
          className="mr-2"
        />
        Request Medicine
      </h1>
      <Form className="px-3 py-3" onSubmit={clickSubmit}>
        <Form.Row>
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>Name (नाम)</Form.Label>
            </h5>
            <Form.Control
              required
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>Age (उम्र)</Form.Label>
            </h5>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              name="age"
              value={age}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>Phone Number (फ़ोन नंबर)</Form.Label>
            </h5>
            <Form.Control
              required
              type="phone"
              placeholder="Enter Phone Number"
              name="phoneNo"
              value={phoneNo}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <h5>
            <Form.Label>
              What is your Health issue? (आपकी स्वास्थ्य समस्या क्या है?)
            </Form.Label>
          </h5>
          <Form.Control
            as="textarea"
            rows="2"
            name="healthIssue"
            value={healthIssue}
            placeholder="Type your Problem or Health Issue Here"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>
                Name of Medicine required (आवश्यक दवा का नाम)
              </Form.Label>
            </h5>
            <Form.Control
              required
              as="textarea"
              rows="2"
              name="medicines"
              value={medicines}
              onChange={handleChange}
              placeholder="Enter Medicine Name"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <h5>
            <Form.Label>Address (पता)</Form.Label>
          </h5>
          <Form.Control
            required
            as="textarea"
            rows="4"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button className="m-auto d-block px-5" variant="primary" type="sumbit">
          Submit
        </Button>
      </Form>
    </Container>
  );
  const showMedForm = () => <div>{MedForm()}</div>;

  return (
    <div>
      <Header />
      {showError()}
      {showSuccess()}
      {showMedForm()}
      <br />
      <br />
      <Donate />
    </div>
  );
};
export default Medicine;
