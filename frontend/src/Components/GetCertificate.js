import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Button, Col, Container, Form } from "react-bootstrap";
import certificate_template from "../assets/certi_template.png";
// import JoinUs from "./JoinUs";

const GetCertificate = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    const adjustCanvasSize = () => {
      setIsGenerated(false);
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (canvas && container) {
        const containerWidth = container.offsetWidth; // Width of the parent container
        const imageWidth = 6250; // Original image width
        const imageHeight = 4419; // Original image height
        const aspectRatio = imageHeight / imageWidth;

        const scaledWidth = Math.min(containerWidth, imageWidth); // Limit width to container or original image size
        const scaledHeight = scaledWidth * aspectRatio;

        const devicePixelRatio = window.devicePixelRatio || 1;

        // Set internal resolution (scaled by devicePixelRatio)
        canvas.width = scaledWidth * devicePixelRatio;
        canvas.height = scaledHeight * devicePixelRatio;

        canvas.style.width = `${scaledWidth}px`;
        canvas.style.height = `${scaledHeight}px`;
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
    if (token !== "9754") {
      alert("Invalid Token");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const certificateImage = new Image();
    certificateImage.src = certificate_template;

    certificateImage.onload = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the certificate template at full canvas size
      ctx.drawImage(
        certificateImage,
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Add the name to the certificate
      const fontSize = Math.round(canvas.width / 22);
      ctx.font = `${fontSize}px Arial Bold`;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";

      // Shifted left by 7% of canvas width for gold line alignment
      const xOffset = canvas.width * 0.012;
      const xPosition = canvas.width / 2 - xOffset;
      const yPosition = canvas.height * 0.46785;

      ctx.fillText(name, xPosition, yPosition);
      setIsGenerated(true);
    };
  };

  // Function to download the certificate
  const downloadCertificate = () => {
    // Create a temporary full-resolution canvas for download
    const originalWidth = 6250;
    const originalHeight = 4419;
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = originalWidth;
    tempCanvas.height = originalHeight;
    const tempCtx = tempCanvas.getContext("2d");

    // Draw the certificate template
    const certificateImage = new Image();
    certificateImage.src = certificate_template;
    certificateImage.onload = () => {
      tempCtx.drawImage(certificateImage, 0, 0, originalWidth, originalHeight);
      // Add the name
      const fontSize = Math.round(originalWidth / 22);
      tempCtx.font = `${fontSize}px Arial Bold`;
      tempCtx.fillStyle = "#000";
      tempCtx.textAlign = "center";
      const xOffset = originalWidth * 0.012;
      const xPosition = originalWidth / 2 - xOffset;
      const yPosition = originalHeight * 0.46785;
      tempCtx.fillText(name, xPosition, yPosition);

      tempCanvas.toBlob(
        (blob) => {
          const link = document.createElement("a");
          link.download = "certificate.png";
          link.href = URL.createObjectURL(blob);
          link.click();
        },
        "image/png",
        1.0
      );
    };
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleToken = (e) => {
    setToken(e.target.value);
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
              <Form.Group as={Col} lg={4}>
                <h5>
                  <Form.Label>Token</Form.Label>
                </h5>
                <Form.Control
                  required
                  type="text"
                  name="token"
                  value={token}
                  placeholder="Enter Token"
                  onChange={handleToken}
                />
              </Form.Group>
            </Form.Row>
            <Button
              className="m-auto d-block px-5"
              variant="primary"
              type="submit"
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
