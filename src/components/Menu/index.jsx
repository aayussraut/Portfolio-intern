import React from "react";
import MenuItems from "../MenuItems";
import style from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={`${style.menu} ${style.padding} ${style.flex}`}>
      <div className={`${style.padding} ${style.flex}`}>
        <MenuItems menuItems="Home" target_element="#Home" />
        <MenuItems menuItems="About" target_element="#About" />
        <MenuItems menuItems="Skills" target_element="#Skills" />
        <MenuItems menuItems="Projects" target_element="#Projects" />
        <MenuItems menuItems="Contact" target_element="#Contact" />
      </div>
    </div>
  );
};

export default Menu;
