import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteImageAPI } from "./admin/ApiAdmin";
import { GetAllImagesAPI } from "./ApiCore";
import { isAuthenticated } from "./auth";
import Donate from "./Donation";
import Header from "./Header";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [deleteHold, setDeleteHold] = useState(false);

  useEffect(() => {
    fetchAllImages();
  }, []);

  const { user, token } = isAuthenticated();

  const fetchAllImages = () => {
    GetAllImagesAPI()
      .then((res) => {
        // console.log(res);
        const data = res.data.msg;
        data.reverse();
        setImages(data);
      })
      .catch((err) => console.log(err));
  };
  const DeleteImage = (imgId) => () => {
    setDeleteHold(true);
    // console.log(imgId);
    DeleteImageAPI(user._id, token, { id: imgId })
      .then((data) => {
        setDeleteHold(false);
        // console.log(data);
        if (data.err) {
          console.log(data.err);
        } else {
          alert(data.message);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header />
      <br />
      <br />
      <Container>
        <Row>
          {images.length ? (
            images.map((image, key) => {
              return (
                <Col lg={6} key={key}>
                  <ImageCard image={image} />
                  {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <Row>
                      <Col>
                        {deleteHold ? (
                          <Button
                            variant="danger"
                            onClick={DeleteImage(image._id)}
                            disabled
                          >
                            Delete Image
                          </Button>
                        ) : (
                          <Button
                            variant="danger"
                            onClick={DeleteImage(image._id)}
                          >
                            Delete Image
                          </Button>
                        )}
                      </Col>
                      <Col>
                        <Link
                          to={{
                            pathname: "/updateimage",
                            state: image,
                          }}
                        >
                          <Button>Update Image details</Button>
                        </Link>
                      </Col>
                    </Row>
                  )}
                  <br />
                  <br />
                </Col>
              );
            })
          ) : (
            <div>
              <h2>Images Loading!!!</h2>
              <h2>Please wait...</h2>
            </div>
          )}
        </Row>
      </Container>
      <br />
      <br />
      <Donate />
    </div>
  );
};

export default Gallery;
