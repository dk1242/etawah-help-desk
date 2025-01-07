import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import education from "../assets/online-course.png";
import Donate from "./Donation";
import Header from "./Header";

import { isAuthenticated } from "./auth";
import { Redirect } from "react-router";
import { CreateEduReq } from "./ApiCore";

const EduHelp = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    phoneNo: "",
    highestEdu: "",
    preparation: "",
    address: "",
    error: "",
    loading: false,
    success: false,
  });
  const {
    name,
    age,
    phoneNo,
    highestEdu,
    preparation,
    address,
    error,
    success,
  } = values;

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
    //   address: "",
    //   error: "",
    //   success: true,
    //   loading: false,
    // });
    // console.log(user._id);
    setValues({ ...values, error: false, success: false, loading: true });
    CreateEduReq({
      name,
      age,
      phoneNo,
      highestEdu,
      preparation,
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
            highestEdu: "",
            preparation: "",
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

  const FoodForm = () => (
    <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
      <h1 className="text-center bg-light py-3">
        <img
          src={education}
          alt="Free Education consultation Service"
          width="60"
          height="60"
          className="mr-2"
        />
        Free Education Consultation Service
      </h1>
      <h5></h5>
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
        </Form.Row>{" "}
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
          </Form.Group>{" "}
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>Highest Education</Form.Label>
            </h5>
            <Form.Control
              required
              type="text"
              placeholder="Highest education you have"
              name="highestEdu"
              value={highestEdu}
              onChange={handleChange}
            />
          </Form.Group>{" "}
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>Preparing for which Exam?</Form.Label>
            </h5>
            <Form.Control
              required
              type="text"
              placeholder="Doing preparation for ..."
              name="preparation"
              value={preparation}
              onChange={handleChange}
            />
          </Form.Group>{" "}
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
  const showFoodForm = () => <div>{FoodForm()}</div>;

  return (
    <div>
      <Header />
      {showError()}
      {showSuccess()}
      {showFoodForm()}
      <br />
      <br />
      {/* <Donate /> */}
    </div>
  );
};
export default EduHelp;
