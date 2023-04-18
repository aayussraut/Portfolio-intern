import React from "react";
import Menu from "../Menu";
import Style from "./MenuItems.module.css";

const DesktopMenuItems = ({ menuItem }) => {
  // console.log("here11111");
  return (
    <div className={`${Style.menu} ${Style.a} `}>
      <a className={`${Style.link}`} href={menuItem.target_element}>
        {menuItem.name}
      </a>
    </div>
  );
};
const MobileMenuItems = ({ menuItem, toggleMenu }) => {
  return (
    <div className={`${Style.menu} ${Style.a} `} onClick={toggleMenu}>
      <a className={`${Style.link}`} href={menuItem.target_element}>
        <div className={Style.icon}>{menuItem.icon}</div>
        {menuItem.name}
      </a>
    </div>
  );
};

export { DesktopMenuItems, MobileMenuItems };
