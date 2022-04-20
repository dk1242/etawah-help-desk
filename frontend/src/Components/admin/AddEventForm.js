import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { isAuthenticated } from "../auth";
import Header from "../Header";
import { AddNewEventAPI } from "./ApiAdmin";

const AddEventForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    poster: undefined,
    url: "",
    error: "",
    loading: false,
    success: false,
  });
  const { title, description, poster, url, error, loading, success } = values;
  const { user, token } = isAuthenticated();
  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      name === "poster" ? event.target.files[0] : event.target.value;
    // console.log(name, value);
    setValues({
      ...values,
      error: false,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      loading: true,
    });
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    // console.log("poster", poster);
    formData.append("poster", poster);
    formData.append("url", url);

    AddNewEventAPI(formData, token, user._id).then((data) => {
      // console.log(data);
      setValues({
        ...values,
        loading: false,
      });
      if (data && data.err) {
        // console.log(data.err);
        setValues({
          ...values,
          error: data.err,
        });
      } else {
        // console.log(data);
        setValues({
          ...values,
          title: "",
          description: "",
          url: "",
          success: true,
        });
      }
    });
  };
  const ShowEventForm = () => {
    return (
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>
            <h3>Title</h3>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <h3>Upload poster</h3>
          </Form.Label>
          <Form.Control type="file" name="poster" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <h3>Description</h3>
          </Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Enter Description"
            style={{ height: "150px" }}
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <h3>URL</h3>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            name="url"
            value={url}
            onChange={handleChange}
          />
        </Form.Group>
        {loading ? (
          <Button
            className="m-auto d-block px-5"
            variant="primary"
            type="sumbit"
            disabled
          >
            Upload
          </Button>
        ) : (
          <Button
            className="m-auto d-block px-5"
            variant="primary"
            type="sumbit"
          >
            Upload
          </Button>
        )}
        <br />
      </Form>
    );
  };
  return (
    <div>
      <Header />
      <br />
      <Container>
        <h2 style={{ textAlign: "center" }}>Add new Event</h2>
        {success && <h3 className="alert alert-info">Event added</h3>}
        {ShowEventForm()}
      </Container>
    </div>
  );
};

export default AddEventForm;
