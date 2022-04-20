import React from "react";
import { Button, Container, Navbar, Row } from "react-bootstrap";
import Buttons from "./Buttons";
import Donate from "./Donation";
import Forms from "./Form";
import Header from "./Header";
import HomePage1 from "./HomePage1";
import JoinUs from "./JoinUs";
import ProblemForm from "./ProblemForm";
import Event from "./Event";
import ImageCarousel from "./ImageCarousel";

const Services = () => (
  <div>
    <Header />
    {/* <HomePage1 /> */}
    <ImageCarousel />
    <br />
    <Donate />
    <Buttons />
    <br />
    <br />
    <JoinUs />
  </div>
);

export default Services;
