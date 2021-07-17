import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top" role="navigation">
      <div className="container-fluid">
        <a className="navbar-brand" href="/app">
          Brand
        </a>
        <Nav classname="ml-auto">
          <NavItem>
            <NavLink to="/notification" className="nav-link">
              notification
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profil" className="nav-link">
              profil
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>
  );
};

export default Navigation;
