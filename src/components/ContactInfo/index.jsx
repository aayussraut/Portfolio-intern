import React from "react";

import Style from "./ContactInfo.module.css";

const ContactInfo = ({ icon, link, linkText }) => {
  return (
    <div className={Style.contactInfo}>
      {icon}
      <a
        style={{ marginLeft: "10px" }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </div>
  );
};

export default ContactInfo;
