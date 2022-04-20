import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect, useLocation } from "react-router";
import { isAuthenticated } from "../auth";
import Header from "../Header";
import { UpdateImageAPI, UploadNewImageAPI } from "./ApiAdmin";

const UpdateImageForm = () => {
  const location = useLocation();
  const imageD = location.state;
//   console.log(imageD);
  const [values, setValues] = useState({
    caption: imageD.caption,
    description: imageD.description,
    photo: undefined,
    error: "",
    loading: false,
    success: false,
  });
  const { caption, description, image, error, loading, success } = values;
  const { user, token } = isAuthenticated();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = name === "image" ? event.target.files[0] : event.target.value;
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
    formData.append("caption", caption);
    formData.append("description", description);
    // console.log("image", image);
    // formData.append("image", image);
    formData.append("id", imageD._id);

    UpdateImageAPI(formData, token, user._id).then((data) => {
      // console.log(data);
      setValues({
        ...values,
        loading: false,
      });
      if (data && data.err) {
        console.log(data.err);
        setValues({
          ...values,
          error: data.err,
        });
      } else {
        // console.log(data);
        setValues({
          ...values,
          caption: imageD.caption,
          description: imageD.description,
          success: true,
        });
      }
    });
  };
  const ShowUploadForm = () => {
    return (
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>
            <h3>Upload Image</h3>
          </Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <h3>Caption</h3>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Captions"
            name="caption"
            value={caption}
            onChange={handleChange}
          />
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
        {loading ? (
          <Button
            className="m-auto d-block px-5"
            variant="primary"
            type="sumbit"
            disabled
          >
            Update
          </Button>
        ) : (
          <Button
            className="m-auto d-block px-5"
            variant="primary"
            type="sumbit"
          >
            Update
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
        <h2 style={{ textAlign: "center" }}>Update Image</h2>
        {success && <h3 className="alert alert-info">Image Updated</h3>}
        {success ? <Redirect to="/gallery" /> : ShowUploadForm()}
      </Container>
    </div>
  );
};

export default UpdateImageForm;
