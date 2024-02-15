import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

const NavigationItem = ({ exact, link, children, submenu, clickHandler }) => {
  return (
    <li className={`nav__item ${submenu ? "nav__item--submenu" : ""}`}>
      <NavLink
        to={link}
        exact={exact}
        activeClassName="active"
        onClick={clickHandler}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
