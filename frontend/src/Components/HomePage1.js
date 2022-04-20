import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import homepic from "../assets/Fighting against Coronavirus-rafiki.svg";
import homebg from "../assets/Winning the battle against Coronavirus-amico.svg";

const HomePage1 = () => {
  var background = { backgroundSize: "cover", opacity: "0.12" };
  var textStyle = {
    textAlign: "left",
    position: "absolute",
    top: "30%",
    left: "20%",
  };

  return (
    <Row style={{ marginRight: "0px", marginLeft: "0px" }}>
      <Col sm={12} lg={6} style={{ marginBottom: "10px" }}>
        <div style={{ width: "auto" }}>
          <Image style={background} responsive src={homebg}></Image>
          <div style={textStyle}>
            <h1 className="textstyle">
              Let's Fight CoronaVirus
              <strong style={{ color: "#407BFF" }}> Together</strong>
            </h1>
            <h2>Join us in this fight against Covid</h2>
            <br />
            <Link to="/join-us">
              <Button variant="warning" className="buttonstyle">
                <h4>Join us as Volunteer</h4>
              </Button>
            </Link>
          </div>
        </div>
      </Col>
      <Col sm={12} lg={6}>
        <img src={homepic} alt="Lets End Corona"></img>
      </Col>
    </Row>
  );
};

export default HomePage1;
