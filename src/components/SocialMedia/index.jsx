import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import Style from "./SocialMedia.module.css";

const SocialMedia = ({ link, icon }) => {
  return (
    <div className={Style.social}>
      <div className={Style.logo}>
        <a className={Style.link} href={link}>
          {icon}
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
