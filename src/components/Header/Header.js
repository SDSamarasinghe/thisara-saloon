import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "../NavigationItem/NavigationItem";
import "./Header.css";

export const Header = () => {
  return (
    <header className="container">
      <nav className="nav">
        <ul className="nav__items d-flex">
          <NavigationItem exact>Home</NavigationItem>
          <li className="nav__item nav__item--submenu">
            <NavLink to={link} activeClassName="active">
              Services
            </NavLink>
            <ul className="nav__submenu">
              <NavigationItem submenu>for men</NavigationItem>
              <NavigationItem submenu>for women</NavigationItem>
            </ul>
          </li>
          <Button type="primary">Primary Button</Button>

          <NavigationItem>My account</NavigationItem>
          <NavigationItem>Sign out</NavigationItem>
          <NavigationItem>Sign in</NavigationItem>
          <NavigationItem>Sign up</NavigationItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
