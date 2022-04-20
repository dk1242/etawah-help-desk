import React from "react";

const EventHeadline = () => {
  return (
    <h3
      style={{
        textAlign: "center",
        backgroundColor: "red",
        color: "white",
      }}
    >
      Online session on "Physical & Mental Health Webinar". Register{" "}
      <a
        href="https://forms.gle/jkrU599p6VJbppuG7"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
      .
    </h3>
  );
};

export default EventHeadline;
