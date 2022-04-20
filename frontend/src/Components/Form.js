import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";

const Forms = () => {
  return (
    <div>
      <Header />
      <Container className="shadow-sm p-3 mb-5 bg-white rounded">
        <h2>Send your Problem & Request</h2>
        <p>We will try our best to solve it.</p>

        <iframe
          title="HelpDesk form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe_IKhwK2EMjPdNGjq8qpj5-QAABid4ysahpBvPYnzwPbMxYg/viewform?embedded=true"
          width="100%"
          height="670"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Container>
    </div>
  );
};

export default Forms;
