import React from "react";
import { Button, Container } from "react-bootstrap";

const Donate = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Container className="shadow-lg p-3 mb-5 bg-white rounded donatestyle ">
        <h2>You can help us in our mission by donating to us.</h2>
        <h2>
          (आप हमें दान करके हमारे संकल्प की सिद्धि में मदद कर सकते हैं।)
        </h2>
        <a
          href="https://milaap.org/fundraisers/support-public-22?utm_source=whatsapp&utm_medium=fundraisers-title"
          target="_blank"
        >
          <Button variant="primary" size="lg">
            Donate to us
          </Button>
        </a>

        <br />
      </Container>
    </div>
  );
};

export default Donate;
