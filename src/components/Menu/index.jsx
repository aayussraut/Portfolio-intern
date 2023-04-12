import React from "react";
import MenuItems from "../MenuItems";
import style from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={`${style.menu} ${style.padding} ${style.flex}`}>
      <div className={`${style.padding} ${style.flex}`}>
        <MenuItems menuItems="Home" />
        <MenuItems menuItems="About" />
        <MenuItems menuItems="Qualifications" />
        <MenuItems menuItems="Contact" />
      </div>
    </div>
  );
};

export default Menu;
