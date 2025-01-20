import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Button, Col, Container, Form } from "react-bootstrap";
import certificate_template from "../assets/certi_template.jpg";
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

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const scaledWidth = Math.min(containerWidth, 4419);

    const certificateImage = new Image();
    certificateImage.src = certificate_template; // Update with the correct path to your template

    certificateImage.onload = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;

      // Scale drawing to match device pixel ratio
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the certificate template
      ctx.drawImage(
        certificateImage,
        0,
        0,
        canvas.width / devicePixelRatio,
        canvas.height / devicePixelRatio
      );

      // Add the name to the certificate
      const fontSize = Math.round(canvas.width / devicePixelRatio / 20);
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "#000";
      // ctx.textAlign = "center";

      const textWidth = ctx.measureText(name).width;

      // Center the text dynamically
      const xPosition = (scaledWidth - textWidth / 4) / 2;
      const textYPosition =
        canvas.height / (2 * devicePixelRatio) + fontSize / 3;

      ctx.fillText(
        name,
        // canvas.width / (2 * devicePixelRatio) + name.length * 10,
        xPosition,
        textYPosition
      ); // Adjust coordinates as needed
      ctx.resetTransform();
      
      setIsGenerated(true);
    };
  };

  // Function to download the certificate
  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    // const link = document.createElement("a");
    // link.download = "certificate.jpg";
    // link.href = canvas.toDataURL("image/jpg", 1.0);
    // link.click();
    canvas.toBlob(
      (blob) => {
        const link = document.createElement("a");
        link.download = "certificate.png"; // or "certificate.jpg"
        link.href = URL.createObjectURL(blob);
        link.click();
      },
      "image/png",
      1.0
    );
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
