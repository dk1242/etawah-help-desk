import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import team from "../assets/solidarity.png";
import Donate from "./Donation";
import Header from "./Header";

import { isAuthenticated } from "./auth";
import { Redirect } from "react-router";
import { VolunteerReq } from "./ApiCore";

const VolunteerForm = () => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    phoneNo: "",
    whatsappNo: "",
    address: "",
    medicineHelp: "",
    BloodHelp: "",
    rationHelp: "",
    foodHelp: "",
    oxygenHelp: "",
    moneyHelp: "",
    covidInFamily: "",
    otherHelps: "",
    error: "",
    loading: false,
    success: false,
  });
  const {
    name,
    age,
    phoneNo,
    whatsappNo,
    address,
    medicineHelp,
    BloodHelp,
    rationHelp,
    foodHelp,
    oxygenHelp,
    moneyHelp,
    covidInFamily,
    otherHelps,
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
    //   whatsappNo: "",
    //   address: "",
    //   medicineHelp: "",
    //   BloodHelp: "",
    //   rationHelp: "",
    //   foodHelp: "",
    //   oxygenHelp: "",
    //   moneyHelp: "",
    //   covidInFamily: "",
    //   otherHelps: "",
    //   error: "",
    //   success: true,
    //   loading: false,
    // });
    // console.log(user._id);
    setValues({ ...values, error: false, success: false, loading: true });
    VolunteerReq({
      name,
      age,
      phoneNo,
      whatsappNo,
      address,
      medicineHelp,
      BloodHelp,
      rationHelp,
      foodHelp,
      oxygenHelp,
      moneyHelp,
      covidInFamily,
      otherHelps,
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
            whatsappNo: "",
            address: "",
            medicineHelp: "",
            BloodHelp: "",
            rationHelp: "",
            foodHelp: "",
            oxygenHelp: "",
            moneyHelp: "",
            covidInFamily: "",
            otherHelps: "",
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

  const VolunteerForms = () => (
    <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
      <h1 className="text-center bg-light py-3">
        <img
          src={team}
          alt="Free food Service"
          width="60"
          height="60"
          className="mr-2"
        />
        Volunteer Form
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
              <Form.Label>Whatsapp Number</Form.Label>
            </h5>
            <Form.Control
              type="phone"
              placeholder="Enter Whatsapp Number"
              name="whatsappNo"
              value={whatsappNo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} md={6}>
            <h5>
              <Form.Label>Phone Number (फ़ोन नंबर)</Form.Label>
            </h5>
            <Form.Control
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
            <Form.Label>Address (पता)</Form.Label>
          </h5>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} lg={6}>
            <h5>
              <Form.Label>Can you help someone by giving medicines?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="medicineHelp"
              value={medicineHelp}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} lg={6}>
            <h5>
              <Form.Label>Can you help someone by donating Blood?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="BloodHelp"
              value={BloodHelp}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} lg={6}>
            <h5>
              <Form.Label>Can you help someone by sending ration?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="rationHelp"
              value={rationHelp}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} lg={6}>
            <h5>
              <Form.Label>Can you help someone by sending food?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="foodHelp"
              value={foodHelp}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} lg={6}>
            <h5>
              <Form.Label>Can you help someone by providing Oxygen?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="oxygenHelp"
              value={oxygenHelp}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} lg={6}>
            <h5>
              <Form.Label>Can you help someone by donating Money?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="moneyHelp"
              value={moneyHelp}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <h5>
              <Form.Label>Any Covid Positive in your family?</Form.Label>
            </h5>
            <Form.Control
              as="select"
              placeholder="Select"
              name="covidInFamily"
              value={covidInFamily}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
              <option>Recovered</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <h5>
            <Form.Label>Any Other help you can do?</Form.Label>
          </h5>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder=""
            name="otherHelps"
            value={otherHelps}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button className="m-auto d-block px-5" variant="primary" type="sumbit">
          Submit
        </Button>
      </Form>
    </Container>
  );
  const showVolunteerForm = () => <div>{VolunteerForms()}</div>;
  return (
    <div>
      <Header />
      {showError()}
      {showSuccess()}
      {showVolunteerForm()}
      <br />
      <br />
      <Donate />
    </div>
  );
};

export default VolunteerForm;
