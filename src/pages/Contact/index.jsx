import React from "react";
import FormInput from "../../components/FormInput";
import Style from "./Contact.module.css";
import {
  IoPhonePortrait,
  IoMail,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import ContactInfo from "../../components/ContactInfo";
const Contact = () => {
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
            <ContactInfo
              icon={<IoPhonePortrait size={50} />}
              link="tel:+9779861990090"
              linkText="+9779861990090"
            />
            <ContactInfo
              icon={<IoMail size={50} />}
              link="mailto:aayussraut.ar@gmail.com
            "
              linkText="aayussraut.ar@gmail.com "
            />
            <ContactInfo
              icon={<IoLogoLinkedin size={50} />}
              link="https://www.linkedin.com/in/aayussraut/"
              linkText="Aayush Raut"
            />
            <ContactInfo
              icon={<IoLogoTwitter size={50} />}
              link="https://twitter.com/aayussraut"
              linkText="Aayush Raut"
            />
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
