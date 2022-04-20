import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Container className="shadow-lg p-3 mb-5 bg-white rounded joinusstyle ">
        <h2>Join us as volunteers of Etawah HelpDesk.</h2>
        <h2>
          (इटावा हेल्पडेस्क के स्वयंसेवकों के रूप में हमसे जुड़ें)
        </h2>
        <Link to="/join-us">
          <Button variant="warning" size="lg">
            Join us as Volunteer
          </Button>
        </Link>

        <br />
      </Container>
    </div>
  );
};

export default JoinUs;
