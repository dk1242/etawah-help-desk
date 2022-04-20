import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import oxygen from "../assets/oxygen-tank.png";
import blood from "../assets/blood.png";
import plasma from "../assets/blood-donation.png";
import medicines from "../assets/vitamin.png";
import doctor from "../assets/doctor.png";
import beds from "../assets/hospital-bed.png";
import vaccine from "../assets/syringe.png";
import food from "../assets/diet.png";
import animalHelp from "../assets/animalhelp.png";
import legal from "../assets/legal-paper.png";
import education from "../assets/online-course.png";

const Buttons = () => {
  return (
    <div>
      <Container
        style={{ marginTop: "25px", textAlign: "center", alignItems: "center" }}
        className="shadow-sm p-3 mb-5 bg-white rounded"
      >
        <h1>Find Help in Etawah</h1>
        <br />
        <Row
          style={{
            alignItems: "center",
          }}
        >
          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/oxygen">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={oxygen}
                  alt="Oxygen Cylinder"
                  width="150"
                  height="150"
                />
              </Button>
              <br />
              <h4>Oxygen (ऑक्सीजन)</h4>
            </Link>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/blood">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img src={blood} alt="Blood drop" width="150" height="150" />
              </Button>
              <h4>Blood (रक्त)</h4>
            </Link>
          </Col>

          <Col sm={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/medicines">
              <Button
                variant="outline-danger"
                style={{ border: "none", borderRadius: "50%", margin: "5px" }}
              >
                <img
                  src={medicines}
                  alt="Oxygen Cylinder"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Medicines (दवाइयाँ)</h4>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/need-doctor">
              <div>
                <Button
                  variant="outline-danger"
                  style={{ borderRadius: "50%", border: "none", margin: "5px" }}
                >
                  <img
                    src={doctor}
                    alt="Oxygen Cylinder"
                    width="175"
                    height="175"
                  />
                </Button>
                <h4>Free Doctor Assistance (नि:शुल्क चिकित्सक सहायता)</h4>
              </div>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/request-bed">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={beds}
                  alt="Oxygen Cylinder"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Hospital Beds (अस्पताल के बिस्तर)</h4>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/animal-care">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={animalHelp}
                  alt="Animal help"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Animal Care (पशु देखभाल)</h4>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="vaccination-center">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={vaccine}
                  alt="Oxygen Cylinder"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Vaccination center (टीकाकरण केंद्र)</h4>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/free-food-service">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img src={food} alt="Food Service" width="150" height="150" />
              </Button>
              <h4>Free Food Service (मुफ्त भोजन सेवा)</h4>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/legal-help">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img src={legal} alt="Legal help" width="150" height="150" />
              </Button>
              <h4>Free Legal Consultation (मुफ्त कानूनी सहायता परामर्श)</h4>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
            <Link to="/edu-help">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "50%", margin: "5px", border: "none" }}
              >
                <img
                  src={education}
                  alt="Education help"
                  width="150"
                  height="150"
                />
              </Button>
              <h4>Free Education Consultation (मुफ्त शिक्षा परामर्श)</h4>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
