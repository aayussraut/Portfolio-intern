import React from "react";
import Logo from "../Logo";
import Style from "./Header.module.css";
import Menu from "../Menu";
const Header = () => {
  return (
    <div className={`${Style.box}`}>
      <Logo />
      <Menu />
      {/* <h1>Header</h1> */}
    </div>
  );
};

export default Header;
