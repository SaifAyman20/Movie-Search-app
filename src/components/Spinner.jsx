import React from "react";

const Spinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "40px",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  </div>
);

export default Spinner;
