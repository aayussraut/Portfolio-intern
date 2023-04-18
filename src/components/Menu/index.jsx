import React from "react";
import { DesktopMenuItems, MobileMenuItems } from "../MenuItems";
import Style from "./Menu.module.css";
import { TbMenu2 } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsPerson, BsFiles, BsBriefcase } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
const DesktopNav = ({ menuItems }) => (
  // console.log("here");
  <div className={Style.menuDesktop}>
    {menuItems.map((menuItem, index) => (
      <DesktopMenuItems key={index} menuItem={menuItem} />
    ))}
  </div>
);

const MobileNav = ({ menuItems, isMenuOpen, toggleMenu }) => {
  const content = menuItems.map((menuItem) => (
    <MobileMenuItems menuItem={menuItem} toggleMenu={toggleMenu} />
  ));

  // console.log("here", isNavOpen);

  return (
    <div className={`${Style.menuMobile} ${isMenuOpen && Style.menuOpen}`}>
      <div className={Style.closeButton}>
        <div onClick={toggleMenu}>
          <GiCrossMark size={30} />
        </div>
      </div>
      <div className={Style.menuMobileItem}> {content}</div>
    </div>
  );
};

const SelectMenu = ({ viewPortWidth, menuItems, isMenuOpen, toggleMenu }) => {
  return viewPortWidth > 780 ? (
    <DesktopNav menuItems={menuItems} />
  ) : (
    <MobileNav
      menuItems={menuItems}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
    />
  );
};

const Menu = ({ isMenuOpen, toggleMenu, viewPortWidth }) => {
  const menuItems = [
    { name: "Home", target_element: "#Home", icon: <BiHomeAlt2 size={20} /> },
    { name: "About", target_element: "#About", icon: <BsPerson size={20} /> },
    { name: "Skills", target_element: "#Skills", icon: <BsFiles size={20} /> },
    {
      name: "Projects",
      target_element: "#Projects",
      icon: <BsBriefcase size={20} />,
    },
    {
      name: "Contact",
      target_element: "#Contact",
      icon: <IoMdPaperPlane size={20} />,
    },
  ];

  return (
    <div>
      <SelectMenu
        viewPortWidth={viewPortWidth}
        menuItems={menuItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      {!isMenuOpen && viewPortWidth < 780 && (
        <div className={Style.overlay} onClick={toggleMenu}>
          <TbMenu2 size={30} />
        </div>
      )}
    </div>
  );
};

export default Menu;
