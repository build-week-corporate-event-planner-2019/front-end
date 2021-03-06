import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navigation() {
  return (
    <div className="navbar">
      <Navbar className="nav-group" light expand="md">
        <NavbarBrand className="nav-brand" href="#">
          Event Planner App
        </NavbarBrand>
        <Nav className="nav-items" navbar>
          <NavItem className="nav-item">
            <NavLink href="/events">Events</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/register">Sign-Up</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/">Log-In</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="https://pensive-mirzakhani-6d8023.netlify.com/index.html">
              Log-Out
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
