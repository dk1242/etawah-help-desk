import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { isAuthenticated } from "./auth";

const ImageCard = (props) => {
  //   console.log(props);
  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };
  // console.log(props.image.image.contentType, props.image.image.data.data);
  var base64Flag = "data:" + props.image.image.contentType + ";base64,";
  var imageStr = arrayBufferToBase64(props.image.image.data.data);
  var finalImg = base64Flag + imageStr;
  // console.log(finalImg);
  return (
    <>
      <Card border="primary" style={{ marginBottom: "1%" }}>
        <Card.Header>
          <h3>{props.image.caption}</h3>
        </Card.Header>
        <Card.Body>
          {props.image.image ? (
            <Image
              src={finalImg}
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              alt={props.image.caption}
              fluid
            />
          ) : (
            "No Image Available"
          )}
          <br />
          {props.image.description ? props.image.description : ""}
          <br />
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
