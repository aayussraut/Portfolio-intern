import React from "react";
import Menu from "../Menu";
import Style from "./MenuItems.module.css";

const MenuItems = ({ menuItems, target_element }) => {
  return (
    <div className={`${Style.menu} ${Style.a} `}>
      <a className={`${Style.link}`} href={target_element}>
        {menuItems}
      </a>
    </div>
  );
};

export default MenuItems;
