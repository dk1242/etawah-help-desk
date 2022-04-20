import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import doctor from "../assets/doctor.png";
import Donate from "./Donation";
import Header from "./Header";

import { isAuthenticated } from "./auth";
import { Redirect } from "react-router";
import { CreateDocReq } from "./ApiCore";

const Doctor = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    phoneNo: "",
    address: "",
    healthIssue: "",
    symptoms: "",
    error: "",
    loading: false,
    success: false,
  });
  const { name, age, phoneNo, healthIssue, symptoms, address, error, success } =
    values;

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
    //   symptoms: "",
    //   address: "",
    //   error: "",
    //   success: true,
    //   loading: false,
    // });
    // console.log(user._id);
    setValues({ ...values, error: false, success: false, loading: true });
    CreateDocReq({
      name,
      age,
      phoneNo,
      healthIssue,
      symptoms,
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
            symptoms: "",
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

  const DoctorForm = () => (
    <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
      <h1 className="text-center bg-light py-3">
        <img
          src={doctor}
          alt="Doctor"
          width="60"
          height="60"
          className="mr-2"
        />
        Need Doctor Assistance
      </h1>
      <p>
        We will connect you to the best doctor according to your problem and
        symptoms.
      </p>
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
              <Form.Label>Symptoms (लक्षण)</Form.Label>
            </h5>
            <Form.Control
              required
              as="textarea"
              rows="2"
              name="symptoms"
              value={symptoms}
              onChange={handleChange}
              placeholder="Enter some symptoms"
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
  const showDocForm = () => <div>{DoctorForm()}</div>;
  return (
    <div>
      <Header />
      {showError()}
      {showSuccess()}
      {showDocForm()}
      <br />
      <br />
      <Donate />
    </div>
  );
};
export default Doctor;
