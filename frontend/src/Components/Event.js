import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteEventAPI, ToggleLiveEventAPI } from "./admin/ApiAdmin";
import { GetAllEventsAPI } from "./ApiCore";
import { isAuthenticated } from "./auth";
import Donate from "./Donation";
import EventCard from "./EventCard";
import Header from "./Header";
import ImageCard from "./ImageCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [liveEvents, setLiveEvents] = useState([]);
  const [hold, setHold] = useState(false);
  const [deleteHold, setDeleteHold] = useState(false);

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const { user, token } = isAuthenticated();
  const fetchAllEvents = () => {
    GetAllEventsAPI()
      .then((res) => {
        const data = res.data.msg;
        data.reverse();
        let liveEventsData = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].live) {
            liveEventsData.push(data[i]);
          }
        }
        setLiveEvents(liveEventsData);
        setEvents(data);
      })
      .catch((err) => console.log(err));
  };
  const DeleteEvent = (eventId) => () => {
    // console.log(eventId);
    setDeleteHold(true);
    DeleteEventAPI(user._id, token, { id: eventId })
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
  const ToggleEventLive = (eventId) => () => {
    setHold(true);
    ToggleLiveEventAPI(user._id, token, { id: eventId })
      .then((data) => {
        setHold(false);
        console.log(data);
        if (data.err) {
          console.log(data.err);
        } else {
          alert("Event Live status changed");
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
        <h2>Live Events:</h2>
        {liveEvents.length ? (
          liveEvents.map((liveEvent, key) => {
            const arrayBufferToBase64 = (buffer) => {
              var binary = "";
              var bytes = [].slice.call(new Uint8Array(buffer));
              bytes.forEach((b) => (binary += String.fromCharCode(b)));
              return window.btoa(binary);
            };
            {
              /* console.log(liveEvent.poster.data); */
            }
            var base64Flag =
              "data:" + liveEvent.poster.contentType + ";base64,";
            var imageStr = arrayBufferToBase64(liveEvent.poster.data.data);
            var finalPoster = base64Flag + imageStr;

            return (
              <div className="shadow-lg p-3 mb-5 bg-white rounded" key={key}>
                <h3>{liveEvent.title}</h3>
                <br />
                {liveEvent.poster ? (
                  <img
                    className="d-block w-100"
                    width={600}
                    height={600}
                    src={finalPoster}
                    style={{ margin: "auto" }}
                  />
                ) : (
                  "No Poster Available"
                )}
                <br />
                <h4>Details: {liveEvent.description}</h4>
                <br />
                <h4>
                  {" "}
                  Register Here:{" "}
                  <a href={liveEvent.url} target="_blank">
                    {liveEvent.url}
                  </a>
                </h4>
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                  <Row style={{ textAlign: "center" }}>
                    <Col>
                      {deleteHold ? (
                        <Button
                          variant="danger"
                          onClick={DeleteEvent(liveEvent._id)}
                          disabled
                        >
                          Delete Event
                        </Button>
                      ) : (
                        <Button
                          variant="danger"
                          onClick={DeleteEvent(liveEvent._id)}
                        >
                          Delete Event
                        </Button>
                      )}
                    </Col>{" "}
                    <Col>
                      <Link
                        to={{
                          pathname: "/updateevent",
                          state: liveEvent,
                          poster: finalPoster,
                        }}
                      >
                        <Button>Update Event</Button>
                      </Link>
                    </Col>
                    <Col>
                      {hold ? (
                        <Button
                          variant="info"
                          onClick={ToggleEventLive(liveEvent._id)}
                          disabled
                        >
                          Toggle Live
                        </Button>
                      ) : (
                        <Button
                          variant="info"
                          onClick={ToggleEventLive(liveEvent._id)}
                        >
                          Toggle Live
                        </Button>
                      )}
                    </Col>
                  </Row>
                )}
                <br />
              </div>
            );
          })
        ) : (
          <div>
            <h2>Events Loading!!!</h2>
            <h2>Please wait...</h2>
          </div>
        )}

        <h2>All Events</h2>
        <br />
        <Row className="shadow-lg p-3 mb-5 bg-white rounded">
          {events.length ? (
            events.map((event, key) => {
              return (
                <Col lg={4} key={key}>
                  <EventCard event={event} />
                  {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <Row style={{ textAlign: "center" }}>
                      <Col>
                        {deleteHold ? (
                          <Button
                            variant="danger"
                            onClick={DeleteEvent(event._id)}
                            disabled
                          >
                            Delete Event
                          </Button>
                        ) : (
                          <Button
                            variant="danger"
                            onClick={DeleteEvent(event._id)}
                          >
                            Delete Event
                          </Button>
                        )}
                      </Col>
                      <Col>
                        {hold ? (
                          <Button
                            variant="info"
                            onClick={ToggleEventLive(event._id)}
                            disabled
                          >
                            Toggle Live
                          </Button>
                        ) : (
                          <Button
                            variant="info"
                            onClick={ToggleEventLive(event._id)}
                          >
                            Toggle Live
                          </Button>
                        )}
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
              <h2>Events Loading!!!</h2>
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

export default Events;
