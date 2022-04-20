import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signUp } from "../auth";
import Donate from "../Donation";
import Header from "../Header";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    phoneNo: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, phoneNo, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signUp({ name, phoneNo, password }).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          phoneNo: "",
          password: "",
          error: "",
          success: true,
        });
        console.log("b");
      }
    });
  };

  const signUpForm = () => {
    return (
      <form>
        <div className="mb-3 form-group">
          <label className="form-label">Full Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            value={name}
            required
          />
        </div>
        <div className="mb-3 form-group">
          <label className="form-label">Phone Number</label>
          <input
            onChange={handleChange("phoneNo")}
            type="Number"
            className="form-control"
            value={phoneNo}
            required
          />
        </div>
        <div className="mb-3 form-group">
          <label className="form-label">Password</label>
          <input
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            value={password}
          />
        </div>
        <div>
          <button onClick={clickSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Account created. Please <Link to="/signin">SignIn</Link>
    </div>
  );

  return (
    <div>
      <Header />
      <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
        <h1 className="text-center bg-light py-3">Create Account</h1>
        {showSuccess()}
        {showError()}
        {signUpForm()}
      </Container>
      <br />
      <br />
      <Donate />
      <br />
      <br />
    </div>
  );
};

export default SignUp;
