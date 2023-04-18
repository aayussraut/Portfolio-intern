import React, { useEffect } from "react";
import FormInput from "../../components/FormInput";
import Style from "./Contact.module.css";
import data from "../../data/data.json";

import * as Io from "react-icons/io5";
import ContactInfo from "../../components/ContactInfo";
const Contact = () => {
  const [contactInfo, setContactInfo] = React.useState([]);

  useEffect(() => {
    const contactData = data[1].contactInfo;
    setContactInfo(contactData);
  });
  const [form, SetForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetForm({ ...form, [name]: value });
  };

  return (
    <div id="Contact" className={Style.Contact}>
      <div>
        <p className={Style.subtitle}>Wanna Connect With Me</p>
        <p className={Style.title}>Contact Me</p>
      </div>
      <div className={Style.wrapper}>
        <div id="ContactForm" className={Style.contactInfo}>
          <div className={Style.contactInfoWrapper}>
            {contactInfo.map((item, index) => {
              return (
                <ContactInfo
                  key={index}
                  icon={React.createElement(Io[`${item.icon}`], { size: 30 })}
                  link={item.link}
                  linkText={item.linkText}
                />
              );
            })}
          </div>
        </div>
        <div className={Style.formInput}>
          <div className={Style.formInputWrapper}>
            <form>
              <FormInput
                type="text"
                name="name"
                fieldName="Name"
                value={form.name}
                onChange={handleChange}
              />
              <FormInput
                type="email"
                name="email"
                fieldName="Email"
                value={form.email}
                onChange={handleChange}
              />
              <FormInput
                // type="text"
                name="message"
                fieldName="Message"
                isMessage={true}
                value={form.message}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
