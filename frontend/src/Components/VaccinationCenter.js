import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Donate from "./Donation";
import vaccine from "../assets/syringe.png";
import JoinUs from "./JoinUs";
import Header from "./Header";
import { GetVaccine } from "./ApiCore";

const VaccinationCenter = () => {
  const [data, setData] = useState([]);

  const loadData = () => {
    const date = new Date();
    console.log(date.getMonth());
    let dateString = date.getDate() + "-0";
    let m = date.getMonth() + 1;
    dateString = dateString + m + "-" + date.getFullYear();
    GetVaccine(dateString)
      .then((datas) => {
        console.log(datas.centers);
        setData(datas.centers);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Header />
      <br />
      <JoinUs />
      <Container className="shadow-sm mt-5 px-0 col-sm-11 col-md-8 col-lg-6">
        <h1 className="text-center bg-light py-3">
          <img
            src={vaccine}
            alt="Plasma Request"
            width="60"
            height="60"
            className="mr-2"
          />
          Vaccination centers in Etawah
        </h1>
        <Row>
          {data.map((k, i) => {
            return (
              <Col lg={6}>
                <Card
                  bg={"info"}
                  key={i}
                  text={"white"}
                  style={{}}
                  className="mb-2"
                >
                  <Card.Header>
                    <h4>{k.name}</h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <h4>
                        <span style={{ textDecoration: "underline" }}>
                          Address:
                        </span>{" "}
                        {k.address}
                      </h4>{" "}
                    </Card.Title>
                    <Card.Text>
                      <h4>
                        <span style={{ textDecoration: "underline" }}>
                          Block:
                        </span>{" "}
                        {k.block_name}
                      </h4>
                      <h4>
                        <span style={{ textDecoration: "underline" }}>
                          District:
                        </span>{" "}
                        {k.district_name}
                      </h4>
                      <h4>
                        <span style={{ textDecoration: "underline" }}>
                          Fee Type:
                        </span>{" "}
                        {k.fee_type}
                      </h4>
                      <h4>
                        <span style={{ textDecoration: "underline" }}>
                          From:
                        </span>{" "}
                        {k.from}
                      </h4>
                      <h4>
                        <span style={{ textDecoration: "underline" }}>To:</span>{" "}
                        {k.to}
                      </h4>
                      <hr />
                      {k.sessions.map((e, ki) => {
                        return (
                          <div>
                            <Card
                              bg={"success"}
                              key={i}
                              text={"white"}
                              style={{}}
                              className="mb-2"
                            >
                              <Card.Header>
                                <h4>{e.vaccine}</h4>
                              </Card.Header>
                              <Card.Body>
                                <Card.Title>
                                  <h5>Date: {e.date}</h5>
                                </Card.Title>
                                <Card.Text>
                                  <h5>
                                    Available capacity: {e.available_capacity}
                                  </h5>
                                  <h5>Minimum Age limit: {e.min_age_limit}</h5>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <br />
      <br />
      <Donate />
    </div>
  );
};

export default VaccinationCenter;
