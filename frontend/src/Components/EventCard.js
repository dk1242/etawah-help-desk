import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { isAuthenticated } from "./auth";

const EventCard = (props) => {
  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };
  // console.log(props.event.poster);
  var base64Flag = "data:" + props.event.poster.contentType + ";base64,";
  var imageStr = arrayBufferToBase64(props.event.poster.data.data);
  var finalPoster = base64Flag + imageStr;

  //   console.log(props);
  return (
    <>
      <Card
        className="shadow-sm p-3 mb-5 bg-white rounded"
        style={{ marginBottom: "1%" }}
      >
        <Card.Header>
          <h3>{props.event.title}</h3>
        </Card.Header>
        <Card.Body>
          {props.event.poster ? (
            <Image
              src={finalPoster}
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              alt={props.event.title}
              fluid
            />
          ) : (
            "No Poster Available"
          )}
          <br />
          <a href={props.event.url} target="_blank">
            {props.event.url}
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default EventCard;
