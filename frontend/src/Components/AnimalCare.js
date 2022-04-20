import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router";
import animalHelp from "../assets/animalhelp.png";
import { CreateAnimalProbReq } from "./ApiCore";
import { isAuthenticated } from "./auth";
import Donate from "./Donation";
import Header from "./Header";

const AnimalCare = () => {
  const [values, setValues] = useState({
    name: "",
    phoneNo: "",
    animal: "",
    problem: "",
    location: "",
    error: "",
    loading: false,
    success: false,
  });
  const { name, phoneNo, animal, problem, location, error, success } = values;

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
    //   phoneNo: "",
    //   animal: "",
    //   problem: "",
    //   location: "",
    //   error: "",
    //   success: true,
    //   loading: false,
    // });
    setValues({ ...values, error: false, success: false, loading: true });
    CreateAnimalProbReq({
      name,
      phoneNo,
      animal,
      problem,
      location,
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
            phoneNo: "",
            animal: "",
            problem: "",
            location: "",
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

  const AnimalForm = () => (
    <div>
      <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
        <h1 className="text-center bg-light py-3">
          <img
            src={animalHelp}
            alt="Animals care"
            width="60"
            height="60"
            className="mr-2"
          />
          Animals Help Request
        </h1>
        <p></p>
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
          <Form.Row>
            <Form.Group as={Col} sm={12} md={6}>
              <h5>
                <Form.Label>
                  What animal is this? (वह कौन सा जानवर है?)
                </Form.Label>
              </h5>
              <Form.Control
                required
                type="text"
                name="animal"
                value={animal}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <h5>
              <Form.Label>
                What problem it have? (इसे क्या समस्या है?)
              </Form.Label>
            </h5>
            <Form.Control
              as="textarea"
              rows="2"
              name="problem"
              value={problem}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <h5>
              <Form.Label>Location (स्थान)</Form.Label>
            </h5>
            <Form.Control
              required
              as="textarea"
              rows="4"
              placeholder="Enter Location"
              name="location"
              value={location}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Button
            className="m-auto d-block px-5"
            variant="primary"
            type="sumbit"
          >
            Submit
          </Button>
        </Form>
      </Container>
      <br />
      <br />
    </div>
  );
  const showAnimalForm = () => <div>{AnimalForm()}</div>;

  return (
    <div>
      <Header />
      {showError()}
      {showSuccess()}
      {showAnimalForm()}
      <Donate />
    </div>
  );
};
export default AnimalCare;
