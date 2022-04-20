import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router";
import oxygen from "../assets/oxygen-tank.png";
import { CreateOxygenReq } from "./ApiCore";
import { authenticate, isAuthenticated } from "./auth";
import Donate from "./Donation";
import Header from "./Header";
const Oxygen = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    phoneNo: "",
    quantity: "",
    cylinder: "",
    address: "",
    error: "",
    loading: false,
    success: false,
  });
  const { name, age, phoneNo, quantity, cylinder, address, error, success } =
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
    //   quantity: "",
    //   cylinder: "",
    //   address: "",
    //   error: "",
    //   success: true,
    //   loading: false,
    // });
    // console.log(user._id);
    setValues({ ...values, error: false, success: false, loading: true });
    CreateOxygenReq({
      name,
      age,
      phoneNo,
      quantity,
      cylinder,
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
            quantity: "",
            cylinder: "",
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
  const OxygenForm = () => (
    <div>
      <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
        <h1 className="text-center bg-light py-3">
          <img
            src={oxygen}
            alt="Oxygen"
            width="60"
            height="60"
            className="mr-2"
          />
          Oxygen
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
            <Form.Group as={Col} sm={12} md={6}>
              <h5>
                <Form.Label>
                  Quantity of Oxygen required(in Litres) (आवश्यक ऑक्सीजन की
                  मात्रा (लीटर में))
                </Form.Label>
              </h5>
              <Form.Control
                type="text"
                placeholder="Enter Quantity"
                name="quantity"
                value={quantity}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} lg={6}>
              <h5>
                <Form.Label>
                  Have Oxygen Cylinder? (आपके पास ऑक्सीजन सिलेंडर है?)
                </Form.Label>
              </h5>
              <Form.Control
                required
                as="select"
                name="cylinder"
                value={cylinder}
                onChange={handleChange}
              >
                <option>Select</option>
                <option>No</option>
                <option>Yes</option>
              </Form.Control>
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
      <Donate />
    </div>
  );
  const showOxygenForm = () => <div>{OxygenForm()}</div>;
  return (
    <div>
      <Header />
      {showSuccess()}
      {showError()}
      {showOxygenForm()}
    </div>
  );
};

export default Oxygen;
