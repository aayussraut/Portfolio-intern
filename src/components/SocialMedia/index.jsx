import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import Style from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={Style.social}>
      <div className={Style.logo}>
        <a href="https://www.facebook.com/">
          <TiSocialFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
