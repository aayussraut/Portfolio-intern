import React from "react";

const AboutPageComponent = ({ fieldName, value }) => {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#4bc1ce",
          margin: "0px",
        }}
      >
        {fieldName}
      </p>
      <p style={{ fontSize: "20px", color: "grey", margin: "0px" }}>{value}</p>
    </div>
  );
};

export default AboutPageComponent;
