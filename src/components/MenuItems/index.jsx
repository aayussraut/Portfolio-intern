import React from "react";
import Menu from "../Menu";
import Style from "./MenuItems.module.css";

const MenuItems = ({ menuItems }) => {
  return (
    <div className={`${Style.menu} ${Style.a} `}>
      <a className={`${Style.link}`} href="">
        {menuItems}
      </a>
    </div>
  );
};

export default MenuItems;
