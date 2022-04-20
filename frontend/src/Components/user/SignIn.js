import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { authenticate, isAuthenticated, signIn } from "../auth";
import Donate from "../Donation";
import Header from "../Header";

const SignIn = () => {
  const [values, setValues] = useState({
    phoneNo: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });
  const { phoneNo, password, error, loading, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signIn({ phoneNo, password }).then((data) => {
      console.log(data);
      if (data.message) {
        setValues({ ...values, error: data.message, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const signUpForm = () => {
    return (
      <Container>
        <form>
          <div className="mb-3 form-group">
            <label className="form-label">Phone Number</label>
            <input
              onChange={handleChange("phoneNo")}
              type="phoneNo"
              className="form-control"
              value={phoneNo}
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
      </Container>
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
  const showLoading = () =>
    loading && <div className="alert alert-info">Loading...</div>;

  const redirectUser = () => {
    if (!error && redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div>
      <Header />
      <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
        <h1 className="text-center bg-light py-3">Login to your Account</h1>
        {showLoading()}
        {showError()}
        {signUpForm()}
        {redirectUser()}
      </Container>
      <br />
      <br />
      <Donate />
      <br />
      <br />
    </div>
  );
};

export default SignIn;
