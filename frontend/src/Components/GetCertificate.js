import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Button, Col, Container, Form } from "react-bootstrap";
import certificate_template from "../assets/certi_template.png";
import JoinUs from "./JoinUs";

const GetCertificate = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [name, setName] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    const adjustCanvasSize = () => {
      setIsGenerated(false);
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (canvas && container) {
        const { width } = container.getBoundingClientRect();
        canvas.width = width; // Set canvas resolution width
        canvas.height = (width * 700) / 1000; // Maintain the aspect ratio of the template

        // setIsGenerated(true);
      }
    };

    // Adjust canvas size on mount and window resize
    adjustCanvasSize();
    // window.addEventListener("resize", adjustCanvasSize);

    // return () => {
    //   window.removeEventListener("resize", adjustCanvasSize);
    // };
  }, []);

  const generateCertificate = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const certificateImage = new Image();
    certificateImage.src = certificate_template; // Update with the correct path to your template

    certificateImage.onload = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the certificate template
      ctx.drawImage(certificateImage, 0, 0, canvas.width, canvas.height);

      // Add the name to the certificate
      const fontSize = Math.round(canvas.width / 15);
      ctx.font = `${fontSize}px MrDafoe`;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 10); // Adjust coordinates as needed

      setIsGenerated(true);
    };
  };

  // Function to download the certificate
  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <Header />
      <br />
      <Container className="shadow-sm mt-5 px-0 col-sm-12 col-md-8 col-lg-6">
        <h1 className="text-center bg-light py-3">Get Marathon Certificate</h1>
        <div>
          <Form className="px-3 py-3" onSubmit={generateCertificate}>
            <Form.Row>
              <Form.Group as={Col} lg={8}>
                <h5>
                  <Form.Label>Name (नाम)</Form.Label>
                </h5>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Button
              className="m-auto d-block px-5"
              variant="primary"
              type="sumbit"
            >
              Get Certificate
            </Button>
          </Form>
        </div>
        <br />
      </Container>
      <br />
      <Container
        ref={containerRef}
        style={{ textAlign: "center", padding: "0" }}
        className="shadow-lg"
      >
        {isGenerated && <br />}
        <canvas
          ref={canvasRef}
          style={{
            display: isGenerated ? "block" : "none",
          }}
        />
        {isGenerated && <br />}
        {isGenerated && (
          <Button
            onClick={downloadCertificate}
            style={{
              margin: "10px",
              cursor: "pointer",
            }}
          >
            Download Certificate
          </Button>
        )}
        {isGenerated && <br />}
        {isGenerated && <br />}
      </Container>
      {/* <JoinUs /> */}
      <br />
      <br />
    </div>
  );
};

export default GetCertificate;
