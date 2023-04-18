import React from "react";
import AboutImg from "../../assets/LastImg.png";
import Style from "./About.module.css";
import { AboutPageCard, SocialMediaCard } from "../../components/Card";
import Button from "../../components/Button";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
const About = () => {
  const socialMedia = [
    {
      link: "https://www.facebook.com/aayussraut/",
      icon: <TiSocialFacebook size={30} />,
    },
    {
      link: "https://www.linkedin.com/in/aayussraut/",
      icon: <TiSocialLinkedin size={30} />,
    },
    {
      link: "https://www.github.com/aayussraut/",
      icon: <AiFillGithub size={30} />,
    },
    {
      link: "https://www.twitter.com/aayussraut/",
      icon: <TiSocialTwitter size={30} />,
    },
  ];

  const aboutPageCard = [
    {
      title: "Name",
      description: "Aayush Raut",
    },
    {
      title: "Email",
      description: "aayusraut.ar@gmail.com",
    },
    {
      title: "Phone",
      description: "+9779861990090",
    },
    {
      title: "Address",
      description: "Bhaktapur, Nepal",
    },
  ];
  return (
    <div id="About" className={Style.about}>
      <div className={Style.container}>
        <div className={Style.imgDiv}>
          <img src={AboutImg} alt="AboutImg" className={Style.aboutImg} />
        </div>
        <div className={Style.socialMedia}>
          {socialMedia.map((item) => {
            return <SocialMediaCard link={item.link} icon={item.icon} />;
          })}
        </div>
      </div>

      <div className={Style.content}>
        <p className={Style.para}>Hi!</p>
        <h3 className={Style.aboutHeader}>I am a Software Engineer</h3>
        <p className={Style.para1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          architecto reprehenderit minima debitis recusandae accusamus rerum
          beatae inventore maxime, nam veritatis dolores repellat quidem error
          odit voluptate neque illum ex.
        </p>
        <div className={Style.gridCon}>
          <div className={Style.gridContainer}>
            {aboutPageCard.map((item) => {
              return (
                <AboutPageCard
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className={Style.twoButton}>
          <Button name="My CV" />
          <span style={{ margin: "10px" }}></span> <Button name="Hire Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
