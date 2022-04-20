import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect, useLocation } from "react-router";
import { isAuthenticated } from "../auth";
import Header from "../Header";
import { UpdateEventAPI } from "./ApiAdmin";

const UpdateEventForm = () => {
  const location = useLocation();
  const event = location.state,
    posterx = location.poster;
  const [values, setValues] = useState({
    title: event.title,
    description: event.description,
    poster: posterx,
    url: event.url,
    error: "",
    loading: false,
    success: false,
  });
  const { title, description, poster, url, error, loading, success } = values;
  const { user, token } = isAuthenticated();
  // useEffect(() => {
  //   // console.log(event._id);
  //   // setValues({
  //   //   ...values,
  //   //   title:,
  //   //   description: event.description,
  //   //   url: event.url,
  //   // });
  // }, []);
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
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValues({
      ...values,
      loading: true,
    });
    // console.log(values, title, description, url, event._id);
    const formData = new FormData();
    formData.append("title", title);
    // console.log(title, formData);
    formData.append("description", description);
    // console.log("poster", poster);
    // formData.append("poster", poster);
    formData.append("url", url);
    formData.append("id", event._id);

    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    UpdateEventAPI(formData, token, user._id).then((data) => {
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
          // title: data.data.msg.title,
          // description: data.data.msg.description,
          // // poster: posterx,
          // url: data.data.msg.url,
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
            value={title || ""}
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
            value={description || ""}
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
            value={url || ""}
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
            Save
          </Button>
        ) : (
          <Button
            className="m-auto d-block px-5"
            variant="primary"
            type="sumbit"
          >
            Save
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
        <h2 style={{ textAlign: "center" }}>Update Event</h2>
        {success && <h3 className="alert alert-info">Event updated</h3>}
        {success ? <Redirect to="/events" /> : ShowEventForm()}
      </Container>
    </div>
  );
};

export default UpdateEventForm;
