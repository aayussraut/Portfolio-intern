import React from "react";
import AboutImg from "../../assets/AboutImg.svg";
import Style from "./About.module.css";
import AboutPageComponent from "../../components/AboutPageComponent";
import Button from "../../components/Button";
import SocialMedia from "../../components/SocialMedia";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
const About = () => {
  return (
    <div className={Style.about}>
      <div className={Style.content}>
        <p className={Style.para}>Hi!</p>
        <h3 className={Style.aboutHeader}>I am a Software Engineer</h3>
        <p className={Style.para1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          architecto reprehenderit minima debitis recusandae accusamus rerum
          beatae inventore maxime, nam veritatis dolores repellat quidem error
          odit voluptate neque illum ex.
        </p>
        <div className={Style.gridContainer}>
          <AboutPageComponent fieldName="Name" value="Aayush Raut" />
          <AboutPageComponent
            fieldName="Email"
            value="aayussraut.ar@gmail.com"
          />
          <AboutPageComponent fieldName="Phone" value="+9779861990090" />
          <AboutPageComponent fieldName="Address" value="Bhaktapur, Nepal" />
        </div>
        <div>
          <Button name="My CV" />
          <span style={{ margin: "10px" }}></span> <Button name="Hire Me" />
        </div>
      </div>
      <div className={Style.container}>
        <div className={Style.socialMedia}>
          <SocialMedia link="https://www.facebook.com/aayussraut/" icon={<TiSocialFacebook size={30} />} />
          <SocialMedia link="https://www.linkedin.com/in/aayussraut/" icon={<TiSocialLinkedin size={30} />} />
          <SocialMedia link="https://www.github.com/aayussraut/" icon={<AiFillGithub size={30} />} />
          <SocialMedia link="https://www.twitter.com/aayussraut/" icon={<TiSocialTwitter size={30} />} />


        </div>
        <div className={Style.imgDiv}>
          <img src={AboutImg} alt="AboutImg" className={Style.aboutImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
